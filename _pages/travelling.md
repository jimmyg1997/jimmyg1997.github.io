---
title: Travelling
layout: single
permalink: /travelling/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/travel-header.jpg
excerpt: "Exploring the world, one adventure at a time"
---

<div class="travel-intro">
  <p>Join me on my travel adventures around the world. This section features destinations I've visited, travel tips, and photo galleries from my journeys. Follow me on Instagram <a href="https://www.instagram.com/dimiles.away/" target="_blank">@dimiles.away</a> for more travel content.</p>
</div>

## Instagram Feed {#instagram-feed}

<div class="instagram-feed">
  <a href="https://www.instagram.com/dimiles.away/" target="_blank" class="btn btn--primary">Follow My Travel Adventures on Instagram</a>
  <div class="instagram-grid">
    <!-- Instagram Post 1 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DHuB01cMnFK/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DHuB01cMnFK/embed/captioned/cr=1&v=14&wp=540&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency></iframe>
        </div>
      </blockquote>
    </div>
    
    <!-- Instagram Post 2 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DHuAEdRMJWv/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DHuAEdRMJWv/embed/captioned/cr=1&v=14&wp=540&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency></iframe>
        </div>
      </blockquote>
    </div>
    
    <!-- Instagram Post 3 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DGuyZCVMAj7/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DGuyZCVMAj7/embed/captioned/cr=1&v=14&wp=540&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency></iframe>
        </div>
      </blockquote>
    </div>
  </div>
</div>

<script async src="//www.instagram.com/embed.js"></script>

## Travel Map {#travel-map}

<div class="travel-map">
  <iframe src="https://www.google.com/maps/d/embed?mid=YOUR_MAP_ID" width="100%" height="480"></iframe>
  <p class="map-caption">Countries I've visited highlighted in blue</p>
</div>

## Recent Adventures {#recent-adventures}

<div class="recent-travels">
  <div class="travel-card" id="living-in-krakow">
    <div class="travel-image">
      <img src="/assets/images/travel/krakow-poland.jpg" alt="Krakow, Poland">
    </div>
    <div class="travel-content">
      <h3>Living in Krakow</h3>
      <p class="travel-date">2022 - Present</p>
      <p>My experience living in the beautiful city of Krakow, Poland, exploring its rich history, stunning architecture, and vibrant culture.</p>
    </div>
  </div>
  
  <div class="travel-card" id="summer-in-santorini">
    <div class="travel-image">
      <img src="/assets/images/travel/santorini-greece.jpg" alt="Santorini, Greece">
    </div>
    <div class="travel-content">
      <h3>Summer in Santorini</h3>
      <p class="travel-date">August 2023</p>
      <p>Exploring the breathtaking views, white-washed buildings, and crystal-clear waters of Santorini, Greece.</p>
    </div>
  </div>
  
  <div class="travel-card" id="weekend-in-stockholm">
    <div class="travel-image">
      <img src="/assets/images/travel/stockholm-sweden.jpg" alt="Stockholm, Sweden">
    </div>
    <div class="travel-content">
      <h3>Weekend in Stockholm</h3>
      <p class="travel-date">June 2023</p>
      <p>A weekend getaway to Stockholm, Sweden, exploring its beautiful archipelago, historic old town, and modern design.</p>
    </div>
  </div>
  
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

## Travel Categories {#travel-categories}

<div class="travel-categories">
  <div class="category-item" id="city-explorations">
    <img src="/assets/images/travel/city-travels.jpg" alt="City Travels">
    <h3>City Explorations</h3>
    <p>Urban adventures and city discoveries</p>
    <a href="/travelling/tag/cities/" class="btn btn--primary btn--small">View Cities</a>
  </div>
  
  <div class="category-item" id="nature-outdoors">
    <img src="/assets/images/travel/nature-travels.jpg" alt="Nature Travels">
    <h3>Nature & Outdoors</h3>
    <p>Hiking, national parks, and natural wonders</p>
    <a href="/travelling/tag/nature/" class="btn btn--primary btn--small">View Nature</a>
  </div>
  
  <div class="category-item" id="food-culture">
    <img src="/assets/images/travel/food-travels.jpg" alt="Food Travels">
    <h3>Food & Culture</h3>
    <p>Culinary adventures and local experiences</p>
    <a href="/travelling/tag/food/" class="btn btn--primary btn--small">View Food</a>
  </div>
</div>

## Travel Gallery {#travel-gallery}

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

## Travel Archive {#travel-archive}

<div class="travel-archive">
  <h3 id="all-destinations">All Destinations</h3>
  <ul class="destinations-list">
    {% for travel in site.travelling %}
      <li><a href="{{ travel.url }}">{{ travel.title }} ({{ travel.date | date: "%Y" }})</a></li>
    {% endfor %}
  </ul>
</div> 