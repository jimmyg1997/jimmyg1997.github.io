---
title: ✈️ Travelling
layout: single
permalink: /travelling/
author_profile: true
toc: true
toc_sticky: true
toc_h_max: 3
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/travel-header.png
excerpt: "Exploring the world one adventure at a time"
---

<div class="dg-travel" markdown="1">

<div class="travel-intro dg-travel-hero">
  <p>Join me on my travel adventures around the world. This section features destinations I've visited, travel tips, and photo galleries from my journeys. Follow me on Instagram for more travel content.</p>
  <div class="social-connect">
    <span class="connect-text">Follow my journey</span>
    <a href="https://www.instagram.com/dimiles.away/" target="_blank" class="instagram-btn">
      <i class="fab fa-instagram"></i>
      @dimiles.away
    </a>
  </div>
</div>

## Instagram Feed {#instagram-feed}

<div class="instagram-feed">
  <div class="instagram-grid">
    <!-- Instagram Post 1 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DCfVqXxMQ5-/" data-instgrm-version="14" data-instgrm-width="1000">
        <a href="https://www.instagram.com/p/DCfVqXxMQ5-/" target="_blank">View this post on Instagram</a>
      </blockquote>
    </div>
    <!-- Instagram Post 2 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DMDgGKJMEnE/" data-instgrm-version="14" data-instgrm-width="1000">
        <a href="https://www.instagram.com/p/DMDgGKJMEnE/" target="_blank">View this post on Instagram</a>
      </blockquote>
    </div>
    <!-- Instagram Post 3 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DGuyZCVMAj7/" data-instgrm-version="14" data-instgrm-width="1000">
        <a href="https://www.instagram.com/p/DGuyZCVMAj7/" target="_blank">View this post on Instagram</a>
      </blockquote>
    </div>
  </div>
</div>

<script async src="https://www.instagram.com/embed.js"></script>
<script>
  window.addEventListener('load', function() {
    if (typeof instgrm !== 'undefined' && instgrm.Embeds) {
      try {
        // Only process blockquote elements, not iframes (which are handled separately)
        const blockquotes = document.querySelectorAll('blockquote.instagram-media');
        if (blockquotes.length > 0) {
          instgrm.Embeds.process();
        }
      } catch (e) {
        console.warn('Instagram embed processing error (non-critical):', e);
      }
    }
  });
</script>



## Travel Summary {#travel-summary}

<div class="travel-summary-section">
  
  <div id="travel-insights">
    <!-- Insights will be populated by JavaScript -->
  </div>
  <div id="travel-timeline-viz">
    <!-- Timeline visualization will be populated by JavaScript -->
  </div>
</div>


<!-- ## Interactive Travel Map {#interactive-travel-map} -->

## Interactive Travel Map {#interactive-travel-map}

<div class="dg-travel-map-wrap">
  <div class="dg-travel-map-callout">
    <p>
      <strong>📸 Detailed Interactive Map</strong> — Full Instagram post embeds in popups. Click any marker to view the complete post with images and captions. Best for detailed exploration!
    </p>
  </div>
  <div id="openlayers-map"></div>
  <div class="travel-stats">
    <div class="dg-travel-stat dg-travel-stat--countries">
      <strong id="openlayers-countries" class="dg-travel-stat-num dg-travel-stat-num--navy">0</strong>
      <div class="dg-travel-stat-label">Countries</div>
    </div>
    <div class="dg-travel-stat dg-travel-stat--cities">
      <strong id="openlayers-cities" class="dg-travel-stat-num dg-travel-stat-num--green">0</strong>
      <div class="dg-travel-stat-label">Cities</div>
    </div>
    <div class="dg-travel-stat dg-travel-stat--posts">
      <strong id="openlayers-posts" class="dg-travel-stat-num dg-travel-stat-num--red">0</strong>
      <div class="dg-travel-stat-label">Posts</div>
    </div>
  </div>
</div>

<!-- OpenLayers -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@9.2.4/ol.css">
<script src="https://cdn.jsdelivr.net/npm/ol@9.2.4/dist/ol.js"></script>

