---
title: Travelling
layout: collection
permalink: /travelling/
collection: travelling
entries_layout: grid
classes: wide
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/travel-header.jpg
excerpt: "Exploring the world, one adventure at a time"
---

<div class="travel-intro">
  <p>Join me on my travel adventures around the world. This section features destinations I've visited, travel tips, and photo galleries from my journeys.</p>
</div>

## Travel Map

<div class="travel-map">
  <iframe src="https://www.google.com/maps/d/embed?mid=YOUR_MAP_ID" width="100%" height="480"></iframe>
  <p class="map-caption">Countries I've visited highlighted in blue</p>
</div>

## Recent Adventures

<div class="recent-travels">
  {% for travel in site.travelling limit:3 %}
    <div class="travel-card">
      <div class="travel-image">
        <img src="{{ travel.header.teaser }}" alt="{{ travel.title }}">
      </div>
      <div class="travel-content">
        <h3><a href="{{ travel.url }}">{{ travel.title }}</a></h3>
        <p class="travel-date">{{ travel.date | date: "%B %Y" }}</p>
        <p>{{ travel.excerpt | truncate: 150 }}</p>
        <a href="{{ travel.url }}" class="btn btn--primary btn--small">Read More</a>
      </div>
    </div>
  {% endfor %}
</div>

## Travel Categories

<div class="travel-categories">
  <div class="category-item">
    <img src="/assets/images/city-travels.jpg" alt="City Travels">
    <h3>City Explorations</h3>
    <p>Urban adventures and city discoveries</p>
    <a href="/travelling/tag/cities/" class="btn btn--primary btn--small">View Cities</a>
  </div>
  
  <div class="category-item">
    <img src="/assets/images/nature-travels.jpg" alt="Nature Travels">
    <h3>Nature & Outdoors</h3>
    <p>Hiking, national parks, and natural wonders</p>
    <a href="/travelling/tag/nature/" class="btn btn--primary btn--small">View Nature</a>
  </div>
  
  <div class="category-item">
    <img src="/assets/images/food-travels.jpg" alt="Food Travels">
    <h3>Food & Culture</h3>
    <p>Culinary adventures and local experiences</p>
    <a href="/travelling/tag/food/" class="btn btn--primary btn--small">View Food</a>
  </div>
</div>

## Travel Gallery

<div class="travel-gallery">
  {% for travel in site.travelling %}
    {% for image in travel.gallery %}
      <div class="gallery-item">
        <a href="{{ image.url }}" class="gallery-image">
          <img src="{{ image.image_path }}" alt="{{ image.title }}">
        </a>
      </div>
    {% endfor %}
  {% endfor %}
</div>

## Travel Archive

<div class="travel-archive">
  <h3>All Destinations</h3>
  <ul class="destinations-list">
    {% for travel in site.travelling %}
      <li><a href="{{ travel.url }}">{{ travel.title }} ({{ travel.date | date: "%Y" }})</a></li>
    {% endfor %}
  </ul>
</div> 