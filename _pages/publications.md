---
title: Publications
layout: single
permalink: /publications/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/publications-header.jpg
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

<div class="publication-item">
  <h3>A Novel Deep Learning Approach for Emotion Recognition Based on EEG Signals</h3>
  <p class="publication-authors">Dimitrios Georgiou, Panagiotis Papapetrou, George Potamias</p>
  <p class="publication-venue"><em>IEEE Access</em>, 2021</p>
  <p class="publication-abstract">This paper presents a novel deep learning approach for emotion recognition based on EEG signals. We propose a framework that combines convolutional neural networks with recurrent neural networks to capture both spatial and temporal features from EEG data.</p>
  <div class="publication-links">
    <a href="https://scholar.google.com/citations?user=whiGlXQAAAAJ&hl=en" class="btn btn--primary btn--small" target="_blank">Google Scholar</a>
  </div>
</div>

## Academic Presentations

<div class="publication-item">
  <h3>Neural Data Analysis and Experimental Design: Insights from Cognitive Neuroscience</h3>
  <p class="publication-authors">Dimitrios Georgiou</p>
  <p class="publication-venue"><em>University of Economics in Krakow (UEK)</em>, July 2024</p>
  <p class="publication-abstract">Presented advanced techniques for neural data analysis and experimental design in cognitive neuroscience. The presentation covered methodologies for processing EEG data, statistical approaches for analyzing neural signals, and best practices for designing experiments in neuroscience research.</p>
  <div class="publication-links">
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7288560720093310976/" class="btn btn--primary btn--small" target="_blank">LinkedIn Post</a>
  </div>
</div>

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