<script>
function initExperimentalMaps() {
  // Wait until myTravelPosts is available (it is defined in the commented Interactive Travel Map script)
  if (!window.myTravelPosts || !Array.isArray(window.myTravelPosts) || window.myTravelPosts.length === 0) {
    // Try again a few times in case the other script runs slightly later
    if (!initExperimentalMaps._retries) initExperimentalMaps._retries = 0;
    if (initExperimentalMaps._retries < 40) {
      console.log('[ExperimentalMaps] myTravelPosts not ready yet, retry', initExperimentalMaps._retries + 1);
      initExperimentalMaps._retries += 1;
      setTimeout(initExperimentalMaps, 250);
    }
    return;
  }

  console.log('[ExperimentalMaps] Initialising with', window.myTravelPosts.length, 'posts');

  // Build a reusable GeoJSON-like structure
  const travelFeatures = window.myTravelPosts
    .filter(p => typeof p.lat === 'number' && typeof p.lng === 'number')
    .map((post, index) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [post.lng, post.lat]
      },
      properties: {
        id: index,
        title: post.title || '',
        city: post.city || '',
        country: post.country || '',
        date: post.date || '',
        instagramUrl: post.instagramUrl || (post.instagramPostId ? ('https://www.instagram.com/p/' + post.instagramPostId + '/') : '')
      }
    }));

  const travelFeatureCollection = {
    type: 'FeatureCollection',
    features: travelFeatures
  };

  console.log('[ExperimentalMaps] travelFeatures count:', travelFeatures.length);
  console.log('[ExperimentalMaps] OpenLayers present:', typeof ol !== 'undefined');

  // Shared analytics: unique countries, unique cities, total posts
  const countriesSet = new Set(window.myTravelPosts.map(p => p.country).filter(Boolean));
  const citiesSet = new Set(window.myTravelPosts.map(p => p.city).filter(Boolean));
  const totalPosts = window.myTravelPosts.length;

  const countriesCount = countriesSet.size;
  const citiesCount = citiesSet.size;

  console.log('[ExperimentalMaps] analytics -> countries:', countriesCount, 'cities:', citiesCount, 'posts:', totalPosts);

  // Populate analytics for OpenLayers stats strip (if present)
  const olCountriesEl = document.getElementById('openlayers-countries');
  const olCitiesEl = document.getElementById('openlayers-cities');
  const olPostsEl = document.getElementById('openlayers-posts');
  if (olCountriesEl) olCountriesEl.textContent = countriesCount;
  if (olCitiesEl) olCitiesEl.textContent = citiesCount;
  if (olPostsEl) olPostsEl.textContent = totalPosts;

  // Common popup HTML generator with X button
  function buildPopupHTML(props) {
    const safe = (v) => String(v || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const title = safe(props.title);
    const city = safe(props.city);
    const country = safe(props.country);
    const date = safe(props.date);
    const url = props.instagramUrl || '#';
    const instaId = (props.instagramUrl && props.instagramUrl.split('/p/')[1])
      ? props.instagramUrl.split('/p/')[1].split('/')[0]
      : '';

    return `
      <div style="position: relative; width: 260px; max-height: 420px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; overflow-y: auto; padding-top: 4px;">
        <button
          type="button"
          class="exp-popup-close-btn"
          aria-label="Close"
          style="position: absolute; top: 4px; right: 4px; border: none; background: rgba(0,0,0,0.6); color: #fff; border-radius: 999px; width: 22px; height: 22px; font-size: 16px; line-height: 1; cursor: pointer; z-index: 1000; display: flex; align-items: center; justify-content: center; font-weight: bold;">
          ×
        </button>
        <div style="margin-bottom: 8px; padding-right: 26px;">
          <div style="font-weight: 600; font-size: 0.9rem; color: #001f3f; margin-bottom: 4px;">${title}</div>
          <div style="font-size: 0.8rem; color: #555; margin-bottom: 2px;">${city}${city && country ? ', ' : ''}${country}</div>
          <div style="font-size: 0.75rem; color: #888;">${date}</div>
        </div>
        ${instaId ? `
        <div style="border-radius: 10px; overflow: hidden; margin-bottom: 8px;">
          <iframe
            src="https://www.instagram.com/p/${instaId}/embed/captioned/?cr=1&v=14&wp=260"
            width="100%"
            height="360"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
            loading="lazy"
            data-instgrm-permalink=""
            style="border: none; overflow: hidden;">
          </iframe>
        </div>
        ` : ''}
        <div style="text-align: center; margin-top: 4px;">
          <a href="${url}" target="_blank" style="display: inline-block; padding: 6px 12px; border-radius: 999px; background: #001f3f; color: #fff; font-size: 0.8rem; font-weight: 500; text-decoration: none;">
            View full Instagram post
          </a>
        </div>
      </div>
    `;
  }

  // ---------------------------
  // OpenLayers map
  // ---------------------------
  let popupOverlay = null;
  if (typeof ol !== 'undefined' && document.getElementById('openlayers-map')) {
    console.log('[ExperimentalMaps] Creating OpenLayers map');
    const features = travelFeatures.map(f => {
      return new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(f.geometry.coordinates)),
        properties: f.properties
      });
    });

    const vectorSource = new ol.source.Vector({ features });

    // Wrap the vector source with clustering
    const clusterSource = new ol.source.Cluster({
      distance: 40, // Distance in pixels within which features will be clustered
      source: vectorSource
    });

    // Style function that shows cluster count or individual marker
    const styleFunction = function(feature) {
      const size = feature.get('features').length;
      if (size > 1) {
        // Cluster style - show count
        return new ol.style.Style({
        image: new ol.style.Circle({
            radius: 15 + Math.min(size / 5, 10), // Grows slightly with more markers
            fill: new ol.style.Fill({ color: 'rgba(0, 116, 217, 0.8)' }),
            stroke: new ol.style.Stroke({ color: '#ffffff', width: 3 })
          }),
          text: new ol.style.Text({
            text: size.toString(),
            fill: new ol.style.Fill({ color: '#fff' }),
            font: 'bold 14px sans-serif'
          })
        });
      } else {
        // Individual marker style
        return new ol.style.Style({
          image: new ol.style.Circle({
            radius: 10,
          fill: new ol.style.Fill({ color: '#001f3f' }),
          stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 })
          })
        });
      }
    };

    const vectorLayer = new ol.layer.Vector({
      source: clusterSource,
      style: styleFunction
    });

    const openLayersMap = new ol.Map({
      target: 'openlayers-map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        vectorLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([19.9450, 50.0647]),
        zoom: 4,        // start closer so cities are visible
        maxZoom: 18     // allow zoom in to city level
      })
    });

    // Try to fit all points nicely; fall back gracefully if it fails
    if (features.length > 0) {
      try {
        const extent = vectorSource.getExtent();
        openLayersMap.getView().fit(extent, { padding: [40, 40, 40, 40], maxZoom: 8 });
      } catch (e) {
        const firstGeom = features[0].getGeometry();
        const coord = firstGeom.getCoordinates();
        console.warn('[ExperimentalMaps] OpenLayers fit failed, centering on first feature', e);
        openLayersMap.getView().setCenter(coord);
      }
    }

    // Make sure map is aware of its container size
    setTimeout(function() {
      openLayersMap.updateSize();
    }, 100);

    // Simple overlay popup
    const popupContainer = document.createElement('div');
    popupContainer.className = 'ol-popup';
    popupContainer.style.background = '#fff';
    popupContainer.style.borderRadius = '12px';
    popupContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    popupContainer.style.padding = '10px';
    popupContainer.style.minWidth = '260px';
    popupContainer.style.maxWidth = '280px';

    popupOverlay = new ol.Overlay({
      element: popupContainer,
      autoPan: true,
      autoPanAnimation: { duration: 250 }
    });

    openLayersMap.addOverlay(popupOverlay);

    openLayersMap.on('singleclick', function(evt) {
      const feature = openLayersMap.forEachFeatureAtPixel(
        evt.pixel,
        function(f) { return f; }
      );
      if (!feature) {
        popupOverlay.setPosition(undefined);
        return;
      }
      
      // Check if this is a cluster
      const features = feature.get('features');
      if (features && features.length > 1) {
        // This is a cluster - zoom in to break it apart
        const view = openLayersMap.getView();
        const currentZoom = view.getZoom();
        view.animate({
          center: evt.coordinate,
          zoom: currentZoom + 2,
          duration: 500
        });
        popupOverlay.setPosition(undefined);
        return;
      }
      
      // Single marker - show popup
      const actualFeature = features && features.length === 1 ? features[0] : feature;
      const props = actualFeature.get('properties') || {};
      popupContainer.innerHTML = buildPopupHTML(props);
      popupOverlay.setPosition(evt.coordinate);
      
      // Wire up X button using event delegation (avoids Instagram embed.js conflicts)
      const closeBtn = popupContainer.querySelector('.exp-popup-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          popupOverlay.setPosition(undefined);
        });
      }
    });
  }

  // Unified close function for OpenLayers (ESC key)
  window.closeExpPopup = function() {
    if (popupOverlay) {
      popupOverlay.setPosition(undefined);
    }
  };

  // ESC key handler for experimental maps
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      window.closeExpPopup();
    }
  });
}

