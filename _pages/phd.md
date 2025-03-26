---
title: PhD & Healthcare Projects
layout: collection
permalink: /phd/
collection: phd
entries_layout: grid
classes: wide
author_profile: false
sort_by: date
sort_order: reverse
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/phd-header.jpg
excerpt: "Research and healthcare analytics focusing on medical applications"
---

<div class="research-intro">
  <p>This section highlights my PhD research and healthcare-related projects, focusing on the application of data science and AI to medical challenges.</p>
</div>

## Research Focus

<div class="research-focus">
  <h3>Primary Research Area</h3>
  <p>Brief description of your main PhD research area and its significance in the healthcare field.</p>
  
  <h3>Research Questions</h3>
  <ul>
    <li>How can machine learning improve [specific healthcare domain]?</li>
    <li>What novel approaches can address [specific clinical challenge]?</li>
    <li>How can we improve the interpretability of AI models in healthcare applications?</li>
  </ul>
</div>

## Ongoing Research

<div class="ongoing-research">
  {% for project in site.phd %}
    {% if project.status == "ongoing" %}
      <div class="research-card">
        <div class="research-content">
          <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
          <p class="research-collaborators">
            <strong>Collaborators:</strong> {{ project.collaborators }}
          </p>
          <p>{{ project.excerpt | truncate: 200 }}</p>
          <div class="research-links">
            <a href="{{ project.url }}" class="btn btn--primary btn--small">Project Details</a>
            {% if project.paper %}
              <a href="{{ project.paper }}" class="btn btn--primary btn--small" target="_blank">Related Paper</a>
            {% endif %}
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Completed Research

<div class="completed-research">
  {% for project in site.phd %}
    {% if project.status == "completed" %}
      <div class="research-card">
        <div class="research-content">
          <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
          <p class="research-collaborators">
            <strong>Collaborators:</strong> {{ project.collaborators }}
          </p>
          <p>{{ project.excerpt | truncate: 200 }}</p>
          <div class="research-links">
            <a href="{{ project.url }}" class="btn btn--primary btn--small">Project Details</a>
            {% if project.paper %}
              <a href="{{ project.paper }}" class="btn btn--primary btn--small" target="_blank">Related Paper</a>
            {% endif %}
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Healthcare Impact

<div class="impact-section">
  <h3>Potential Applications</h3>
  <p>Overview of how your research can potentially impact clinical practice, patient outcomes, or healthcare delivery.</p>
  
  <h3>Future Directions</h3>
  <p>Brief description of where you see your research evolving and future projects you're planning.</p>
</div> 