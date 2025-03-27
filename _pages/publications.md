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
  <img src="../assets/publications/2024_multi_source_stocks.png" alt="Stock Selection Framework Image">
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
  <img src="../assets/publications/2024_biotech_covid.png" alt="Stock Selection Framework Image">
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
  <h3>Complaints Classification : Sentinment Analytics, Machine Learning to assess if customer queries should have been logged as complaint</h3>
  <p class="publication-authors">Dimitrios Georgiou</p>
  <p class="publication-venue"><em>University of Economics in Krakow (UEK)</em>, January 2025</p>
  <p class="publication-abstract">

  🗣️ 𝐖𝐡𝐚𝐭 𝐈 𝐒𝐡𝐚𝐫𝐞𝐝
  • I introduced the students to a practical business case: using 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 (𝐌𝐋) for 𝐂𝐨𝐦𝐩𝐥𝐚𝐢𝐧𝐭𝐬 𝐂𝐥𝐚𝐬𝐬𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧. This project highlights how ML can drive actionable outcomes in customer experience by identifying sentiment and repeat complaints, enabling smarter decision-making in business operations.
  • 📌 I emphasized how hashtag#MachineLearning isn’t just about models or algorithms; it’s about solving real problems—whether it’s automating processes or delivering insights that make businesses more efficient.

  💡 𝐂𝐚𝐫𝐞𝐞𝐫 𝐓𝐢𝐩𝐬 𝐟𝐨𝐫 𝐒𝐭𝐮𝐝𝐞𝐧𝐭𝐬
  One of the most rewarding parts of the session was offering advice on career building:
  • Stay curious and be ready to ask “why” and “how” questions. The habit of critical thinking is priceless. 🔍
  • Invest in practical skills: Tools like Python, data visualization, and cloud platforms can make you industry-ready.
  • Keep your network strong: Opportunities often come from connections. 🌐
    
  </p>
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