// Run immediately if DOM is already ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperimentalMaps);
} else {
  initExperimentalMaps();
}
</script>

<!-- Commented out: Original Interactive Travel Map (Leaflet) -->
<!-- <div class="interactive-travel-map" style="margin: 2rem 0;">
  <div id="travel-map" style="height: 500px; border-radius: 10px; border: 2px solid #ddd; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></div>
  
  <div class="travel-stats" style="display: flex; justify-content: center; gap: 2rem; margin-top: 1.5rem; text-align: center;">
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #001f3f;">
      <strong id="countries-visited" style="font-size: 2.2em; color: #001f3f;">0</strong>
      <div style="color: #666; font-size: 1.1em;">Countries Visited</div>
    </div>
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #28a745;">
      <strong id="cities-explored" style="font-size: 2.2em; color: #28a745;">0</strong>
      <div style="color: #666; font-size: 1.1em;">Cities Explored</div>
    </div>
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #dc3545;">
      <strong id="travel-posts" style="font-size: 2.2em; color: #dc3545;">0</strong>
      <div style="color: #666; font-size: 1.1em;">Travel Posts</div>
    </div>
  </div>
</div>
<!-- Leaflet CSS and JS --> -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- Leaflet MarkerCluster for grouped markers with numbers -->
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css" />
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css" />
<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>


