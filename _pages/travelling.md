---
title: ✈️ Travelling
layout: single
permalink: /travelling/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/travel-header.jpg
excerpt: "🧭 Exploring the world 🌄 one adventure at a time 🌍"
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
<script>
  window.addEventListener('load', function() {
    if (typeof instgrm !== 'undefined') {
      instgrm.Embeds.process();
    }
  });
</script>

## Interactive Travel Map {#interactive-travel-map}

<div class="interactive-travel-map" style="margin: 2rem 0;">
  <div style="text-align: center; margin-bottom: 1.5rem;">
    <h3 style="color: #001f3f; margin-bottom: 0.5rem;">🗺️ My Travel Adventures</h3>
    <p style="color: #666; font-style: italic;">Click on the markers to see my travel posts and experiences</p>
  </div>
  
  <div id="travel-map" style="height: 500px; border-radius: 10px; border: 2px solid #ddd; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></div>
  
  <div class="travel-stats" style="display: flex; justify-content: center; gap: 2rem; margin-top: 1.5rem; text-align: center;">
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #001f3f;">
      <strong id="countries-visited" style="font-size: 1.5em; color: #001f3f;">0</strong>
      <div style="color: #666; font-size: 0.9em;">Countries Visited</div>
    </div>
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #28a745;">
      <strong id="cities-explored" style="font-size: 1.5em; color: #28a745;">0</strong>
      <div style="color: #666; font-size: 0.9em;">Cities Explored</div>
    </div>
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #dc3545;">
      <strong id="travel-posts" style="font-size: 1.5em; color: #dc3545;">0</strong>
      <div style="color: #666; font-size: 0.9em;">Travel Posts</div>
    </div>
  </div>
</div>

<!-- Leaflet CSS and JS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>

<script>
// Updated travel data with actual Instagram posts
// Updated travel data with actual Instagram posts
const myTravelPosts = [
  {
    lat: 50.0647,
    lng: 19.9450,
    title: "Living in Krakow 🏰",
    description: "My home base in beautiful Krakow, Poland. Exploring the historic Old Town and vibrant culture every day!",
    date: "2024-Present",
    instagramPostId: "DHuB01cMnFK", // Replace with actual Krakow post ID
    instagramUrl: "https://www.instagram.com/dimiles.away/",
    city: "Krakow",
    country: "Poland"
  },
  {
    lat: 21.0285,
    lng: 105.8542,
    title: "Easter in Vietnam 🌸",
    description: "Amazing adventure through Northern Vietnam - stunning landscapes and incredible culture!",
    date: "April 2025",
    instagramPostId: "DHuB01cMnFK", // This matches your Vietnam post
    instagramUrl: "https://www.instagram.com/p/DHuB01cMnFK/",
    city: "Hanoi",
    country: "Vietnam"
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    title: "Amsterdam Canals 🚲",
    description: "Cycling through the beautiful canals and discovering hidden gems in Amsterdam!",
    date: "2024",
    instagramPostId: "DHuAEdRMJWv", // This matches your second post
    instagramUrl: "https://www.instagram.com/p/DHuAEdRMJWv/",
    city: "Amsterdam",
    country: "Netherlands"
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    title: "Paris Adventures 🗼",
    description: "City of lights and endless inspiration - from the Eiffel Tower to hidden bistros!",
    date: "2024",
    instagramPostId: "DGuyZCVMAj7", // This matches your third post
    instagramUrl: "https://www.instagram.com/p/DGuyZCVMAj7/",
    city: "Paris",
    country: "France"
  }
];

// Initialize the map
const travelMap = L.map('travel-map', {
  center: [50.0647, 19.9450], // Centered on Krakow
  zoom: 4
});

// Add tile layer with fallback
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(travelMap);

// Custom marker icon
const travelIcon = L.divIcon({
  html: `<div style="
    background: linear-gradient(135deg, #001f3f, #0074D9);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
  ">📍</div>`,
  className: 'travel-marker',
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

// Add markers for each travel post
myTravelPosts.forEach(post => {
  const popupContent = `
    <div style="width: 270px; max-height: 400px; overflow-y: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <iframe 
        src="https://www.instagram.com/p/${post.instagramPostId}/embed/captioned/?cr=1&v=14&wp=270" 
        width="100%" 
        height="400" 
        frameborder="0" 
        scrolling="yes" 
        allowtransparency="true"
        style="border: none; overflow: hidden;">
      </iframe>
    </div>
  `;

  const marker = L.marker([post.lat, post.lng], { icon: travelIcon })
    .addTo(travelMap)
    .bindPopup(popupContent, {
      maxWidth: 270,
      minWidth: 270,
      maxHeight: 350,
      className: 'travel-popup',
      closeButton: true,
      autoPan: true,
      keepInView: true
    });

  // Load Instagram embed script when popup opens
  marker.on('popupopen', function() {
    // Prevent zoom events from affecting popup size
    travelMap.off('zoom');
  });

  // Re-enable zoom events when popup closes
  marker.on('popupclose', function() {
    // Re-enable zoom handling if needed
  });
});

// Calculate and display statistics
const uniqueCountries = [...new Set(myTravelPosts.map(post => post.country))];
const uniqueCities = [...new Set(myTravelPosts.map(post => post.city))];

document.getElementById('countries-visited').textContent = 55
document.getElementById('cities-explored').textContent = 223
document.getElementById('travel-posts').textContent = myTravelPosts.length;

// Fit map to show all markers with padding
if (myTravelPosts.length > 0) {
  const group = new L.featureGroup(
    myTravelPosts.map(post => L.marker([post.lat, post.lng]))
  );
  travelMap.fitBounds(group.getBounds().pad(0.1));
}
</script>

<!-- 
## Travel Map {#travel-map}

<div class="travel-map">
  <iframe src="https://www.google.com/maps/d/embed?mid=YOUR_MAP_ID" width="100%" height="480"></iframe>
  <p class="map-caption">Countries I've visited highlighted in blue</p>
</div> -->

## Recent Adventures & Tour Guides {#recent-adventures}

<div class="recent-travels">
  <div class="travel-card" id="vietnam-2025">
    <div class="travel-image">
      <img src="/assets/images/travel/vietnam-2025.jpg" alt="Northen Vietnam">
    </div>
    <div class="travel-content">
      <h3>Easter in Vietnam</h3>
      <p class="travel-date">April 2025</p>
      <p>My experience in the northen part of the beautiful country of Vietnam</p>
      <a href=""  class="btn btn--primary btn--small" target="_blank">View Vietnam photos </a>
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
    <img src="/assets/images/travel/krakow-guide.jpg" alt="City Travels">
    <h3>Living in Krakow</h3>
    <p>My experience living in the beautiful city of Krakow, Poland, exploring its rich history, stunning architecture, and vibrant culture</p>
    <a href="https://docs.google.com/document/d/1kK6SqDRhKBvHyOYG5KcFabgdDate7vDF46-kQatG8io/edit?tab=t.0#heading=h.ukpp0t44nwxx" class="btn btn--primary btn--small">View the Guide</a>
  </div>
  
  <div class="category-item" id="nature-outdoors">
    <img src="/assets/images/travel/nature-travels.jpg" alt="Nature Travels">
    <h3>Nature & Outdoors</h3>
    <p>Hiking, national parks, and natural wonders</p>
    <a href="/travelling/tag/nature/" class="btn btn--primary btn--small">View Nature</a>
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