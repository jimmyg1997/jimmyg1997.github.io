---
layout: splash
permalink: /
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/banner.png
tagline: true

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
    alt: "Projects"
    title: "Projects"
    excerpt: "Exploring the intersection of data science, machine learning, and healthcare"
    url: "/projects/"
    btn_label: "View Projects"
    btn_class: "btn--primary"

feature_row2:
  - image_path: ../assets/images/overall/travel-thumb.png
    alt: "Travelling"
    title: "✈️ Travelling"
    excerpt: "Exploring the world one adventure at a time"
    url: "/travelling/"
    btn_label: "Explore"
    btn_class: "btn--primary"
  - image_path: ../assets/images/overall/calisthenics-thumb.png
    alt: "Calisthenics"
    image_focus: top
    title: "🏋️‍♂️ Calisthenics & Nutrition"
    excerpt: "Documenting my fitness journey, workout progress, and nutritional insights"
    url: "/calisthenics/"
    btn_label: "Learn More"
    btn_class: "btn--primary"
  - image_path: ../assets/images/overall/personal-thumb.jpg
    alt: "Personal"
    title: "🌱 Personal Development"
    excerpt: "Continuous learning, Books, Courses I recommend."
    url: "/personal/"
    btn_label: "Discover"
    btn_class: "btn--primary"
---

<div class="intro-simple">
  <p>Welcome to my personal website. I'm passionate about data science, healthcare research, and personal development — constantly exploring the intersection of analytics, movement, and meaningful impact.</p>
</div>

## Professional Journey

{% include feature_row %}

## Personal Interests

{% include feature_row id="feature_row2" %}

{% include home-journey.html %}