<!-- Load travel posts data from external file -->
<script src="{{ '/assets/js/travel-posts-data.js' | relative_url }}"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Travel data is now loaded from external file: assets/js/travel-posts-data.js
  // Wait for the data to be available before initializing map
  if (!window.myTravelPosts || !Array.isArray(window.myTravelPosts)) {
    console.log('Waiting for travel data to load...');
    setTimeout(arguments.callee, 100);
    return;
  }
  
  console.log('Travel data loaded with', window.myTravelPosts.length, 'posts. Initializing map with clustering...');

  const travelMapEl = document.getElementById('travel-map');
  if (!travelMapEl) {
    console.log('Leaflet map #travel-map not in DOM; skipping Leaflet init.');
    const dataReadyEvent = new CustomEvent('travelDataReady', {
      detail: { posts: window.myTravelPosts }
    });
    window.dispatchEvent(dataReadyEvent);
    return;
  }

  const dataReadyEvent = new CustomEvent('travelDataReady', { 
    detail: { posts: window.myTravelPosts } 
  });
  window.dispatchEvent(dataReadyEvent);

  // Initialize the main interactive map (lightweight & scroll-friendly)
  const travelMap = L.map(travelMapEl, {
    center: [50.0647, 19.9450], // Centered on Krakow
    zoom: 4,
    maxZoom: 18,                // allow zooming in to city level
    scrollWheelZoom: false,     // disable wheel zoom by default for better page scrolling
    zoomControl: true
  });

  // Add tile layer with fallback
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(travelMap);

  // Enable scroll zoom only when hovering the map container (better UX on long pages)
  const travelMapContainer = document.getElementById('travel-map');
  if (travelMapContainer) {
    travelMapContainer.addEventListener('mouseenter', function() {
      travelMap.scrollWheelZoom.enable();
    });
    travelMapContainer.addEventListener('mouseleave', function() {
      travelMap.scrollWheelZoom.disable();
    });
  }

  // Custom marker icon (slightly larger for easier clicking)
  const travelIcon = L.divIcon({
    html: `<div style="
      background: linear-gradient(135deg, #001f3f, #0074D9);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 3px 10px rgba(0,0,0,0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    ">📍</div>`,
    className: 'travel-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  // Check if markerClusterGroup is available
  if (!L.markerClusterGroup) {
    console.error('Leaflet.markercluster plugin not loaded!');
    alert('Marker clustering plugin failed to load. Showing individual markers instead.');
  }
  
  // Create marker cluster group - markers will group together with numbers
  const markers = L.markerClusterGroup({
    maxClusterRadius: 80,        // Distance in pixels to group markers
    spiderfyOnMaxZoom: true,    // Break apart clusters at max zoom
    showCoverageOnHover: false,  // Don't show cluster area on hover
    zoomToBoundsOnClick: true,   // Zoom in when clicking cluster
    disableClusteringAtZoom: 15, // Show individual markers when zoomed in close
    iconCreateFunction: function(cluster) {
      const childCount = cluster.getChildCount();
      let c = ' marker-cluster-';
      if (childCount < 10) {
        c += 'small';
      } else if (childCount < 50) {
        c += 'medium';
      } else {
        c += 'large';
      }
      return new L.DivIcon({
        html: '<div><span>' + childCount + '</span></div>',
        className: 'marker-cluster' + c,
        iconSize: new L.Point(40, 40)
      });
    }
  });

  // Add markers for each travel post (full Instagram embed in popup)
  myTravelPosts.forEach(post => {
    const safeTitle = (post.title || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeCity = (post.city || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeCountry = (post.country || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeDate = (post.date || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const instagramId = post.instagramPostId || '';
    const instagramUrl = post.instagramUrl || (instagramId ? ('https://www.instagram.com/p/' + instagramId + '/') : '#');

    const popupContent = `
      <div style="position: relative; width: 320px; max-height: 480px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; overflow-y: auto; padding-top: 4px;">
        <button
          type="button"
          class="popup-close-btn"
          aria-label="Close"
          style="position: absolute; top: 4px; right: 4px; border: none; background: rgba(0,0,0,0.5); color: #fff; border-radius: 999px; width: 22px; height: 22px; font-size: 14px; cursor: pointer; z-index: 10;">
          ×
        </button>
        <div style="margin-bottom: 8px; padding-right: 26px;">
          <div style="font-weight: 600; font-size: 0.9rem; color: #001f3f; margin-bottom: 4px;">${safeTitle}</div>
          <div style="font-size: 0.8rem; color: #555; margin-bottom: 2px;">${safeCity}${safeCity && safeCountry ? ', ' : ''}${safeCountry}</div>
          <div style="font-size: 0.75rem; color: #888;">${safeDate}</div>
        </div>
        ${instagramId ? `
        <div style="border-radius: 10px; overflow: hidden; margin-bottom: 8px;">
          <iframe
            src="https://www.instagram.com/p/${instagramId}/embed/captioned/?cr=1&v=14&wp=320"
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
            loading="lazy"
            style="border: none; overflow: hidden;">
          </iframe>
        </div>
        ` : ''}
        <div style="margin-top: 4px; text-align: center;">
          <a 
            href="${instagramUrl}" 
            target="_blank"
            style="display: inline-block; padding: 6px 12px; border-radius: 999px; background: #001f3f; color: #fff; font-size: 0.8rem; font-weight: 500; text-decoration: none;">
            View full Instagram post
          </a>
  </div>
</div>
    `;

    const marker = L.marker([post.lat, post.lng], { icon: travelIcon })
      .bindPopup(popupContent, {
        maxWidth: 320,
        minWidth: 320,
        maxHeight: 480,
        className: 'travel-popup',
        closeButton: true,
        autoPan: true,
        keepInView: true
      });

    // Wire up custom close button inside popup and ESC key handling
    marker.on('popupopen', function(e) {
      const popupEl = e.popup.getElement();
      if (!popupEl) return;

      const closeBtn = popupEl.querySelector('.popup-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function() {
          travelMap.closePopup();
        });
      }
    });
    
    // Add marker to cluster group instead of directly to map
    markers.addLayer(marker);
  });

  // Add all clustered markers to the map at once
  console.log('Adding', markers.getLayers().length, 'markers to cluster group');
  travelMap.addLayer(markers);
  console.log('Marker cluster group added to map. Clusters should now be visible!');

  // Calculate and display statistics
  const uniqueCountries = [...new Set(myTravelPosts.map(post => post.country))];
  const uniqueCities = [...new Set(myTravelPosts.map(post => post.city))];

  const countriesVisitedEl = document.getElementById('countries-visited');
  const citiesExploredEl = document.getElementById('cities-explored');
  const travelPostsEl = document.getElementById('travel-posts');
  if (countriesVisitedEl) countriesVisitedEl.textContent = String(uniqueCountries.length);
  if (citiesExploredEl) citiesExploredEl.textContent = String(uniqueCities.length);
  if (travelPostsEl) travelPostsEl.textContent = String(myTravelPosts.length);

  // Fit map to show all markers with padding
  if (myTravelPosts.length > 0) {
    const group = new L.featureGroup(
      myTravelPosts.map(post => L.marker([post.lat, post.lng]))
    );
    travelMap.fitBounds(group.getBounds().pad(0.1));
  }

  // ESC key handler for Leaflet map
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      if (travelMap) {
        travelMap.closePopup();
      }
    }
  });
});
</script>



