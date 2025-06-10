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
  overlay_image: /assets/images/travel-header.png
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
    lat: 20.9500,  // Approximate latitude for Ha Long Bay, Vietnam
    lng: 107.0833, // Approximate longitude for Ha Long Bay, Vietnam
    title: "Cruise in Ha Long Bay",
    description: "Had the most unforgettable day cruising through Ha Long Bay — one of the true wonders of Vietnam! From appreciating calm emerald waters, exploring epic caves, hiking peaks with jaw-dropping views, to watching the sun melt into the sea with a glass of wine in hand — this was a dream come true. Here's what was packed into this amazing day: pearl workshop, tasty lunch with vegetarian and fish options onboard, Sung Sot cave visit, speed boat ride, island hike with a chill at the beach below, and a sunset party with wine, fruit, and good vibes on deck. All of it for just €38.53!",
    date: "2025-05",
    instagramPostId: "DKmiksJslAo",
    instagramUrl: "https://instagram.com/p/DKmiksJslAo/",
    city: "Ha Long",
    country: "Vietnam"
  },
  {
    lat: 40.050,
    lng: 20.750,
    title: "Konitsa Bridge, Greece",
    description: "The iconic Konitsa Bridge is a historic single-arch stone bridge spanning the Aoos River just south of the town of Konitsa in northwestern Greece, near the Albanian border. Completed in 1870 by master builder Ziogas Frontzos, the bridge is renowned for its elegant design and impressive dimensions—about 20 meters high and 35 meters long—making it one of the largest single-arch stone bridges in the Balkans. The bridge is a pedestrian crossing and features a bell under its arch to warn travelers of strong winds. It is a major attraction in the Epirus region, set against the dramatic backdrop of the Aoos Gorge and the mountains of the Vikos–Aoös National Park. The area is also popular for trekking and river rafting.",
    date: "2025-05",
    instagramPostId: "DKmFv8rsmKj",
    instagramUrl: "https://www.instagram.com/p/DKmFv8rsmKj/",
    city: "Konitsa",
    country: "Greece"
  },
  {
    lat: 1.2869,
    lng: 103.8547,
    title: "Singapore Free Walking Tour",
    description: "A recommended free walking tour in Singapore, titled 'Stroll through the Past, Present & Future of Singapore' by Stephen via GuruWalk. The guide is described as knowledgeable, funny, and able to make history engaging and conversational. The experience includes relaxing on the grass, enjoying ice cream, and connecting with new friends, offering a mix of stories, laughter, and calm moments in the heart of the city. The tour is highly rated by participants.",
    date: "2025-04",
    instagramPostId: "DKklDwjM9oK",
    instagramUrl: "https://www.instagram.com/p/DKklDwjM9oK/",
    city: "Singapore",
    country: "Singapore"
  },

  {
    lat: 1.2869,
    lng: 103.8532,
    title: "Singapore Free Walking Tour",
    description: "A recommended free walking tour in Singapore, titled 'Stroll through the Past, Present & Future of Singapore' by Stephen via GuruWalk. The guide is described as knowledgeable, funny, and able to make history engaging and conversational. The experience includes relaxing on the grass, enjoying ice cream, and connecting with new friends, offering a mix of stories, laughter, and calm moments in the heart of the city. The tour is highly rated by participants.",
    date: "2025-04",
    instagramPostId: "DKkS1OhspIN",
    instagramUrl: "https://www.instagram.com/p/DKkS1OhspIN/",
    city: "Singapore",
    country: "Singapore"
  },

  {
    lat: 21.0297,
    lng: 105.8417,
    title: "Hanoi Train Street",
    description: "Hanoi Train Street is a famous narrow alley in the heart of Hanoi’s Old Quarter where trains pass just inches from tightly packed homes, cafés, and shops. Dating back to the early 20th century, this unique street runs between Phung Hung and Tran Phu streets, as well as Le Duan and Kham Thien streets, offering a thrilling and photogenic experience as trains rumble through several times a day. As of February 2025, visitors can freely walk along the tracks without needing an invitation from a café, but are still encouraged to order something if they wish to stay and watch the trains. The lively atmosphere, local charm, and proximity to Hanoi’s main attractions make it a must-visit spot for travelers.",
    date: "2025-04",
    instagramPostId: "DKhS7Pjo74h",
    instagramUrl: "https://www.instagram.com/p/DKhS7Pjo74h/",
    city: "Hanoi",
    country: "Vietnam"
  },
  {
    lat: 21.0297,
    lng: 105.8432,
    title: "Hanoi Train Street",
    description: "Hanoi Train Street is a famous narrow alley in the heart of Hanoi’s Old Quarter where trains pass just inches from tightly packed homes, cafés, and shops. Dating back to the early 20th century, this unique street runs between Phung Hung and Tran Phu streets, as well as Le Duan and Kham Thien streets, offering a thrilling and photogenic experience as trains rumble through several times a day. As of February 2025, visitors can freely walk along the tracks without needing an invitation from a café, but are still encouraged to order something if they wish to stay and watch the trains. The lively atmosphere, local charm, and proximity to Hanoi’s main attractions make it a must-visit spot for travelers.",
    date: "2025-04",
    instagramPostId: "DKhKyAkMInA",
    instagramUrl: "https://www.instagram.com/p/DKhKyAkMInA/",
    city: "Hanoi",
    country: "Vietnam"
  },

  {
    lat: 20.6700,
    lng: 105.2500,
    title: "Da Bia Lake, Vietnam",
    description: "Da Bia Lake, located in Hoa Binh province, northern Vietnam, is a tranquil reservoir surrounded by lush mountains and home to several peaceful Muong ethnic minority villages. Life here flows with the rhythm of the water: there are no roads or cars, only floating homes and calm waters, with supply boats arriving every few days to bring essentials. The area is known for its authentic community-based tourism, offering homestays in traditional stilt houses, boat trips, and opportunities to volunteer and connect with local culture. Visitors are drawn to Da Bia for its serene natural beauty, simplicity, and the harmony between people and nature.",
    date: "2025-04",
    instagramPostId: "DKajRN1swYJ",
    instagramUrl: "https://www.instagram.com/p/DKajRN1swYJ/",
    city: "Da Bac",
    country: "Vietnam"
  },

  {
    lat: 20.6700,
    lng: 105.2503,
    title: "Da Bia Lake, Vietnam",
    description: "Da Bia Lake, located in Hoa Binh province, northern Vietnam, is a tranquil reservoir surrounded by lush mountains and home to several peaceful Muong ethnic minority villages. Life here flows with the rhythm of the water: there are no roads or cars, only floating homes and calm waters, with supply boats arriving every few days to bring essentials. The area is known for its authentic community-based tourism, offering homestays in traditional stilt houses, boat trips, and opportunities to volunteer and connect with local culture. Visitors are drawn to Da Bia for its serene natural beauty, simplicity, and the harmony between people and nature.",
    date: "2025-04",
    instagramPostId: "DKagLYZsEcb",
    instagramUrl: "https://www.instagram.com/p/DKagLYZsEcb/",
    city: "Da Bac",
    country: "Vietnam"
  },

  {
    lat: 1.282375,
    lng: 103.864273,
    title: "Gardens by the Bay",
    description: "Gardens by the Bay is a spectacular urban nature park in the heart of Singapore, renowned for its futuristic Supertree Grove, lush themed gardens, and innovative conservatories like the Flower Dome and Cloud Forest. Entry to the main gardens is free, while attractions such as the OCBC Skyway—an elevated walkway among the Supertrees—offer stunning panoramic views for a small fee. The Supertrees come alive at night with a dazzling light and music show, creating an otherworldly atmosphere. This award-winning park is celebrated for its blend of cutting-edge design, sustainability, and immersive natural beauty, making it a must-visit for travelers seeking both relaxation and awe-inspiring sights in Asia.",
    date: "2025-04",
    instagramPostId: "DKYAy9gsFmz",
    instagramUrl: "https://www.instagram.com/p/DKYAy9gsFmz/",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 1.282375,
    lng: 103.864290,
    title: "Gardens by the Bay",
    description: "Gardens by the Bay is a spectacular urban nature park in the heart of Singapore, renowned for its futuristic Supertree Grove, lush themed gardens, and innovative conservatories like the Flower Dome and Cloud Forest. Entry to the main gardens is free, while attractions such as the OCBC Skyway—an elevated walkway among the Supertrees—offer stunning panoramic views for a small fee. The Supertrees come alive at night with a dazzling light and music show, creating an otherworldly atmosphere. This award-winning park is celebrated for its blend of cutting-edge design, sustainability, and immersive natural beauty, making it a must-visit for travelers seeking both relaxation and awe-inspiring sights in Asia.",
    date: "2025-04",
    instagramPostId: "DKX-MXisM0X",
    instagramUrl: "https://www.instagram.com/p/DKX-MXisM0X/",
    city: "Singapore",
    country: "Singapore"
  },

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
      <p>My volunteering experience with the Greek NGO Wheeling2Help in the community of Da Bia village</p>
      <a href="https://docs.google.com/presentation/d/14IV8N7H1TE7uuJi1_hkzmBSuPvgtpl5Ga_izE_hoCZ4/edit?slide=id.g35dda03171d_0_0#slide=id.g35dda03171d_0_0"  class="btn btn--primary btn--small" target="_blank">View #MyQuestVietnam </a>
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
  


<!-- ## Travel Gallery {#travel-gallery} -->

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



<!-- ## Travel Archive {#travel-archive} -->

<div class="travel-archive">
  <h3 id="all-destinations">All Destinations</h3>
  <ul class="destinations-list">
    {% for travel in site.travelling %}
      <li><a href="{{ travel.url }}">{{ travel.title }} ({{ travel.date | date: "%Y" }})</a></li>
    {% endfor %}
  </ul>
</div>