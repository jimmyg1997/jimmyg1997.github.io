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
excerpt: "Exploring the world one adventure at a time"
---



<div class="travel-intro">
  <p>Join me on my travel adventures around the world. This section features destinations I've visited, travel tips, and photo galleries from my journeys. Follow me on Instagram for more travel content.</p>
  <div class="social-connect">
    <span class="connect-text">Follow my journey</span>
    <a href="https://www.instagram.com/dimiles.away/" target="_blank" class="instagram-btn">
      <i class="fab fa-instagram"></i>
      @dimiles.away
    </a>
  </div>
</div>

<style>

.social-connect {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: relative;
    z-index: 1;
}

.connect-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.instagram-btn {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
}

.instagram-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.instagram-btn:hover::before {
    left: 100%;
}

.instagram-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.instagram-btn i {
    font-size: 1.2em;
}

/* Font Awesome fallback */
.fab {
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    text-align: center;
}

.fab::before {
    content: "📸";
    font-size: 1em;
}

/* Responsive design */
@media (max-width: 768px) {
    .glass-card {
        padding: 30px 20px;
    }
    
    .intro-header h2 {
        font-size: 1.8em;
    }
    
    .fitness-intro p {
        font-size: 1em;
    }
    
    .instagram-btn {
        padding: 12px 25px;
        font-size: 1em;
    }
}

/* Additional glassmorphism elements */
.glass-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