<script>
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    if (typeof window.myTravelPosts === 'undefined') {
      console.error('myTravelPosts not found');
      return;
    }

    const posts = window.myTravelPosts;
    
    function getCountryFlag(country) {
      const flags = {
        'Vietnam': '🇻🇳', 'Greece': '🇬🇷', 'Poland': '🇵🇱', 'France': '🇫🇷',
        'Italy': '🇮🇹', 'Spain': '🇪🇸', 'Germany': '🇩🇪', 'Thailand': '🇹🇭',
        'Japan': '🇯🇵', 'USA': '🇺🇸', 'UK': '🇬🇧', 'Netherlands': '🇳🇱',
        'Portugal': '🇵🇹', 'Czech Republic': '🇨🇿', 'Austria': '🇦🇹',
        'Switzerland': '🇨🇭', 'Norway': '🇳🇴', 'Estonia': '🇪🇪', 'Lithuania': '🇱🇹',
        'Egypt': '🇪🇬', 'Costa Rica': '🇨🇷', 'Panama': '🇵🇦', 'Colombia': '🇨🇴',
        'Mexico': '🇲🇽', 'San Marino': '🇸🇲', 'Singapore': '🇸🇬', 'Nepal': '🇳🇵',
        'Morocco': '🇲🇦', 'Kenya': '🇰🇪', 'North Macedonia': '🇲🇰', 'Slovakia': '🇸🇰'
      };
      return flags[country] || '🌍';
    }
    
    // Calculate comprehensive statistics
    const uniqueCountries = [...new Set(posts.map(post => post.country))];
    const uniqueCities = [...new Set(posts.map(post => post.city))];
    
    // Parse dates properly - handle both "2025-05" and "2025" formats
    function parsePostDate(dateStr) {
      if (dateStr.includes('-')) {
        const [year, month] = dateStr.split('-');
        return { year: parseInt(year), month: parseInt(month) };
      } else {
        return { year: parseInt(dateStr), month: null };
      }
    }
    
    // Group by year
    const yearlyData = {};
    const monthlyData = {};
    
    posts.forEach(post => {
      const parsed = parsePostDate(post.date);
      const year = parsed.year;
      
      // Yearly grouping
      if (!yearlyData[year]) {
        yearlyData[year] = { countries: new Set(), posts: 0 };
      }
      yearlyData[year].countries.add(post.country);
      yearlyData[year].posts++;
      
      // Monthly grouping (if month is specified)
      if (parsed.month) {
        const monthKey = `${year}-${parsed.month.toString().padStart(2, '0')}`;
        if (!monthlyData[monthKey]) {
          monthlyData[monthKey] = { countries: new Set(), posts: 0 };
        }
        monthlyData[monthKey].countries.add(post.country);
        monthlyData[monthKey].posts++;
      }
    });
    
    const years = Object.keys(yearlyData).sort();
    const mostActiveYear = years.reduce((max, year) => 
      yearlyData[year].posts > (yearlyData[max]?.posts || 0) ? year : max, years[0]
    );
    
    // Country frequency
    const countryFreq = {};
    posts.forEach(post => {
      countryFreq[post.country] = (countryFreq[post.country] || 0) + 1;
    });
    
    const mostVisited = Object.entries(countryFreq)
      .sort(([,a], [,b]) => b - a)[0] || ['Unknown', 0];
    
    // Travel span and better statistics
    const firstYear = Math.min(...years.map(y => parseInt(y)));
    const lastYear = Math.max(...years.map(y => parseInt(y)));
    const travelSpan = lastYear - firstYear + 1;
    
    // More accurate posts per month calculation
    const monthsWithPosts = Object.keys(monthlyData).length;
    const postsPerMonth = monthsWithPosts > 0 ? 
      (posts.length / monthsWithPosts).toFixed(1) : 
      (posts.length / (travelSpan * 12)).toFixed(1);
    
    // Peak travel month (if we have monthly data)
    let peakMonth = null;
    if (Object.keys(monthlyData).length > 0) {
      peakMonth = Object.entries(monthlyData)
        .sort(([,a], [,b]) => b.posts - a.posts)[0];
    }
    
    // Generate better insights with additional statistics
    const totalContinents = new Set();
    const continentMap = {
      'Europe': ['Greece', 'Poland', 'France', 'Italy', 'Spain', 'Germany', 'Netherlands', 'UK', 'Portugal', 'Czech Republic', 'Austria', 'Switzerland', 'Norway', 'Estonia', 'Lithuania', 'San Marino', 'North Macedonia', 'Slovakia'],
      'Asia': ['Vietnam', 'Thailand', 'Japan', 'Singapore', 'Nepal'],
      'Americas': ['USA', 'Costa Rica', 'Panama', 'Colombia', 'Mexico'],
      'Africa': ['Egypt', 'Morocco', 'Kenya']
    };
    
    uniqueCountries.forEach(country => {
      for (let continent in continentMap) {
        if (continentMap[continent].includes(country)) {
          totalContinents.add(continent);
          break;
        }
      }
    });

    // Calculate travel intensity (posts per active month)
    const activeMonths = Object.keys(monthlyData).length;
    const travelIntensity = activeMonths > 0 ? (posts.length / activeMonths).toFixed(1) : '0';
    
    // Generate insights HTML with better styling and new statistics
    const insightsHTML = `
      <div class="insights-grid">
        <div class="insight-card">
          <div class="insight-value">${travelSpan} ${travelSpan === 1 ? 'Year' : 'Years'}</div>
          <div class="insight-label">Travel Span</div>
          <div class="insight-sublabel">${firstYear} – ${lastYear}</div>
        </div>
        <div class="insight-card">
          <div class="insight-value">${mostActiveYear}</div>
          <div class="insight-label">Most Active</div>
          <div class="insight-sublabel">${yearlyData[mostActiveYear].posts} posts</div>
        </div>
        <div class="insight-card">
          <div class="insight-value">${getCountryFlag(mostVisited[0])}</div>
          <div class="insight-label">Top Destination</div>
          <div class="insight-sublabel">${mostVisited[0]} (${mostVisited[1]})</div>
        </div>
        ${peakMonth ? `
        <div class="insight-card">
          <div class="insight-value">${peakMonth[0].split('-')[1]}/${peakMonth[0].split('-')[0]}</div>
          <div class="insight-label">Peak Month</div>
          <div class="insight-sublabel">${peakMonth[1].posts} posts</div>
        </div>
        ` : `
        <div class="insight-card">
          <div class="insight-value">${travelIntensity}</div>
          <div class="insight-label">Travel Intensity</div>
          <div class="insight-sublabel">Posts/Month</div>
        </div>
        `}
        <div class="insight-card">
          <div class="insight-value">${totalContinents.size}</div>
          <div class="insight-label">Continents</div>
          <div class="insight-sublabel">Explored</div>
        </div>
        <div class="insight-card">
          <div class="insight-value">${(uniqueCountries.length / years.length).toFixed(1)}</div>
          <div class="insight-label">Countries per Year</div>
          <div class="insight-sublabel">Average Rate</div>
        </div>
      </div>
    `;
    
    // Generate countries section
    const countriesHTML = `
      <div class="countries-section">
        <div class="countries-header">📍 Countries Explored</div>
        <div class="countries-grid">
          ${Object.entries(countryFreq)
            .sort(([,a], [,b]) => b - a)
            .map(([country, count]) => `
              <div class="country-item" title="${country}: ${count} posts">
                <span class="country-flag">${getCountryFlag(country)}</span>
                <span>${country}</span>
                <span class="country-posts">${count}</span>
              </div>
            `).join('')}
        </div>
      </div>
    `;
    
    // Generate elegant, concise timeline visualization
    const timelineHTML = `
      <div class="timeline-viz-elegant">
        <div class="timeline-header-elegant">
          <span class="timeline-icon">🗓️</span>
          <h3 class="timeline-title">Year by Year Journey</h3>
        </div>
        <div class="timeline-container">
          ${years.map((year, index) => {
            const yearData = yearlyData[year];
            const countries = Array.from(yearData.countries).sort();
            const countryCount = countries.length;
            const postCount = yearData.posts;
            
            return `
              <div class="timeline-year-card" style="--dg-stagger: ${index * 0.15}s">
                <div class="year-marker">
                  <div class="year-number">${year}</div>
                  <div class="year-line"></div>
                </div>
                <div class="year-content">
                  <div class="year-stats-compact">
                    <span class="stat-badge countries-badge">${countryCount} ${countryCount === 1 ? 'country' : 'countries'}</span>
                    <span class="stat-badge posts-badge">${postCount} ${postCount === 1 ? 'post' : 'posts'}</span>
                  </div>
                  <div class="countries-flow">
                    ${countries.map(country => `
                      <span class="country-chip" title="${country}">
                        ${getCountryFlag(country)} ${country}
                      </span>
                    `).join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
    
    // Update DOM - Remove countries section
    document.getElementById('travel-insights').innerHTML = insightsHTML;
    document.getElementById('travel-timeline-viz').innerHTML = timelineHTML;
    
  }, 100);
});
</script>

