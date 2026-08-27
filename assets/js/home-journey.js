/**
 * Journey chart: non-linear time (condensed past, expanded recent), cursor tooltip.
 */
(function () {
  'use strict';

  var root = document.querySelector('.dg-journey');
  var chartEl = document.getElementById('dg-journey-chart');
  var scrollEl = document.getElementById('dg-journey-scroll');
  var dataEl = document.getElementById('dg-journey-data');
  if (!root || !chartEl || !dataEl) return;

  var data = JSON.parse(dataEl.textContent);
  var milestones = data.milestones || [];
  var lanes = data.lanes || [];
  var pageSnippets = data.snippets || {};
  var laneLabel = {};
  lanes.forEach(function (l) {
    laneLabel[l.id] = l.label;
  });

  var laneAccent = {
    work: '#2563eb',
    education: '#5b21b6',
    publications: '#6d28d9',
    articles: '#b45309',
    projects: '#9a3412',
    entrepreneurship: '#059669',
    honors: '#c8a96e',
    personal: '#4f46e5',
    volunteering: '#0f766e',
    calisthenics: '#b91c1c',
    travel: '#0369a1'
  };

  var AXIS_EDGE_PAD = 14;

  var startYear = data.chart.start_year || 2015;
  var endYear = data.chart.end_year || 2026;
  var labelW = 148;
  var chartW = 1100;
  var rowHMin = 26;
  var axisH = 34;
  var barH = 18;
  var MILESTONE_HIT = 36;
  var MILESTONE_BLOCK = 28;
  var MIN_BAR_PX = 3;
  var SUBLANE_GAP = 3;
  var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var condensedRatio = data.chart.condensed_ratio != null ? data.chart.condensed_ratio : 0.28;

  var focusStart = parseDate(data.chart.focus_start || '2025-02');
  var rangeStartM = (startYear - startYear) * 12;
  var focusM = focusStart ? monthsFromYearStart(focusStart) : rangeStartM;
  var rangeEndM = (endYear - startYear) * 12 + 11;

  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  var tipEl = document.createElement('div');
  tipEl.id = 'dg-journey-tooltip';
  tipEl.className = 'dg-journey__tooltip';
  tipEl.setAttribute('role', 'tooltip');
  tipEl.hidden = true;
  document.body.appendChild(tipEl);

  var tipItem = null;
  var hideTipTimer = null;

  function cancelHideTip() {
    if (hideTipTimer) {
      clearTimeout(hideTipTimer);
      hideTipTimer = null;
    }
  }

  function scheduleHideTip() {
    cancelHideTip();
    hideTipTimer = setTimeout(function () {
      hideTipTimer = null;
      if (tipEl.matches(':hover')) return;
      hideTip();
    }, 200);
  }

  function parseDate(str) {
    if (!str) return null;
    var p = String(str).split('-');
    return { year: +p[0], month: +p[1] || 1 };
  }

  function now() {
    var d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1 };
  }

  function monthsFromYearStart(d) {
    return (d.year - startYear) * 12 + (d.month - 1);
  }

  function monthEnd(d) {
    return monthsFromYearStart(d) + 1;
  }

  function monthToPx(m) {
    var innerW = chartW - 2 * AXIS_EDGE_PAD;
    var wCond = innerW * condensedRatio;
    var wFocus = innerW - wCond;
    var x;
    if (m <= focusM) {
      if (focusM <= rangeStartM) x = 0;
      else x = ((m - rangeStartM) / (focusM - rangeStartM)) * wCond;
    } else if (rangeEndM <= focusM) {
      x = wCond;
    } else {
      x = wCond + ((m - focusM) / (rangeEndM - focusM)) * wFocus;
    }
    return AXIS_EDGE_PAD + x;
  }

  /** Place year ticks; forced ticks are always kept (one per calendar year). */
  function placeAxisYearTicks(candidates, minGap) {
    var forced = candidates.filter(function (t) {
      return t.force;
    });
    if (forced.length) {
      return forced.sort(function (a, b) {
        return a.px - b.px;
      });
    }
    var sorted = candidates.slice().sort(function (a, b) {
      return a.px - b.px;
    });
    var placed = [];
    sorted.forEach(function (t) {
      var blocked = placed.some(function (p) {
        return Math.abs(p.px - t.px) < minGap;
      });
      if (!blocked) placed.push(t);
    });
    return placed;
  }

  function yearStartPx(year) {
    return monthToPx(monthsFromYearStart({ year: year, month: 1 }));
  }

  /** Condensed band: Jan-aligned labels; skip years when pixels are too tight (always keep first & last). */
  function buildCondensedYearTicks(firstYear, lastYear, minLabelPx) {
    var ticks = [];
    var lastPlaced = -Infinity;
    var yearCount = lastYear - firstYear + 1;
    var step = minLabelPx < 24 && yearCount > 6 ? 2 : 1;

    for (var cy = firstYear; cy <= lastYear; cy++) {
      var px = yearStartPx(cy);
      var isFirst = cy === firstYear;
      var isLast = cy === lastYear;
      var onStep = (cy - firstYear) % step === 0;
      if (!isFirst && !isLast && !onStep) continue;
      if (!isFirst && !isLast && px - lastPlaced < minLabelPx) continue;
      ticks.push({ year: cy, px: px, force: true, condensed: true });
      lastPlaced = px;
    }
    return ticks;
  }

  function appendYearTick(axisYears, tick) {
    var el = document.createElement('span');
    el.className =
      'dg-journey__axis-tick dg-journey__axis-tick--year' +
      (tick.condensed ? ' dg-journey__axis-tick--condensed' : '') +
      (tick.focus ? ' is-focus' : '');
    el.style.left = tick.px + 'px';
    el.textContent = String(tick.year);
    axisYears.appendChild(el);
  }

  function monthSpan(rs, re) {
    return monthsFromYearStart(re) - monthsFromYearStart(rs);
  }

  function centerMonth(rs, re) {
    return monthsFromYearStart(rs) + monthSpan(rs, re) / 2;
  }

  function isMilestone(rs, re, item) {
    if (item.lane === 'projects') return false;
    if (item.lane === 'travel' && item.cluster) {
      if (item.start !== item.end) return false;
      return true;
    }
    if (item.start === item.end) return true;
    return monthSpan(rs, re) <= 2;
  }

  function shortTitle(t, max) {
    if (!t) return '';
    if (t.length <= max) return t;
    return t.slice(0, max - 1) + '\u2026';
  }

  function formatWhen(ym) {
    var p = String(ym).split('-');
    if (p.length < 2) return ym;
    var mo = parseInt(p[1], 10);
    if (mo >= 1 && mo <= 12) return MONTHS_SHORT[mo - 1] + ' ' + p[0];
    return ym;
  }

  var TRAVEL_FOCUS_YM = (data.chart && data.chart.focus_start) || '2025-02';
  var TRAVEL_ROW_MAX_SUBLANES = 4;
  var TRAVEL_SUBLANE_GAP_PX = 10;
  var TRAVEL_PIN_MIN_GAP = 48;

  function padMonth(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function formatRange(startYm, endYm) {
    if (!endYm || startYm === endYm) return formatWhen(startYm);
    return formatWhen(startYm) + ' \u2013 ' + formatWhen(endYm);
  }

  function quarterBounds(ym) {
    var y = ym.slice(0, 4);
    var m = parseInt(ym.slice(5), 10);
    var q = Math.ceil(m / 3);
    var startM = (q - 1) * 3 + 1;
    var endM = Math.min(q * 3, 12);
    return {
      key: y + '-Q' + q,
      start: y + '-' + padMonth(startM),
      end: y + '-' + padMonth(endM),
      label: 'Q' + q + ' ' + y
    };
  }

  var COUNTRY_ISO = {
    Vietnam: 'VN',
    Greece: 'GR',
    Singapore: 'SG',
    Poland: 'PL',
    Switzerland: 'CH',
    France: 'FR',
    'Costa Rica': 'CR',
    Mexico: 'MX',
    'North Macedonia': 'MK',
    Slovakia: 'SK',
    Panama: 'PA',
    Colombia: 'CO',
    'San Marino': 'SM',
    Nepal: 'NP',
    Morocco: 'MA',
    Spain: 'ES',
    Norway: 'NO',
    Estonia: 'EE',
    Lithuania: 'LT',
    Egypt: 'EG',
    Kenya: 'KE',
    Serbia: 'RS',
    Tunisia: 'TN',
    Iceland: 'IS',
    Italy: 'IT',
    Germany: 'DE',
    Austria: 'AT',
    Netherlands: 'NL',
    Belgium: 'BE',
    Portugal: 'PT',
    Croatia: 'HR',
    Hungary: 'HU',
    Czechia: 'CZ',
    'Czech Republic': 'CZ',
    Romania: 'RO',
    Bulgaria: 'BG',
    Turkey: 'TR',
    Japan: 'JP',
    Thailand: 'TH',
    Indonesia: 'ID',
    India: 'IN',
    'United States': 'US',
    USA: 'US',
    'United Kingdom': 'GB',
    UK: 'GB'
  };

  function primaryCountry(country) {
    if (!country) return '';
    return String(country).split(',')[0].trim();
  }

  function countryFlag(country) {
    var name = primaryCountry(country);
    if (!name) return '';
    var iso = COUNTRY_ISO[name];
    if (!iso || iso.length !== 2) return '';
    var a = iso.charCodeAt(0);
    var b = iso.charCodeAt(1);
    if (a < 65 || a > 90 || b < 65 || b > 90) return '';
    return String.fromCodePoint(0x1f1e6 + a - 65, 0x1f1e6 + b - 65);
  }

  function uniqueCountriesFromPlaces(places) {
    var seen = {};
    var list = [];
    (places || []).forEach(function (p) {
      var c = primaryCountry(p.country);
      if (!c || seen[c]) return;
      seen[c] = true;
      list.push(c);
    });
    return list;
  }

  function travelClusterMeta(places) {
    var list = places || [];
    var countries = uniqueCountriesFromPlaces(list);
    var flags = countries
      .map(function (c) {
        return countryFlag(c);
      })
      .filter(Boolean)
      .join('');
    return {
      cityCount: list.length,
      countryCount: countries.length,
      countries: countries,
      flags: flags
    };
  }

  function travelClusterTitle(periodLabel, places) {
    var meta = travelClusterMeta(places);
    if (!meta.cityCount) return periodLabel || 'Travel';
    if (meta.countryCount === 1 && meta.flags) {
      return (
        periodLabel +
        ' \u00b7 ' +
        meta.flags +
        ' ' +
        (meta.cityCount === 1 ? meta.countries[0] : meta.cityCount + ' cities')
      );
    }
    if (meta.flags && meta.countryCount <= 4) {
      return (
        periodLabel +
        ' \u00b7 ' +
        meta.flags +
        ' ' +
        meta.cityCount +
        ' ' +
        (meta.cityCount === 1 ? 'city' : 'cities')
      );
    }
    return periodLabel + ' \u00b7 ' + meta.cityCount + ' cities';
  }

  function travelClusterPinLabel(places) {
    var meta = travelClusterMeta(places);
    if (meta.flags && meta.countryCount <= 2) return meta.flags;
    if (meta.cityCount <= 9) return String(meta.cityCount);
    return '9+';
  }

  function travelClusterSummary(places) {
    var meta = travelClusterMeta(places);
    if (!meta.cityCount) return '';
    var parts = [];
    if (meta.flags) parts.push(meta.flags);
    parts.push(meta.cityCount + (meta.cityCount === 1 ? ' city' : ' cities'));
    if (meta.countryCount > 1) {
      parts.push(meta.countryCount + ' countries');
    } else if (meta.countries[0]) {
      parts.push(meta.countries[0]);
    }
    return parts.join(' \u00b7 ');
  }

  function mergeTravelPlaces(a, b) {
    var map = {};
    function add(list) {
      (list || []).forEach(function (p) {
        var key = (p.city || p.name || '') + '|' + (p.country || '');
        if (!map[key]) {
          map[key] = {
            city: p.city || p.name || '',
            country: p.country || '',
            name: p.name,
            postCount: 0,
            samples: []
          };
        }
        map[key].postCount += p.postCount;
        map[key].samples = map[key].samples.concat(p.samples || []).slice(0, 4);
      });
    }
    add(a);
    add(b);
    return Object.keys(map)
      .map(function (k) {
        return map[k];
      })
      .sort(function (x, y) {
        return y.postCount - x.postCount;
      });
  }

  function travelCenterPx(item) {
    var rs = parseDate(item.start);
    var re = parseDate(item.end || item.start);
    if (!rs || !re) return 0;
    return monthToPx(centerMonth(rs, re));
  }

  function mergeTravelByPixelGap(items, minGap) {
    var travel = [];
    var rest = [];
    items.forEach(function (item) {
      if (item.lane === 'travel' && item.cluster) travel.push(item);
      else rest.push(item);
    });
    travel.sort(function (a, b) {
      return a.start.localeCompare(b.start);
    });

    var merged = [];
    var group = null;

    function flush() {
      if (!group) return;
      delete group._cx;
      merged.push(group);
      group = null;
    }

    travel.forEach(function (item) {
      if (item.start < TRAVEL_FOCUS_YM) {
        flush();
        merged.push(item);
        return;
      }

      var cx = travelCenterPx(item);
      if (!group) {
        group = Object.assign({}, item, {
          _cx: cx,
          monthsIncluded: item.monthsIncluded || [item.start]
        });
        return;
      }
      if (cx - group._cx < minGap) {
        group.end = group.end > item.end ? group.end : item.end;
        if (item.start < group.start) group.start = item.start;
        group.posts += item.posts;
        group.travelPlaces = mergeTravelPlaces(group.travelPlaces, item.travelPlaces);
        group.cityCount = group.travelPlaces.length;
        group.countryCount = uniqueCountriesFromPlaces(group.travelPlaces).length;
        group.clusterCount = group.cityCount;
        group.pinLabel = travelClusterPinLabel(group.travelPlaces);
        group.when = formatRange(group.start, group.end);
        group.title = travelClusterTitle(group.when, group.travelPlaces);
        group.summary = travelClusterSummary(group.travelPlaces);
        group.monthsIncluded = (group.monthsIncluded || [])
          .concat(item.monthsIncluded || [item.start])
          .filter(function (m, i, arr) {
            return arr.indexOf(m) === i;
          })
          .sort();
        group._cx = (group._cx + cx) / 2;
      } else {
        flush();
        group = Object.assign({}, item, {
          _cx: cx,
          monthsIncluded: item.monthsIncluded || [item.start]
        });
      }
    });
    flush();
    return rest.concat(merged);
  }

  function travelCityLabel(city, country) {
    if (!country || country === city) return city;
    return city + ', ' + country;
  }

  function buildTravelPlaces(citiesMap) {
    return Object.keys(citiesMap)
      .map(function (key) {
        var g = citiesMap[key];
        return {
          city: g.city,
          country: g.country || '',
          name: travelCityLabel(g.city, g.country),
          postCount: g.titles.length,
          samples: g.titles.slice(0, 4)
        };
      })
      .sort(function (a, b) {
        return b.postCount - a.postCount;
      });
  }

  function travelPlaceHeadline(place) {
    var city = place.city || place.name || '';
    var country = primaryCountry(place.country);
    if (!country || city.toLowerCase().indexOf(country.toLowerCase()) >= 0) {
      return city;
    }
    return city;
  }

  function travelPlaceSubline(place) {
    var country = primaryCountry(place.country);
    if (!country) return '';
    var city = (place.city || '').toLowerCase();
    if (city.indexOf(country.toLowerCase()) >= 0) return '';
    return country;
  }

  function travelPlaceCardHtml(place, maxSamples) {
    var flag = countryFlag(place.country);
    var city = travelPlaceHeadline(place);
    var sub = travelPlaceSubline(place);
    var html = '<li class="dg-journey__travel-place">';
    html += '<div class="dg-journey__travel-place-row">';
    html +=
      '<span class="dg-journey__travel-flag" aria-hidden="true">' +
      (flag || '\u2022') +
      '</span>';
    html += '<div class="dg-journey__travel-place-text">';
    html += '<span class="dg-journey__travel-place-city">' + escapeHtml(city) + '</span>';
    if (sub) {
      html += '<span class="dg-journey__travel-place-country">' + escapeHtml(sub) + '</span>';
    }
    html += '</div>';
    if (place.postCount > 1) {
      html +=
        '<span class="dg-journey__travel-place-count" title="Instagram posts in this city">' +
        place.postCount +
        '</span>';
    }
    html += '</div>';
    place.samples.slice(0, maxSamples).forEach(function (sample) {
      html +=
        '<p class="dg-journey__travel-sample">' + escapeHtml(shortTitle(sample, 80)) + '</p>';
    });
    html += '</li>';
    return html;
  }

  function buildTravelMilestones(posts) {
    if (!posts || !posts.length) return [];
    var byMonth = {};
    posts.forEach(function (p) {
      var m = String(p.date || '').match(/^(\d{4})[.-](\d{2})/);
      if (!m) return;
      var ym = m[1] + '-' + m[2];
      var city = (p.city || '').trim() || 'Trip';
      if (!byMonth[ym]) {
        byMonth[ym] = { ym: ym, cities: {}, postCount: 0 };
      }
      byMonth[ym].postCount += 1;
      if (!byMonth[ym].cities[city]) {
        byMonth[ym].cities[city] = {
          city: city,
          country: (p.country || '').trim(),
          titles: []
        };
      }
      byMonth[ym].cities[city].titles.push(p.title || city);
    });

    var out = [];
    var byYear = {};
    var byQuarter = {};

    function pushCluster(opts) {
      var places = opts.places || [];
      var meta = travelClusterMeta(places);
      var posts = opts.posts;
      var periodLabel = opts.periodLabel || opts.when || '';
      var title = opts.title || travelClusterTitle(periodLabel, places);
      var pinLabel = opts.pinLabel || travelClusterPinLabel(places);
      out.push({
        sort: opts.sort,
        lane: 'travel',
        start: opts.start,
        end: opts.end,
        when: opts.when,
        title: title,
        summary: opts.summary || travelClusterSummary(places),
        link: '/travelling/',
        posts: posts,
        cityCount: meta.cityCount,
        countryCount: meta.countryCount,
        travelPlaces: places,
        monthsIncluded: opts.monthsIncluded || [opts.start],
        cluster: true,
        clusterCount: meta.cityCount,
        pinLabel: pinLabel,
        periodLabel: periodLabel
      });
    }

    Object.keys(byMonth)
      .sort()
      .forEach(function (ym) {
        var bucket = byMonth[ym];
        if (ym < TRAVEL_FOCUS_YM) {
          var y = ym.slice(0, 4);
          if (!byYear[y]) {
            byYear[y] = { year: y, cities: {}, postCount: 0, start: ym, end: ym };
          }
          byYear[y].postCount += bucket.postCount;
          if (ym < byYear[y].start) byYear[y].start = ym;
          if (ym > byYear[y].end) byYear[y].end = ym;
          Object.keys(bucket.cities).forEach(function (c) {
            if (!byYear[y].cities[c]) {
              byYear[y].cities[c] = bucket.cities[c];
            } else {
              byYear[y].cities[c].titles = byYear[y].cities[c].titles.concat(
                bucket.cities[c].titles
              );
            }
          });
          return;
        }

        var qb = quarterBounds(ym);
        if (!byQuarter[qb.key]) {
          byQuarter[qb.key] = {
            start: qb.start,
            end: qb.end,
            label: qb.label,
            cities: {},
            postCount: 0,
            months: []
          };
        }
        var qBucket = byQuarter[qb.key];
        qBucket.postCount += bucket.postCount;
        if (qBucket.months.indexOf(ym) === -1) qBucket.months.push(ym);
        Object.keys(bucket.cities).forEach(function (c) {
          if (!qBucket.cities[c]) {
            qBucket.cities[c] = bucket.cities[c];
          } else {
            qBucket.cities[c].titles = qBucket.cities[c].titles.concat(
              bucket.cities[c].titles
            );
          }
        });
      });

    Object.keys(byQuarter)
      .sort()
      .forEach(function (key) {
        var bucket = byQuarter[key];
        bucket.months.sort();
        var places = buildTravelPlaces(bucket.cities);
        var when = formatRange(bucket.start, bucket.end);
        pushCluster({
          sort: key.replace('-', '') + 'cl',
          start: bucket.start,
          end: bucket.end,
          when: when,
          periodLabel: bucket.label,
          places: places,
          posts: bucket.postCount,
          monthsIncluded: bucket.months
        });
      });

    Object.keys(byYear)
      .sort()
      .reverse()
      .forEach(function (y) {
        var g = byYear[y];
        var places = buildTravelPlaces(g.cities);
        pushCluster({
          sort: y + 'y',
          start: g.start,
          end: g.end,
          when: y,
          periodLabel: y,
          places: places,
          posts: g.postCount
        });
      });

    return mergeTravelByPixelGap(out, TRAVEL_PIN_MIN_GAP);
  }

  function fitBarLabel(item, widthPx) {
    if (item.lane === 'travel' && item.cluster) {
      var meta = travelClusterMeta(item.travelPlaces || []);
      var flags = meta.flags;
      var n = meta.cityCount || 0;
      var cities = n + (n === 1 ? ' city' : ' cities');
      if (widthPx < 28) return flags || String(n);
      if (widthPx < 72) return flags ? flags + ' ' + n : cities;
      return (flags ? flags + ' ' : '') + cities;
    }

    var full = item.bar_label || item.title || '';
    if (!full) return '';
    var maxChars = Math.floor((widthPx - 12) / 5.5);
    if (maxChars < 3) return '';
    if (full.length <= maxChars) return full;

    var title = item.title || '';
    var candidates = [];
    if (item.bar_label) candidates.push(item.bar_label);
    candidates.push(title);
    var at = title.split(' @ ');
    if (at.length === 2) {
      candidates.push(at[1]);
      candidates.push(at[0]);
    }
    var mid = title.split(' \u00b7 ');
    if (mid.length === 2) {
      candidates.push(mid[0]);
      candidates.push(mid[1]);
    }

    var best = '';
    candidates.forEach(function (c) {
      if (!c) return;
      if (c.length <= maxChars && c.length > best.length) best = c;
    });
    return best || shortTitle(full, maxChars);
  }

  function itemPageContent(item) {
    var paragraphs = [];
    var bullets = item.detail ? item.detail.slice() : [];
    var meta = [];

    if (item.summary) {
      paragraphs.push(item.summary);
    }

    var sn = item.link && pageSnippets[item.link];
    if (sn) {
      (sn.paragraphs || []).forEach(function (p) {
        if (!p) return;
        var dup = paragraphs.some(function (existing) {
          return existing === p || existing.indexOf(p) === 0 || p.indexOf(existing) === 0;
        });
        if (!dup) paragraphs.push(p);
      });
      (sn.bullets || []).forEach(function (b) {
        if (b && bullets.indexOf(b) < 0) bullets.push(b);
      });
      meta = sn.meta || [];
    }

    return { paragraphs: paragraphs, bullets: bullets, meta: meta };
  }

  function buildItemDetailHtml(item, maxBullets, opts) {
    opts = opts || {};
    var content = itemPageContent(item);
    var html = '';
    var paraLimit = opts.paraLimit != null ? opts.paraLimit : 2;

    content.paragraphs.slice(0, paraLimit).forEach(function (p, i) {
      var cls =
        i === 0
          ? 'dg-journey__tooltip-summary dg-journey__modal-lead'
          : 'dg-journey__modal-paragraph';
      html += '<p class="' + cls + '">' + escapeHtml(p) + '</p>';
    });

    if (content.bullets.length) {
      html += '<ul class="dg-journey__tooltip-bullets">';
      content.bullets.slice(0, maxBullets).forEach(function (line) {
        html += '<li>' + escapeHtml(line) + '</li>';
      });
      html += '</ul>';
    }

    if (opts.includeMeta && content.meta.length) {
      html += '<div class="dg-journey__modal-meta-block">';
      content.meta.forEach(function (line) {
        html += '<p class="dg-journey__modal-meta">' + escapeHtml(line) + '</p>';
      });
      html += '</div>';
    }

    if (item.place) {
      html +=
        '<span class="dg-journey__tooltip-place">' + escapeHtml(item.place) + '</span>';
    }
    return html;
  }

  function itemTooltipRich(item) {
    if (item.lane === 'travel' && item.travelPlaces && item.travelPlaces.length) {
      return true;
    }
    if (item.link && pageSnippets[item.link]) {
      return true;
    }
    return Boolean(
      (item.detail && item.detail.length) ||
        (item.summary && item.summary.length > 48)
    );
  }

  function buildTravelDetailHtml(item, maxPlaces, maxSamples) {
    var places = item.travelPlaces || [];
    if (!places.length) {
      return item.summary
        ? '<p class="dg-journey__tooltip-summary">' + escapeHtml(item.summary) + '</p>'
        : '';
    }

    var monthsLine = '';
    if (item.monthsIncluded && item.monthsIncluded.length > 1) {
      monthsLine =
        '<p class="dg-journey__travel-months">' +
        escapeHtml(item.monthsIncluded.map(formatWhen).join(' \u00b7 ')) +
        '</p>';
    }

    var meta = travelClusterMeta(places);
    var stats =
      '<div class="dg-journey__travel-metrics">' +
      (meta.flags
        ? '<span class="dg-journey__travel-metric dg-journey__travel-metric--flags" aria-hidden="true">' +
          meta.flags +
          '</span>'
        : '') +
      '<span class="dg-journey__travel-metric"><strong>' +
      meta.cityCount +
      '</strong> ' +
      (meta.cityCount === 1 ? 'city' : 'cities') +
      '</span>' +
      (meta.countryCount > 0
        ? '<span class="dg-journey__travel-metric"><strong>' +
          meta.countryCount +
          '</strong> ' +
          (meta.countryCount === 1 ? 'country' : 'countries') +
          '</span>'
        : '') +
      (item.monthsIncluded && item.monthsIncluded.length > 1
        ? '<span class="dg-journey__travel-metric"><strong>' +
          item.monthsIncluded.length +
          '</strong> months</span>'
        : '') +
      '</div>' +
      monthsLine;

    var list = '<ul class="dg-journey__travel-places">';
    places.slice(0, maxPlaces).forEach(function (place) {
      list += travelPlaceCardHtml(place, maxSamples);
    });
    if (places.length > maxPlaces) {
      list +=
        '<li class="dg-journey__travel-more">+' +
        (places.length - maxPlaces) +
        ' more places on the travel map</li>';
    }
    list += '</ul>';

    return stats + list;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function showTip(item, clientX, clientY) {
    cancelHideTip();
    if (tipItem === item && !tipEl.hidden) return;

    var lane = laneLabel[item.lane] || item.lane;
    var badges = '';
    var travelRich = item.lane === 'travel' && item.travelPlaces && item.travelPlaces.length;
    var rich = travelRich || itemTooltipRich(item);

    if (item.featured) {
      badges += '<span class="dg-journey__tooltip-badge">Featured</span>';
    }
    if (item.award) {
      badges += '<span class="dg-journey__tooltip-badge dg-journey__tooltip-badge--award">' + escapeHtml(item.award) + '</span>';
    }
    if (item.cluster && !travelRich) {
      badges += '<span class="dg-journey__tooltip-badge dg-journey__tooltip-badge--cluster">Cluster</span>';
    }
    if (travelRich && item.travelPlaces && item.travelPlaces.length) {
      var tMeta = travelClusterMeta(item.travelPlaces);
      if (tMeta.flags) {
        badges +=
          '<span class="dg-journey__tooltip-badge dg-journey__tooltip-badge--cluster">' +
          tMeta.flags +
          ' ' +
          tMeta.cityCount +
          ' cities</span>';
      }
    } else if (!travelRich && item.posts && item.posts > 1) {
      badges +=
        '<span class="dg-journey__tooltip-badge dg-journey__tooltip-badge--muted">' +
        item.posts +
        ' posts</span>';
    }

    var body = '';
    if (travelRich) {
      body = buildTravelDetailHtml(item, 8, 1);
    } else {
      body = buildItemDetailHtml(item, 8, { paraLimit: 3 });
    }

    var whenLine =
      item.when && (!travelRich || item.title !== item.when)
        ? '<span class="dg-journey__tooltip-when">' + escapeHtml(item.when) + '</span>'
        : '';

    var link = item.link || '';
    var cta = '';
    if (link && link !== '#') {
      var ctaLabel = item.lane === 'travel' ? 'Open travel map' : 'Open on ' + lane;
      cta =
        '<a class="dg-journey__tooltip-link" href="' +
        escapeHtml(link) +
        '">' +
        escapeHtml(ctaLabel) +
        ' \u2192</a>';
    }

    tipEl.className = 'dg-journey__tooltip' + (rich ? ' dg-journey__tooltip--rich' : '');
    tipEl.innerHTML =
      '<span class="dg-journey__tooltip-lane dg-journey__tooltip-lane--' +
      item.lane +
      '">' +
      escapeHtml(lane) +
      '</span>' +
      badges +
      '<strong class="dg-journey__tooltip-title">' +
      escapeHtml(item.title) +
      '</strong>' +
      whenLine +
      body +
      cta;
    tipEl.scrollTop = 0;
    tipEl.hidden = false;
    tipItem = item;
    positionTip(clientX, clientY);
  }

  function positionTip(x, y) {
    tipEl.style.left = '0';
    tipEl.style.top = '0';
    var rect = tipEl.getBoundingClientRect();
    var left = x - 28;
    var top = y - 20;
    if (left + rect.width > window.innerWidth - 8) {
      left = window.innerWidth - rect.width - 8;
    }
    if (top + rect.height > window.innerHeight - 8) {
      top = window.innerHeight - rect.height - 8;
    }
    if (left < 8) left = 8;
    if (top < 8) top = 8;
    tipEl.style.left = left + 'px';
    tipEl.style.top = top + 'px';
  }

  function hideTip() {
    cancelHideTip();
    tipEl.hidden = true;
    tipItem = null;
  }

  function barCenterPx(b) {
    if (b.centerPx != null) return b.centerPx;
    return b.leftPx + b.widthPx / 2;
  }

  function barsOverlap(a, b, gap) {
    var g = gap != null ? gap : 1;
    return !(a.rightPx <= b.leftPx + g || a.leftPx >= b.rightPx - g);
  }

  function assignSubLanes(bars, opts) {
    opts = opts || {};
    var gap = opts.gap != null ? opts.gap : 1;
    var maxLanes = opts.maxLanes != null ? opts.maxLanes : 99;
    bars.sort(function (a, b) {
      return a.leftPx - b.leftPx;
    });
    var stacks = [];
    bars.forEach(function (b) {
      var lane = 0;
      for (var i = 0; i < stacks.length && i < maxLanes; i++) {
        var hit = stacks[i].some(function (x) {
          return barsOverlap(b, x, gap);
        });
        if (!hit) {
          lane = i;
          break;
        }
        lane = i + 1;
      }
      if (lane >= maxLanes) lane = maxLanes - 1;
      if (!stacks[lane]) stacks[lane] = [];
      stacks[lane].push(b);
      b.subLane = lane;
    });
    return Math.min(Math.max(1, stacks.length), maxLanes);
  }

  function setActive(el, item) {
    root.querySelectorAll('.dg-journey__bar.is-active').forEach(function (b) {
      b.classList.remove('is-active');
    });
    if (el) el.classList.add('is-active');
  }

  var modalEl = document.getElementById('dg-journey-modal');
  var modalBody = document.getElementById('dg-journey-modal-body');

  function openModal(item) {
    if (!modalEl || !modalBody) return;
    var lane = laneLabel[item.lane] || item.lane;
    var link = item.link || '#';
    var badges = '';
    if (item.featured) {
      badges += '<span class="dg-journey__modal-badge">Featured</span>';
    }
    if (item.award) {
      badges += '<span class="dg-journey__modal-badge dg-journey__modal-badge--award">' + escapeHtml(item.award) + '</span>';
    }
    var detailHtml = '';
    if (item.lane === 'travel' && item.travelPlaces && item.travelPlaces.length) {
      detailHtml =
        '<div class="dg-journey__modal-detail">' + buildTravelDetailHtml(item, 12, 2) + '</div>';
    } else {
      detailHtml =
        '<div class="dg-journey__modal-detail">' +
        buildItemDetailHtml(item, 12, { paraLimit: 4, includeMeta: true }) +
        '</div>';
    }

    var whenLine =
      item.when && item.title !== item.when
        ? '<p class="dg-journey__modal-when">' + escapeHtml(item.when) + '</p>'
        : '';
    var ctaLabel =
      item.lane === 'travel' ? 'Open travel map' : 'Open on ' + lane;

    modalBody.innerHTML =
      '<div class="dg-journey__modal-grabber" aria-hidden="true"></div>' +
      '<span class="dg-journey__modal-lane dg-journey__modal-lane--' +
      item.lane +
      '">' +
      escapeHtml(lane) +
      '</span>' +
      badges +
      '<h3 id="dg-journey-modal-title" class="dg-journey__modal-title">' +
      escapeHtml(item.title) +
      '</h3>' +
      whenLine +
      detailHtml +
      '<a class="dg-journey__modal-cta" href="' +
      link +
      '">' +
      escapeHtml(ctaLabel) +
      ' &rarr;</a>';

    modalEl.hidden = false;
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('dg-journey-modal-open');
    hideTip();
    var cta = modalEl.querySelector('.dg-journey__modal-cta');
    if (cta) cta.focus();
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.hidden = true;
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('dg-journey-modal-open');
    hideTip();
  }

  if (modalEl) {
    modalEl.querySelectorAll('[data-journey-modal-close]').forEach(function (node) {
      node.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modalEl.hidden) closeModal();
    });
  }

  function bindBar(el, item) {
    el.setAttribute('aria-label', item.title + ', ' + (item.when || ''));
    el.addEventListener('mouseenter', function (e) {
      if (!canHover) return;
      setActive(el, item);
      showTip(item, e.clientX, e.clientY);
    });

    el.addEventListener('mousemove', function (e) {
      if (!canHover) return;
      showTip(item, e.clientX, e.clientY);
    });

    el.addEventListener('mouseleave', function () {
      if (!canHover) return;
      el.classList.remove('is-active');
      scheduleHideTip();
    });

    el.addEventListener('focus', function () {
      var r = el.getBoundingClientRect();
      setActive(el, item);
      showTip(item, r.left + r.width / 2, r.top);
    });

    el.addEventListener('blur', function () {
      el.classList.remove('is-active');
      hideTip();
    });

    el.addEventListener('click', function (e) {
      e.preventDefault();
      setActive(el, item);
      openModal(item);
    });
  }

  function buildBarMeta(item) {
    var rs = parseDate(item.start);
    if (!rs) return null;
    var re = item.end ? parseDate(item.end) : now();
    var startPx = monthToPx(monthsFromYearStart(rs));
    var endPx = monthToPx(monthEnd(re));
    var spanPx = Math.max(4, endPx - startPx);
    var centerPx = startPx + spanPx / 2;

    if (isMilestone(rs, re, item)) {
      var cx = monthToPx(centerMonth(rs, re));
      var half = MILESTONE_HIT / 2;
      return {
        item: item,
        milestone: true,
        centerPx: cx,
        leftPx: cx - half,
        widthPx: MILESTONE_HIT,
        rightPx: cx + half
      };
    }

    var w = Math.max(MIN_BAR_PX, spanPx);
    return {
      item: item,
      leftPx: startPx,
      widthPx: w,
      rightPx: startPx + w,
      centerPx: centerPx
    };
  }

  function addBarTitle(el, item, widthPx) {
    var label = fitBarLabel(item, widthPx);
    if (!label) return;
    var title = document.createElement('span');
    title.className = 'dg-journey__bar-title';
    title.textContent = label;
    title.setAttribute('title', item.title || label);
    el.appendChild(title);
  }

  function appendBar(area, b, block) {
    var item = b.item;
    var peekLabels = block && block.milestoneCount > 4;
    var compactLabel = block && block.milestoneCount > 1;
    var el = document.createElement('a');
    var accent = laneAccent[item.lane] || '#c8a96e';

    el.className =
      'dg-journey__bar dg-journey__bar--' +
      item.lane +
      (item.featured ? ' is-featured' : '') +
      (b.milestone ? ' is-milestone' : '') +
      (item.cluster ? ' is-cluster' : '') +
      (item.lane === 'travel' && item.cluster && b.milestone ? ' is-travel-cluster' : '') +
      (item.lane === 'travel' && item.cluster && !b.milestone ? ' is-travel-bundle' : '');

    el.style.setProperty('--lane-accent', accent);

    if (item.link) {
      el.href = item.link;
    } else {
      el.href = '#';
      el.addEventListener('click', function (ev) {
        ev.preventDefault();
      });
    }

    var blockH = barH;
    var stackUnit = barH + SUBLANE_GAP;
    var stackH = block.subLanes * stackUnit - SUBLANE_GAP;
    var stackTop = Math.max(2, (block.innerH - stackH) / 2);
    var top = stackTop + b.subLane * stackUnit;

    if (b.milestone) {
      var isTravelCluster = item.lane === 'travel' && item.cluster;
      var hitW = isTravelCluster ? 28 : MILESTONE_HIT;
      var hitH = isTravelCluster ? 28 : MILESTONE_BLOCK;
      blockH = hitH;
      stackUnit = hitH + SUBLANE_GAP;
      stackH = block.subLanes * stackUnit - SUBLANE_GAP;
      stackTop = Math.max(1, (block.innerH - stackH) / 2);
      top = stackTop + b.subLane * stackUnit;
      el.style.left = b.centerPx - hitW / 2 + 'px';
      el.style.width = hitW + 'px';
      el.style.height = hitH + 'px';
      el.style.top = top + 'px';

      var mark = document.createElement('span');
      mark.className = 'dg-journey__milestone-mark';
      mark.setAttribute('aria-hidden', 'true');
      el.appendChild(mark);

      if (item.cluster && item.clusterCount) {
        var count = document.createElement('span');
        var pinText = String(item.pinLabel || item.clusterCount);
        count.className =
          'dg-journey__cluster-count' +
          (isTravelCluster && /[\u{1f1e6}-\u{1f1ff}]/u.test(pinText)
            ? ' dg-journey__cluster-count--flags'
            : '');
        count.textContent = pinText;
        count.setAttribute('aria-hidden', 'true');
        el.appendChild(count);
      }

      if (isTravelCluster) {
        var travelLbl = document.createElement('span');
        travelLbl.className = 'dg-journey__milestone-label is-travel-peek';
        travelLbl.textContent = shortTitle(item.summary || item.title, 22);
        el.appendChild(travelLbl);
      } else if (!isTravelCluster) {
        var lbl = document.createElement('span');
        lbl.className = 'dg-journey__milestone-label' + (peekLabels ? ' is-peek' : '');
        if (compactLabel && !peekLabels) {
          lbl.className += ' is-compact';
        }
        lbl.textContent =
          compactLabel && !peekLabels ? shortTitle(item.title, 16) : item.title;
        el.appendChild(lbl);
      }
    } else {
      if (item.cluster && item.lane === 'travel') {
        el.classList.add('is-travel-year');
      }
      el.style.left = b.leftPx + 'px';
      el.style.width = b.widthPx + 'px';
      el.style.height = barH + 'px';
      el.style.top = top + 'px';
      addBarTitle(el, item, b.widthPx);
    }

    bindBar(el, item);
    area.appendChild(el);
  }

  function render() {
    var layout = lanes.map(function (row) {
      var bars = [];
      milestones.forEach(function (item) {
        if (item.lane !== row.id) return;
        var meta = buildBarMeta(item);
        if (meta) bars.push(meta);
      });
      var subLanes =
        row.id === 'travel'
          ? assignSubLanes(bars, {
              gap: TRAVEL_SUBLANE_GAP_PX,
              maxLanes: TRAVEL_ROW_MAX_SUBLANES
            })
          : assignSubLanes(bars);
      var milestoneCount = bars.filter(function (b) {
        return b.milestone;
      }).length;
      return { row: row, bars: bars, subLanes: subLanes, milestoneCount: milestoneCount };
    });

    function rowHeight(block) {
      var blockMax = barH;
      var subLanes = block.subLanes;
      if (block.row.id === 'travel') {
        blockMax = barH + 2;
        block.bars.forEach(function (b) {
          if (b.milestone) blockMax = Math.max(blockMax, MILESTONE_BLOCK);
        });
      } else {
        block.bars.forEach(function (b) {
          if (b.milestone) blockMax = Math.max(blockMax, MILESTONE_BLOCK);
        });
      }
      return Math.max(rowHMin, subLanes * (blockMax + SUBLANE_GAP) + 4);
    }

    var totalH = axisH;
    layout.forEach(function (block) {
      block.innerH = rowHeight(block);
      totalH += block.innerH;
    });
    var focusLeftPx = monthToPx(focusM);

    chartEl.style.width = labelW + chartW + 'px';
    chartEl.style.height = totalH + 'px';
    chartEl.innerHTML = '';

    var axis = document.createElement('div');
    axis.className = 'dg-journey__axis';
    axis.style.height = axisH + 'px';

    var axisMonths = document.createElement('div');
    axisMonths.className = 'dg-journey__axis-months';
    axisMonths.style.width = chartW + 'px';
    axisMonths.style.marginLeft = labelW + 'px';

    var axisYears = document.createElement('div');
    axisYears.className = 'dg-journey__axis-years';
    axisYears.style.width = chartW + 'px';
    axisYears.style.marginLeft = labelW + 'px';

    for (var fm = focusM; fm <= rangeEndM; fm += 1) {
      var mo = (fm % 12) + 1;
      var mpx = monthToPx(fm);
      var mt = document.createElement('span');
      mt.className = 'dg-journey__axis-tick dg-journey__axis-tick--month';
      mt.style.left = mpx + 'px';
      mt.textContent = MONTHS_SHORT[mo - 1];
      axisMonths.appendChild(mt);
    }

    var wCondPx = (chartW - 2 * AXIS_EDGE_PAD) * condensedRatio;
    var focusYear = focusStart.year;
    var condEndYear = focusYear - 1;
    var yearTickCandidates = [];

    if (condEndYear >= startYear) {
      var condensedYearCount = focusYear - startYear;
      var condensedGap = Math.max(
        20,
        Math.floor(wCondPx / Math.max(1, condensedYearCount))
      );
      buildCondensedYearTicks(startYear, condEndYear, condensedGap).forEach(function (t) {
        appendYearTick(axisYears, t);
      });
    }

    var focusCandidates = [];
    for (var fy = focusYear; fy <= endYear; fy++) {
      focusCandidates.push({
        year: fy,
        px: yearStartPx(fy),
        force: true,
        focus: true
      });
    }
    placeAxisYearTicks(focusCandidates, 36).forEach(function (t) {
      appendYearTick(axisYears, t);
    });

    var focusTag = document.createElement('span');
    focusTag.className = 'dg-journey__axis-focus-tag';
    focusTag.textContent = 'Last 15 mo (detail)';
    focusTag.style.left = Math.min(focusLeftPx + 8, chartW - 120) + 'px';
    focusTag.style.right = 'auto';
    axisYears.appendChild(focusTag);

    axis.appendChild(axisMonths);
    axis.appendChild(axisYears);
    chartEl.appendChild(axis);

    layout.forEach(function (block) {
      var rowEl = document.createElement('div');
      rowEl.className = 'dg-journey__lane';
      rowEl.setAttribute('data-lane', block.row.id);
      rowEl.style.height = block.innerH + 'px';

      var lab = document.createElement('div');
      lab.className = 'dg-journey__lane-label';
      lab.style.width = labelW + 'px';
      lab.textContent = block.row.emoji
        ? block.row.emoji + ' ' + block.row.label
        : block.row.label;
      rowEl.appendChild(lab);

      var area = document.createElement('div');
      area.className = 'dg-journey__lane-area';
      area.style.width = chartW + 'px';
      area.style.height = block.innerH + 'px';

      var band = document.createElement('div');
      band.className = 'dg-journey__focus-band';
      band.style.left = focusLeftPx + 'px';
      band.style.width = chartW - AXIS_EDGE_PAD - focusLeftPx + 'px';
      area.appendChild(band);

      for (var gy = startYear; gy <= endYear; gy++) {
        var gpx = yearStartPx(gy);
        var grid = document.createElement('span');
        grid.className = 'dg-journey__grid-line dg-journey__grid-line--year';
        if (gy >= focusStart.year) grid.classList.add('is-focus');
        grid.style.left = gpx + 'px';
        area.appendChild(grid);
      }

      for (var gfm = focusM; gfm <= rangeEndM; gfm += 1) {
        var mgpx = monthToPx(gfm);
        var mg = document.createElement('span');
        mg.className = 'dg-journey__grid-line dg-journey__grid-line--month';
        mg.style.left = mgpx + 'px';
        area.appendChild(mg);
      }

      block.bars.forEach(function (b) {
        appendBar(area, b, block);
      });

      rowEl.appendChild(area);
      chartEl.appendChild(rowEl);
    });
  }

  function applyFilter(laneId) {
    root.querySelectorAll('.dg-journey__lane').forEach(function (row) {
      var id = row.getAttribute('data-lane');
      row.classList.toggle('is-dimmed', laneId !== 'all' && id !== laneId);
    });
  }

  root.querySelectorAll('[data-journey-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-journey-filter');
      root.querySelectorAll('[data-journey-filter]').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      applyFilter(id);
    });
  });

  if (scrollEl) {
    scrollEl.addEventListener('scroll', hideTip);
  }

  tipEl.addEventListener('mouseenter', function () {
    cancelHideTip();
  });
  tipEl.addEventListener('mouseleave', function () {
    scheduleHideTip();
  });
  tipEl.addEventListener(
    'wheel',
    function (e) {
      e.stopPropagation();
      var max = tipEl.scrollHeight - tipEl.clientHeight;
      if (max <= 0) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      tipEl.scrollTop += e.deltaY;
    },
    { passive: false }
  );

  milestones = milestones.concat(buildTravelMilestones(window.myTravelPosts || []));

  render();
  applyFilter('all');
})();
