---
title: "Personal Development"
layout: single
permalink: /personal/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/personal-header.jpg
  actions:
    - label: "View CV"
      url: /assets/pdf/cv.pdf
excerpt: "Continuous learning, books, courses, and media I recommend"
---

This section is dedicated to my personal growth journey. Here you'll find book reviews, course summaries, and media recommendations that have influenced my thinking and development.

## Seminars & Workshops

### Experimental Design Workshop

**Universitätsklinikum Bonn**  
*Issued: Dec 2024*

This intensive 18-hour workshop provided hands-on experience with experimental design:
- Setting up experiments with 𝘗𝘴𝘺𝘤𝘩𝘰𝘗𝘺, a powerful tool for behavioral research
- Field Validations using 𝘗𝘺𝘥𝘢𝘯𝘵𝘪𝘤 for data integrity
- Implementing 𝘔𝘰𝘤𝘬𝘴 and 𝘗𝘢𝘵𝘤𝘩𝘦𝘴 to simulate dependencies during testing
- Automated Testing with 𝘗𝘺𝘵𝘦𝘴𝘵 to ensure robust and reliable experiments

**Skills:** PsychoPy · Pydantic · pytest · Mocks · Git · GitHub · Patches · Design of Experiments (DOE)

### ANDA-NI Neuroinformatics Workshop

**Universitätsklinikum Bonn**  
*Issued: Sep 2024*

Workshop Content:
- Data Representations for Neuroscience Data and Metadata: JSON, YAML, HDF5, NIX and Neo
- Version Control and Data Management with Git, Git-Annex, and DataLad
- Data Sharing Platforms with GitHub and Gin-G-Node

**Skills:** Neo · Gin-G-Node · JSON · Git · Data Representation · Neuroscience · GitHub · NIX · YAML · HDF5 · DataLad · Git-Annex

## Online Courses

### HelloAI Advanced RIS Scholarship

**EIT Health**  
*Issued: Jan 2025*  
*Credential ID: vpnbd7fxja*

**Skills:** Bioinformatics · Prompt Engineering · Machine Learning · Healthcare

### Generative AI for Healthcare

**Google**  
*Issued: Feb 2025*  
*Credential ID: 14142481*

**Skills:** Deep Learning, Generative AI, Prompt Engineering, Large Language Models (LLM), Machine Learning

## Reading List {#reading-list}