## Recent Adventures & Tour Guides {#recent-adventures}

<div class="recent-travels">
  <div class="travel-card" id="krakow-guide">
    <div class="travel-image">
      <img src="/assets/images/travel/vietnam-2025.png" alt="Northen Vietnam">
    </div>
    <div class="travel-content">
      <br>
      <h3 id="easter-vietnam">Easter in Vietnam</h3>
      <p>In April 2025, I volunteered with the Greek NGO Wheeling2Help in the community of Da Bia village</p>
      <div class="dg-travel-card-actions">
        <a href="https://docs.google.com/presentation/d/14IV8N7H1TE7uuJi1_hkzmBSuPvgtpl5Ga_izE_hoCZ4/edit?slide=id.g35dda03171d_0_0#slide=id.g35dda03171d_0_0" class="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">View #MyQuestVietnam </a>
      </div>
    </div>
  </div>

  <div class="travel-card" id="krakow-guide">
    <div class="travel-image">
      <img src="/assets/images/travel/krakow-guide2.png" alt="City Travels">
    </div>
    <div class="travel-content">
      <br>
      <h3 id="living-krakow">Living in Krakow</h3>
      <p>My experience living in the beautiful city of Krakow, Poland, exploring its rich history, stunning architecture, and vibrant culture</p>
      <div class="dg-travel-card-actions">
        <a href="https://docs.google.com/document/d/1kK6SqDRhKBvHyOYG5KcFabgdDate7vDF46-kQatG8io/edit?tab=t.0#heading=h.ukpp0t44nwxx" class="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">
          View guide 2025
        </a>
        <a href="https://docs.google.com/spreadsheets/d/1dYDaIxDiz94BPewq0vuozeq66F9CO_0WskmQvpzfASA/edit?usp=drive_web&ouid=103203469061251460255" class="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">
          View guide 2026
        </a>
      </div>
    </div>
  </div>

</div>

</div>