/* Floating elements for extra visual interest */
.floating-element {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(1) {
    width: 20px;
    height: 20px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.floating-element:nth-child(2) {
    width: 15px;
    height: 15px;
    top: 20%;
    right: 15%;
    animation-delay: 2s;
}

.floating-element:nth-child(3) {
    width: 25px;
    height: 25px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

/* Instagram Feed Desktop Fix: 3 posts side by side, post fits inside square */
@media (min-width: 700px) {
  .instagram-grid {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: nowrap;
    max-width: 100%;
    box-sizing: border-box;
  }
  .instagram-post {
    width: 360px;
    min-width: 360px;
    max-width: 360px;
    height: 360px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    overflow: visible;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 360px;
    box-sizing: border-box;
  }
  .instagram-embed-container {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .instagram-embed-container iframe {
    width: 360px !important;
    height: 360px !important;
    min-width: 360px;
    min-height: 360px;
    max-width: 360px;
    max-height: 360px;
    border: none;
    display: block;
    margin: 0 auto;
  }
}
@media (max-width: 900px) {
  .instagram-grid {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .instagram-post {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    flex: 1 1 100%;
    height: auto;
  }
  .instagram-embed-container,
  .instagram-embed-container iframe {
    width: 100% !important;
    height: 100% !important;
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 100%;
  }
}

@media (min-width: 900px) {
  .instagram-feed {
    max-width: 1000px;
    margin: 0 auto;
  }
  .instagram-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    max-width: 100%;
    margin: 0 auto;
  }
  .instagram-post {
    width: 320px;
    height: 540px;
    margin: 0;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    overflow: hidden;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
  .instagram-embed-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .instagram-embed-container iframe {
    width: 320px !important;
    height: 540px !important;
    border: none;
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
  }
}
@media (max-width: 899px) and (min-width: 600px) {
  .instagram-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .instagram-post {
    width: 320px;
    height: 540px;
  }
  .instagram-embed-container iframe {
    width: 320px !important;
    height: 540px !important;
  }
}
@media (max-width: 599px) {
  .instagram-grid {
    grid-template-columns: 1fr;
  }
  .instagram-post {
    width: 100%;
    height: auto;
  }
  .instagram-embed-container iframe {
    width: 100% !important;
    height: auto !important;
  }
}
</style>

## Instagram Feed {#instagram-feed}

<div class="instagram-feed">
  <div class="instagram-grid">
    <!-- Instagram Post 1 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DHuB01cMnFK/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DHuB01cMnFK/embed/captioned/cr=1&v=14&wp=320&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency style="width:320px; height:540px; max-width:100%; max-height:100%; display:block; margin:0 auto;"></iframe>
        </div>
      </blockquote>
    </div>
    <!-- Instagram Post 2 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DMDgGKJMEnE/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DMDgGKJMEnE/embed/captioned/cr=1&v=14&wp=320&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency style="width:320px; height:540px; max-width:100%; max-height:100%; display:block; margin:0 auto;"></iframe>
        </div>
      </blockquote>
    </div>
    <!-- Instagram Post 3 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DGuyZCVMAj7/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DGuyZCVMAj7/embed/captioned/cr=1&v=14&wp=320&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency style="width:320px; height:540px; max-width:100%; max-height:100%; display:block; margin:0 auto;"></iframe>
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
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script> -->

<script>
document.addEventListener('DOMContentLoaded', function() {
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
      description: "Hanoi Train Street is a famous narrow alley in the heart of Hanoi's Old Quarter where trains pass just inches from tightly packed homes, cafés, and shops. Dating back to the early 20th century, this unique street runs between Phung Hung and Tran Phu streets, as well as Le Duan and Kham Thien streets, offering a thrilling and photogenic experience as trains rumble through several times a day. As of February 2025, visitors can freely walk along the tracks without needing an invitation from a café, but are still encouraged to order something if they wish to stay and watch the trains. The lively atmosphere, local charm, and proximity to Hanoi's main attractions make it a must-visit spot for travelers.",
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
      description: "Hanoi Train Street is a famous narrow alley in the heart of Hanoi's Old Quarter where trains pass just inches from tightly packed homes, cafés, and shops. Dating back to the early 20th century, this unique street runs between Phung Hung and Tran Phu streets, as well as Le Duan and Kham Thien streets, offering a thrilling and photogenic experience as trains rumble through several times a day. As of February 2025, visitors can freely walk along the tracks without needing an invitation from a café, but are still encouraged to order something if they wish to stay and watch the trains. The lively atmosphere, local charm, and proximity to Hanoi's main attractions make it a must-visit spot for travelers.",
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
      lng: 103.864299,
      title: "Gardens by the Bay",
      description: "Gardens by the Bay is a spectacular urban nature park in the heart of Singapore, renowned for its futuristic Supertree Grove, lush themed gardens, and innovative conservatories like the Flower Dome and Cloud Forest. Entry to the main gardens is free, while attractions such as the OCBC Skyway—an elevated walkway among the Supertrees—offer stunning panoramic views for a small fee. The Supertrees come alive at night with a dazzling light and music show, creating an otherworldly atmosphere. This award-winning park is celebrated for its blend of cutting-edge design, sustainability, and immersive natural beauty, making it a must-visit for travelers seeking both relaxation and awe-inspiring sights in Asia.",
      date: "2025-04",
      instagramPostId: "DKX-MXisM0X",
      instagramUrl: "https://www.instagram.com/p/DKX-MXisM0X/",
      city: "Singapore",
      country: "Singapore"
    },
    {
      lat: 50.0586,
      lng: 19.9117,
      title: "Cracow Coffee Festival at Hala Cracovia",
      description: "The Cracow Coffee Festival at Hala Cracovia is a vibrant event in Kraków, Poland, celebrating coffee culture with a wide array of international coffee blends, including Turkish coffee, and an impressive selection of food stalls. Visitors can enjoy cakes, special teas, Polish and Georgian treats, sushi, Japanese cuisine, and quirky collectibles. The festival features dozens of exhibitors, live events, a chillout zone, and opportunities to learn about coffee brewing and tasting. Hosted at Hala Cracovia, a modern, accessible event venue at Aleja Marszałka Ferdinanda Focha 40, the festival draws coffee lovers, foodies, and families for a unique and aromatic experience.",
      date: "2025.03",
      instagramPostId: "DKVDl68symH",
      instagramUrl: "https://www.instagram.com/p/DKVDl68symH/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 50.0586,
      lng: 19.9130,
      title: "Cracow Coffee Festival at Hala Cracovia",
      description: "The Cracow Coffee Festival at Hala Cracovia is a vibrant event in Kraków, Poland, celebrating coffee culture with a wide array of international coffee blends, including Turkish coffee, and an impressive selection of food stalls. Visitors can enjoy cakes, special teas, Polish and Georgian treats, sushi, Japanese cuisine, and quirky collectibles. The festival features dozens of exhibitors, live events, a chillout zone, and opportunities to learn about coffee brewing and tasting. Hosted at Hala Cracovia, a modern, accessible event venue at Aleja Marszałka Ferdinanda Focha 40, the festival draws coffee lovers, foodies, and families for a unique and aromatic experience.",
      date: "2025.03",
      instagramPostId: "DKU_sHWMb9h",
      instagramUrl: "https://www.instagram.com/p/DKU_sHWMb9h/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 1.2731,
      lng: 103.8176,
      title: "Singapore Cable Car – Mount Faber Station",
      description: "The Singapore Cable Car offers a unique aerial journey connecting mainland Singapore to Sentosa Island, starting from the scenic Mount Faber Station. This iconic ride provides unlimited trips with a single ticket, allowing visitors to enjoy jaw-dropping views of the city skyline, lush jungle, and the sea. The cable car is rainproof, cozy, and perfect for dates, solo adventures, or family fun. Highlights include access to both Sentosa Island and Mount Faber, panoramic vistas, and a memorable, value-packed experience that's more than just transportation—it's an adventure above the city.",
      date: "2025.04",
      instagramPostId: "DJ_8DWqMG-i",
      instagramUrl: "https://www.instagram.com/p/DJ_8DWqMG-i/",
      city: "Singapore",
      country: "Singapore"
    },

    {
      lat: 1.2731,
      lng: 103.8190,
      title: "Singapore Cable Car – Mount Faber Station",
      description: "The Singapore Cable Car offers a unique aerial journey connecting mainland Singapore to Sentosa Island, starting from the scenic Mount Faber Station. This iconic ride provides unlimited trips with a single ticket, allowing visitors to enjoy jaw-dropping views of the city skyline, lush jungle, and the sea. The cable car is rainproof, cozy, and perfect for dates, solo adventures, or family fun. Highlights include access to both Sentosa Island and Mount Faber, panoramic vistas, and a memorable, value-packed experience that's more than just transportation—it's an adventure above the city.",
      date: "2025.04",
      instagramPostId: "DJ_6OqvMaP0",
      instagramUrl: "https://www.instagram.com/p/DJ_6OqvMaP0/",
      city: "Singapore",
      country: "Singapore"
    },

    {
      lat: 46.9481,
      lng: 7.4474,
      title: "Exploring Bern, Switzerland",
      description: "Bern, the capital of Switzerland, feels like a living storybook—calm, beautiful, and full of charm. The city's UNESCO-listed Old Town is famous for its medieval arcades, quirky fountains and statues, and the iconic Zytglogge astronomical clock. Strolling through Bern, you'll discover panoramic views from the Rose Garden, picturesque bridges like the Nydeggbrücke over the turquoise River Aare, and a backdrop of mountains and rooftops in one frame. Bern's blend of history, nature, and relaxed vibes makes it a must-visit for those who love scenic walks, architecture, and peaceful city experiences.",
      date: "2025.03",
      instagramPostId: "DJ_yCFZMBE",
      instagramUrl: "https://www.instagram.com/p/DJ_yCFZMBE/",
      city: "Bern",
      country: "Switzerland"
    },
    {
      lat: 46.9481,
      lng: 7.4490,
      title: "Exploring Bern, Switzerland",
      description: "Bern, the capital of Switzerland, feels like a living storybook—calm, beautiful, and full of charm. The city's UNESCO-listed Old Town is famous for its medieval arcades, quirky fountains and statues, and the iconic Zytglogge astronomical clock. Strolling through Bern, you'll discover panoramic views from the Rose Garden, picturesque bridges like the Nydeggbrücke over the turquoise River Aare, and a backdrop of mountains and rooftops in one frame. Bern's blend of history, nature, and relaxed vibes makes it a must-visit for those who love scenic walks, architecture, and peaceful city experiences.",
      date: "2025.03",
      instagramPostId: "DJ_ysXlMNjw",
      instagramUrl: "https://www.instagram.com/p/DJ_ysXlMNjw/",
      city: "Bern",
      country: "Switzerland"
    },

    {
      lat: 46.2074,
      lng: 6.1550,
      title: "Jet d'Eau, Geneva",
      description: "The Jet d'Eau in Geneva is one of the world's tallest fountains and a powerful symbol of the city. Shooting water 140 meters (459 feet) high at a speed of 200 km/h (124 mph), it propels 500 liters per second—about the volume of a bathtub every second. Originally built in 1886 as a pressure release valve for a hydraulic plant, it became a permanent landmark in 1891 and reached its current height in 1951. The fountain is illuminated at night and can be seen from up to 10 kilometers away. Visitors can approach it via a stone pier, but should be mindful of sudden wind shifts that can cause a soaking. The Jet d'Eau is not just an engineering marvel, but also a glowing centerpiece of Geneva's harbor and skyline.",
      date: "2025.03",
      instagramPostId: "DJ8z51wsLpe",
      instagramUrl: "https://www.instagram.com/p/DJ8z51wsLpe/",
      city: "Geneva",
      country: "Switzerland"
    },
    {
      lat: 46.2044,
      lng: 6.1432,
      title: "Pont du Mont-Blanc, Geneva",
      description: "Pont du Mont-Blanc is one of Geneva's most iconic bridges, spanning the Rhône River at the point where it flows out of Lake Geneva. Lined with Swiss and cantonal flags, the bridge offers picturesque views of the city's elegant architecture and the surrounding Alps. It's a popular spot for scenic walks and photography, connecting the historic Old Town with Geneva's modern neighborhoods. From here, visitors can enjoy close proximity to the city's landmarks, including the famous Jet d'Eau fountain, luxury shops, and lakeside promenades. The bridge embodies Geneva's cosmopolitan spirit and is a must-see for anyone exploring Switzerland's second-largest city.",
      date: "2025.03",
      instagramPostId: "DJ8wVrSMWvL",
      instagramUrl: "https://www.instagram.com/p/DJ8wVrSMWvL/",
      city: "Geneva",
      country: "Switzerland"
    },

    {
      lat: 20.6700,
      lng: 105.2500,
      title: "MyQuestVietnam – Volunteering in Da Bia Village",
      description: "Da Bia Village, nestled on the edge of Hoa Binh Lake in northern Vietnam, is home to the Muong Ao Ta ethnic community and renowned for its serene landscape, floating houses, and rich cultural traditions. As part of the MyQuestVietnam experience, volunteers help with community projects such as building drainage paths and cozy sitting areas under traditional stilt houses. The village offers a unique glimpse into rural Vietnamese life, with locals fishing, carrying baskets, and always ready with a smile. Evenings are filled with music, group dances, and lakeside relaxation after a day's work. Da Bia is celebrated for its self-service stalls, authentic homestays, and a strong sense of trust and community, making it a model for sustainable tourism and a recipient of the ASEAN Community Tourism Award.",
      date: "2025.04",
      instagramPostId: "DJy9UFGsJc9",
      instagramUrl: "https://www.instagram.com/p/DJy9UFGsJc9/",
      city: "Da Bia",
      country: "Vietnam"
    },

    {
      lat: 20.6700,
      lng: 105.252,
      title: "MyQuestVietnam – Volunteering in Da Bia Village",
      description: "Da Bia Village, nestled on the edge of Hoa Binh Lake in northern Vietnam, is home to the Muong Ao Ta ethnic community and renowned for its serene landscape, floating houses, and rich cultural traditions. As part of the MyQuestVietnam experience, volunteers help with community projects such as building drainage paths and cozy sitting areas under traditional stilt houses. The village offers a unique glimpse into rural Vietnamese life, with locals fishing, carrying baskets, and always ready with a smile. Evenings are filled with music, group dances, and lakeside relaxation after a day's work. Da Bia is celebrated for its self-service stalls, authentic homestays, and a strong sense of trust and community, making it a model for sustainable tourism and a recipient of the ASEAN Community Tourism Award.",
      date: "2025.04",
      instagramPostId: "DJy2_vPMFsD",
      instagramUrl: "https://www.instagram.com/p/DJy2_vPMFsD/",
      city: "Da Bia",
      country: "Vietnam"
    },

    {
      lat: 46.2342,
      lng: 6.0528,
      title: "Exploring the Frontiers of Physics at CERN",
      description: "CERN, the European Organization for Nuclear Research, is the world's largest particle physics laboratory, located in Meyrin near Geneva on the Franco–Swiss border. A visit to CERN offers a deep dive into cutting-edge research on the fundamental structure of the universe. Highlights include witnessing antimatter experiments that explore why our universe is predominantly matter, touring the vast Data Centre with over 10,000 servers and 450,000 processor cores, and learning about the LEIR and LINAC2 accelerators, which have played pivotal roles in decades of groundbreaking experiments. CERN is not only a hub for Nobel Prize-winning discoveries and technological innovation, such as the invention of the World Wide Web, but also a symbol of international scientific collaboration and open knowledge.",
      date: "2025.03",
      instagramPostId: "DJjXMNYMMJN",
      instagramUrl: "https://www.instagram.com/p/DJjXMNYMMJN/",
      city: "Meyrin",
      country: "Switzerland"
    },

    {
      lat: 50.0702,
      lng: 19.9562,
      title: "MuFo Café at the Museum of Photography in Krakow",
      description: "MuFo Café, located within the main building of the Museum of Photography (MuFo) at Rakowicka 22A in Kraków, is a stylish spot to relax with a coffee before or after exploring the museum's acclaimed exhibitions. The café sits opposite the bookstore, just before the exhibition entrance, and offers a calm, modern atmosphere for visitors. MuFo itself is Poland's only museum entirely dedicated to photography, featuring a rich collection and innovative exhibitions like 'Co robi zdjęcie?' that explore the history and future of the medium. The café is open during museum hours and is part of a cultural hub that includes a library, bookstore, and educational spaces, making it a favorite for locals and travelers seeking inspiration and a break from city life.",
      date: "2025.03",
      instagramPostId: "DJhV5P3s2jJ",
      instagramUrl: "https://www.instagram.com/p/DJhV5P3s2jJ/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 46.5833,
      lng: 7.0833,
      title: "Gruyères – Fairytale Streets and Swiss Cheese",
      description: "Gruyères, Switzerland, enchants with its fairytale streets, castle vibes, and world-famous cheese and wine. The medieval village is deliciously scenic, inviting visitors to wander, eat, sip, and soak in the charming atmosphere. From cobblestone lanes to the iconic Gruyères Castle, every corner feels like a storybook come to life—especially when enjoyed with next-level Gruyère cheese and local wine.",
      date: "2025.03",
      instagramPostId: "DJey9IhMCAI",
      instagramUrl: "https://www.instagram.com/p/DJey9IhMCAI/",
      city: "Gruyères",
      country: "Switzerland"
    },

    {
      lat: 46.5833,
      lng: 7.0853,
      title: "Gruyères – Fairytale Streets and Swiss Cheese",
      description: "Gruyères, Switzerland, enchants with its fairytale streets, castle vibes, and world-famous cheese and wine. The medieval village is deliciously scenic, inviting visitors to wander, eat, sip, and soak in the charming atmosphere. From cobblestone lanes to the iconic Gruyères Castle, every corner feels like a storybook come to life—especially when enjoyed with next-level Gruyère cheese and local wine.",
      date: "2025.03",
      instagramPostId: "DJexou5MgIW",
      instagramUrl: "https://www.instagram.com/p/DJexou5MgIW/",
      city: "Gruyères",
      country: "Switzerland"
    },

    {
      lat: 37.9757,
      lng: 23.7392,
      title: "Sunset from Lycabettus Hill, Athens",
      description: "Lycabettus Hill, the highest point in central Athens at nearly 300 meters above sea level, is renowned for its breathtaking panoramic views of the city, especially at sunset. Covered in lush pine trees and crowned by the charming whitewashed chapel of St. George, the hill is a favorite spot for both locals and travelers seeking a peaceful retreat from the city bustle. Visitors can ascend by foot, funicular, or taxi (partway), and at the summit, enjoy not only the sweeping vistas of the Acropolis and the Aegean Sea but also cafés and restaurants perfect for relaxing as the city lights come alive. Lycabettus Hill is an iconic destination for unforgettable moments and stunning photography in Athens.",
      date: "2025.02",
      instagramPostId: "DJcovQHssNd",
      instagramUrl: "https://www.instagram.com/p/DJcovQHssNd/",
      city: "Athens",
      country: "Greece"
    },

    {
      lat: 46.4578,
      lng: 6.8463,
      title: "The Fork of Vevey – Iconic Lakeside Sculpture",
      description: "Vevey, Switzerland, is home to 'The Fork,' an 8-meter-tall stainless steel sculpture embedded in Lake Geneva near the Alimentarium food museum. Created by Swiss artist Jean-Pierre Zaugg in 1995 to celebrate the museum's tenth anniversary, the fork has become a beloved symbol of Vevey's culinary heritage and artistic spirit. Initially intended as a temporary installation, its popularity led to its permanent return in 2008 following a public petition. The Fork stands as a quirky landmark, offering a striking photo opportunity against the backdrop of the lake and Alps, and invites visitors to explore Vevey's postcard-perfect streets, rich food culture, and serene lakeside atmosphere.",
      date: "2025.03",
      instagramPostId: "DJb_aL4MC9gC",
      instagramUrl: "https://www.instagram.com/p/DJb_aL4MC9gC/",
      city: "Vevey",
      country: "Switzerland"
    },

    {
      lat: 46.4578,
      lng: 6.8483,
      title: "The Fork of Vevey – Iconic Lakeside Sculpture",
      description: "Vevey, Switzerland, is home to 'The Fork,' an 8-meter-tall stainless steel sculpture embedded in Lake Geneva near the Alimentarium food museum. Created by Swiss artist Jean-Pierre Zaugg in 1995 to celebrate the museum's tenth anniversary, the fork has become a beloved symbol of Vevey's culinary heritage and artistic spirit. Initially intended as a temporary installation, its popularity led to its permanent return in 2008 following a public petition. The Fork stands as a quirky landmark, offering a striking photo opportunity against the backdrop of the lake and Alps, and invites visitors to explore Vevey's postcard-perfect streets, rich food culture, and serene lakeside atmosphere.",
      date: "2025.03",
      instagramPostId: "DJb-Bz6s0u6",
      instagramUrl: "https://www.instagram.com/p/DJb-Bz6s0u6/",
      city: "Vevey",
      country: "Switzerland"
    },

    {
      lat: 37.9715,
      lng: 23.7261,
      title: "Acropolis of Athens",
      description: "The Acropolis of Athens is an ancient citadel perched above the city, renowned as the most important sanctuary of ancient Athens and dedicated primarily to Athena, the city's patron goddess. Dominating the center of modern Athens, this UNESCO World Heritage Site features iconic monuments such as the Parthenon, the Propylaea, the Erechtheion, and the Temple of Athena Nike. The Acropolis stands as a symbol of the city's golden age under Pericles in the 5th century BC, reflecting the height of classical art, architecture, and Athenian power. Its harmonious blend of natural setting and architectural mastery has influenced global culture for centuries, making it a must-visit for history and art lovers.",
      date: "2025.02",
      instagramPostId: "DJZm8_iMSXN",
      instagramUrl: "https://www.instagram.com/p/DJZm8_iMSXN/",
      city: "Athens",
      country: "Greece"
    },
    {
      lat: 37.9715,
      lng: 23.7281,
      title: "Acropolis of Athens",
      description: "The Acropolis of Athens is an ancient citadel perched above the city, renowned as the most important sanctuary of ancient Athens and dedicated primarily to Athena, the city's patron goddess. Dominating the center of modern Athens, this UNESCO World Heritage Site features iconic monuments such as the Parthenon, the Propylaea, the Erechtheion, and the Temple of Athena Nike. The Acropolis stands as a symbol of the city's golden age under Pericles in the 5th century BC, reflecting the height of classical art, architecture, and Athenian power. Its harmonious blend of natural setting and architectural mastery has influenced global culture for centuries, making it a must-visit for history and art lovers.",
      date: "2025.02",
      instagramPostId: "DJZhMnFs_IV",
      instagramUrl: "https://www.instagram.com/p/DJZhMnFs_IV/",
      city: "Athens",
      country: "Greece"
    },

    {
      lat: 20.6700,
      lng: 105.2540,
      title: "𝐃𝐚𝐲 𝟏 – 𝐖𝐞'𝐯𝐞 𝐀𝐫��𝐢𝐯𝐞𝐝! 🇻🇳🌿",
      description: "Our journey began as we all gathered in Hanoi, buzzing with energy and excitement! 🧡 After preparing our things, we hopped on a 4-hour bus ride to 𝘋𝘢 𝘉𝘪𝘢 𝘙𝘪𝘷𝘦𝘳. The landscapes were breathtaking — green mountains, peaceful waters — and plenty of bonding time with games and laughter on the way 🎲🚌. We arrived at the community that will be our home for the next 7 days. The locals greeted us with delicious food 🍲, and we explored the area and the lake nearby 🌄. We're now settled into 3 cozy guesthouses, all 30 of us ready to dive into this experience. We ended the night with our first 𝘤𝘪𝘳𝘤𝘭𝘦 𝘰𝘧 𝘨𝘳𝘢𝘵𝘦𝘧𝘶𝘭𝘯𝘦𝘴𝘴, a core tradition of @wheeling2help 🙏 — grounding ourselves in community, purpose, and connection.",
      date: "2025.04",
      instagramPostId: "DJXmZ-5sLTg",
      instagramUrl: "https://www.instagram.com/p/DJXmZ-5sLTg/",
      city: "Da Bac",
      country: "Vietnam"
    },

    {
      lat: 20.6700,
      lng: 105.2560,
      title: "𝐃𝐚𝐲  – 𝐖𝐞'𝐯𝐞 𝐀𝐫𝐢𝐯𝐞𝐝! 🇻🇳🌿",
      description: "Our journey began as we all gathered in Hanoi, buzzing with energy and excitement! 🧡 After preparing our things, we hopped on a 4-hour bus ride to 𝘋𝘢 𝘉𝘪𝘢 𝘙𝘪𝘷𝘦𝘳. The landscapes were breathtaking — green mountains, peaceful waters — and plenty of bonding time with games and laughter on the way 🎲🚌. We arrived at the community that will be our home for the next 7 days. The locals greeted us with delicious food 🍲, and we explored the area and the lake nearby 🌄. We're now settled into 3 cozy guesthouses, all 30 of us ready to dive into this experience. We ended the night with our first 𝘤𝘪𝘳𝘤𝘭𝘦 𝘰𝘧 𝘨𝘳𝘢𝘵𝘦𝘧𝘶𝘭𝘯𝘦𝘴𝘴, a core tradition of @wheeling2help 🙏 — grounding ourselves in community, purpose, and connection.",
      date: "2025.04",
      instagramPostId: "DJXlBkYszQY",
      instagramUrl: "https://www.instagram.com/p/DJXlBkYszQY/",
      city: "Da Bac",
      country: "Vietnam"
    },

    {
      lat: 20.9500,  // Approximate latitude for Ha Long Bay, Vietnam
      lng: 107.0873, // Approximate longitude for Ha Long Bay, Vietnam
      title: "𝐕𝐢𝐞𝐭𝐧𝐚��, 𝐲𝐨𝐮 𝐦𝐚��𝐭𝐞𝐫𝐩𝐢𝐞𝐜𝐞 𝐨𝐟 𝐧𝐚𝐭𝐮𝐫𝐞",
      description: "Had the most unforgettable day cruising through Ha Long Bay — one of the true wonders of Vietnam! From appreciating calm emerald waters, exploring epic caves, hiking peaks with jaw-dropping views, to watching the sun melt into the sea with a glass of wine in hand — this was a dream come true. Here's what was packed into this amazing day: pearl workshop, tasty lunch with vegetarian and fish options onboard, Sung Sot cave visit, speed boat ride, island hike with a chill at the beach below, and a sunset party with wine, fruit, and good vibes on deck. All of it for just €38.53!",
      date: "2025.04",
      instagramPostId: "DJSFrIusYii",
      instagramUrl: "https://instagram.com/p/DJSFrIusYii/",
      city: "Ha Long",
      country: "Vietnam"
    },
    {
      lat: 1.2494,
      lng: 103.8303,
      title: "Sentosa Island – Singapore's Playground Paradise",
      description: "Sentosa Island is Singapore's ultimate leisure and adventure destination, offering a blend of sun-soaked beaches, thrilling attractions, and lush greenery just minutes from the city center. Known for its world-class resorts, Universal Studios Singapore, S.E.A. Aquarium, and vibrant beach clubs, Sentosa is perfect for families, couples, and solo travelers alike. The island's seamless blend of relaxation and excitement, from tranquil coastal walks to adrenaline-pumping rides, makes it a must-visit for anyone seeking fun and unforgettable experiences in Singapore.",
      date: "2025.04",
      instagramPostId: "DJRTD99sCnl",
      instagramUrl: "https://www.instagram.com/p/DJRTD99sCnl/",
      city: "Singapore",
      country: "Singapore"
    },

    {
      lat: 1.2864,
      lng: 103.8531,
      title: "Singapore – The Futuristic Garden City",
      description: "Singapore's most central point lies in the heart of the Downtown Core, where the city's iconic skyline, vibrant culture, and lush green spaces converge. Surrounded by landmarks like Marina Bay Sands, Gardens by the Bay, and the Singapore River, this area epitomizes the city's blend of ultra-modern architecture and natural beauty. Every corner is spotless, efficient, and full of surprises, with Michelin-level street food, world-class shopping, and a seamless mix of cultures. Whether you're marveling at the skyline from a lotus pond or exploring the bustling streets, central Singapore is a must for every traveler's bucket list.",
      date: "2025.04",
      instagramPostId: "DJRR3ZGsQMO",
      instagramUrl: "https://www.instagram.com/p/DJRR3ZGsQMO/",
      city: "Singapore",
      country: "Singapore"
    },
    {
      lat: 20.2500,
      lng: 105.9740,
      title: "Vietnamese Boat Rowers of Trang An, Ninh Binh",
      description: "In Ninh Binh's UNESCO-listed Trang An Scenic Landscape Complex, local boat rowers—often women—are the heart of the experience, expertly guiding visitors through winding waterways surrounded by towering limestone karsts and lush greenery. These skilled rowers, sometimes using their feet to paddle, embody the region's deep connection to the river and its traditions. Wearing iconic conical hats, they navigate tranquil rivers and hidden grottoes, sharing stories about local life and the natural wonders of 'Ha Long Bay on Land.' A boat tour here is not just a journey through breathtaking scenery, but also a cultural encounter with the people who call this magical landscape home.",
      date: "2025.04",
      instagramPostId: "DJOVtjrs6Ck",
      instagramUrl: "https://www.instagram.com/p/DJOVtjrs6Ck/",
      city: "Ninh Binh",
      country: "Vietnam"
    },
    {
      lat: 46.5057,
      lng: 6.6846,
      title: "Lutry, Switzerland – Lakeside Serenity",
      description: "Lutry, Switzerland, is a peaceful lakeside town celebrated for its cobblestone streets, charming atmosphere, and stunning views of Lake Geneva. Visitors are drawn to its tranquil ambiance, scenic promenades, and the pure serenity that surrounds the waterfront. Lutry is one of those hidden gems you never forget, offering a blend of picturesque landscapes and authentic Swiss charm, just a short distance from Geneva.",
      date: "2025.03",
      instagramPostId: "DJK6qLfo2ro",
      instagramUrl: "https://www.instagram.com/p/DJK6qLfo2ro/",
      city: "Lutry",
      country: "Switzerland"
    },
    {
      lat: 46.5057,
      lng: 6.6866,
      title: "Lutry, Switzerland – Lakeside Serenity",
      description: "Lutry, Switzerland, is a peaceful lakeside town celebrated for its cobblestone streets, charming atmosphere, and stunning views of Lake Geneva. Visitors are drawn to its tranquil ambiance, scenic promenades, and the pure serenity that surrounds the waterfront. Lutry is one of those hidden gems you never forget, offering a blend of picturesque landscapes and authentic Swiss charm, just a short distance from Geneva.",
      date: "2025.03",
      instagramPostId: "DJJ5zgzMqcd",
      instagramUrl: "https://www.instagram.com/p/DJJ5zgzMqcd/",
      city: "Lutry",
      country: "Switzerland"
    },
    {
      lat: 21.0389,
      lng: 105.8342,
      title: "Vietnamese People – Part 1 at the Presidential Palace, Hanoi",
      description: "From the warm smiles to the strong community spirit, the people of Vietnam leave a lasting impression. Captured in front of the iconic Presidential Palace in Hanoi, this scene reflects the kindness and unity that define the country. The Presidential Palace, a stunning example of French colonial architecture surrounded by lush gardens, stands as a symbol of both Vietnam's history and its vibrant present. Located in Ba Dinh district near the Ho Chi Minh Mausoleum, the palace grounds are a popular gathering spot for families and visitors, making it an ideal place to experience the heart of Vietnamese culture.",
      date: "2024-Present",
      instagramPostId: "DJJ2JJSsFFf",
      instagramUrl: "https://www.instagram.com/p/DJJ2JJSsFFf/",
      city: "Hanoi",
      country: "Vietnam"
    },
    {
      lat: 46.3833,
      lng: 6.2333,
      title: "Nyon – Roman Ruins and Lakeside Charm",
      description: "Nyon, Switzerland, is a picturesque town on the shores of Lake Geneva, celebrated for its deep Roman roots, charming old town, and vibrant cultural scene. Strolling through Nyon reveals Roman ruins scattered across the town, including impressive columns and archaeological sites that recall its history as the Roman colony Colonia Iulia Equestris. The lakeside promenade offers stunning views of Lake Geneva and the Alps, while the uphill walk to Château de Nyon rewards visitors with panoramic vistas. Nyon is also known for its lively festivals, such as the renowned Paleo Festival, and its cozy cafés like Café Jayko. Whether exploring ancient history, relaxing by the water, or enjoying local events, Nyon promises a delightful blend of culture, nature, and Swiss hospitality.",
      date: "2025.03",
      instagramPostId: "DJGym-dMdK9",
      instagramUrl: "https://www.instagram.com/p/DJGym-dMdK9/",
      city: "Nyon",
      country: "Switzerland"
    },

    {
      lat: 46.3833,
      lng: 6.2353,
      title: "Nyon – Roman Ruins and Lakeside Charm",
      description: "Nyon, Switzerland, is a picturesque town on the shores of Lake Geneva, celebrated for its deep Roman roots, charming old town, and vibrant cultural scene. Strolling through Nyon reveals Roman ruins scattered across the town, including impressive columns and archaeological sites that recall its history as the Roman colony Colonia Iulia Equestris. The lakeside promenade offers stunning views of Lake Geneva and the Alps, while the uphill walk to Château de Nyon rewards visitors with panoramic vistas. Nyon is also known for its lively festivals, such as the renowned Paleo Festival, and its cozy cafés like Café Jayko. Whether exploring ancient history, relaxing by the water, or enjoying local events, Nyon promises a delightful blend of culture, nature, and Swiss hospitality.",
      date: "2025.03",
      instagramPostId: "DJGwrqkszM-",
      instagramUrl: "https://www.instagram.com/p/DJGwrqkszM-/",
      city: "Nyon",
      country: "Switzerland"
    },

    {
      lat: 46.5197,
      lng: 6.6323,
      title: "Exploring Lausanne – Part 1",
      description: "Lausanne, perched on the shores of Lake Geneva and framed by the Alps, is a city bursting with photogenic spots and vibrant culture. Highlights include the Olympic Games Museum surroundings, golden hour walks by the lake in Ouchy, lively pizzerias and coffee festivals, the iconic Pont Bessières offering spectacular city views, and the majestic Lausanne Cathedral at the end of the bridge. From charming old town alleys to panoramic lake vistas, Lausanne is a paradise for city walks, history lovers, and Instagrammers alike.",
      date: "2025.03",
      instagramPostId: "DJFpbhos9jX",
      instagramUrl: "https://www.instagram.com/p/DJFpbhos9jX/",
      city: "Lausanne",
      country: "Switzerland"
    },

    {
      lat: 46.5197,
      lng: 6.6353,
      title: "Exploring Lausanne – Part 1",
      description: "Lausanne, perched on the shores of Lake Geneva and framed by the Alps, is a city bursting with photogenic spots and vibrant culture. Highlights include the Olympic Games Museum surroundings, golden hour walks by the lake in Ouchy, lively pizzerias and coffee festivals, the iconic Pont Bessières offering spectacular city views, and the majestic Lausanne Cathedral at the end of the bridge. From charming old town alleys to panoramic lake vistas, Lausanne is a paradise for city walks, history lovers, and Instagrammers alike.",
      date: "2025.03",
      instagramPostId: "DJFoV3PMUWs",
      instagramUrl: "https://www.instagram.com/p/DJFoV3PMUWs/",
      city: "Lausanne",
      country: "Switzerland"
    },

    {
      lat: 45.8992,
      lng: 6.1286,
      title: "Pont des Amours & Lake Views, Annecy",
      description: "Annecy, France, charms visitors with its stunning lake views—clear water, a dramatic mountain backdrop, and the romantic Pont des Amours bridge adorned with love locks. The city is famed for its cheese fondue, colorful old town architecture with canals and bridges, and a relaxed, photogenic vibe. Annecy is perfect for walking, exploring local markets, small shops, and quiet streets, with plenty of gelato stops along the way. Whether you're after a slow day outdoors or a taste of Savoie culture, Annecy is a top destination for friends and travelers seeking beauty and tranquility.",
      date: "2025.03",
      instagramPostId: "DJFaRqmM81-",
      instagramUrl: "https://www.instagram.com/p/DJFaRqmM81-/",
      city: "Annecy",
      country: "France"
    },

    {
      lat: 45.8992,
      lng: 6.1266,
      title: "Pont des Amours & Lake Views, Annecy",
      description: "Annecy, France, charms visitors with its stunning lake views—clear water, a dramatic mountain backdrop, and the romantic Pont des Amours bridge adorned with love locks. The city is famed for its cheese fondue, colorful old town architecture with canals and bridges, and a relaxed, photogenic vibe. Annecy is perfect for walking, exploring local markets, small shops, and quiet streets, with plenty of gelato stops along the way. Whether you're after a slow day outdoors or a taste of Savoie culture, Annecy is a top destination for friends and travelers seeking beauty and tranquility.",
      date: "2025.03",
      instagramPostId: "DJFZ3_Ns09h",
      instagramUrl: "https://www.instagram.com/p/DJFZ3_Ns09h/",
      city: "Annecy",
      country: "France"
    },

    {
      lat: 9.6566,
      lng: -82.7546,
      title: "Puerto Viejo Main Street – Souvenirs and Local Vibes",
      description: "Puerto Viejo's main street is the vibrant heart of this laid-back Caribbean beach town in Costa Rica. Packed with souvenir shops, tattoo studios, braiding stalls, and colorful local businesses, it's the go-to spot for travelers looking for unique keepsakes and authentic experiences. From handmade crafts and traditional braids to adventurous tattoos, the main street buzzes with energy day and night. The area is easily walkable, lined with restaurants, bars, and the sounds of reggae, making it a must-visit for anyone wanting to soak up the local culture and take home a memorable souvenir.",
      date: "2025.01",
      instagramPostId: "DJFW6zVM3jY",
      instagramUrl: "https://www.instagram.com/p/DJFW6zVM3jY/",
      city: "Puerto Viejo de Talamanca",
      country: "Costa Rica" 
    },
    {
      lat: 20.6896,
      lng: -88.2016,
      title: "Valladolid – Colorful Streets & Mayan Culture",
      description: "Valladolid, Mexico, is a vibrant colonial city in the Yucatán Peninsula known for its pastel-colored streets, rich Mayan heritage, and laid-back atmosphere. The city's main avenues, like Calzada de los Frailes, are filled with photogenic houses, artisan shops, and street stalls offering everything from handmade crafts to traditional braids and tattoos. Valladolid is also famous for its proximity to iconic cenotes such as Cenote Suytun and Cenote Xkeken, and for being a gateway to Chichen Itza. Whether you're strolling past the colorful Valladolid letters in Parque Sisal, sampling authentic tacos, or exploring the local art scene at Casa de los Venados, Valladolid offers a unique blend of culture, history, and Instagram-worthy experiences.",
      date: "2025.01",
      instagramPostId: "DJFW6zVM3jY",
      instagramUrl: "https://www.instagram.com/p/DJFW6zVM3jY/",
      city: "Valladolid",
      country: "Mexico"
    },
    {
      lat: 41.9400,
      lng: 21.3000,
      title: "Matka Canyon – North Macedonia's Natural Wonder",
      description: "Matka Canyon, located just 17 km west of Skopje, is North Macedonia's premier outdoor destination, celebrated for its dramatic cliffs, emerald waters, and diverse flora and fauna. The canyon features the oldest artificial lake in the country, created by a dam on the Treska River, and offers a wealth of activities: kayaking, boat tours to the famed Vrelo Cave (one of the world's deepest underwater caves), hiking scenic trails, and exploring medieval monasteries like St. Andrew's and St. Nicholas Šiševski. With over 5,000 hectares of protected landscape, Matka Canyon is a haven for nature lovers, adventure seekers, and anyone looking to escape the city for breathtaking views, serene waters, and a glimpse into North Macedonia's natural and cultural heritage.",
      date: "2025.01",
      instagramPostId: "DJFGURIseLz",
      instagramUrl: "https://www.instagram.com/p/DJFGURIseLz/",
      city: "Skopje",
      country: "North Macedonia"
    },

    {
      lat: 48.1459,
      lng: 17.1077,
      title: "Bratislava – 1-Day Itinerary Highlights",
      description: "Bratislava, Slovakia's charming capital, is perfect for a one-day adventure packed with color, creativity, and local flavor. Start by getting lost in the mesmerizing mirrors and lights of Multium, then grab a unique soup-in-a-bread-cone at Soupculture. Find calm at Čajovňa v podzemí, a cozy underground teahouse, before wrapping up your day with a dreamy sunset from one of the city's iconic bridges. Bratislava's walkable center is full of quirky museums, vibrant Old Town streets, and hidden gems—ideal for slow travel and spontaneous discoveries.",
      date: "2025.01",
      instagramPostId: "DJFDADSskw6",
      instagramUrl: "https://www.instagram.com/p/DJFDADSskw6/",
      city: "Bratislava",
      country: "Slovakia"
    },
    {
      lat: 45.9237,
      lng: 6.8694,
      title: "Chamonix – Mont Blanc Base & Aiguille du Midi Cable Car",
      description: "Chamonix, nestled at the base of Mont Blanc—the tallest mountain in Western Europe at 4,810 meters—is a year-round destination famed for epic views, great food, and fresh air. A highlight is the Aiguille du Midi cable car, which transports visitors up to 3,842 meters for breathtaking panoramas, with a round-trip ride costing around €82. Chamonix offers world-class skiing in winter, as well as hiking and mountain biking in summer, making it a must-visit for adventure seekers and nature lovers.",
      date: "2025.03",
      instagramPostId: "DJFAki8s0Yn",
      instagramUrl: "https://www.instagram.com/p/DJFAki8s0Yn/",
      city: "Chamonix",
      country: "France"
    },
    {
      lat: 45.9237,
      lng: 6.8674,
      title: "Chamonix – Mont Blanc Base & Aiguille du Midi Cable Car",
      description: "Chamonix, nestled at the base of Mont Blanc—the tallest mountain in Western Europe at 4,810 meters—is a year-round destination famed for epic views, great food, and fresh air. A highlight is the Aiguille du Midi cable car, which transports visitors up to 3,842 meters for breathtaking panoramas, with a round-trip ride costing around €82. Chamonix offers world-class skiing in winter, as well as hiking and mountain biking in summer, making it a must-visit for adventure seekers and nature lovers.",
      date: "2025.03",
      instagramPostId: "DJFBG9tMCGC",
      instagramUrl: "https://www.instagram.com/p/DJFBG9tMCGC/",
      city: "Chamonix",
      country: "France"
    },
    {
      lat: 9.9325,
      lng: -84.0796,
      title: "Sloth-Painted Coffee Maker – San Jose Souvenir",
      description: "In the heart of San Jose, Costa Rica, coffee culture meets artistry with this adorable sloth-painted wooden filter coffee maker, known as a chorreador. Handcrafted and found in local artisan markets, this unique souvenir brings a touch of Costa Rican charm and 'pura vida' spirit to your daily coffee routine. The sloth motif—beloved in Costa Rica—makes every cup cuter and serves as a perfect memento from the city's vibrant craft scene. Whether brewing at home or gifting to a fellow coffee lover, this piece captures the warmth, creativity, and slow-paced joy of Costa Rican life.",
      date: "2024.12",
      instagramPostId: "DlaknQQT35o",
      instagramUrl: "https://www.instagram.com/p/DlaknQQT35o/",
      city: "San Jose",
      country: "Costa Rica"
    },
    {
      lat: 20.6896,
      lng: -88.2016,
      title: "Exploring the Yucatán Region, Mexico",
      description: "The Yucatán region of Mexico is a treasure trove of breathtaking landscapes, ancient Mayan wonders, and vibrant colonial towns. From hidden cenotes like the crystal-clear Cenote Ik-Kil to the iconic pyramid of Chichén Itzá—one of the world's most famous archaeological sites—this area is a dream for explorers. Cruising through scenic roads feels like traveling back in time, with stops in colorful cities such as Valladolid, known for its charming colonial streets and lively atmosphere. The region's food scene is rich with shrimp tacos, brunch spots, and flavors inspired by Mayan culture. Whether you're wandering photogenic avenues, swimming in cenotes, or admiring Mayan glyph art, the Yucatán offers a unique blend of history, adventure, and culture.",
      date: "2025.12",
      instagramPostId: "DH176klIbx8",
      instagramUrl: "https://www.instagram.com/p/DH176klIbx8/",
      city: "Valladolid",
      country: "Mexico"
    },
    {
      lat: 20.6896,
      lng: -88.2056,
      title: "Exploring the Yucatán Region, Mexico",
      description: "The Yucatán region is home to some of Mexico's most breathtaking landscapes and ancient wonders, from hidden cenotes to iconic pyramids. Cruising through its scenic roads feels like traveling back in time, with stops in colorful colonial towns like Valladolid for coffee and a stroll. Don't miss swimming in the crystal-clear Cenote Ik-Kil, exploring the awe-inspiring pyramid of Chichén Itzá—a giant Mayan calendar with 365 steps—and soaking up the vibrant vibes of Valladolid's charming streets. The region's food scene features shrimp tacos, green landscapes, and brunch inspired by Mayan culture. Whether you're wandering photogenic avenues, swimming in cenotes, or admiring Mayan art, the Yucatán offers a dream for explorers.",
      date: "2025.01",
      instagramPostId: "DH16eX_o3WK",
      instagramUrl: "https://www.instagram.com/p/DH16eX_o3WK/",
      city: "Valladolid",
      country: "Mexico"
    },

    {
      lat: 20.6296,
      lng: -87.0739,
      title: "Exploring the Quintana Roo Coast: From Cancun to Playa del Carmen",
      description: "The Quintana Roo coastline is famed for its turquoise waters, vibrant beach towns, and colorful local culture. From Cancun's perfect weather and endless beaches to the charming streets and souvenir stalls of Puerto Morelos, every stop offers a new adventure. Playa del Carmen enchants with stunning sunset views and delicious guacamole, while Akumal invites you to swim with turtles and snorkel vibrant reefs. Whether you're exploring Mayan ruins, bargaining for unique crafts like painted skulls and textiles, or simply soaking up the sun, this stretch of the Riviera Maya is a paradise for adventurers, foodies, and anyone seeking relaxation and exploration.",
      date: "2025.01",
      instagramPostId: "DHuB01cMnFK",
      instagramUrl: "https://www.instagram.com/p/DHuB01cMnFK/",
      city: "Playa del Carmen",
      country: "Mexico"
    },

    {
      lat: 20.6296,
      lng: -87.0769,
      title: "Exploring the Quintana Roo Coast: From Cancun to Playa del Carmen",
      description: "The Quintana Roo coastline is famed for its turquoise waters, vibrant beach towns, and colorful local culture. From Cancun's perfect weather and endless beaches to the charming streets and souvenir stalls of Puerto Morelos, every stop offers a new adventure. Playa del Carmen enchants with stunning sunset views and delicious guacamole, while Akumal invites you to swim with turtles and snorkel vibrant reefs. Whether you're exploring Mayan ruins, bargaining for unique crafts like painted skulls and textiles, or simply soaking up the sun, this stretch of the Riviera Maya is a paradise for adventurers, foodies, and anyone seeking relaxation and exploration.",
      date: "2025.01",
      instagramPostId: "DHuAEdRMJWv",
      instagramUrl: "https://www.instagram.com/p/DHuAEdRMJWv/",
      city: "Playa del Carmen",
      country: "Mexico"
    },

    {
      lat: 9.9763,
      lng: -84.8330,
      title: "Walking and Experiencing Puntarenas at Costa Rica",
      description: "Puntarenas is Costa Rica's coastal gem, offering a unique blend of culture, nature, and serenity. Founded in 1575, this bustling port town is known for its beautiful beaches, vibrant local life, and rich history. Visitors can enjoy relaxed strolls along the oceanfront, feast on fresh seafood at open-air cafés, and explore lively local markets. The town's Paseo de los Turistas promenade is lined with shade trees, seafood restaurants, and vendors selling souvenirs and the famous Churchill dessert. Puntarenas is a gateway to adventure, with easy access to the Nicoya Peninsula, nearby wildlife refuges, and boat tours to Tortuga Island. Whether you're seeking peaceful views, authentic Costa Rican lifestyle, or a taste of local festivities, Puntarenas offers a welcoming and memorable experience.",
      date: "2024.12",
      instagramPostId: "DHPmMF-9o40I",
      instagramUrl: "https://www.instagram.com/p/DHPmMF-9o40I/",
      city: "Puntarenas",
      country: "Costa Rica"
    },

    {
      lat: 9.9763,
      lng: -84.8330,
      title: "Walking and Experiencing Puntarenas at Costa Rica",
      description: "Puntarenas is Costa Rica's coastal gem, offering a unique blend of culture, nature, and serenity. Founded in 1575, this bustling port town is known for its beautiful beaches, vibrant local life, and rich history. Visitors can enjoy relaxed strolls along the oceanfront, feast on fresh seafood at open-air cafés, and explore lively local markets. The town's Paseo de los Turistas promenade is lined with shade trees, seafood restaurants, and vendors selling souvenirs and the famous Churchill dessert. Puntarenas is a gateway to adventure, with easy access to the Nicoya Peninsula, nearby wildlife refuges, and boat tours to Tortuga Island. Whether you're seeking peaceful views, authentic Costa Rican lifestyle, or a taste of local festivities, Puntarenas offers a welcoming and memorable experience.",
      date: "2024.12",
      instagramPostId: "DHpJv9fIPmF",
      instagramUrl: "https://www.instagram.com/p/DHpJv9fIPmF/",
      city: "Puntarenas",
      country: "Costa Rica"
    },

    {
      lat: 50.077808,
      lng: 19.991343,
      title: "Polish Aviation Museum in Kraków",
      description: "The Polish Aviation Museum in Kraków is one of the world's premier aviation museums, set on the historic grounds of the former Rakowice-Czyżyny airfield—one of Europe's oldest, dating back to 1912. The museum's collection features over 300 aircraft, including rare World War I and II planes, Soviet-era jets like the MiG-29, gliders, helicopters, and unique artifacts such as the only surviving Russian Grigorovich M-15 flying boat. Visitors can explore open-air exhibits, historic hangars, and a modern main building shaped like a propeller. The museum is a must-visit for aviation enthusiasts, history buffs, and families, offering immersive experiences, interactive displays, and special events like air shows. Ticket prices are affordable, with discounts for students and free admission for young children.",
      date: "2025.03",
      instagramPostId: "DHjmKRzMIwV",
      instagramUrl: "https://www.instagram.com/p/DHjmKRzMIwV/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 9.6350,
      lng: -82.6540,
      title: "POV: Seeing a Sloth for the First Time – Manzanillo, Costa Rica",
      description: "Fifteen minutes of staring at the same patch of trees, and then—finally—I spot it. A bundle of fur clinging lazily to a branch, moving so slowly it's almost imperceptible. Its face, frozen in a permanent, sleepy smile, tilts slightly as if acknowledging my presence. The world around it is alive with buzzing insects and chattering monkeys, yet the sloth exists in its own peaceful dimension, unbothered, unhurried. Watching it, I feel my own heartbeat slow, my thoughts quiet. Maybe, for once, nature is teaching me to stop rushing.",
      date: "2024.12",
      instagramPostId: "DHZsI8loUFe",
      instagramUrl: "https://www.instagram.com/p/DHZsI8loUFe/",
      city: "Manzanillo",
      country: "Costa Rica"
    },
    {
      lat: 38.0391,
      lng: 23.8297,
      title: "The Feeling of Coming Back to Your Own Country – Vrilissia, Athens",
      description: "After three years living in Krakow, Poland, returning to Athens—specifically the Vrilissia region—brings a profound sense of belonging. Each visit is filled with the warmth of family and friends, vibrant gatherings, and unforgettable hangouts that make every return feel like a heartfelt reunion. The lively atmosphere and community spirit of Vrilissia, a northeastern suburb of Athens nestled at the foot of Penteli Mountain, offer the perfect backdrop for reconnecting with your roots and celebrating the magic of homecoming.",
      date: "2025.02",
      instagramPostId: "DHXBHvKoNvw",
      instagramUrl: "https://www.instagram.com/p/DHXBHvKoNvw/",
      city: "Athens",
      country: "Greece"
    },
    {
      lat: 9.8644,
      lng: -83.9194,
      title: "Exploring Cartago, Costa Rica",
      description: "Wandering through the misty roads of Cartago, Costa Rica, feels like stepping into a dream. Surrounded by lush green valleys, towering volcanoes like Irazú, and hidden waterfalls, the region offers an unforgettable drive through nature's masterpiece. Cartago is home to the mystical ruins of Santiago Apóstol, the stunning Orosi Valley, and the magnificent Basilica of Our Lady of the Angels—one of the most important pilgrimage sites in Latin America. The city's colonial past, vibrant markets, and proximity to both the Pacific and Caribbean make it a perfect destination for road trip lovers, history enthusiasts, and nature seekers. Cartago's cool climate, scenic drives, and rich cultural heritage invite travelers to explore beyond Costa Rica's beaches and discover its original capital in the heart of the Central Valley.",
      date: "2024.12",
      instagramPostId: "DGy0RNdsB1H",
      instagramUrl: "https://www.instagram.com/p/DGy0RNdsB1H/",
      city: "Cartago",
      country: "Costa Rica"
    },
    {
      lat: 8.9131,
      lng: -79.5282,
      title: "Amador Causeway – A Scenic Escape in Panama City",
      description: "Just a short ride from downtown, the Amador Causeway offers stunning views of the Panama City skyline and the Panama Canal. Built using rocks from the canal's excavation, this iconic road connects four small islands, blending history, nature, and leisure. Visitors can enjoy breathtaking sunsets, rent a bike to cruise the 6km stretch, dine at waterfront restaurants serving fresh seafood, and explore the Frank Gehry-designed Museum of Biodiversity. The causeway is free to visit, with rental fees applying for bikes and attractions, making it ideal for solo travelers, couples, families, and photography lovers.",
      date: "2024.12",
      instagramPostId: "DGuyZCVMAj7",
      instagramUrl: "https://www.instagram.com/p/DGuyZCVMAj7/",
      city: "Panama City",
      country: "Panama"
    },
    {
      lat: 8.9131,
      lng: -79.5242,
      title: "Amador Causeway – A Scenic Escape in Panama City",
      description: "Just a short ride from downtown, the Amador Causeway offers stunning views of the Panama City skyline and the Panama Canal. Built using rocks from the canal's excavation, this iconic road connects four small islands, blending history, nature, and leisure. Visitors can enjoy breathtaking sunsets, rent a bike to cruise the 6km stretch, dine at waterfront restaurants serving fresh seafood, and explore the Frank Gehry-designed Museum of Biodiversity. The causeway is free to visit, with rental fees applying for bikes and attractions, making it ideal for solo travelers, couples, families, and photography lovers.",
      date: "2024.12",
      instagramPostId: "DGtZrAvsdaJ",
      instagramUrl: "https://www.instagram.com/p/DGtZrAvsdaJ/",
      city: "Panama City",
      country: "Panama"
    },
    {
      lat: 4.6462,
      lng: -74.0628,
      title: "Colombian Coffee Experience in Bogotá, Colombia",
      description: "Colombia isn't just famous for coffee—it's a global leader in specialty brews! This coffee-tasting journey in Quinta Camacho, Chapinero—Bogotá's trendiest neighborhood—offers award-winning specialty coffees from different Colombian regions. Visitors learn about the bean-to-cup process with expert baristas and explore Bogotá's vibrant café culture. The experience includes guided tastings at top specialty coffee shops and insights into why Colombian coffee is considered among the world's finest. Ideal for coffee lovers and travelers seeking immersive local experiences.",
      date: "2024-Present",
      instagramPostId: "DGjQiXMMcYZ",
      instagramUrl: "https://www.instagram.com/p/DGjQiXMMcYZ/",
      city: "Bogotá",
      country: "Colombia"
    },
    {
      lat: 4.6462,
      lng: -74.0668,
      title: "Colombian Coffee Experience in Bogotá, Colombia",
      description: "Colombia isn't just famous for coffee—it's a global leader in specialty brews! This coffee-tasting journey in Quinta Camacho, Chapinero—Bogotá's trendiest neighborhood—offers award-winning specialty coffees from different Colombian regions. Visitors learn about the bean-to-cup process with expert baristas and explore Bogotá's vibrant café culture. The experience includes guided tastings at top specialty coffee shops and insights into why Colombian coffee is considered among the world's finest. Ideal for coffee lovers and travelers seeking immersive local experiences.",
      date: "2024.12",
      instagramPostId: "DGitcNnMH-i",
      instagramUrl: "https://www.instagram.com/p/DGitcNnMH-i/",
      city: "Bogotá",
      country: "Colombia"
    },
    {
      lat: 8.956960,
      lng: -79.534727,
      title: "Mola Museum (MuMo), Panama City",
      description: "The Mola Museum (MuMo) in Panama City is dedicated to the vibrant textile art of the indigenous Guna people, showcasing over 200 molas in five themed exhibition rooms. Located in the historic Casco Viejo district at the El Colegio II building on José D. de la Obaldía Street, the museum offers a unique insight into the evolution, spirituality, and storytelling behind these intricate fabrics. Visitors can enjoy bilingual exhibits (Spanish and English), interactive displays, and creative workshops suitable for all ages. Entry is free, making it an essential stop for art lovers, families, and anyone interested in indigenous culture and Panamanian heritage.",
      date: "2024.12",
      instagramPostId: "DGb8n-3Ih-O",
      instagramUrl: "https://www.instagram.com/p/DGb8n-3Ih-O/",
      city: "Panama City",
      country: "Panama"
    },
    
    {
      lat: 8.956960,
      lng: -79.534797,
      title: "Mola Museum (MuMo), Panama City",
      description: "The Mola Museum (MuMo) in Panama City is dedicated to the vibrant textile art of the indigenous Guna people, showcasing over 200 molas in five themed exhibition rooms. Located in the historic Casco Viejo district at the El Colegio II building on José D. de la Obaldía Street, the museum offers a unique insight into the evolution, spirituality, and storytelling behind these intricate fabrics. Visitors can enjoy bilingual exhibits (Spanish and English), interactive displays, and creative workshops suitable for all ages. Entry is free, making it an essential stop for art lovers, families, and anyone interested in indigenous culture and Panamanian heritage.",
      date: "2024.12",
      instagramPostId: "DGb6ZW4IDag",
      instagramUrl: "https://www.instagram.com/p/DGb6ZW4IDag/",
      city: "Panama City",
      country: "Panama"
    },
    {
      lat: 9.3897,
      lng: -84.1383,
      title: "Manuel Antonio National Park, Costa Rica",
      description: "Manuel Antonio National Park, nestled on Costa Rica's Pacific coast near Quepos, is a small yet stunning protected area renowned for its incredible biodiversity and breathtaking scenery. The park is a paradise where lush rainforest meets pristine white-sand beaches and turquoise waters, home to sloths, howler monkeys, toucans, and over 100 species of mammals and 180+ bird species. Visitors can explore scenic jungle trails, relax on beaches like Playa Espadilla Sur and Playa Manuel Antonio, and snorkel among coral reefs. The park is open Tuesday through Sunday, 7:30 am to 4 pm, with visitor limits to preserve its natural beauty. Ticket fees vary: foreigners $18/adult, children $5, locals $5 (adults), $1.50 (children). Manuel Antonio is a must-visit for nature lovers and adventure seekers alike.",
      date: "2024.12",
      instagramPostId: "DGQ3tenMzB9",
      instagramUrl: "https://www.instagram.com/p/DGQ3tenMzB9/",
      city: "Quepos",
      country: "Costa Rica"
    },
    {
      lat: 41.9502,
      lng: 21.2993,
      title: "Amazing Tour with GetYourGuide in Matka Canyon, North Macedonia!",
      description: "Just 15 km from Skopje, Matka Canyon is a paradise for nature lovers! This stunning gorge is home to Vrelo Cave, one of the deepest underwater caves in the world. Why visit Matka Canyon? Glide through turquoise waters on scenic boat rides, hike trails to hidden monasteries and panoramic viewpoints, and paddle through serene waters by kayak. The canyon is a haven for rare butterflies, birds, and unique wildlife, and offers mesmerizing underground wonders in Vrelo Cave. Covering 5,000 hectares, Matka Canyon features dramatic cliffs, historic churches, and endless opportunities for adventure—perfect for hikers, photographers, and history buffs. Ticket fees: boat tours ~400 MKD (€7), kayak rental ~200 MKD (€3.50/hour). Pro tip: Visit early morning for magical lighting and fewer crowds.",
      date: "2025.01",
      instagramPostId: "DGMXeFJIirW",
      instagramUrl: "https://www.instagram.com/p/DGMXeFJIirW/",
      city: "Skopje",
      country: "North Macedonia"
    },
    {
      lat: 50.067472,
      lng: 19.991694,
      title: "Exotic Festival 2025 at Tauron Arena Kraków",
      description: "The Exotic Festival 2025 at Tauron Arena Kraków was an unforgettable one-day event that brought together exotic animals, tropical plants, and unique exhibits, creating an electrifying and mesmerizing atmosphere. From giant African snails to intricately designed terrariums, every corner was a feast for the senses. Highlights included educational zones with passionate breeders, a vibrant marketplace featuring rare plants, handmade art, and unique jewelry, and face-to-face encounters with fascinating creatures. More than just a festival, it was a journey into the exotic world—perfect for families, nature lovers, and adventurers alike.",
      date: "2024-Present",
      instagramPostId: "DFJZ5hOID_K",
      instagramUrl: "https://www.instagram.com/p/DFJZ5hOID_K/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 50.0647,
      lng: 19.9480,
      title: "Making Homemade Pierogis in Krakow, Poland",
      description: "After three years, I'm back in Krakow—the place where it all began. Nothing beats the smell of fresh pierogis cooking in the kitchen, just like my grandmother used to make them. The process is therapeutic: hand-rolling the dough, stuffing it with savory fillings, and folding them with love. It's more than just food; it's a piece of my heart that I've carried across borders. Krakow is where I feel most connected to my roots—full of nostalgia, tradition, and joy in simple moments. This is the magic of homemade pierogis: a true taste of Polish heritage, best enjoyed with family and friends in the city's warm, welcoming kitchens.",
      date: "2024-Present",
      instagramPostId: "DFETS7So3dK",
      instagramUrl: "https://www.instagram.com/p/DFETS7So3dK/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 9.9325,
      lng: -84.0796,
      title: "Gingerbread House Competition – San Jose, Costa Rica",
      description: "Costa Rica's festive spirit shines in San Jose during Christmas with a joyful gingerbread house competition, where families come together to craft creative, festive houses in a warm, community atmosphere. This unique experience blends local holiday traditions with hands-on workshops, allowing both kids and adults to express their creativity and create lasting memories. The event highlights Costa Rican craftsmanship and the holiday vibe at the heart of the city, making it a perfect activity for families, creative enthusiasts, and Christmas lovers seeking to embrace the magic of the season.",
      date: "2024.12",
      instagramPostId: "dimiles.away",
      instagramUrl: "https://www.instagram.com/p/dimiles.away/",
      city: "San Jose",
      country: "Costa Rica"
    },

    {
      lat: 5.8192,
      lng: -73.0333,
      title: "Cascada El Chiflón – A Hidden Paradise in Colombia",
      description: "Cascada El Chiflón is a breathtaking waterfall in Colombia, cascading over 70 meters and surrounded by lush, tropical greenery. Its name, 'El Chiflón,' comes from the whistling sound made by the rushing water. Visitors can enjoy crystal-clear pools for a refreshing dip, serene hiking trails with jaw-dropping views, and suspension bridges offering panoramic vistas. Entry is approximately $3 (10,000 COP). The site is perfect for hikers, photographers, and anyone seeking tranquility in nature, with plenty of photo spots for adventure seekers. Cascada El Chiflón is a must-visit gem for those exploring Colombia's natural beauty.",
      date: "2024.12",
      instagramPostId: "DE6GZEjl9XH",
      instagramUrl: "https://www.instagram.com/p/DE6GZEjl9XH/",
      city: "Boyacá",
      country: "Colombia"
    },
    

    {
      lat: 8.9739,
      lng: -79.5306,
      title: "Discover Ancon Hill, Panama City",
      description: "Ancon Hill (Cerro Ancón) stands tall at 199 meters, offering the best panoramic views of Panama City, the famous Miraflores Locks, and the lush rainforest. It is a protected area home to unique wildlife like sloths, toucans, and butterflies. The lush greenery becomes even more vibrant in the rain, and wildlife spotting improves as many animals become more active. Ancon Hill is a gift from nature with no entry charge, symbolizing Panama's sovereignty, with a flag at the summit commemorating independence. The hike is moderate and accessible for most, taking around 30-40 minutes to the top. It is ideal for nature lovers, photographers, and adventure seekers.",
      date: "2024.12",
      instagramPostId: "DEyAeSHMAyY",
      instagramUrl: "https://www.instagram.com/p/DEyAeSHMAyY/",
      city: "Panama City",
      country: "Panama"
    },
    {
      lat: 8.9525,
      lng: -79.5350,
      title: "Casco Viejo – Panama City's Historic Soul",
      description: "Casco Viejo, also known as Casco Antiguo or San Felipe, is the UNESCO-listed historic district of Panama City, celebrated for its cobblestone streets, colonial architecture, vibrant murals, and lively atmosphere. Founded in 1673 after the original city was destroyed by pirates, Casco Viejo is a cultural melting pot where French, Spanish, and Caribbean influences blend in restored neoclassical buildings, centuries-old churches, boutique cafés, rooftop bars, and colorful plazas. Highlights include the famous Golden Altar at Iglesia de San José, the bustling Plaza de la Independencia, and panoramic city views from rooftop lounges. Entry to explore Casco Viejo is free, with guided tours available for $10–$20. It's a must-visit for history lovers, foodies, and anyone seeking Panama's vibrant nightlife and cultural heart.",
      date: "2024.12",
      instagramPostId: "DEvqO4io7yy",
      instagramUrl: "https://www.instagram.com/p/DEvqO4io7yy/",
      city: "Panama City",
      country: "Panama"
    },
    {
      lat: 9.9001,
      lng: -83.8838,
      title: "Carlos Durán Sanatorium – Cartago, Costa Rica",
      description: "Nestled in the scenic hills near Cartago, the Carlos Durán Sanatorium is one of Costa Rica's most intriguing and eerie attractions. Built in 1918 by Dr. Carlos Durán Cartín—who briefly served as the country's president—the sanatorium was originally a tuberculosis treatment center, chosen for its remote location and healing climate. At its peak, it housed up to 300 patients and was staffed largely by nuns from the Sisters of Charity Santa Anna. The facility later served as an orphanage and prison before closing permanently in the 1970s. Today, the decaying Gothic-modernist buildings and graffiti-lined corridors have earned a reputation as the country's most haunted site, attracting history buffs, ghost hunters, and explorers. Visitors can roam the grounds, discover chilling legends of ghostly nuns and children, and capture panoramic views of Cartago and the Irazú Volcano. Admission is about $3, with guided tours available for a deeper dive into its mysterious past.",
      date: "2024.12",
      instagramPostId: "DEqu51eIZKK",
      instagramUrl: "https://www.instagram.com/p/DEqu51eIZKK/",
      city: "Cartago",
      country: "Costa Rica"
    },
    
    {
      lat: 21.1619,
      lng: -86.8515,
      title: "Should You Rent a Car in Cancun, Mexico?",
      description: "Renting a car in Cancun is a great way to unlock the best of Mexico's Yucatán Peninsula, offering freedom to explore cenotes, Mayan ruins, and charming towns at your own pace. Many travelers worry about hidden fees, frozen deposits, or scams at the airport, but with reputable agencies like Jolly Car Rent, Discover Cars, or Fiesta Car Rental, you can enjoy transparent pricing, no hidden fees, and reliable service. Always opt for full coverage insurance (required by Mexican law), inspect your vehicle, and confirm all costs upfront. Most agencies require a valid driver's license, passport, credit card, and a minimum age of 18–25. Renting a car is often cheaper and more flexible than relying on tours or taxis, making it ideal for adventurous travelers who want to see more than just the resorts.",
      date: "2024.12",
      instagramPostId: "DEn6vrEIKI4",
      instagramUrl: "https://www.instagram.com/p/DEn6vrEIKl4/",
      city: "Cancun",
      country: "Mexico"
    },

    {
      lat: 9.6566,
      lng: -82.7546,
      title: "Renting an Airbnb in Puerto Viejo, Costa Rica",
      description: "Looking for a tropical escape that blends adventure and relaxation? Renting an Airbnb in Puerto Viejo de Talamanca is the perfect choice. Wake up to howler monkeys calling from the treetops, unwind with toucans, sloths, and the soothing sound of tropical rain, and experience true eco-living while staying close to stunning Caribbean beaches. Price ranges vary from budget-friendly ($50–$100/night) to luxe options ($150–$250+/night), making it ideal for couples, groups, or anyone seeking a romantic escape. Puerto Viejo is home to Costa Rica's top surf spots and boasts a laid-back Caribbean vibe that's unmatched anywhere else.",
      date: "2024.12",
      instagramPostId: "DEljocLoi4w",
      instagramUrl: "https://www.instagram.com/p/DEljocLoi4w/",
      city: "Puerto Viejo de Talamanca",
      country: "Costa Rica"
    },
    {
      lat: 20.661014,
      lng: -88.550438,
      title: "Cenote Ik-Kil – Dive Into Paradise, Mexico",
      description: "Cenote Ik-Kil is a spectacular natural limestone sinkhole (cenote azul) near Chichén Itzá, sacred to the Mayans and famed for its jaw-dropping 40-meter depth and crystal-clear sapphire waters. Surrounded by lush jungle vines, it feels like stepping into an otherworldly oasis—perfect for swimming, floating, and escaping the heat. The cenote features a diving platform for thrill-seekers and is just 3km from Chichén Itzá, making it an ideal stop after exploring ancient ruins. Tickets cost about $5 USD (100 MXN), with lockers and life jackets available for rent. While it's a paradise for adventure junkies, swimmers, and families, visitors should be aware of occasional water contamination and frequent crowds. Pro tip: Visit early or late afternoon to avoid the rush.",
      date: "2024.12",
      instagramPostId: "DEhbFppspwD",
      instagramUrl: "https://www.instagram.com/p/DEhbFppspwD/",
      city: "Yucatán",
      country: "Mexico"
    },

    {
      lat: 9.9763,
      lng: -84.8360,
      title: "Walking and Experiencing Puntarenas at Costa Rica",
      description: "Puntarenas is Costa Rica's coastal gem, offering a unique blend of culture, nature, and serenity. Founded in 1575, this bustling port town is known for its beautiful beaches, vibrant local life, and rich history. Visitors can enjoy relaxed strolls along the oceanfront, feast on fresh seafood at open-air cafés, and explore lively local markets. The town's Paseo de los Turistas promenade is lined with shade trees, seafood restaurants, and vendors selling souvenirs and the famous Churchill dessert. Puntarenas is a gateway to adventure, with easy access to the Nicoya Peninsula, nearby wildlife refuges, and boat tours to Tortuga Island. Whether you're seeking peaceful views, authentic Costa Rican lifestyle, or a taste of local festivities, Puntarenas offers a welcoming and memorable experience.",
      date: "2024.12",
      instagramPostId: "DEUA-Vwsm_p",
      instagramUrl: "https://www.instagram.com/p/DEUA-Vwsm_p/",
      city: "Puntarenas",
      country: "Costa Rica"
    },
    {
      lat: 4.5231,
      lng: -73.9856,
      title: "Cascada La Chorrera – Colombia's Tallest Waterfall Near Bogotá",
      description: "Cascada La Chorrera is Colombia's tallest waterfall, plunging an impressive 590 meters (1,936 feet) through lush cloud forests near the town of Choachi, just 30 kilometers from Bogotá. Reaching the falls is an adventure: order an Uber or take a bus, then hike 2–3 hours through scenic paramo landscapes, crossing suspension bridges and passing smaller waterfalls like El Chiflón along the way. The moderately difficult hike rewards visitors with breathtaking views and the chance to swim in cold, crystal-clear waters. Entrance costs around $10 USD, with transport from Bogotá typically $50 by Uber. The entire trip takes about 5 hours, making it a perfect day escape for hikers, nature lovers, and anyone seeking Colombia's wild beauty.",
      date: "2024.12",
      instagramPostId: "DEGj9Dosjg-",
      instagramUrl: "https://www.instagram.com/p/DEGj9Dosjg-/",
      city: "Choachi",
      country: "Colombia"
    },
    {
      lat: 9.3897,
      lng: -84.1383,
      title: "Exploring Manuel Antonio National Park, Costa Rica",
      description: "Manuel Antonio National Park is one of the world's smallest yet most biodiverse national parks, renowned for its lush rainforests, turquoise beaches, and abundant wildlife—including sloths, monkeys, and colorful toucans. Visitors can hike stunning jungle trails that lead to pristine beaches, swim, snorkel, or simply enjoy unmatched views. Entry fees are $18 for adults and free for kids under 12; the park is open from 7 AM to 4 PM, closed on Tuesdays. Hidden gems include Playa Biesanz for calm waters and ziplining adventures through the rainforest canopy. For sunset, El Avión Restaurant offers epic ocean views paired with fresh seafood and drinks. Manuel Antonio is a paradise for adventure lovers, nature enthusiasts, and anyone seeking a unique Costa Rican experience.",
      date: "2024-Present",
      instagramPostId: "DEGd67XMO2P",
      instagramUrl: "https://www.instagram.com/p/DEGd67XMO2P/",
      city: "Quepos",
      country: "Costa Rica"
    },

    {
      lat: 50.05672,
      lng: 19.91050,
      title: "Saint Coffee Festival 2024 – Kraków, Poland",
      description: "The Saint Coffee Festival 2024 at Hala Cracovia in Kraków is a must-visit event for coffee enthusiasts, taking place on 14–15 December 2024. The festival features exclusive coffee tastings with rare brews from over 30 specialty roasters worldwide and thrilling live barista battles where top baristas compete for the ultimate coffee crown. Fun facts: the festival celebrates Saint Drogo, the patron saint of coffee lovers, and local legend claims that the aroma of freshly brewed coffee helps ward off the winter blues. A day pass costs 20zł and includes a recyclable cup you can keep. The festival is perfect for anyone passionate about coffee culture, specialty brews, and Kraków's vibrant community spirit.",
      date: "2024.12",
      instagramPostId: "DDni8MUIo6D",
      instagramUrl: "https://www.instagram.com/p/DDni8MUIo6D/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 50.0468,
      lng: 19.9571,
      title: "Christmas Breakfast Weekend at Hala Lipowa, Kraków",
      description: "Hala Lipowa in Kraków comes alive during the Christmas season with a perfect blend of festive vibes, great food, and community spirit. The weekend kicks off with the Breakfast Festival, where for 29 PLN, guests enjoy classic breakfasts paired with coffee in a cozy, welcoming setting. On Sunday, the Jarmark Świąteczny (Christmas Market) transforms the venue with handmade decorations, local crafts, unique gifts, and seasonal treats, all set to the backdrop of live music that elevates the holiday magic. Hala Lipowa's vibrant food hall atmosphere, diverse street food stalls, and creative events make it a must-visit for anyone seeking Kraków's authentic holiday charm and culinary delights.",
      date: "2024.12",
      instagramPostId: "DDa1iPrMTGu",
      instagramUrl: "https://www.instagram.com/p/DDa1iPrMTGu/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 50.0617,
      lng: 19.9370,
      title: "Lighting of the Christmas Tree – Krakow Main Square",
      description: "Krakow's Main Square comes alive each December with the magical lighting ceremony of its iconic Christmas tree. This year's tree stands 15 meters tall and dazzles with 26,000 energy-saving lights, 63 icicles, and over 1,000 baubles, creating a festive atmosphere in the heart of the city. The event draws locals and visitors alike to celebrate the start of the holiday season beneath the historic spires of St. Mary's Basilica. The lighting ceremony is a highlight of Krakow's winter, perfect for families, photographers, and anyone seeking the true spirit of Christmas in Poland.",
      date: "8 December 2024",
      instagramPostId: "DDUThw5sDOr",
      instagramUrl: "https://www.instagram.com/p/DDUThw5sDOr/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 51.4308,
      lng: 17.7875,
      title: "Gatsby Party Night – Kobyla Góra, Poland",
      description: "In Kobyla Góra, a private Gatsby-inspired party brought friends together for an unforgettable night in a cozy bar. Guests embraced the theme with creative costumes—one even arriving as Zeus—while the organizer (dressed as Joker) set the tone with fantastic food and vibrant vibes. The highlight was a live performance blending hip-hop, rap, and pop, delivering unmatched energy and entertainment. The evening was filled with laughter, music, and great company, making it a truly memorable experience for everyone involved.",
      date: "2024.11",
      instagramPostId: "DDH-cWbsrWH",
      instagramUrl: "https://www.instagram.com/p/DDH-cWbsrWH/",
      city: "Kobyla Góra",
      country: "Poland"
    },

    {
      lat: 51.1091,
      lng: 17.0316,
      title: "Wroclaw's Magical Christmas Market",
      description: "Wroclaw's Jarmark Bożonarodzeniowy transforms the city's Old Town Rynek into a fairytale wonderland, blending Gothic architecture with twinkling lights. Unique traditions include sipping on grzaniec galicyjski (Galician mulled wine) from collectible mugs—some flavors are exclusive to this market! Entry is free, and visitors can browse handcrafted ornaments, candles, and treats from local and international vendors. The market is family-friendly, featuring whimsical dwarf displays and Santa's sleigh rides for children. More than just a market, it's a festive tradition and the perfect way to embrace the season's spirit. The event runs from November 17 to December 24 at Rynek, Plac Solny, and Świdnicka Street.",
      date: "2024.12",
      instagramPostId: "DDFJbVYMLd9",
      instagramUrl: "https://www.instagram.com/p/DDFJbVYMLd9/",
      city: "Wroclaw",
      country: "Poland"
    },
    {
      lat: 50.050846,
      lng: 19.931291,
      title: "19th Krakow Jazz Autumn – What a Night! Manggha Museum",
      description: "The 19th Krakow Jazz Autumn ended on a high note at the iconic Manggha Museum, with the final concert of the Blue Shroud Band residency and a phenomenal performance by the ADAM Quartet. This world-class jazz festival brings together international musicians and innovative collaborations—like the ADAM Quartet's fresh take on classical and contemporary music with guests such as Laufey and ISH. The festival's atmosphere blends Krakow's vibrant culture, stunning venues, and unforgettable live music. Mark your calendar for 2025 and immerse yourself in the magic of Krakow Jazz Autumn!",
      date: "2024.11",
      instagramPostId: "DC5ZKH3IqGB",
      instagramUrl: "https://www.instagram.com/p/DC5ZKH3IqGB/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 50.0545,
      lng: 19.9366,
      title: "Lapidarium at Wawel Castle – Kraków's Hidden Treasure",
      description: "Step into the heart of history with the Lapidarium, a hidden gem within Wawel Castle that showcases ancient stone artifacts, sculptures, tombstones, and architectural fragments from Poland's royal past. Located in the castle's medieval cloisters, the Lapidarium offers a peaceful setting for reflection and a fascinating glimpse into Kraków's rich cultural heritage. The collection features stone carvings dating back to the 14th century, highlighting medieval craftsmanship and artistic styles, as well as fragments from historical buildings and monuments from across Poland. This contemplative museum is perfect for history buffs, art lovers, and anyone seeking a unique and immersive experience in Polish history.",
      date: "2024.11",
      instagramPostId: "DCrmNgJsrC1",
      instagramUrl: "https://www.instagram.com/p/DCrmNgJsrC1/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 50.050846,
      lng: 19.931291,
      title: "Bonsai & Ikebana Exhibition at Manggha Museum – Kraków",
      description: "The Bonsai & Ikebana exhibition at Manggha Museum in Kraków offers a serene journey into Japanese art and tradition. Ikebana, which originated in Japan during the 6th century as a Buddhist offering practice, emphasizes harmony between heaven, earth, and humankind. Bonsai is not a type of tree but an art form of cultivating miniature trees in containers—some bonsai trees can live for over 1,000 years! The exhibition highlights the meditative and philosophical aspects of both arts: Ikebana's use of negative space, asymmetry, and seasonal elements, and Bonsai's range of styles from formal upright to windswept, reflecting nature's beauty. Visitors can experience the balance, simplicity, and deep connection to nature that define these timeless Japanese traditions.",
      date: "2024.11",
      instagramPostId: "DCj1EqkMSg3",
      instagramUrl: "https://www.instagram.com/p/DCj1EqkMSg3/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 50.050846,
      lng: 19.931261,
      title: "Bonsai & Ikebana Exhibition at Manggha Museum – Kraków",
      description: "The Bonsai & Ikebana exhibition at Manggha Museum in Kraków offers a serene journey into Japanese art and tradition. Ikebana, which originated in Japan during the 6th century as a Buddhist offering practice, emphasizes harmony between heaven, earth, and humankind. Bonsai is not a type of tree but an art form of cultivating miniature trees in containers—some bonsai trees can live for over 1,000 years! The exhibition highlights the meditative and philosophical aspects of both arts: Ikebana's use of negative space, asymmetry, and seasonal elements, and Bonsai's range of styles from formal upright to windswept, reflecting nature's beauty. Visitors can experience the balance, simplicity, and deep connection to nature that define these timeless Japanese traditions.",
      date: "2024.11",
      instagramPostId: "DCfVqXxMQ5-",
      instagramUrl: "https://www.instagram.com/p/DCfVqXxMQ5-/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 50.0649,
      lng: 19.9541,
      title: "Open Eyes Art Festival 2024 – Kraków, Poland",
      description: "The Open Eyes Art Festival 2024 in Kraków is a vibrant celebration of contemporary art, running from November 6th to 22nd, 2024. Hosted primarily at the historic former hospital building on ul. Kopernika 15, the festival features a dynamic blend of exhibitions, performances, and discussions that highlight creativity and innovation. With over 23 events across 14 unique venues, visitors can experience visual arts, music, theatre, and interdisciplinary activities, engaging with artists from around the world. The festival is a must-visit for art enthusiasts, travelers, and anyone seeking to explore new perspectives on European identity through art.",
      date: "2024.11",
      instagramPostId: "DCP-aS0o_ih",
      instagramUrl: "https://www.instagram.com/p/DCP-aS0o_ih/",
      city: "Kraków",
      country: "Poland"
    },

    {
      lat: 50.0518,
      lng: 19.7852,
      title: "Zalew Kryspinów – Kraków's Beloved Lakeside Escape",
      description: "Zalew Kryspinów, also known as the Lake at Piaski, is a popular recreational spot located just west of Kraków in the village of Budzyń, near Kryspinów. Formed from a former sand mine, the lake stretches about 1.5 km long and 400 meters wide, surrounded by sandy beaches and lush greenery. It is a favorite destination for locals seeking relaxation, water sports, and family outings, offering facilities such as guarded swimming areas, water equipment rentals, sports fields, playgrounds, and an adventure park with a zip line over the water. The lake is also a haven for birdwatchers and anglers, home to a variety of fish and bird species. Easily accessible by car or public transport, Zalew Kryspinów is perfect for a peaceful escape from city life, especially in autumn when the golden foliage creates a magical atmosphere.",
      date: "2024.11",
      instagramPostId: "DB03q7_MqjU",
      instagramUrl: "https://www.instagram.com/p/DB03q7_MqjU/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 50.1207,
      lng: 19.8601,
      title: "Farma DyniowaMo – The Perfect Pumpkin Escape Near Kraków",
      description: "Farma DyniowaMo in Modlnica, just north of Kraków, is the region's go-to pumpkin paradise for autumn adventures. The farm features rows of vibrant pumpkins, cozy hay bales, and plenty of Insta-worthy photo spots, making it a favorite for families, couples, and solo explorers. Visitors can pick their own pumpkins, enjoy delicious treats, and participate in games and activities for all ages. The farm is open all season long, offering a festive atmosphere with local food, crafts, and a magical autumn vibe. Whether you're snapping photos, soaking in the fall colors, or spending quality time with loved ones, Farma DyniowaMo is a must-visit autumn destination near Kraków.",
      date: "2024.10",
      instagramPostId: "DBqcHk9sJUW",
      instagramUrl: "https://www.instagram.com/p/DBqcHk9sJUW/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 43.9361,
      lng: 12.4467,
      title: "San Marino's Three Castles – Guaita, Cesta, and Montale",
      description: "San Marino's three iconic castles—Guaita, Cesta, and Montale—stand proudly atop Monte Titano, offering breathtaking views and a journey through centuries of history. Guaita, the oldest and most famous, dates back to the 11th century and features dramatic cliffside views[1][2][3]. Cesta, perched on the highest peak, houses a museum of ancient arms and offers panoramic vistas[4][5][6]. Montale, the smallest and most mysterious, was built in the 14th century and is not open to the public[1][7]. The castles are connected by the scenic 'Path of the Witches,' making them a must-visit for history lovers, photographers, and adventurers exploring the world's oldest republic[1][8][7].",
      date: "2024.10",
      instagramPostId: "DA8zWS2MQCe",
      instagramUrl: "https://www.instagram.com/p/DA8zWS2MQCe/",
      city: "San Marino",
      country: "San Marino"
    },
    {
      lat: 43.9361,
      lng: 12.4497,
      title: "People Watching and Local Life – San Marino Viewpoint",
      description: "San Marino's historic center is filled with picturesque stone benches and scenic viewpoints, making it perfect for people-watching and soaking in the local atmosphere. One of the best spots is along the fortress walls near the towers, where locals and visitors gather to enjoy panoramic views of the surrounding countryside and the Adriatic coast. The stone benches, often shaded by trees, offer a tranquil place to pause, chat, and take in the medieval charm of the world's oldest republic. Whether you're admiring the ancient architecture, watching daily life unfold, or simply enjoying a quiet moment, these viewpoints capture the essence of San Marino's slow-paced, friendly lifestyle.",
      date: "2024.10",
      instagramPostId: "DA4PqqoM42i",
      instagramUrl: "https://www.instagram.com/p/DA4PqqoM42i/",
      city: "San Marino",
      country: "San Marino"
    },
    {
      lat: 50.0502,
      lng: 19.9432,
      title: "Welcome to Kraków – Sunset at Hala Forum",
      description: "Hala Forum, located at ul. Marii Konopnickiej 28 in Kraków, is a riverside cultural, gastronomic, and event space that has become a hub for locals and visitors alike. Set in the iconic former Forum Hotel, Hala Forum is renowned for its sprawling riverside beer garden, vibrant food stalls, live music, and panoramic views of the Vistula River and Wawel Castle. Whether you're catching a summer sunset, enjoying a concert, or simply relaxing with friends, Hala Forum offers a unique blend of Kraków's modern creativity and historic charm. The venue regularly hosts festivals, art exhibitions, and community gatherings, making it a must-visit for anyone seeking Kraków's contemporary spirit and laid-back atmosphere.",
      date: "2024.10",
      instagramPostId: "DAvdbeQswoY",
      instagramUrl: "https://www.instagram.com/p/DAvdbeQswoY/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 50.0620,
      lng: 19.9389,
      title: "Coffee Tasting at Pożegnanie z Afryką – Kraków",
      description: "Pożegnanie z Afryką is a cozy African-inspired café and coffee shop located in the heart of Kraków's Old Town at ul. Św. Tomasza 21. Renowned for its authentic African coffee blends, handcrafted décor, and peaceful ambiance, it offers a unique escape from the city's bustle. Visitors can enjoy expertly brewed coffee, a wide selection of teas, and a welcoming atmosphere perfect for relaxing or catching up with friends. The café is a must-visit for coffee lovers seeking a taste of Africa and Kraków's vibrant café culture.",
      date: "2024.10",
      instagramPostId: "DAjsWjNIYEx",
      instagramUrl: "https://www.instagram.com/p/DAjsWjNIYEx/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 51.9379,
      lng: 15.5120,
      title: "Alpaca Herd Experience – Alpaki z Winnego Wzgórza",
      description: "Alpaki z Winnego Wzgórza is a charming alpaca farm located in the picturesque countryside of western Poland. This family-friendly destination allows visitors to meet gentle alpacas, learn about their care, and observe their social behavior in a peaceful, natural setting. The farm offers guided tours, educational workshops, and opportunities to interact with the alpacas, making it a perfect getaway for animal lovers, families, and anyone seeking a relaxing rural experience. The tranquil landscape and welcoming atmosphere provide an ideal escape from city life.",
      date: "2024.09",
      instagramPostId: "DAYUctes7Am",
      instagramUrl: "https://www.instagram.com/p/DAYUctes7Am/",
      city: "Winne Wzgórze",
      country: "Poland"
    },
    {
      lat: 50.0637,
      lng: 19.9317,
      title: "Arteteka Library – Kraków's Creative Hub",
      description: "Arteteka Library, located at ul. Rajska 12 in the Małopolska Garden of the Arts, is Kraków's most innovative public library and creative space. Spread over three floors, Arteteka offers a unique blend of traditional and digital resources, including e-books, audiobooks, music and film collections, and one of Poland's largest comic book libraries. The space is designed for creativity and collaboration, hosting workshops, author events, board game tournaments, and VR experiences. With modern equipment, professional software, and a welcoming atmosphere, Arteteka is a favorite spot for students, artists, and anyone seeking inspiration or a quiet place to study in the heart of Kraków.",
      date: "2024.09",
      instagramPostId: "C_78TtZsuAB",
      instagramUrl: "https://www.instagram.com/p/C_78TtZsuAB/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 50.058246,
      lng: 19.968082,
      title: "Autumn Walk in Kraków's Green Park – A Leafy Escape",
      description: "Located in the eastern part of Kraków, this tranquil park offers a picturesque autumn experience with tall trees, golden leaves carpeting the walkways, and a peaceful atmosphere perfect for a seasonal stroll. Kraków is renowned as one of the greenest cities in Poland, with over 36% of its urban area covered by trees and 53% of the city classified as green space, making it ideal for nature lovers and those seeking a break from the urban bustle. The park is part of Kraków's extensive network of green areas, which collectively provide residents and visitors with easy access to nature, fresh air, and beautiful scenery throughout the year.",
      date: "2024.09",
      instagramPostId: "C_71eJOspKf",
      instagramUrl: "https://www.instagram.com/p/C_71eJOspKf/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 49.7589,
      lng: 19.3122,
      title: "Birthday Retreat in Kocierz Rychwałdzki – Nature, Laughter, and Magic",
      description: "Celebrating Angelika's birthday in the heart of nature at Kocierz Rychwałdzki, Poland, was pure magic. Surrounded by the whispering trees and the warmth of a wooden house, the retreat featured a fire crackling, BBQ sizzling, and hearts full of joy. The days were filled with laughter, deep conversations, and the kindness of amazing souls. Walks through the forest, delicious food, and love poured into every detail made it unforgettable. Kocierz Rychwałdzki is a tranquil village in the Silesian Voivodeship, nestled in the Beskid Mały mountains, perfect for nature lovers and those seeking a peaceful escape.",
      date: "2024.09",
      instagramPostId: "C_agn4ysc9P",
      instagramUrl: "https://www.instagram.com/p/C_agn4ysc9P/",
      city: "Kocierz Rychwałdzki",
      country: "Poland"
    },
    {
      lat: 50.1498,
      lng: 19.7797,
      title: "Dreamy Wedding Villa – Karniowice, Poland",
      description: "Experience a magical wedding day at a beautiful villa in Karniowice, transformed into a floral paradise by talented decorators. From flying golden frames adorned with delicate blooms to stunning white roses and eustomas, every detail is crafted to perfection. The villa's enchanting atmosphere, filled with love and beauty, makes it an unforgettable venue for couples seeking elegance and romance in the Polish countryside.",
      date: "2024.08",
      instagramPostId: "C_K_RZos3ln",
      instagramUrl: "https://www.instagram.com/p/C_K_RZos3ln/",
      city: "Karniowice",
      country: "Poland"
    },

    {
      lat: 50.1498,
      lng: 19.7797,
      title: "Dreamy Wedding Villa – Karniowice, Poland",
      description: "Experience a magical wedding day at a beautiful villa in Karniowice, transformed into a floral paradise by talented decorators. From flying golden frames adorned with delicate blooms to stunning white roses and eustomas, every detail is crafted to perfection. The villa's enchanting atmosphere, filled with love and beauty, makes it an unforgettable venue for couples seeking elegance and romance in the Polish countryside.",
      date: "2024.08",
      instagramPostId: "C_K9_VDs2c5",
      instagramUrl: "https://www.instagram.com/p/C_K9_VDs2c5/",
      city: "Karniowice",
      country: "Poland"
    },
    {
      lat: 50.0622,
      lng: 19.9372,
      title: "Afrotopias – Contemporary African and Diaspora Art at Potocki Palace, Kraków",
      description: "The 'Afrotopias' exhibition, part of Krakow Photomonth 2024, is the largest showcase of contemporary art from Sub-Saharan Africa in Central and Eastern Europe. Hosted at the historic Potocki Palace (Pałac Potockich) on Kraków's Main Market Square, the exhibition features works by artists from over a dozen East and West African cultures. 'Afrotopias' challenges stereotypes, reimagines narratives, and emphasizes restitution, representation, and a shift from victimization to equality between Africa and the West. The exhibition is accompanied by meetings, debates, and a film program, inviting audiences to envision and work towards a just, empowered future for Africa.",
      date: "2024.06–2024.09",
      instagramPostId: "C--FApnMNKi",
      instagramUrl: "https://www.instagram.com/p/C--FApnMNKi/",
      city: "Kraków",
      country: "Poland"
    },
    {
      lat: 50.2584,
      lng: 19.0275,
      title: "Discover the Hidden Gem of Poland: Katowice – Culture, History, and Modern Vibes",
      description: "Katowice is a vibrant city in southern Poland, blending rich industrial heritage with contemporary culture and a lively urban scene. Start your day with a delicious brunch at Primo Caffè, known for its artisanal coffee, fresh breakfasts, and cozy atmosphere in the heart of the city. Dive into the region's history and creativity at the Silesian Museum, a world-class institution built on a former coal mine, featuring interactive exhibits on Silesian identity, art, and industrial heritage. For lunch or dinner, Tatiana Restaurant offers a fusion of traditional Polish and European flavors in an elegant, welcoming setting. As you stroll through Katowice's charming streets, you'll encounter spontaneous street performances and a dynamic local vibe. When night falls, Orange Club is the go-to spot for dancing and live music, while Mariacka Street is famous for its stylish cocktail bars and vibrant nightlife. Katowice is perfect for travelers seeking a unique mix of history, art, gastronomy, and modern energy.",
      date: "2024.09",
      instagramPostId: "C-46gCrMwv_",
      instagramUrl: "https://www.instagram.com/p/C-46gCrMwv_/",
      city: "Katowice",
      country: "Poland"
    },

    {
      lat: 49.7225,
      lng: 20.2503,
      title: "Hidden Gems of Lesser Poland – Classic Cars, Castles, and Cream Cake",
      description: "Discover the heart of Lesser Poland Voivodeship, a region renowned for its fairytale villages, medieval castles, and unique local experiences. Start your journey in Lanckorona, a picturesque village famous for its charming streets, cozy cafés like Arka Coffee, and artisan ceramics—perfect for souvenirs. Step back in time at Tenczyn Castle, where history comes alive and you might catch a vintage car exhibition, adding a touch of nostalgia to your visit. Don't miss Wadowice, the birthplace of Pope John Paul II, and indulge in the legendary Wadowice cream cake, a local delicacy that captures the sweet spirit of the region. Lesser Poland's central location offers a blend of natural beauty, cultural heritage, and vibrant community life, making it a must-visit for explorers, history buffs, and food lovers alike.",
      date: "2024.08",
      instagramPostId: "C-02kkNMtfG",
      instagramUrl: "https://www.instagram.com/p/C-02kkNMtfG/",
      city: "Lesser Poland Voivodeship",
      country: "Poland"
    },
    {
      lat: 36.83175,
      lng: 25.89821,
      title: "Mavros Coffee Experience – Amorgos, Greece",
      description: "Mavros is a beloved local coffee spot in the heart of Amorgos, Greece, where visitors and locals alike gather for a classic Greek coffee experience. Located in the main settlement of Chora, Mavros offers a cozy atmosphere and serves up traditional Greek coffee, iced frappés, and fresh pastries. The café is a perfect place to relax, people-watch, and soak in the slow pace of island life. With its welcoming vibe and authentic flavors, Mavros is a must-visit for anyone exploring the Cycladic paradise of Amorgos.",
      date: "2024.08",
      instagramPostId: "C-mgOSHMK1Q",
      instagramUrl: "https://www.instagram.com/p/C-mgOSHMK1Q/",
      city: "Amorgos",
      country: "Greece"
    },
    {
      lat: 36.5500,
      lng: 26.3500,
      title: "Astypalaia Chora – The Whitewashed Heart of the Aegean",
      description: "Astypalaia Chora, the capital of Astypalaia Island, is a dazzling cascade of white houses with blue windows and balconies, climbing the hillside beneath the medieval Venetian castle. The town's labyrinthine cobblestone streets, iconic windmills, and vibrant bougainvillea create a quintessential Greek island scene. Chora's architecture blends Cycladic and Dodecanese influences, with narrow alleys, flower-filled courtyards, and panoramic views over the Aegean Sea. Highlights include the imposing Astypalaia Castle, the picturesque windmills at the town's entrance, and the charming squares lined with cafés and local shops. Chora is the perfect place to wander, soak in the island's relaxed pace, and experience authentic Greek island life.",
      date: "2024.07",
      instagramPostId: "C-cfupTs2Jq",
      instagramUrl: "https://www.instagram.com/p/C-cfupTs2Jq/",
      city: "Astypalaia",
      country: "Greece"
    },
    {
      lat: 37.10556,
      lng: 25.37639,
      title: "Welcome to Naxos, Greece – Sunset Sailing Experience",
      description: "Naxos, the largest island in the Cyclades, is renowned for its stunning sunsets, vibrant harbor, and authentic Greek island charm. The island's west coast, especially near Naxos Town (Chora), offers breathtaking views of the Aegean Sea, with sailboats silhouetted against the setting sun. Visitors can enjoy sunset sailing tours, stroll along the waterfront, and savor local cuisine at seaside tavernas. Naxos is also famous for its ancient Portara (Temple of Apollo), picturesque villages, and beautiful beaches, making it a must-visit destination for travelers seeking both relaxation and adventure.",
      date: "2024.07",
      instagramPostId: "C-YoAxtM3QA",
      instagramUrl: "https://www.instagram.com/p/C-YoAxtM3QA/",
      city: "Naxos",
      country: "Greece"
    },
    {
      lat: 36.7539,
      lng: 24.4514,
      title: "Sarakiniko Beach, Milos – Greece’s Surreal Moonscape",
      description: "Sarakiniko Beach, located on the northern coast of Milos, is renowned for its white volcanic rock formations that create an otherworldly, 'moonscape' landscape. Famed for dramatic cliffs, smooth rock surfaces, and turquoise Aegean waters, Sarakiniko is a favorite for cliff jumping, exploration, and photography. Its unique scenery makes it one of the most iconic and photographed spots in the Cyclades.",
      date: "2024.07",
      instagramPostId: "DLZvGKANMrt",
      instagramUrl: "https://www.instagram.com/p/DLZvGKANMrt/",
      city: "Milos",
      country: "Greece"
    },
    {
    lat: 39.9611,
    lng: 20.7194,
    title: "Megalo Papigo, Zagorochoria – Timeless Stone Village in the Pindus Mountains",
    description: "Tucked away in the heart of Zagorochoria, Megalo Papigo is a traditional stone-built village surrounded by the dramatic peaks of Mount Tymfi and the iconic cliffs of Astraka in the Epirus region. Known for its cobbled paths, charming stone houses, and breathtaking mountain scenery, Megalo Papigo offers visitors an escape into serenity, history, and untouched nature. Wander through its historic lanes, marvel at the Vikos Gorge, or immerse yourself in the rich tradition and magic of one of Greece’s best-preserved mountain havens. Adventurers and nature lovers are drawn here for hiking, bird-watching, and stunning viewpoints in this UNESCO-protected region.",
    date: "2024.05",
    instagramPostId: "DLiORW6MKBD",
    instagramUrl: "https://www.instagram.com/p/DLiORW6MKBD/",
    city: "Megalo Papigo",
    country: "Greece"
  },
  {
    lat: 50.01895,
    lng: 19.80211,
    title: "Benedictine Abbey in Tyniec – Poland’s Oldest Monastery",
    description: "Perched on a limestone hill above the Vistula River, the Benedictine Abbey in Tyniec, near Kraków, stands as the oldest existing monastery in Poland. Founded circa 1044 by King Casimir I the Restorer, the abbey has witnessed nearly a millennium of Polish history. It played a crucial role as both a spiritual center and fortress, suffering destruction and rebuilding over the centuries. Renowned for its Romanesque foundations, Gothic and Baroque architecture, and a scenic setting, Tyniec remains an active monastery, offering visitors a unique blend of history, architecture, and tranquil beauty overlooking the river.",
    date: "2024.06",
    instagramPostId: "DLiY4sRst4g",
    instagramUrl: "https://www.instagram.com/p/DLiY4sRst4g/",
    city: "Kraków",
    country: "Poland"
  },
  {
    lat: 1.2844,
    lng: 103.8516,
    title: "WeWork Singapore – Focused Coworking in the Heart of the City",
    description: "WeWork Singapore offers a vibrant, modern coworking space perfect for both focused work and creative energy. Visitors enjoy a calm yet energizing atmosphere with plenty of quiet corners and good vibes all around—ideal for escaping distractions and getting work done. The location features cozy seating and quality coffee, making it a popular spot for productivity seekers in the city’s business district. Singapore, a global hub for innovation and entrepreneurship, provides a diverse backdrop and dynamic urban environment for business travelers and freelancers alike.",
    date: "2024.04",
    instagramPostId: "DL-gk1HMRIz",
    instagramUrl: "https://www.instagram.com/p/DL-gk1HMRIz/",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 20.9101,
    lng: 107.1839,
    title: "Ha Long Bay, Vietnam – Oyster Pearl Workshop Experience",
    description: "Ha Long Bay, a UNESCO World Heritage site in northern Vietnam, is renowned for its emerald green waters, limestone islands, and floating fishing villages. Visitors can stop at floating oyster farms to witness the fascinating process of pearl cultivation—from oyster grafting to harvesting. At these workshops, you may see pearls being extracted from oysters and learn about the intricate art of pearl farming. The calm, scenic setting of Ha Long Bay provides a unique cultural and natural encounter, making it an unforgettable stop for travelers seeking authentic local traditions and stunning natural beauty.",
    date: "2025.04",
    instagramPostId: "DMDS6L4o4WH",
    instagramUrl: "https://www.instagram.com/p/DMDS6L4o4WH/",
    city: "Ha Long",
    country: "Vietnam"
  },

  {
    lat: 20.9101,
    lng: 107.1880,
    title: "Ha Long Bay, Vietnam – Oyster Pearl Workshop Experience",
    description: "Ha Long Bay, a UNESCO World Heritage site in northern Vietnam, is renowned for its emerald green waters, limestone islands, and floating fishing villages. Visitors can stop at floating oyster farms to witness the fascinating process of pearl cultivation—from oyster grafting to harvesting. At these workshops, you may see pearls being extracted from oysters and learn about the intricate art of pearl farming. The calm, scenic setting of Ha Long Bay provides a unique cultural and natural encounter, making it an unforgettable stop for travelers seeking authentic local traditions and stunning natural beauty.",
    date: "2025.04",
    instagramPostId: "DMDTwDTovof",
    instagramUrl: "https://www.instagram.com/p/DMDTwDTovof/",
    city: "Ha Long",
    country: "Vietnam"
  },
  {
    lat: 20.9101,
    lng: 107.1839,
    title: "Ha Long Bay, Vietnam – 5 Must-Do Experiences",
    description: "Ha Long Bay, a UNESCO World Heritage site in northern Vietnam, is celebrated for its emerald waters and dramatic limestone islands. Top experiences here include joining a pearl workshop to see how oysters are grafted, enjoying boat rides past limestone cliffs with fresh seafood, exploring the vast surreal chambers of Sung Sot Cave, taking fast and unforgettable Seajet rides across open water, and climbing Ti Top Island for panoramic views followed by a refreshing swim. Ha Long Bay perfectly balances stillness and spectacle—making every hour spent here worthwhile.",
    date: "2025.04",
    instagramPostId: "DMDa-5hoQwZ",
    instagramUrl: "https://www.instagram.com/p/DMDa-5hoQwZ/",
    city: "Ha Long",
    country: "Vietnam"
  },
  {
    lat: 20.9101,
    lng: 107.1800,
    title: "Ha Long Bay, Vietnam – 5 Must-Do Experiences",
    description: "Ha Long Bay, a UNESCO World Heritage site in northern Vietnam, is celebrated for its emerald waters and dramatic limestone islands. Top experiences here include joining a pearl workshop to see how oysters are grafted, enjoying boat rides past limestone cliffs with fresh seafood, exploring the vast surreal chambers of Sung Sot Cave, taking fast and unforgettable Seajet rides across open water, and climbing Ti Top Island for panoramic views followed by a refreshing swim. Ha Long Bay perfectly balances stillness and spectacle—making every hour spent here worthwhile.",
    date: "2025.04",
    instagramPostId: "DMDdVm0Ix5c",
    instagramUrl: "https://www.instagram.com/p/DMDdVm0Ix5c/",
    city: "Ha Long",
    country: "Vietnam"
  },
  {
    lat: 49.2267,
    lng: 19.9816,
    title: "Tatra National Park, Poland – Five Reasons to Stay a While",
    description: "Just a couple hours from Kraków, the Tatra Mountains offer endless hiking trails ranging from lakeside walks to alpine climbs, along with a scenic cable car ride to Kasprowy Wierch for unreal views. Every season here is vivid: snow may linger in May, but sunshine is common in September. Cozy mountain huts serve hot soup and cold beer in their wooden interiors. Even brief visits immerse you in stillness, mist, and the restorative natural energy of the Polish highlands—the forest, stone, and crisp air become the reset you didn't know you needed.",
    date: "2025.07",
    instagramPostId: "DMDe_CXIu7z",
    instagramUrl: "https://www.instagram.com/p/DMDe_CXIu7z/",
    city: "Zakopane",
    country: "Poland"
  },
  {
    lat: 49.2267,
    lng: 19.9876,
    title: "Tatra National Park, Poland – Five Reasons to Stay a While",
    description: "Just a couple hours from Kraków, the Tatra Mountains offer endless hiking trails ranging from lakeside walks to alpine climbs, along with a scenic cable car ride to Kasprowy Wierch for unreal views. Every season here is vivid: snow may linger in May, but sunshine is common in September. Cozy mountain huts serve hot soup and cold beer in their wooden interiors. Even brief visits immerse you in stillness, mist, and the restorative natural energy of the Polish highlands—the forest, stone, and crisp air become the reset you didn't know you needed.",
    date: "2025.07",
    instagramPostId: "DMDgGKJMEnE",
    instagramUrl: "https://www.instagram.com/p/DMDgGKJMEnE/",
    city: "Zakopane",
    country: "Poland"
  },
  {
    lat: 1.30104,
    lng: 103.85907,
    title: "Tarik Café – Kampong Glam’s Signature Teh Tarik & Kopi",
    description: "Nestled on Arab Street in the vibrant Kampong Glam district of Singapore, Tarik Café is a cult-favorite stop for lovers of local teh tarik and kopi. Known for its frothy, addictive signature teh tarik and strong, bold local kopi, this cozy café is a buzzing hub for both locals and travelers seeking authentic Singaporean street flavors. The menu also features comfort dishes like nasi lemak and roti john, served in a laid-back setting perfect for relaxing after exploring nearby Haji Lane and Sultan Mosque. Tarik Café blends chill vibes with a taste of tradition right in the heart of urban Singapore.",
    date: "2025.04",
    instagramPostId: "DMGHlb8Mtrj",
    instagramUrl: "https://www.instagram.com/p/DMGHlb8Mtrj/",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 1.30104,
    lng: 103.85987,
    title: "Tarik Café – Kampong Glam’s Signature Teh Tarik & Kopi",
    description: "Nestled on Arab Street in the vibrant Kampong Glam district of Singapore, Tarik Café is a cult-favorite stop for lovers of local teh tarik and kopi. Known for its frothy, addictive signature teh tarik and strong, bold local kopi, this cozy café is a buzzing hub for both locals and travelers seeking authentic Singaporean street flavors. The menu also features comfort dishes like nasi lemak and roti john, served in a laid-back setting perfect for relaxing after exploring nearby Haji Lane and Sultan Mosque. Tarik Café blends chill vibes with a taste of tradition right in the heart of urban Singapore.",
    date: "2025.04",
    instagramPostId: "DMGN3J3MxVs",
    instagramUrl: "https://www.instagram.com/p/DMGN3J3MxVs/",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 20.9101,
    lng: 107.1939,
    title: "Ha Long Bay, Vietnam – High-Speed Sea Jet Adventure",
    description: "Ha Long Bay, a UNESCO World Heritage site famed for its emerald waters and towering limestone karsts, offers more than mesmerizing views—adventure seekers can experience full-throttle excitement on a high-speed sea jet. With groups of up to 10 people, these sea jet rides cut through the iconic bay at exhilarating speeds, passing clusters of cruise ships and dramatic cliffs. It’s a thrilling way to witness the bay’s grandeur, blending adrenaline with breathtaking scenery, and providing travelers a unique perspective on one of Vietnam's natural wonders.",
    date: "2025.04",
    instagramPostId: "DML99DNohEp",
    instagramUrl: "https://www.instagram.com/p/DML99DNohEp/",
    city: "Ha Long",
    country: "Vietnam"
  },
  {
    lat: 39.9901,
    lng: 20.7361,
    title: "Kleidonia Bridge, Epirus – Iconic Stone Arch Over Voidomatis",
    description: "The Kleidonia Bridge is a historic single-arch stone bridge located near the village of Kleidonia in Epirus, northwestern Greece. Dating back to 1853, this architectural marvel spans the crystal-clear Voidomatis River, surrounded by lush greenery at the edge of the Vikos Gorge. Renowned for its timeless stone craftsmanship and stunning natural setting, it was built on the site of an older Byzantine-era bridge and is steeped in local legends. Today it serves as both a scenic hiking destination and a cultural landmark, inviting visitors to walk its storied arch and enjoy tranquil river views amidst the mountainous landscapes of Zagori.",
    date: "2024.05",
    instagramPostId: "DMNGVEWMBNj",
    instagramUrl: "https://www.instagram.com/p/DMNGVEWMBNj/",
    city: "Kleidonia",
    country: "Greece"
  },
  {
    lat: 39.9676,
    lng: 20.7309,
    title: "Papingo Rock Pools – Natural Pools in the Heart of Epirus",
    description: "Papingo Rock Pools, found between the villages of Megalo Papigo and Mikro Papigo in the Epirus region of northwestern Greece, are a series of stunning natural pools carved into the limestone by the Rogovo stream. Surrounded by dramatic cliffs and lush greenery in the Pindus Mountains, these 'ovires' offer crystal-clear, cool waters, small cascading waterfalls, and unique rock formations, making them a renowned spot for swimming and relaxation during summer months. Easily accessible by foot and located within the Vikos–Aoös National Park, the pools are a serene oasis for hikers and nature lovers, frequently described as a hidden gem and geological masterpiece of the Zagori area.",
    date: "2024.05",
    instagramPostId: "DMPlnHkMEHh",
    instagramUrl: "https://www.instagram.com/p/DMPlnHkMEHh/",
    city: "Papingo",
    country: "Greece"
  },
  {
    lat: 39.9676,
    lng: 20.7379,
    title: "Papingo Rock Pools – Natural Pools in the Heart of Epirus",
    description: "Papingo Rock Pools, found between the villages of Megalo Papigo and Mikro Papigo in the Epirus region of northwestern Greece, are a series of stunning natural pools carved into the limestone by the Rogovo stream. Surrounded by dramatic cliffs and lush greenery in the Pindus Mountains, these 'ovires' offer crystal-clear, cool waters, small cascading waterfalls, and unique rock formations, making them a renowned spot for swimming and relaxation during summer months. Easily accessible by foot and located within the Vikos–Aoös National Park, the pools are a serene oasis for hikers and nature lovers, frequently described as a hidden gem and geological masterpiece of the Zagori area.",
    date: "2024.05",
    instagramPostId: "DMPm9EmsvZP",
    instagramUrl: "https://www.instagram.com/p/DMPm9EmsvZP/",
    city: "Papingo",
    country: "Greece"
  },
  {
    lat: 39.8047,
    lng: 20.6892,
    title: "Northwestern Greece — Aegean Views, Greek Flag & Mountain Serenity",
    description: "Captured in the mountainous region of northwestern Greece, this destination offers panoramic vistas of lush hills, winding roads, and the distant expanse of the Aegean. Marked by the presence of the Greek flag waving over a tranquil landscape, this spot perfectly embodies Greek patriotic pride, natural beauty, and the calming effects of mountain air. It’s an ideal location for hiking, outdoor relaxation, and soaking up aesthetic views. The untouched nature, clarity, and silence make it a haven for explorers, with endless opportunities for photography and quiet reflection in a setting synonymous with freedom and Greek heritage.",
    date: "2025.07",
    instagramPostId: "DMSbNmOMS9B",
    instagramUrl: "https://www.instagram.com/p/DMSbNmOMS9B/",
    city: "Epirus",
    country: "Greece"
  },
  {
    lat: 39.6657,
    lng: 20.8538,
    title: "33rd Panhellenic Psychiatric Conference – Reflections from Ioannina",
    description: "The 33rd Panhellenic Psychiatric Conference in Ioannina, Greece, brought together mental health professionals from across the country to discuss new developments in psychiatry, community care, and psychosocial support. Highlights included lectures on social reintegration, psychosocial interventions, and the evolving role of psychiatry in public health. The event emphasized the real-world impact of theory meeting practice and offered opportunities for meaningful conversations in a lakeside setting.",
    date: "2025.05",
    instagramPostId: "DMU7a1ZMeaU",
    instagramUrl: "https://www.instagram.com/p/DMU7a1ZMeaU/",
    city: "Ioannina",
    country: "Greece"
  },
  {
    lat: 39.9618,
    lng: 20.7190,
    title: "Papigo, Greece – A Table with a View in Zagori Mountains",
    description: "Captured at a tranquil taverna in the Zagori region, this scene epitomizes Greek mountain serenity: a traditional Greek salad, a glass of white wine, and the gentle dusk over the Epirus mountains. Located near Papigo village, the view sweeps across terracotta rooftops and dense greenery, framed by the blue silhouettes of distant peaks. This mountain hideaway in northwestern Greece is cherished for its fresh air, hiking trails, stone-built villages, and a pace of life that invites you to savor every meal and every moment.",
    date: "2025.05",
    instagramPostId: "DMYzZo7ozwP",
    instagramUrl: "https://www.instagram.com/p/DMYzZo7ozwP/",
    city: "Papigo",
    country: "Greece"
  },
  {
    lat: 50.0573,
    lng: 19.9095,
    title: "Błonia Park, Kraków – Urban Green Expanse from Above",
    description: "Błonia Park is Kraków’s iconic open green space, stretching over 48 hectares in the city center. From above, this vast meadow is a rare urban breathing space—an emerald field bordered by the city skyline and tree-lined paths, where locals and visitors walk, cycle, picnic, and gather for public events. The park symbolizes Kraków’s harmony of nature and city life, offering wide open skies and a place of movement, peace, and connection amidst urban energy.",
    date: "2025.06",
    instagramPostId: "DMY1ABzo6CQ",
    instagramUrl: "https://www.instagram.com/p/DMY1ABzo6CQ/",
    city: "Kraków",
    country: "Poland"
  },
  {
    lat: 1.2541,
    lng: 103.8132,
    title: "Wings of Time, Singapore – Fireworks Symphony on the Shores of Sentosa",
    description: "Wings of Time is Singapore’s world-renowned permanent night show located on Sentosa Island, featuring a spectacular combination of 3D projection mapping, dazzling water jets, lasers, and real pyrotechnics—all set against the backdrop of the open sea. The show tells a heartwarming story about friendship and courage, following the mythical bird Shahbaz and friends as they journey through vibrant landscapes and the mysteries of time. Visitors are immersed in a 20-minute multi-sensory experience with captivating visual effects, soundtracks, and a fireworks finale—a must-see highlight described as 'mind-blowing' and an unforgettable way to end any day in Singapore. Shows are held nightly at 7:40PM and 8:40PM, with standard admission around SGD19. Arriving early is recommended to secure good seats as it draws large crowds.",
    date: "2025.04",
    instagramPostId: "DMd6KSaMmat",
    instagramUrl: "https://www.instagram.com/p/DMd6KSaMmat/",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 1.3057,
    lng: 103.8531,
    title: "Sri Veeramakaliamman Temple, Singapore – Dravidian Heritage in Little India",
    description: "Located in the heart of Little India, Sri Veeramakaliamman Temple is one of Singapore’s oldest Hindu temples, dedicated to goddess Kali. Built in 1881 by early Indian immigrants, its colorful, intricately carved Dravidian-style tower is a visual feast, topped by rooftop statues and vibrant details that transport visitors to Southern India. The temple is open daily with free entry and is celebrated for its spiritual energy, rituals, and incense-filled atmosphere—making it both a cultural and photogenic must-see in Singapore.",
    date: "2025.04",
    instagramPostId: "DMe-x5Ds-aj",
    instagramUrl: "https://www.instagram.com/p/DMe-x5Ds-aj/",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 1.3057,
    lng: 103.8591,
    title: "Sri Veeramakaliamman Temple, Singapore – Dravidian Heritage in Little India",
    description: "Located in the heart of Little India, Sri Veeramakaliamman Temple is one of Singapore’s oldest Hindu temples, dedicated to goddess Kali. Built in 1881 by early Indian immigrants, its colorful, intricately carved Dravidian-style tower is a visual feast, topped by rooftop statues and vibrant details that transport visitors to Southern India. The temple is open daily with free entry and is celebrated for its spiritual energy, rituals, and incense-filled atmosphere—making it both a cultural and photogenic must-see in Singapore.",
    date: "2025.04",
    instagramPostId: "DMfAVtJsdeK",
    instagramUrl: "https://www.instagram.com/p/DMfAVtJsdeK/",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 50.2649,
    lng: 19.0238,
    title: "Katowice, Poland – Culture, Cuisine & Modern Vibes",
    description: "Katowice, the vibrant heart of the Silesian region in southern Poland, is a dynamic fusion of culture, history, and modern energy. The city enchants visitors with highlights like brunch at chic cafés, the Silesian Museum’s blend of historic and contemporary art, and a dining scene ranging from traditional Polish to global flavors. Strolling the city streets, you may encounter spontaneous Latin dance performances or local music, reflecting Katowice’s creative spirit. When night falls, locals and travelers gather at energetic clubs and bars, while places like Mariacka Street become hubs for cocktails, street food, and lively conversation. Katowice is a lively destination perfect for those seeking both authenticity and excitement in Poland.",
    date: "2024.09",
    instagramPostId: "C-46gCrMwv_",
    instagramUrl: "https://www.instagram.com/p/C-46gCrMwv_/",
    city: "Katowice",
    country: "Poland"
  },
  {
    lat: 49.7976,
    lng: 19.6342,
    title: "Hidden Gems of Lesser Poland – Lanckorona, Tenczyn Castle & Wadowice",
    description: "Venture into the heart of Lesser Poland to discover charming villages, dramatic medieval castles, and sweet culinary legends! Begin in Lanckorona, a fairy-tale village famed for its cobbled lanes, unique wooden houses, local ceramics, and artisan coffee shops—an ideal retreat for those seeking nostalgia and creativity. Explore the ruins of Tenczyn Castle, a site steeped in medieval history where classic car rallies sometimes bring the past roaring to life. Finally, treat your tastebuds in Wadowice, birthplace of Pope John Paul II, and home to the iconic kremówka (cream cake). Each locale captures a different facet of southern Poland’s heritage, blending local artistry, impressive architecture, and delicious tradition.",
    date: "2024.08",
    instagramPostId: "C-02kkNMtfG",
    instagramUrl: "https://www.instagram.com/p/C-02kkNMtfG/",
    city: "Lanckorona",
    country: "Poland"
  },
  {
    lat: 36.8322,
    lng: 25.8989,
    title: "Welcome to Amorgos, Greece – Cycladic Island Escape",
    description: "Amorgos, part of the Cyclades in the Aegean Sea, is celebrated for its turquoise waters, rugged cliffs, and iconic hilltop monasteries. This tranquil Greek island offers a slow pace of life, charming whitewashed villages, and a captivating blend of natural beauty and history. Visitors are drawn to Amorgos’ untamed coastal scenery, serene beaches, and the world-famous Hozoviotissa Monastery clinging to the cliffs. At local tavernas, evenings fill with music, laughter, and community under hanging vines—capturing the essence of untouched island charm and warm hospitality in the Aegean.",
    date: "2024.08",
    instagramPostId: "C-mgOSHMK1Q",
    instagramUrl: "https://www.instagram.com/p/C-mgOSHMK1Q/",
    city: "Amorgos",
    country: "Greece"
  },
  {
    lat: 36.5506,
    lng: 26.3540,
    title: "Astypalaia, Greece – Handstand Fun Under the Aegean Sun",
    description: "Astypalaia, the 'Butterfly Island' of the Dodecanese, captivates visitors with its charming whitewashed villages, Venetian castle crowning Chora, and wild beaches with turquoise waters. Renowned for its tranquil vibe and photogenic landscapes, it’s a favorite for adventurers and friends seeking #GreekSummerMagic. Whether practicing handstands on sun-baked hills or wandering narrow lanes beneath endless blue skies, Astypalaia exudes a playful, authentic Greek spirit—where every moment feels sun-kissed, active, and unforgettable.",
    date: "2024.07",
    instagramPostId: "C-cfupTs2Jq",
    instagramUrl: "https://www.instagram.com/p/C-cfupTs2Jq/",
    city: "Astypalaia",
    country: "Greece"
  },
  {
    lat: 37.1056,
    lng: 25.3764,
    title: "Naxos, Greece – Summer Night Festival Experience",
    description: "This scene captures a vibrant local festival or panigiri on the island of Naxos, Greece, held outdoors at night in July 2024. Residents and visitors gather in a lively village square, enjoying traditional music, dancing, and communal dining under the stars. Naxos is famous for its authentic Greek festivals, where people celebrate with live bands, folk dances, and regional cuisine. The festive atmosphere in the Cyclades showcases local culture, hospitality, and a joyful sense of community, making nights like these a cherished highlight for travelers and locals alike.",
    date: "2024.07",
    instagramPostId: "C-YoAxtM3QA",
    instagramUrl: "https://www.instagram.com/p/C-YoAxtM3QA/",
    city: "Naxos",
    country: "Greece"
  },
  {
    lat: 49.3117,
    lng: 20.0436,
    title: "Erasmus+ Youth Training – Leading the Greek Team in Murzasichle, Poland",
    description: "Set in the picturesque mountain village of Murzasichle near Zakopane, Poland, this Erasmus+ program brought together youth leaders and participants from across Europe for training in environmental awareness, project management, and international collaboration. Surrounded by the stunning Tatra landscapes, the event fostered cultural exchange, ecological responsibility, and personal growth. As the leader of the Greek team, you engaged in workshops, group activities, and shared ideas on sustainability and creativity with peers from diverse backgrounds. Murzasichle’s tranquil atmosphere, traditional architecture, and panoramic mountain views made it an inspiring setting for both learning and building lifelong friendships during this unique Erasmus+ experience.",
    date: "2024.06",
    instagramPostId: "C72bIxAMLIe",
    instagramUrl: "https://www.instagram.com/p/C72bIxAMLIe/",
    city: "Murzasichle",
    country: "Poland"
  },
  {
    lat: 49.3117,
    lng: 20.0496,
    title: "Erasmus+ Youth Training – Leading the Greek Team in Murzasichle, Poland",
    description: "Set in the picturesque mountain village of Murzasichle near Zakopane, Poland, this Erasmus+ program brought together youth leaders and participants from across Europe for training in environmental awareness, project management, and international collaboration. Surrounded by the stunning Tatra landscapes, the event fostered cultural exchange, ecological responsibility, and personal growth. As the leader of the Greek team, you engaged in workshops, group activities, and shared ideas on sustainability and creativity with peers from diverse backgrounds. Murzasichle’s tranquil atmosphere, traditional architecture, and panoramic mountain views made it an inspiring setting for both learning and building lifelong friendships during this unique Erasmus+ experience.",
    date: "2024.06",
    instagramPostId: "C72aeVaMiVg",
    instagramUrl: "https://www.instagram.com/p/C72aeVaMiVg/",
    city: "Murzasichle",
    country: "Poland"
  },
  {
    lat: 49.3117,
    lng: 20.0596,
    title: "Erasmus+ Youth Training – Leading the Greek Team in Murzasichle, Poland",
    description: "Set in the picturesque mountain village of Murzasichle near Zakopane, Poland, this Erasmus+ program brought together youth leaders and participants from across Europe for training in environmental awareness, project management, and international collaboration. Surrounded by the stunning Tatra landscapes, the event fostered cultural exchange, ecological responsibility, and personal growth. As the leader of the Greek team, you engaged in workshops, group activities, and shared ideas on sustainability and creativity with peers from diverse backgrounds. Murzasichle’s tranquil atmosphere, traditional architecture, and panoramic mountain views made it an inspiring setting for both learning and building lifelong friendships during this unique Erasmus+ experience.",
    date: "2024.06",
    instagramPostId: "C72Z0jhMSkS",
    instagramUrl: "https://www.instagram.com/p/C72Z0jhMSkS/",
    city: "Murzasichle",
    country: "Poland"
  },
  {
    lat: 28.2643,
    lng: 83.9721,
    title: "Magic of Nepal – Lakes, Boats & Monkeys in Pokhara",
    description: "This post captures the vibrant magic of Pokhara, Nepal’s lakeside gem at the foothills of the Himalayas. Featured are serene scenes of Phewa Lake with its colorful paddle boats, framed by lush greenery and blossoming jacaranda, making for a tranquil escape in Nepal’s adventure capital. Unforgettable moments include playful monkeys in the city’s open spaces, as well as glimpses of everyday life and local children. Pokhara is renowned as the gateway to the Annapurna Circuit and celebrated for its peaceful lakefront, lively street culture, and panoramic views of snow-capped peaks—blending natural beauty, wildlife encounters, and authentic community charm.",
    date: "2024.05",
    instagramPostId: "C7F7PiIK43X",
    instagramUrl: "https://www.instagram.com/p/C7F7PiIK43X/",
    city: "Pokhara",
    country: "Nepal"
  },
  {
    lat: 27.7433,
    lng: 85.7527,
    title: "Takure Village, Nepal – Himalayan Community, Rebuilding & Resilience",
    description: "@wheeling2help. Nestled in the hills of Sindhupalchok district, Takure is a rural Nepali village renowned for its sense of community, culture, and striking Himalayan scenery. Severely impacted by the 2015 earthquake, Takure drew the support of local initiatives and international volunteers who helped rebuild homes, community spaces, and a future rooted in sustainability. The village is a hub for social projects focused on natural building, sustainable agriculture, and youth empowerment. Visitors experience genuine Nepali hospitality, learn local customs—including vegetarian meals and communal living—and immerse themselves in the daily rhythms of life on terraced fields with panoramic mountain views. Takure is a testament to Nepal’s enduring spirit, tradition, and the warmth of its people.",
    date: "2024.05",
    instagramPostId: "C6_F6edMIvj",
    instagramUrl: "https://www.instagram.com/p/C6_F6edMIvj/",
    city: "Takure",
    country: "Nepal"
  },
  {
    lat: 27.7433,
    lng: 85.7597,
    title: "Takure Village, Nepal – Himalayan Community, Rebuilding & Resilience",
    description: "@wheeling2help. Nestled in the hills of Sindhupalchok district, Takure is a rural Nepali village renowned for its sense of community, culture, and striking Himalayan scenery. Severely impacted by the 2015 earthquake, Takure drew the support of local initiatives and international volunteers who helped rebuild homes, community spaces, and a future rooted in sustainability. The village is a hub for social projects focused on natural building, sustainable agriculture, and youth empowerment. Visitors experience genuine Nepali hospitality, learn local customs—including vegetarian meals and communal living—and immerse themselves in the daily rhythms of life on terraced fields with panoramic mountain views. Takure is a testament to Nepal’s enduring spirit, tradition, and the warmth of its people.",
    date: "2024.05",
    instagramPostId: "C69oQuxsRwP",
    instagramUrl: "https://www.instagram.com/p/C69oQuxsRwP/",
    city: "Takure",
    country: "Nepal"
  },
  {
    lat: 27.7433,
    lng: 85.7697,
    title: "Takure Village, Nepal – Himalayan Community, Rebuilding & Resilience",
    description: "@wheeling2help. Nestled in the hills of Sindhupalchok district, Takure is a rural Nepali village renowned for its sense of community, culture, and striking Himalayan scenery. Severely impacted by the 2015 earthquake, Takure drew the support of local initiatives and international volunteers who helped rebuild homes, community spaces, and a future rooted in sustainability. The village is a hub for social projects focused on natural building, sustainable agriculture, and youth empowerment. Visitors experience genuine Nepali hospitality, learn local customs—including vegetarian meals and communal living—and immerse themselves in the daily rhythms of life on terraced fields with panoramic mountain views. Takure is a testament to Nepal’s enduring spirit, tradition, and the warmth of its people.",
    date: "2024.05",
    instagramPostId: "C62tzvarHmO",
    instagramUrl: "https://www.instagram.com/p/C62tzvarHmO/",
    city: "Takure",
    country: "Nepal"
  },
  {
    lat: 28.2096,
    lng: 83.9856,
    title: "Pokhara, Nepal – Lakeside Serenity & Mental Well-Being",
    description: "Pokhara, often referred to as the gateway to the Himalayas, is celebrated for its tranquil lakes, lush hillsides, and breathtaking views of the Annapurna range. Recent reflections from the region highlight the profound mental health benefits of travel—Pokhara’s peaceful setting is ideal for reducing stress and increasing happiness. Immersing oneself in Pokhara’s natural beauty and cultural diversity promotes personal growth, empathy, and a deeper connection to the world. The serene landscape, with its calm waters and majestic mountain backdrops, invites travelers to relax, recharge, and embrace a holistic sense of well-being.",
    date: "2024.05",
    instagramPostId: "C62wULOrgyN",
    instagramUrl: "https://www.instagram.com/p/C62wULOrgyN/",
    city: "Pokhara",
    country: "Nepal"
  },
  {
    lat: 28.2096,
    lng: 83.9956,
    title: "Pokhara, Nepal – Lakeside Serenity & Mental Well-Being",
    description: "Pokhara, often referred to as the gateway to the Himalayas, is celebrated for its tranquil lakes, lush hillsides, and breathtaking views of the Annapurna range. Recent reflections from the region highlight the profound mental health benefits of travel—Pokhara’s peaceful setting is ideal for reducing stress and increasing happiness. Immersing oneself in Pokhara’s natural beauty and cultural diversity promotes personal growth, empathy, and a deeper connection to the world. The serene landscape, with its calm waters and majestic mountain backdrops, invites travelers to relax, recharge, and embrace a holistic sense of well-being.",
    date: "2024.05",
    instagramPostId: "C62saz-Lu5T",
    instagramUrl: "https://www.instagram.com/p/C62saz-Lu5T/",
    city: "Pokhara",
    country: "Nepal"
  },
  {
    lat: 28.2272,
    lng: 83.9584,
    title: "Pokhara, Nepal – The World's Steepest and Fastest Zipline Adventure",
    description: "Pokhara is home to one of the most extreme zip lines on earth—a breathtaking ride stretching 1,800 meters (1.1 miles) from the hilltop of Sarangkot. With a vertical drop of nearly 600 meters (2,000 feet) and top speeds approaching 140km/h, this zipline (often called Zipflyer Nepal or HighGround Adventures Zipline) offers unparalleled views of the Annapurna and Machapuchare mountain ranges as you soar towards the valley below. Often described as one of the world's longest, fastest, and steepest ziplines, the experience combines an adrenaline rush with panoramic Himalayan scenery. From the starting platform, riders are securely harnessed side-by-side before a dramatic launch, making this a must-try adventure for thrill-seekers in Nepal.",
    date: "2024.05",
    instagramPostId: "C6v1bTpvsUs",
    instagramUrl: "https://www.instagram.com/p/C6v1bTpvsUs/",
    city: "Pokhara",
    country: "Nepal"
  },
  {
    lat: 27.7172,
    lng: 85.3240,
    title: "Kathmandu, Nepal – Warmth, Hospitality & Daily Devotion",
    description: "Kathmandu, the heart of Nepal, is renowned for its welcoming spirit and the warmth of its people. The city is a vibrant tapestry of ancient temples, bustling markets, and serene rituals. Residents are known for their kindness, hospitality, and infectious positivity—a mix that shines in every interaction, from temple offerings to moments shared with visitors. It’s common to witness locals engaging in daily acts of devotion, supporting their families and communities while radiating genuine care. Kathmandu’s blend of tradition, hard work, and community pride is unmatched, making it a truly special destination for those seeking cultural authenticity and human connection.",
    date: "2024.05",
    instagramPostId: "C6sNub1obMa",
    instagramUrl: "https://www.instagram.com/p/C6sNub1obMa/",
    city: "Kathmandu",
    country: "Nepal"
  },
  {
    lat: 35.7673,
    lng: -5.7998,
    title: "Tangier, Morocco – Gateway of Cultures at the Strait of Gibraltar",
    description: "Tangier sits at the northern tip of Morocco, where the Mediterranean meets the Atlantic and Africa greets Europe across the Strait of Gibraltar. This vibrant city blends ancient medinas, French and Spanish influences, and a storied port history. Explore Tangier’s labyrinthine old town, savor Moroccan cuisine rich with spices, or relax along the bustling seafront promenade. Its strategic location offers breathtaking maritime views, inspiring artists, writers, and travelers alike for generations. Tangier is a tapestry of flavors, sounds, and cultures—an unforgettable introduction to Morocco’s diversity and magic.",
    date: "2024.03",
    instagramPostId: "C5oZRqJselD",
    instagramUrl: "https://www.instagram.com/p/C5oZRqJselD/",
    city: "Tangier",
    country: "Morocco"
  },
  {
    lat: 35.5785,
    lng: -5.3684,
    title: "Tétouan, Morocco – Andalusian Alleys and Seaside Charm",
    description: "Tétouan, nicknamed the 'White Dove of the Mediterranean,' enchants visitors with its UNESCO-listed medina of whitewashed maze-like alleyways, intricate Hispano-Moorish architecture, and strong Andalusian-Spanish influences. The city’s multicultural heritage is visible in its elegant buildings, lively streets, and echoes of Spanish language and style. Highlights include wandering labyrinthine medina lanes, savoring the Mediterranean ambiance of Tamouda Bay, and exploring cultural gems like the Royal Palace and the School of Arts and Crafts. Tétouan is a crossroads of Moroccan, Andalusian, and Ottoman traditions, offering history, seaside bliss, and a unique cultural identity.",
    date: "2024.03",
    instagramPostId: "C5mCCLisi-J",
    instagramUrl: "https://www.instagram.com/p/C5mCCLisi-J/",
    city: "Tétouan",
    country: "Morocco"
  },
  {
    lat: 49.2922,
    lng: 19.9486,
    title: "Zakopane, Poland – Hiking the Breathtaking Tatra Landscapes",
    description: "High in the Tatra Mountains, Zakopane is famed for its spectacular hiking trails, panoramic vistas, and unspoiled nature. Along scenic ridges and forested paths, visitors experience the ever-changing moods of the landscape—from sweeping valley views to dramatic skies over snow-dusted peaks. This region is celebrated for its vibrant mountain culture, traditional wooden architecture, and adventurous spirit, drawing hikers in every season for new perspectives, elevated outlooks, and moments of connection with the wild beauty of southern Poland.",
    date: "2024.03",
    instagramPostId: "C4WMoMvsVl6",
    instagramUrl: "https://www.instagram.com/p/C4WMoMvsVl6/",
    city: "Zakopane",
    country: "Poland"
  },
  {
    lat: 47.3769,
    lng: 8.5417,
    title: "Zurich, Switzerland – Medieval Charm Meets Modern Vibes",
    description: "Zurich, Switzerland’s largest city, beautifully blends medieval heritage and contemporary life along the shores of Lake Zurich. Renowned for its well-preserved Old Town, historic churches, vibrant cultural scene, and status as a major financial hub, Zurich invites visitors to stroll cobbled lanes, discover world-class museums, and relax by the lakeside. Its story runs deep—from Roman origins to a pivotal role in the Reformation—while today’s city pulses with art, cuisine, and cosmopolitan energy. Iconic sights like Grossmünster, Bahnhofstrasse, and the view from Lindenhof Hill make Zurich a must for travelers who seek both history and modern Swiss lifestyle.",
    date: "2022.03",
    instagramPostId: "C4T5-z6sqY_",
    instagramUrl: "https://www.instagram.com/p/C4T5-z6sqY_/",
    city: "Zurich",
    country: "Switzerland"
  },
  {
    lat: 40.4168,
    lng: -3.7038,
    title: "Welcome to Madrid, Spain – Flamenco, Tapas & Plaza Mayor",
    description: "Madrid, Spain’s capital, pulses with energy, creativity, and rich tradition. Stroll through the grand architecture of Plaza Mayor, savor the flavors of authentic tapas, and feel the fiery passion of Flamenco in a city where every corner tells a story. From the lush oasis of Retiro Park to the legendary Sobrino de Botín—the world’s oldest restaurant—Madrid enchants with both historic splendor and vibrant city life. Explore lively neighborhoods, indulge in Spanish cuisine, and experience a unique blend of culture and adventure that makes Madrid unforgettable.",
    date: "2023.10",
    instagramPostId: "C3tsKk1oJGU",
    instagramUrl: "https://www.instagram.com/p/C3tsKk1oJGU/",
    city: "Madrid",
    country: "Spain"
  },
  {
    lat: 43.7034,
    lng: 7.2663,
    title: "Welcome to Nice, France – Experience the French Riviera Magic",
    description: "Nice, the heart of the French Riviera, is celebrated for its sun-soaked beaches, azure Mediterranean waters, and elegant seaside promenade. Stroll through the Old Town's narrow streets to discover vibrant markets, historic squares, and local delicacies. Don’t miss the breathtaking panoramic views from Castle Hill, where the city and coastline unfold below. Nice also invites you to savor culinary specialties like Salade Niçoise and Socca in charming seaside cafes. With its blend of scenery, culture, and cuisine, Nice effortlessly combines relaxation with rich local charm—making it a must-visit on the Côte d'Azur.",
    date: "2023.10",
    instagramPostId: "C3gqbgUIuZm",
    instagramUrl: "https://www.instagram.com/p/C3gqbgUIuZm/",
    city: "Nice",
    country: "France"
  },
  {
    lat: 59.9139,
    lng: 10.7522,
    title: "Welcome to Oslo, Norway – City of Fjords, Culture & Sauna Vibes",
    description: "Oslo, Norway’s vibrant capital, is famed for its breathtaking landscapes—where tranquil fjords meet lush city parks, creating a scenic playground for locals and visitors alike. The city’s rich cultural heritage is woven through world-class museums, lively arts venues, and landmarks that highlight both Norway’s storied history and its creative present. Oslo also boasts a unique sauna culture: from classic wood-fired saunas to innovative floating saunas on the city’s waterfront, these social spots blend relaxation with community, offering a distinctly Norwegian way to unwind and connect. Whether exploring green spaces, immersing yourself in art, or experiencing sauna life, Oslo promises unforgettable moments at the heart of Scandinavia.",
    date: "2023.12",
    instagramPostId: "C3TsamwolU-",
    instagramUrl: "https://www.instagram.com/p/C3TsamwolU-/",
    city: "Oslo",
    country: "Norway"
  },
  {
    lat: 59.4370,
    lng: 24.7536,
    title: "Welcome to Estonia – Medieval Tallinn & Enchanting Landscapes",
    description: "Estonia, nestled on the Baltic Sea, enchants travelers with its historic towns, fairy-tale architecture, and storybook winters. At the heart is Tallinn, renowned for its stunning medieval Old Town—a UNESCO World Heritage site—where snow-dusted spires and cobbled lanes evoke a sense of timeless charm. Beyond the city, Estonia unfolds into serene forests, vibrant festivals, and a culture brimming with warmth and hospitality. From legendary castles to vibrant traditions, every visit here is an immersion into magic, history, and heartfelt Estonian hospitality.",
    date: "2023.12",
    instagramPostId: "C2_DH_SoNMy",
    instagramUrl: "https://www.instagram.com/p/C2_DH_SoNMy/",
    city: "Tallinn",
    country: "Estonia"
  },
  {
    lat: 54.6851,
    lng: 25.2876,
    title: "Welcome to Lithuania – Winter Magic in the Heart of the Baltics",
    description: "Lithuania enchants in winter with snow-kissed landscapes, historic towers, and festive markets. From Vilnius’s iconic Gediminas’ Tower—lit up against a wintry sky and crowned by the national flag—to charming Old Town streets, the country invites visitors to embrace cozy moments, local traditions, and dazzling seasonal events. Experience the magic of Lithuania’s towns and countryside, savor traditional winter delights, and explore a country where history meets winter wonderland charm.",
    date: "2023.12",
    instagramPostId: "C200ByVoHcu",
    instagramUrl: "https://www.instagram.com/p/C200ByVoHcu/",
    city: "Vilnius",
    country: "Lithuania"
  },
  {
    lat: 27.9158,
    lng: 34.3290,
    title: "Welcome to Sharm El Sheikh, Egypt – Red Sea Adventure & Coral Paradise",
    description: "Sharm El Sheikh, nestled on Egypt’s Sinai Peninsula by the Red Sea, is world-famous for its crystal-clear waters, vibrant coral reefs, and year-round sunshine. This stunning resort town beckons with paradise beaches, spectacular snorkelling and diving, and an array of marine life that makes it a haven for underwater explorers. Beyond the sea, palm-lined promenades, luxury resorts, and unforgettable desert sunsets offer visitors relaxation and adventure in equal measure. Sharm El Sheikh is the ultimate destination for those seeking both tranquil escapes and action-packed water sports—promising a dynamic blend of natural beauty, vibrant culture, and resort-town energy at the edge of Egypt's deserts.",
    date: "2023.11",
    instagramPostId: "C2yLSUMIa9I",
    instagramUrl: "https://www.instagram.com/p/C2yLSUMIa9I/",
    city: "Sharm El Sheikh",
    country: "Egypt"
  },
  {
    lat: 0.8502,
    lng: 37.3420,
    title: "Walking in Samburu Villages & Local Markets – Visit to Sadhana Forest’s Projects",
    description: "This journey in the Samburu region of Kenya combined authentic walks through traditional Samburu villages and exploration of vibrant local markets filled with colorful scenes, handmade crafts, and daily life. Visitors had the opportunity to meet the welcoming local community, experience cultural exchanges, and shop for handmade jewelry and wooden masks. The itinerary also included visits to previous projects by the Sadhana Forest organization, which implements reforestation, sustainable farming, and water management initiatives in Samburu. These efforts support food security, environmental conservation, and sustainable development in partnership with the local community. The experiences blended learning, volunteering, daily traditions, and the resilient spirit of life in the heart of Kenya.",
    date: "2024.01",
    instagramPostId: "C2ccu-tqTZ4",
    instagramUrl: "https://www.instagram.com/p/C2ccu-tqTZ4/",
    city: "Samburu",
    country: "Kenya"
  },
  {
    lat: 0.8502,
    lng: 37.3490,
    title: "Volunteering with Samburu Community – Local Connections & Global Impact",
    description: "@wheeling2help | Volunteering in the Samburu region of Kenya offers a unique blend of cultural immersion and meaningful contribution. Volunteers actively engage with Samburu communities through educational projects, youth activities, cultural exchange, and environmental initiatives. Typical experiences involve assisting in village schools, supporting sustainable development projects, participating in daily life, and learning from the rich traditions of the Samburu people. This hands-on involvement fosters impactful connections, encourages mutual understanding, and contributes to positive change in the heart of northern Kenya—a region renowned for its vibrant cultures and stunning natural landscapes.",
    date: "2024.01",
    instagramPostId: "C2X-XbpK720",
    instagramUrl: "https://www.instagram.com/p/C2X-XbpK720/",
    city: "Samburu",
    country: "Kenya"
  },
  {
    lat: 0.8502,
    lng: 37.3520,
    title: "Volunteering with Samburu Community – Local Connections & Global Impact",
    description: "@wheeling2help | Volunteering in the Samburu region of Kenya offers a unique blend of cultural immersion and meaningful contribution. Volunteers actively engage with Samburu communities through educational projects, youth activities, cultural exchange, and environmental initiatives. Typical experiences involve assisting in village schools, supporting sustainable development projects, participating in daily life, and learning from the rich traditions of the Samburu people. This hands-on involvement fosters impactful connections, encourages mutual understanding, and contributes to positive change in the heart of northern Kenya—a region renowned for its vibrant cultures and stunning natural landscapes.",
    date: "2024.01",
    instagramPostId: "C2VNQHNKzzI",
    instagramUrl: "https://www.instagram.com/p/C2VNQHNKzzI/",
    city: "Samburu",
    country: "Kenya"
  },
  {
    lat: 0.8502,
    lng: 37.3320,
    title: "Sibling Caretaking in Samburu – Community, Tradition & Daily Life",
    description: "In the Samburu region of Kenya, older siblings—often as young as 12—play a key role in family and community life. It is common for them to help care for younger brothers and sisters, sometimes carrying them on their backs. This deeply rooted practice fosters responsibility, solidarity, and strong family bonds, reflecting the communal values that define Samburu culture. Such scenes are a daily reminder of the mutual support that shapes childhood and adulthood alike, offering insight into traditions of caregiving and resilience in rural Kenya.",
    date: "2024.01",
    instagramPostId: "C2SnH8WqK-D",
    instagramUrl: "https://www.instagram.com/p/C2SnH8WqK-D/",
    city: "Samburu",
    country: "Kenya"
  },
  {
    lat: 0.8502,
    lng: 37.3520,
    title: "Wildlife Safari in Samburu – Zebra Encounter on the African Plains",
    description: "This experience captures the essence of a safari adventure in Kenya’s Samburu region—where vast, open plains stretch beneath expansive African skies and iconic wildlife roams free. Sightings of zebra herds are common in Samburu, providing visitors with unforgettable moments as these striking animals graze and journey through the reserve’s arid grasslands. The landscape is defined by its natural beauty, dotted with distant homesteads and the occasional acacia tree, offering prime opportunities for nature photography, wildlife observation, and immersion in the rhythms of the African wilderness. Encounters like these highlight the magic and richness of Samburu’s ecosystems, celebrated both for their biodiversity and connection to local culture.",
    date: "2024.01",
    instagramPostId: "C2QZfH9KeMM",
    instagramUrl: "https://www.instagram.com/p/C2QZfH9KeMM/",
    city: "Samburu",
    country: "Kenya"
  },
  {
    lat: 0.8502,
    lng: 37.3580,
    title: "Samburu, Kenya – Volunteer Connections & Community Moments",
    description: "In the Samburu region of Kenya, volunteering brings together people from different backgrounds to make a tangible difference within local communities. Volunteers often participate in educational, environmental, and cultural exchange projects, fostering friendships and breaking barriers between visitors and Samburu residents. Typical experiences include working alongside children, engaging with families, and taking part in daily activities—creating moments rich in learning, shared laughter, and mutual respect. Samburu’s compelling blend of tradition, resilience, and stunning natural landscapes makes every connection meaningful, highlighting how global impact grows from community-level engagement.",
    date: "2024.01",
    instagramPostId: "C2MkgAMq9Ub",
    instagramUrl: "https://www.instagram.com/p/C2MkgAMq9Ub/",
    city: "Samburu",
    country: "Kenya"
  },
  {
    lat: 0.8502,
    lng: 37.3320,
    title: "Samburu, Kenya – Everyday Childhood and Local Encounters",
    description: "In the Samburu region of northern Kenya, daily life features moments that reflect both the simplicity and richness of rural community living. Children, often dressed in comfortable hoodies or traditional attire, enjoy outdoor play, sibling bonds, and a deep connection with their surroundings. Encounters with local youth—whether through volunteering, education, or cultural exchange—highlight the warmth, joy, and resilience that define Samburu childhood. These everyday scenes offer visitors insight into authentic village life, fostering appreciation for solidarity, family connections, and the enduring spirit of Samburu’s younger generations.",
    date: "2024.01",
    instagramPostId: "C2KxU1mq8Tf",
    instagramUrl: "https://www.instagram.com/p/C2KxU1mq8Tf/",
    city: "Samburu",
    country: "Kenya"
  },
  {
    lat: 0.8502,
    lng: 37.3380,
    title: "Samburu, Kenya – Human Connection & Solidarity Across Cultures",
    description: "In the heart of the Samburu region of Kenya, moments of cross-cultural connection and understanding are woven into everyday life. Encounters between visitors and the Samburu community foster gestures of friendship, shared respect, and mutual curiosity—often expressed through simple, powerful acts like holding hands or exchanging smiles. Volunteering, cultural exchange, or just spending time in local villages reveals the warmth, resilience, and hospitality of the Samburu people. These meaningful interactions transcend differences, highlighting the universal values of empathy, solidarity, and dignity, and leaving lasting memories for all involved.",
    date: "2024.01",
    instagramPostId: "C2KxOOIKWIO",
    instagramUrl: "https://www.instagram.com/p/C2KxOOIKWIO/",
    city: "Samburu",
    country: "Kenya"
  },
  {
    lat: 0.8502,
    lng: 37.3220,
    title: "School Gathering in Samburu – Laughter, Learning & Community Spirit",
    description: "Captured in the heart of Kenya’s Samburu region, this scene shows a joyful group of local children gathered outside a rural school building. Moments like these highlight the vibrant spirit and close-knit nature of Samburu’s community, where education, play, and togetherness shape daily life. Children’s laughter, camaraderie, and the welcoming setting underscore the value placed on learning and solidarity in Samburu villages. Such gatherings offer visiting volunteers and travelers a firsthand glimpse into the hopes and resilience of the younger generation—painting a portrait of everyday life, joy, and new possibilities in rural northern Kenya.",
    date: "2024.01",
    instagramPostId: "C2KxDS9K_Y4",
    instagramUrl: "https://www.instagram.com/p/C2KxDS9K_Y4/",
    city: "Samburu",
    country: "Kenya"
  }
















































    





  ];

  console.log('Map script loaded');
  console.log('myTravelPosts:', myTravelPosts);
  console.log('Leaflet:', typeof L);
  console.log('Map container:', document.getElementById('travel-map'));

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

  document.getElementById('countries-visited').textContent = uniqueCountries.length;
  document.getElementById('cities-explored').textContent = uniqueCities.length;
  document.getElementById('travel-posts').textContent = myTravelPosts.length;

  // Fit map to show all markers with padding
  if (myTravelPosts.length > 0) {
    const group = new L.featureGroup(
      myTravelPosts.map(post => L.marker([post.lat, post.lng]))
    );
    travelMap.fitBounds(group.getBounds().pad(0.1));
  }
});
</script>

## Recent Adventures & Tour Guides {#recent-adventures}

<div class="recent-travels">
  <div class="travel-card" id="vietnam-2025">
    <div class="travel-image">
      <img src="/assets/images/travel/vietnam-2025.png" alt="Northen Vietnam">
    </div>
    <div class="travel-content">
      <br>
      <h3 id="easter-vietnam">Easter in Vietnam</h3>
      <p>In April 2025, I volunteered with the Greek NGO Wheeling2Help in the community of Da Bia village</p>
      <div style="text-align: center;">
        <a href="https://docs.google.com/presentation/d/14IV8N7H1TE7uuJi1_hkzmBSuPvgtpl5Ga_izE_hoCZ4/edit?slide=id.g35dda03171d_0_0#slide=id.g35dda03171d_0_0"  class="btn btn--primary btn--small" target="_blank">View #MyQuestVietnam </a>
      </div>
    </div>
  </div>


<div class="recent-travels">
  <div class="travel-card" id="vietnam-2025">
    <div class="travel-image">
      <img src="/assets/images/travel/krakow-guide2.png" alt="City Travels">
    </div>
    <div class="travel-content">
      <br>
      <h3 id="living-krakow">Living in Krakow</h3>
      <p>My experience living in the beautiful city of Krakow, Poland, exploring its rich history, stunning architecture, and vibrant culture</p>
      <div style="text-align: center;">
        <a href="https://docs.google.com/document/d/1kK6SqDRhKBvHyOYG5KcFabgdDate7vDF46-kQatG8io/edit?tab=t.0#heading=h.ukpp0t44nwxx" class="btn btn--primary btn--small">
          View the Guide
        </a>
      </div>
  </div>

<!--   
  {% for travel in site.travelling limit:3 %}
    <div class="travel-card">
      <div class="travel-image">
        <img src="{{ travel.header.teaser }}" alt="{{ travel.title }}">
      </div>
      <div class="travel-content">
        <h3 id="{{ travel.title | slugify }}"><a href="{{ travel.url }}">{{ travel.title }}</a></h3>
        <p class="travel-date">{{ travel.date | date: "%B %Y" }}</p>
        <p>{{ travel.excerpt | truncate: 150 }}</p>
        <a href="{{ travel.url }}" class="btn btn--primary btn--small">Read More</a>
      </div>
    </div>
  {% endfor %}
</div> -->

<!-- ## Travel Guides {#travel-categories} -->

<!-- <div class="travel-categories">
  <div class="category-item" id="city-explorations">
    <img src="/assets/images/travel/krakow-guide.jpg" alt="City Travels">
    <h3 id="living-krakow">Living in Krakow</h3>
    <p>My experience living in the beautiful city of Krakow, Poland, exploring its rich history, stunning architecture, and vibrant culture</p>
    <div style="text-align: center;">
      <a href="https://docs.google.com/document/d/1kK6SqDRhKBvHyOYG5KcFabgdDate7vDF46-kQatG8io/edit?tab=t.0#heading=h.ukpp0t44nwxx" class="btn btn--primary btn--small">
        View the Guide
      </a>
    </div>
  </div> -->
  
  <!-- <div class="category-item" id="nature-outdoors">
    <img src="/assets/images/travel/nature-travels.jpg" alt="Nature Travels">
    <h3 id="nature-outdoors">Nature & Outdoors</h3>
    <p>Hiking, national parks, and natural wonders</p>
    <a href="/travelling/tag/nature/" class="btn btn--primary btn--small">View Nature</a>
  </div>
</div> -->

<!-- ## Travel Gallery {#travel-gallery} -->

<!-- <div class="travel-gallery">
  {% for travel in site.travelling %}
    {% for image in travel.gallery %}
      <div class="gallery-item">
        <a href="{{ image.url }}" class="gallery-image">
          <img src="{{ image.image_path }}" alt="{{ image.title }}">
        </a>
      </div>
    {% endfor %}
  {% endfor %}
</div> -->



<!-- ## Travel Archive {#travel-archive}

<div class="travel-archive">
  <h3 id="all-destinations">All Destinations</h3>
  <ul class="destinations-list">
    {% for travel in site.travelling %}
      <li><a href="{{ travel.url }}">{{ travel.title }} ({{ travel.date | date: "%Y" }})</a></li>
    {% endfor %}
  </ul>
</div> -->