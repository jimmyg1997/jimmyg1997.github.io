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
excerpt: "Data Scientist • Researcher • Calisthenics Athlete • Traveller"
intro: 
  - excerpt: "Welcome to my personal website. I’m passionate about 𝘥𝘢𝘵𝘢 𝘴𝘤𝘪𝘦𝘯𝘤𝘦,𝘩𝘦𝘢𝘭𝘵𝘩𝘤𝘢𝘳𝘦 𝘳𝘦𝘴𝘦𝘢𝘳𝘤𝘩, and 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵 — constantly exploring the intersection of analytics, movement, and meaningful impact"

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

<style>
/* Welcome text full-width and prominent */
.feature-row--center {
  max-width: 900px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  font-size: 1.25em;
  font-weight: 500;
  color: #23272f;
  background: rgba(255,255,255,0.92);
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 2.1em 1.5em 1.5em 1.5em;
}

/* Center and widen feature rows */
.feature__wrapper {
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto 2.2rem auto;
}
.feature__item {
  flex: 1 1 300px;
  min-width: 260px;
  max-width: 340px;
  margin: 0 0.5em;
}

/* Current Focus section modern card */
.now-section {
  display: flex;
  justify-content: center;
  margin: 2.5em 0 2.5em 0;
}
.now-content {
  background: rgba(255,255,255,0.97);
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.09);
  padding: 2.1em 2.2em 1.5em 2.2em;
  max-width: 480px;
  width: 100%;
  text-align: center;
  position: relative;
}
.now-content h3 {
  font-size: 1.18em;
  font-weight: 700;
  margin-bottom: 0.7em;
  letter-spacing: 0.01em;
  color: #1a1d23;
}
.now-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55em;
  font-size: 1.04em;
  color: #333;
}
.now-list li {
  padding: 0.18em 0.2em;
  border-radius: 7px;
  transition: background 0.2s;
}
.now-list li:hover {
  background: #f3f6fa;
}
@media (max-width: 700px) {
  .feature-row--center, .feature__wrapper, .now-content {
    max-width: 98vw;
    padding: 1.1em 0.5em 1.1em 0.5em;
  }
}
</style>

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

<!-- ## Gift Ideas

<div class="wishlist-section">
  <div class="wishlist-content">
    <p>Looking for gift ideas? Check out my wishlist!</p>
    <a href="/wishlist/" class="btn btn--primary">View Wishlist</a>
  </div>
</div> -->
