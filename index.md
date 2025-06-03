---
layout: splash
permalink: /
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/header-bg.jpg
  # actions:
  #   - label: "Contact Me"
  #     url: "/contact/"
excerpt: "Data Scientist, Researcher, Calisthenics Athlete, Traveller"
intro: 
  - excerpt: "Welcome to my personal website. I'm passionate about data science, healthcare research, and personal development."

feature_row:
  - image_path: ../assets/images/overall/cv-thumb.png
    alt: "CV"
    title: "Curriculum Vitae"
    excerpt: "My professional background, education, and experience."
    url: "/cv/"
    btn_label: "View CV"
    btn_class: "btn--primary"
  - image_path: ../assets/images/overall/publications-thumb.png
    alt: "Publications"
    title: "Publications"
    excerpt: "Academic papers and industry publications."
    url: "/publications/"
    btn_label: "Read Publications"
    btn_class: "btn--primary"
  - image_path: ../assets/images/overall/projects-thumb.png
    alt: "🧠 Projects"
    title: "🧠 Projects"
    excerpt: "🔍 Exploring the intersection of 🧠 data science, 🤖 machine learning, and 🏥 healthcare"
    url: "/projects/"
    btn_label: "View Projects"
    btn_class: "btn--primary"

feature_row2:
  - image_path: ../assets/images/overall/travel-thumb.png
    alt: "✈️ Travelling"
    title: "✈️ Travelling"
    excerpt: "🧭 Exploring the world 🌄 one adventure at a time 🌍"
    url: "/travelling/"
    btn_label: "Explore"
    btn_class: "btn--primary"
  - image_path: ../assets/images/overall/calisthenics-thumb.png
    alt: "🏋️‍♂️ Calisthenics & 🥦 Nutrition"
    title: "🏋️‍♂️ Calisthenics & 🥦 Nutrition"
    excerpt: "📸 Documenting my fitness journey 🏋️‍♂️, workout progress, and nutritional insights 🥦🔥"
    url: "/calisthenics/"
    btn_label: "Learn More"
    btn_class: "btn--primary"
  - image_path: ../assets/images/overall/personal-thumb.jpg
    alt: "🌱 Personal Development"
    title: "🌱 Personal Development"
    excerpt: "💡 Continuous learning 🔁 Books 📘, Courses 🧠 I recommend."
    url: "/personal/"
    btn_label: "Discover"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

<div class="section-divider"></div>

## Professional Journey

<div class="feature__wrapper">
{% include feature_row %}
</div>

<div class="section-divider"></div>

## Personal Interests

<div class="feature__wrapper">
{% include feature_row id="feature_row2" %}
</div>

<div class="section-divider"></div>

## Current Focus

<div class="now-section">
  <div class="now-content">
    <h3>What I'm Working On</h3>
    <ul class="now-list">
      <li>Working on my PhD research in healthcare data science</li>
      <li>Developing machine learning models for medical applications</li>
      <li>Training for my next calisthenics milestone</li>
      <li>Planning my upcoming travel to [destination]</li>
    </ul>
  </div>
</div>

<div class="section-divider"></div>

## Gift Ideas

<div class="wishlist-section">
  <div class="wishlist-content">
    <p>Looking for gift ideas? Check out my wishlist!</p>
    <a href="/wishlist/" class="btn btn--primary">View Wishlist</a>
  </div>
</div>
