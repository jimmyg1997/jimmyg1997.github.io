---
title: Publications
layout: single
permalink: /publications/
author_profile: true
toc: true
toc_sticky: true
---

## Academic Publications

{% for pub in site.publications %}
  {% if pub.type == "academic" %}
  <div class="publication-item">
    <h3><a href="{{ pub.url }}">{{ pub.title }}</a></h3>
    <p class="publication-authors">{{ pub.authors }}</p>
    <p class="publication-venue"><em>{{ pub.venue }}</em>, {{ pub.date | date: "%Y" }}</p>
    <p class="publication-abstract">{{ pub.excerpt }}</p>
    <div class="publication-links">
      {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" class="btn btn--primary btn--small" target="_blank">DOI</a>{% endif %}
      {% if pub.pdf %}<a href="{{ pub.pdf }}" class="btn btn--primary btn--small" target="_blank">PDF</a>{% endif %}
      {% if pub.code %}<a href="{{ pub.code }}" class="btn btn--primary btn--small" target="_blank">Code</a>{% endif %}
    </div>
  </div>
  <hr>
  {% endif %}
{% endfor %}

## Industry Publications & Articles

{% for pub in site.publications %}
  {% if pub.type == "industry" %}
  <div class="publication-item">
    <h3><a href="{{ pub.url }}">{{ pub.title }}</a></h3>
    <p class="publication-authors">{{ pub.authors }}</p>
    <p class="publication-venue"><em>{{ pub.venue }}</em>, {{ pub.date | date: "%Y" }}</p>
    <p class="publication-abstract">{{ pub.excerpt }}</p>
    <div class="publication-links">
      {% if pub.link %}<a href="{{ pub.link }}" class="btn btn--primary btn--small" target="_blank">Read Article</a>{% endif %}
    </div>
  </div>
  <hr>
  {% endif %}
{% endfor %}

## Conference Presentations

{% for pub in site.publications %}
  {% if pub.type == "conference" %}
  <div class="publication-item">
    <h3>{{ pub.title }}</h3>
    <p class="publication-authors">{{ pub.authors }}</p>
    <p class="publication-venue"><em>{{ pub.venue }}</em>, {{ pub.date | date: "%Y" }}</p>
    <p class="publication-abstract">{{ pub.excerpt }}</p>
    <div class="publication-links">
      {% if pub.slides %}<a href="{{ pub.slides }}" class="btn btn--primary btn--small" target="_blank">Slides</a>{% endif %}
      {% if pub.poster %}<a href="{{ pub.poster }}" class="btn btn--primary btn--small" target="_blank">Poster</a>{% endif %}
    </div>
  </div>
  <hr>
  {% endif %}
{% endfor %} 