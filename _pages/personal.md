---
title: Personal Development
layout: collection
permalink: /personal/
collection: personal
entries_layout: grid
classes: wide
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/personal-header.jpg
excerpt: "Continuous learning, books, courses, and media I recommend"
---

<div class="personal-intro">
  <p>This section is dedicated to my personal growth journey. Here you'll find book reviews, course summaries, and media recommendations that have influenced my thinking and development.</p>
</div>

## Reading List

<div class="books-section">
  <h3>Currently Reading</h3>
  <div class="current-books">
    {% for book in site.personal %}
      {% if book.type == "book" and book.status == "current" %}
        <div class="book-card">
          <img src="{{ book.cover }}" alt="{{ book.title }}">
          <div class="book-details">
            <h4>{{ book.title }}</h4>
            <p class="book-author">by {{ book.author }}</p>
            <p class="book-progress">Progress: {{ book.progress }}%</p>
            <p>{{ book.excerpt | truncate: 100 }}</p>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>

  <h3>Recently Completed</h3>
  <div class="completed-books">
    {% for book in site.personal %}
      {% if book.type == "book" and book.status == "completed" %}
        <div class="book-card">
          <img src="{{ book.cover }}" alt="{{ book.title }}">
          <div class="book-details">
            <h4><a href="{{ book.url }}">{{ book.title }}</a></h4>
            <p class="book-author">by {{ book.author }}</p>
            <p class="book-rating">Rating: 
              {% for i in (1..5) %}
                {% if i <= book.rating %}⭐{% else %}☆{% endif %}
              {% endfor %}
            </p>
            <p>{{ book.excerpt | truncate: 100 }}</p>
            <a href="{{ book.url }}" class="btn btn--primary btn--small">Read Review</a>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

## Online Courses

<div class="courses-section">
  {% for course in site.personal %}
    {% if course.type == "course" %}
      <div class="course-card">
        <div class="course-content">
          <h3>{{ course.title }}</h3>
          <p class="course-provider">{{ course.provider }}</p>
          <p class="course-date">Completed: {{ course.date | date: "%B %Y" }}</p>
          <p>{{ course.excerpt | truncate: 150 }}</p>
          {% if course.certificate %}
            <a href="{{ course.certificate }}" class="btn btn--primary btn--small" target="_blank">View Certificate</a>
          {% endif %}
          {% if course.notes %}
            <a href="{{ course.url }}" class="btn btn--primary btn--small">View Notes</a>
          {% endif %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Media Recommendations

<div class="media-section">
  <div class="media-category">
    <h3>Podcasts</h3>
    <div class="media-grid">
      {% for media in site.personal %}
        {% if media.type == "podcast" %}
          <div class="media-item">
            <img src="{{ media.cover }}" alt="{{ media.title }}">
            <h4>{{ media.title }}</h4>
            <p>{{ media.excerpt | truncate: 100 }}</p>
            {% if media.link %}
              <a href="{{ media.link }}" class="btn btn--primary btn--small" target="_blank">Listen</a>
            {% endif %}
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  
  <div class="media-category">
    <h3>Movies & Series</h3>
    <div class="media-grid">
      {% for media in site.personal %}
        {% if media.type == "movie" or media.type == "series" %}
          <div class="media-item">
            <img src="{{ media.cover }}" alt="{{ media.title }}">
            <h4>{{ media.title }}</h4>
            <p class="media-rating">Rating: 
              {% for i in (1..5) %}
                {% if i <= media.rating %}⭐{% else %}☆{% endif %}
              {% endfor %}
            </p>
            <p>{{ media.excerpt | truncate: 80 }}</p>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>

## Learning Statistics

<div class="stats-section">
  <div class="stat-item">
    <h3>Books Read</h3>
    <div class="stat-number">{{ site.personal | where: "type", "book" | where: "status", "completed" | size }}</div>
    <p>Since 2020</p>
  </div>
  
  <div class="stat-item">
    <h3>Courses Completed</h3>
    <div class="stat-number">{{ site.personal | where: "type", "course" | size }}</div>
    <p>Since 2020</p>
  </div>
  
  <div class="stat-item">
    <h3>Learning Hours</h3>
    <div class="stat-number">500+</div>
    <p>Invested in self-improvement</p>
  </div>
</div> 