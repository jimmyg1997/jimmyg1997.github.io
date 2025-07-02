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
  overlay_image: /assets/images/publications-header.png
---

## Academic Publications

<div class="publication-item">
  <h3 id="multi-source-fusion-stock-selection">A Generalization of Multi-Source Fusion-Based Framework to Stock Selection</h3>
  <p class="publication-authors">V Snášel, JD Velásquez, M Pant, D Georgiou, L Kong</p>
  <p class="publication-venue"><em>Information Fusion</em>, 2024</p>
  <p class="publication-abstract">A novel framework for multi-source fusion-based stock selection, leveraging advanced machine learning techniques for financial decision-making.</p>
  <img src="../assets/images/publications/2024_information_fusion_multi_source_stocks.png" alt="Stock Selection Framework Image">
  <div class="publication-links">
    <a href="https://www.sciencedirect.com/science/article/pii/S1566253523003342" class="btn btn--primary btn--small" target="_blank">Link</a>
  </div>
</div>
<hr>

<div class="publication-item">
  <h3 id="covid-19-severity-prediction">A Machine Learning-Based Web Tool for the Severity Prediction of COVID-19</h3>
  <p class="publication-authors">A Christodoulou, MS Katsarou, C Emmanouil, M Gavrielatos, D Georgiou, et al.</p>
  <p class="publication-venue"><em>BioTech</em>, 2024</p>
  <p class="publication-abstract">Development of a web-based machine learning tool designed to predict the severity of COVID-19 using advanced predictive models.</p>
  <img src="../assets/images/publications/2024_biotech_covid.png" alt="COVID-19 ML tool">
  <div class="publication-links">
    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=whiGlXQAAAAJ&citation_for_view=whiGlXQAAAAJ:d1gkVwhDpl0C" class="btn btn--primary btn--small" target="_blank">Link</a>
  </div>
</div>
<hr>

<div class="publication-item">
  <h3 id="fmri-dyslexia-classification">fMRI-Based Classification and Visual Explanation of Dyslexia and Spelling Disorder using Machine & Deep Learning</h3>
  <p class="publication-authors">D Georgiou</p>
  <p class="publication-venue"><em>National Technical University of Athens</em>, 2022</p>
  <p class="publication-abstract">A research study applying machine and deep learning techniques to classify and provide visual explanations for dyslexia and spelling disorders using fMRI data.</p>
  <img src="../assets/images/publications/2022_thesis.png" alt="fFMRI Dyslexia">
  <div class="publication-links">
    <a href="http://artemis.cslab.ece.ntua.gr:8080/jspui/handle/123456789/18593" class="btn btn--primary btn--small" target="_blank">Repository Link</a>
  </div>
</div>
<hr>

## Academic Presentations

<div class="publication-item">
  <h3 id="complaints-classification-uek">Complaints Classification : Sentinment Analytics, Machine Learning to assess if customer queries should have been logged as complaint</h3>
  <p class="publication-authors">Dimitrios Georgiou</p>
  <p class="publication-venue"><em>University of Economics in Krakow (UEK)</em>, January 2025</p>
  <p class="publication-abstract">

  🗣️ I introduced students to using Machine Learning (ML) for Complaint Classification 📊, demonstrating how ML enhances customer experience by detecting sentiment and repeat complaints, leading to smarter business decisions. 🚀 I emphasized that ML isn't just about models but solving real problems. 💡 To build a strong career, I advised students to think critically 🔍, invest in practical skills like Python & cloud tools 🛠️, and strengthen their network for better opportunities. 🌐
    
  </p>
  <img src="../assets/images/publications/2025_uek.png" alt="UEK Complaints Classification">
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