<div class="books-section">
  <h3 id="currently-reading">Currently Reading</h3>
  <div class="current-books">
    <div class="book-card">
      <img src="../assets/images/books/power-of-now.jpg" alt="The Power of Now">
      <div class="book-details">
        <h4>The Power of Now</h4>
        <p class="book-author">by Eckhart Tolle</p>
        <p class="book-progress">Progress: 60%</p>
        <p>A guide to spiritual enlightenment that emphasizes living in the present moment and transcending thoughts of the past or future.</p>
      </div>
    </div>
    
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

  <h3 id="recently-completed">Recently Completed</h3>
  <div class="completed-books">
    <div class="book-card">
      <img src="../assets/images/books/why-buddhism-is-true.jpg" alt="Why Buddhism is True">
      <div class="book-details">
        <h4>Why Buddhism is True</h4>
        <p class="book-author">by Robert Wright</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐⭐</p>
        <p>An exploration of Buddhism's core psychological insights through the lens of evolutionary psychology and neuroscience.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/how-to-be-stoic.jpg" alt="How to Be Stoic">
      <div class="book-details">
        <h4>How to Be Stoic</h4>
        <p class="book-author">by Massimo Pigliucci</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐</p>
        <p>A practical guide to applying stoic philosophy to modern life, focusing on virtue, resilience, and inner peace.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/a-man-called-otto.jpg" alt="A Man Called Otto">
      <div class="book-details">
        <h4>A Man Called Otto</h4>
        <p class="book-author">by Fredrik Backman</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐⭐</p>
        <p>A heartwarming novel about a grumpy yet lovable man who finds his structured life disrupted by new neighbors.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/midnight-library.jpg" alt="The Midnight Library">
      <div class="book-details">
        <h4>The Midnight Library</h4>
        <p class="book-author">by Matt Haig</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐</p>
        <p>A novel about a library between life and death where each book represents a different version of what your life could have been.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/painful-truth.jpeg" alt="The Painful Truth">
      <div class="book-details">
        <h4>The Painful Truth</h4>
        <p class="book-author">by Monty Lyman</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐</p>
        <p>An exploration of pain from scientific, psychological, and philosophical perspectives.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/tender-is-the-night.jpg" alt="Tender is the Night">
      <div class="book-details">
        <h4>Tender is the Night</h4>
        <p class="book-author">by F. Scott Fitzgerald</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐</p>
        <p>A psychological novel about the rise and fall of a promising young psychiatrist and his wife.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/subtle-art.jpg" alt="The Subtle Art of Not Giving a F*ck">
      <div class="book-details">
        <h4>The Subtle Art of Not Giving a F*ck</h4>
        <p class="book-author">by Mark Manson</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐</p>
        <p>A counterintuitive approach to living a good life by focusing on what truly matters and letting go of the rest.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/vasishoupanwmou.jpg" alt="Βασίσου Πάνω Μου">
      <div class="book-details">
        <h4>Βασίσου Πάνω Μου</h4>
        <p class="book-author">by Bucay Jorge</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐</p>
        <p>A Greek novel exploring themes of trust, relationships, and personal growth.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/lost-symbol.jpg" alt="The Lost Symbol">
      <div class="book-details">
        <h4>The Lost Symbol</h4>
        <p class="book-author">by Dan Brown</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐</p>
        <p>A thriller following Robert Langdon as he decodes ancient symbols in Washington, D.C. to save his mentor.</p>
      </div>
    </div>
    
    <div class="book-card">
      <img src="../assets/images/books/sapiens.jpg" alt="Sapiens">
      <div class="book-details">
        <h4>Sapiens</h4>
        <p class="book-author">by Yuval Noah Harari</p>
        <p class="book-rating">Rating: ⭐⭐⭐⭐⭐</p>
        <p>A brief history of humankind, exploring how Homo sapiens evolved and came to dominate the planet.</p>
      </div>
    </div>
    
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

## Media Recommendations {#media-recommendations}

<div class="media-section">
  <div class="media-category" id="podcasts">
    <h3>Podcasts</h3>
    <div class="media-grid">
      {% for media in site.personal %}
        {% if media.type == "podcast" %}
          <div class="media-item">
            <img src="{{ media.cover }}" alt="{{ media.title }}">
            <div class="media-details">
              <h4>{{ media.title }}</h4>
              <p>{{ media.excerpt | truncate: 100 }}</p>
              {% if media.link %}
                <a href="{{ media.link }}" class="btn btn--primary btn--small" target="_blank">Listen</a>
              {% endif %}
            </div>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  
  <div class="media-category" id="movies-series">
    <h3>Movies & Series</h3>
    <div class="media-grid">
      {% for media in site.personal %}
        {% if media.type == "movie" or media.type == "series" %}
          <div class="media-item">
            <img src="{{ media.cover }}" alt="{{ media.title }}">
            <div class="media-details">
              <h4>{{ media.title }}</h4>
              <p class="media-rating">Rating: 
                {% for i in (1..5) %}
                  {% if i <= media.rating %}⭐{% else %}☆{% endif %}
                {% endfor %}
              </p>
              <p>{{ media.excerpt | truncate: 80 }}</p>
            </div>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>

## Learning Statistics {#learning-statistics}

<div class="stats-section">
  <div class="stat-item" id="books-read">
    <h3>Books Read</h3>
    <div class="stat-number">25+</div>
    <p>Since 2020</p>
  </div>
  
  <div class="stat-item" id="courses-completed">
    <h3>Courses Completed</h3>
    <div class="stat-number">15+</div>
    <p>Since 2020</p>
  </div>
  
  <div class="stat-item" id="learning-hours">
    <h3>Total Learning Hours</h3>
    <div class="stat-number">500+</div>
    <p>Invested in self-improvement</p>
  </div>
</div> 