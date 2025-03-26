---
title: Data Science Projects
layout: collection
permalink: /datascience/
collection: datascience
entries_layout: grid
classes: wide
author_profile: false
sort_by: date
sort_order: reverse
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/datascience-header.jpg
excerpt: "Machine learning, AI, and data analysis projects"
---

<div class="project-intro">
  <p>This section showcases my data science projects, focusing on machine learning, artificial intelligence, and data analytics. Each project includes code, documentation, and results.</p>
</div>

## Project Categories

<div class="category-section">
  <div class="category-box">
    <h3>Machine Learning</h3>
    <p>Projects focusing on supervised and unsupervised learning algorithms, model evaluation, and optimization.</p>
  </div>
  
  <div class="category-box">
    <h3>Deep Learning</h3>
    <p>Neural network architectures, computer vision, natural language processing, and reinforcement learning.</p>
  </div>
  
  <div class="category-box">
    <h3>Data Analysis</h3>
    <p>Exploratory data analysis, statistical analysis, data visualization, and insights extraction.</p>
  </div>
  
  <div class="category-box">
    <h3>MLOps</h3>
    <p>Tools and processes for deploying machine learning models to production environments.</p>
  </div>
</div>

## Featured Projects

<div class="featured-projects">
  {% for project in site.datascience %}
    {% if project.featured %}
      <div class="project-card">
        <img src="{{ project.header.teaser }}" alt="{{ project.title }}">
        <div class="project-content">
          <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
          <p class="project-tags">
            {% for tag in project.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </p>
          <p>{{ project.excerpt | truncate: 150 }}</p>
          <a href="{{ project.url }}" class="btn btn--primary btn--small">View Project</a>
          {% if project.github %}
            <a href="{{ project.github }}" class="btn btn--primary btn--small" target="_blank">GitHub</a>
          {% endif %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

## All Projects

<div class="projects-grid">
  {% for project in site.datascience %}
    <div class="project-item">
      <div class="project-image">
        <img src="{{ project.header.teaser }}" alt="{{ project.title }}">
      </div>
      <div class="project-details">
        <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
        <p>{{ project.excerpt | truncate: 100 }}</p>
        <p class="project-tags">
          {% for tag in project.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </p>
        <a href="{{ project.url }}" class="btn btn--primary btn--small">Details</a>
      </div>
    </div>
  {% endfor %}
</div> 