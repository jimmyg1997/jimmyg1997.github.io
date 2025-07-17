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
    excerpt: "Exploring the intersection of data science, machine learning, and healthcare"
    url: "/projects/"
    btn_label: "View Projects"
    btn_class: "btn--primary"

feature_row2:
  - image_path: ../assets/images/overall/travel-thumb.png
    alt: "✈️ Travelling"
    title: "✈️ Travelling"
    excerpt: "Exploring the world one adventure at a time 🌍"
    url: "/travelling/"
    btn_label: "Explore"
    btn_class: "btn--primary"
  - image_path: ../assets/images/overall/calisthenics-thumb.png
    alt: "🏋️‍♂️ Calisthenics & Nutrition"
    title: "🏋️‍♂️ Calisthenics & Nutrition"
    excerpt: "📸 Documenting my fitness journey, workout progress, and nutritional insights"
    url: "/calisthenics/"
    btn_label: "Learn More"
    btn_class: "btn--primary"
  - image_path: ../assets/images/overall/personal-thumb.jpg
    alt: "🌱 Personal Development"
    title: "🌱 Personal Development"
    excerpt: "Continuous learning, Books, Courses  I recommend."
    url: "/personal/"
    btn_label: "Discover"
    btn_class: "btn--primary"
---

<style>
/* Welcome text full-width and prominent */
.feature-row--center {
  max-width: 900px;
  margin: 0 auto 0.7rem auto; /* even smaller bottom margin */
  text-align: center;
  font-size: 1.25em;
  font-weight: 500;
  color: #23272f;
  background: rgba(255,255,255,0.92);
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 1.5em 1.2em 1.1em 1.2em; /* tighter padding */
}

/* Minimal section divider */
.section-divider {
  border: none;
  border-top: 1px solid #e3e8f0;
  height: 0;
  margin: 1.1rem 0 1.1rem 0; /* much less vertical space */
  background: none;
}

/* Feature rows: minimal vertical spacing */
.feature__wrapper {
  display: flex;
  justify-content: center;
  gap: 1.2rem; /* less gap between cards */
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto 0.7rem auto; /* less bottom margin */
  padding: 0;
}
.feature__item {
  flex: 1 1 300px;
  min-width: 260px;
  max-width: 340px;
  margin: 0 0.3em 0.7em 0.3em; /* less vertical margin */
}

/* Headings: minimal spacing */
h2, h3 {
  margin-top: 0.7em;
  margin-bottom: 0.5em;
}

/* Current Focus card: less margin above/below */
.now-section {
  display: flex;
  justify-content: center;
  margin: 1.3em 0 1.3em 0;
  animation: fadeInCard 0.9s cubic-bezier(0.4,0,0.2,1);
}
@keyframes fadeInCard {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}
.now-content {
  background: linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(230,245,255,0.85) 100%);
  border-radius: 22px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.13), 0 1.5px 8px rgba(0,0,0,0.07);
  border: 1.5px solid rgba(60,120,255,0.13);
  backdrop-filter: blur(7px);
  padding: 2.3em 2.5em 1.7em 2.5em;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
  font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  transition: box-shadow 0.2s;
}
.now-content:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,0.17), 0 2px 12px rgba(0,0,0,0.09);
}
.now-content .now-icon {
  font-size: 2.1em;
  color: #3a7bfd;
  margin-bottom: 0.18em;
  display: block;
  filter: drop-shadow(0 2px 6px rgba(58,123,253,0.13));
}
.now-content h3 {
  font-size: 1.32em;
  font-weight: 800;
  margin-bottom: 1.1em;
  letter-spacing: 0.01em;
  color: #2a2d3a;
  background: linear-gradient(90deg, #3a7bfd 30%, #00c6fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.now-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65em;
  font-size: 1.07em;
  color: #23272f;
  align-items: flex-start;
  animation: fadeInList 1.2s cubic-bezier(0.4,0,0.2,1);
}
@keyframes fadeInList {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}
.now-list li {
  display: flex;
  align-items: center;
  background: rgba(245,250,255,0.85);
  border-radius: 9px;
  padding: 0.32em 0.9em 0.32em 0.6em;
  margin-bottom: 0.1em;
  box-shadow: 0 1px 4px rgba(58,123,253,0.04);
  font-weight: 500;
  min-height: 2.1em;
  position: relative;
  transition: background 0.18s, box-shadow 0.18s;
}
.now-list li::before {
  content: '';
  display: inline-block;
  width: 0.68em;
  height: 0.68em;
  border-radius: 50%;
  margin-right: 0.85em;
  background: linear-gradient(135deg, #3a7bfd 60%, #00c6fb 100%);
  box-shadow: 0 1px 4px rgba(58,123,253,0.13);
}
.now-list li:hover {
  background: rgba(230,245,255,0.97);
  box-shadow: 0 2px 8px rgba(58,123,253,0.09);
}
@media (max-width: 700px) {
  .feature-row--center, .feature__wrapper, .now-content {
    max-width: 98vw;
    padding: 0.7em 0.3em 0.7em 0.3em;
  }
  .now-content {
    max-width: 98vw;
    padding: 1.2em 0.5em 1.2em 0.5em;
  }
  .now-list {
    font-size: 1em;
  }
}

/* Remove extra margin above feature row if any */
.section-divider + h2, .section-divider + h3, .section-divider + div.feature__wrapper {
  margin-top: 0.2em !important;
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
    <span class="now-icon">🎯</span>
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
