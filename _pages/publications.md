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

<div class="publication-item">
  <h3>A Generalization of Multi-Source Fusion-Based Framework to Stock Selection</h3>
  <p class="publication-authors">V Snášel, JD Velásquez, M Pant, D Georgiou, L Kong</p>
  <p class="publication-venue"><em>Information Fusion</em>, 2024</p>
  <p class="publication-abstract">A novel framework for multi-source fusion-based stock selection, leveraging advanced machine learning techniques for financial decision-making.</p>
  <div class="publication-links">
    <a href="https://www.sciencedirect.com/science/article/pii/S1566253523003342" class="btn btn--primary btn--small" target="_blank">Link</a>
  </div>
</div>
<hr>

<div class="publication-item">
  <h3>A Machine Learning-Based Web Tool for the Severity Prediction of COVID-19</h3>
  <p class="publication-authors">A Christodoulou, MS Katsarou, C Emmanouil, M Gavrielatos, D Georgiou, et al.</p>
  <p class="publication-venue"><em>BioTech</em>, 2024</p>
  <p class="publication-abstract">Development of a web-based machine learning tool designed to predict the severity of COVID-19 using advanced predictive models.</p>
  <div class="publication-links">
    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=whiGlXQAAAAJ&citation_for_view=whiGlXQAAAAJ:d1gkVwhDpl0C" class="btn btn--primary btn--small" target="_blank">Link</a>
  </div>
</div>
<hr>

<div class="publication-item">
  <h3>fMRI-Based Classification and Visual Explanation of Dyslexia and Spelling Disorder using Machine & Deep Learning</h3>
  <p class="publication-authors">D Georgiou</p>
  <p class="publication-venue"><em>National Technical University of Athens</em>, 2022</p>
  <p class="publication-abstract">A research study applying machine and deep learning techniques to classify and provide visual explanations for dyslexia and spelling disorders using fMRI data.</p>
  <div class="publication-links">
    <a href="http://artemis.cslab.ece.ntua.gr:8080/jspui/handle/123456789/18593" class="btn btn--primary btn--small" target="_blank">Repository Link</a>
  </div>
</div>
<hr>

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