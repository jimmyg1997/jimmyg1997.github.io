---
title: Calisthenics & Nutrition
layout: collection
permalink: /calisthenics/
collection: calisthenics
entries_layout: grid
classes: wide
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/fitness-header.jpg
excerpt: "Documenting my fitness journey, workout progress, and nutritional insights"
---

<div class="fitness-intro">
  <p>This section tracks my calisthenics journey, nutrition approaches, and overall fitness progression. Here you'll find workout routines, progress tracking, and healthy eating tips.</p>
</div>

## Fitness Journey Timeline

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">2023</div>
    <div class="timeline-content">
      <h3>Current Focus</h3>
      <p>Description of your current fitness goals, routines, and achievements.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-date">2022</div>
    <div class="timeline-content">
      <h3>Advanced Training</h3>
      <p>Highlights from this stage of your training journey.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-date">2021</div>
    <div class="timeline-content">
      <h3>Intermediate Skills</h3>
      <p>Progress and milestones achieved during this period.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-date">2020</div>
    <div class="timeline-content">
      <h3>Beginning Calisthenics</h3>
      <p>How your fitness journey began and initial challenges.</p>
    </div>
  </div>
</div>

## Featured Skills & Progress

<div class="skills-grid">
  <div class="skill-item">
    <h3>Planche</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 65%;">65%</div>
    </div>
    <p>Current status: Advanced tuck planche, working towards straddle planche</p>
  </div>
  
  <div class="skill-item">
    <h3>Front Lever</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 70%;">70%</div>
    </div>
    <p>Current status: Advanced tuck front lever, working on single leg extensions</p>
  </div>
  
  <div class="skill-item">
    <h3>Handstand</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 85%;">85%</div>
    </div>
    <p>Current status: Freestanding handstand for 30 seconds, working on handstand push-ups</p>
  </div>
  
  <div class="skill-item">
    <h3>Muscle-Up</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 100%;">100%</div>
    </div>
    <p>Current status: Clean muscle-ups, working on consecutive repetitions</p>
  </div>
</div>

## Workout Routines

<div class="routines-section">
  {% for routine in site.calisthenics %}
    {% if routine.type == "workout" %}
      <div class="routine-card">
        <h3><a href="{{ routine.url }}">{{ routine.title }}</a></h3>
        <p class="routine-meta">{{ routine.difficulty }} | {{ routine.duration }} minutes | {{ routine.frequency }}</p>
        <p>{{ routine.excerpt | truncate: 150 }}</p>
        <a href="{{ routine.url }}" class="btn btn--primary btn--small">View Full Routine</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Nutrition Tips & Meal Plans

<div class="nutrition-section">
  {% for post in site.calisthenics %}
    {% if post.type == "nutrition" %}
      <div class="nutrition-card">
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | truncate: 150 }}</p>
        <a href="{{ post.url }}" class="btn btn--primary btn--small">Read More</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Progress Photos

<div class="progress-gallery">
  {% for photo in site.data.fitness_progress %}
    <div class="progress-item">
      <div class="progress-date">{{ photo.date }}</div>
      <img src="{{ photo.image }}" alt="Progress photo {{ photo.date }}">
      <p>{{ photo.description }}</p>
    </div>
  {% endfor %}
</div> 