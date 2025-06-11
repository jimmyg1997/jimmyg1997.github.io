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
    description: "The Singapore Cable Car offers a unique aerial journey connecting mainland Singapore to Sentosa Island, starting from the scenic Mount Faber Station. This iconic ride provides unlimited trips with a single ticket, allowing visitors to enjoy jaw-dropping views of the city skyline, lush jungle, and the sea. The cable car is rainproof, cozy, and perfect for dates, solo adventures, or family fun. Highlights include access to both Sentosa Island and Mount Faber, panoramic vistas, and a memorable, value-packed experience that’s more than just transportation—it's an adventure above the city.",
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
    description: "The Singapore Cable Car offers a unique aerial journey connecting mainland Singapore to Sentosa Island, starting from the scenic Mount Faber Station. This iconic ride provides unlimited trips with a single ticket, allowing visitors to enjoy jaw-dropping views of the city skyline, lush jungle, and the sea. The cable car is rainproof, cozy, and perfect for dates, solo adventures, or family fun. Highlights include access to both Sentosa Island and Mount Faber, panoramic vistas, and a memorable, value-packed experience that’s more than just transportation—it's an adventure above the city.",
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
    description: "Bern, the capital of Switzerland, feels like a living storybook—calm, beautiful, and full of charm. The city’s UNESCO-listed Old Town is famous for its medieval arcades, quirky fountains and statues, and the iconic Zytglogge astronomical clock. Strolling through Bern, you’ll discover panoramic views from the Rose Garden, picturesque bridges like the Nydeggbrücke over the turquoise River Aare, and a backdrop of mountains and rooftops in one frame. Bern’s blend of history, nature, and relaxed vibes makes it a must-visit for those who love scenic walks, architecture, and peaceful city experiences.",
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
    description: "Bern, the capital of Switzerland, feels like a living storybook—calm, beautiful, and full of charm. The city’s UNESCO-listed Old Town is famous for its medieval arcades, quirky fountains and statues, and the iconic Zytglogge astronomical clock. Strolling through Bern, you’ll discover panoramic views from the Rose Garden, picturesque bridges like the Nydeggbrücke over the turquoise River Aare, and a backdrop of mountains and rooftops in one frame. Bern’s blend of history, nature, and relaxed vibes makes it a must-visit for those who love scenic walks, architecture, and peaceful city experiences.",
    date: "2025.03",
    instagramPostId: "DJ_ysXlMNjw",
    instagramUrl: "https://www.instagram.com/p/DJ_ysXlMNjw/",
    city: "Bern",
    country: "Switzerland"
  },

  {
    lat: 46.2074,
    lng: 6.1550,
    title: "Jet d’Eau, Geneva",
    description: "The Jet d’Eau in Geneva is one of the world’s tallest fountains and a powerful symbol of the city. Shooting water 140 meters (459 feet) high at a speed of 200 km/h (124 mph), it propels 500 liters per second—about the volume of a bathtub every second. Originally built in 1886 as a pressure release valve for a hydraulic plant, it became a permanent landmark in 1891 and reached its current height in 1951. The fountain is illuminated at night and can be seen from up to 10 kilometers away. Visitors can approach it via a stone pier, but should be mindful of sudden wind shifts that can cause a soaking. The Jet d’Eau is not just an engineering marvel, but also a glowing centerpiece of Geneva’s harbor and skyline.",
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
    description: "Pont du Mont-Blanc is one of Geneva’s most iconic bridges, spanning the Rhône River at the point where it flows out of Lake Geneva. Lined with Swiss and cantonal flags, the bridge offers picturesque views of the city’s elegant architecture and the surrounding Alps. It’s a popular spot for scenic walks and photography, connecting the historic Old Town with Geneva’s modern neighborhoods. From here, visitors can enjoy close proximity to the city’s landmarks, including the famous Jet d’Eau fountain, luxury shops, and lakeside promenades. The bridge embodies Geneva’s cosmopolitan spirit and is a must-see for anyone exploring Switzerland’s second-largest city.",
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
    description: "MuFo Café, located within the main building of the Museum of Photography (MuFo) at Rakowicka 22A in Kraków, is a stylish spot to relax with a coffee before or after exploring the museum’s acclaimed exhibitions. The café sits opposite the bookstore, just before the exhibition entrance, and offers a calm, modern atmosphere for visitors. MuFo itself is Poland’s only museum entirely dedicated to photography, featuring a rich collection and innovative exhibitions like 'Co robi zdjęcie?' that explore the history and future of the medium. The café is open during museum hours and is part of a cultural hub that includes a library, bookstore, and educational spaces, making it a favorite for locals and travelers seeking inspiration and a break from city life.",
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
    description: "Vevey, Switzerland, is home to 'The Fork,' an 8-meter-tall stainless steel sculpture embedded in Lake Geneva near the Alimentarium food museum. Created by Swiss artist Jean-Pierre Zaugg in 1995 to celebrate the museum’s tenth anniversary, the fork has become a beloved symbol of Vevey’s culinary heritage and artistic spirit. Initially intended as a temporary installation, its popularity led to its permanent return in 2008 following a public petition. The Fork stands as a quirky landmark, offering a striking photo opportunity against the backdrop of the lake and Alps, and invites visitors to explore Vevey’s postcard-perfect streets, rich food culture, and serene lakeside atmosphere.",
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
    description: "Vevey, Switzerland, is home to 'The Fork,' an 8-meter-tall stainless steel sculpture embedded in Lake Geneva near the Alimentarium food museum. Created by Swiss artist Jean-Pierre Zaugg in 1995 to celebrate the museum’s tenth anniversary, the fork has become a beloved symbol of Vevey’s culinary heritage and artistic spirit. Initially intended as a temporary installation, its popularity led to its permanent return in 2008 following a public petition. The Fork stands as a quirky landmark, offering a striking photo opportunity against the backdrop of the lake and Alps, and invites visitors to explore Vevey’s postcard-perfect streets, rich food culture, and serene lakeside atmosphere.",
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
    title: "𝐃𝐚𝐲 𝟏 – 𝐖𝐞’𝐯𝐞 𝐀𝐫𝐫𝐢𝐯𝐞𝐝! 🇻🇳🌿",
    description: "Our journey began as we all gathered in Hanoi, buzzing with energy and excitement! 🧡 After preparing our things, we hopped on a 4-hour bus ride to 𝘋𝘢 𝘉𝘪𝘢 𝘙𝘪𝘷𝘦𝘳. The landscapes were breathtaking — green mountains, peaceful waters — and plenty of bonding time with games and laughter on the way 🎲🚌. We arrived at the community that will be our home for the next 7 days. The locals greeted us with delicious food 🍲, and we explored the area and the lake nearby 🌄. We’re now settled into 3 cozy guesthouses, all 30 of us ready to dive into this experience. We ended the night with our first 𝘤𝘪𝘳𝘤𝘭𝘦 𝘰𝘧 𝘨𝘳𝘢𝘵𝘦𝘧𝘶𝘭𝘯𝘦𝘴𝘴, a core tradition of @wheeling2help 🙏 — grounding ourselves in community, purpose, and connection.",
    date: "2025.04",
    instagramPostId: "DJXmZ-5sLTg",
    instagramUrl: "https://www.instagram.com/p/DJXmZ-5sLTg/",
    city: "Da Bac",
    country: "Vietnam"
  },

  {
    lat: 20.6700,
    lng: 105.2560,
    title: "𝐃𝐚𝐲 𝟏 – 𝐖𝐞’𝐯𝐞 𝐀𝐫𝐫𝐢𝐯𝐞𝐝! 🇻🇳🌿",
    description: "Our journey began as we all gathered in Hanoi, buzzing with energy and excitement! 🧡 After preparing our things, we hopped on a 4-hour bus ride to 𝘋𝘢 𝘉𝘪𝘢 𝘙𝘪𝘷𝘦𝘳. The landscapes were breathtaking — green mountains, peaceful waters — and plenty of bonding time with games and laughter on the way 🎲🚌. We arrived at the community that will be our home for the next 7 days. The locals greeted us with delicious food 🍲, and we explored the area and the lake nearby 🌄. We’re now settled into 3 cozy guesthouses, all 30 of us ready to dive into this experience. We ended the night with our first 𝘤𝘪𝘳𝘤𝘭𝘦 𝘰𝘧 𝘨𝘳𝘢𝘵𝘦𝘧𝘶𝘭𝘯𝘦𝘴𝘴, a core tradition of @wheeling2help 🙏 — grounding ourselves in community, purpose, and connection.",
    date: "2025.04",
    instagramPostId: "DJXlBkYszQY",
    instagramUrl: "https://www.instagram.com/p/DJXlBkYszQY/",
    city: "Da Bac",
    country: "Vietnam"
  },

  {
    lat: 20.9500,  // Approximate latitude for Ha Long Bay, Vietnam
    lng: 107.0873, // Approximate longitude for Ha Long Bay, Vietnam
    title: "𝐕𝐢𝐞𝐭𝐧𝐚𝐦, 𝐲𝐨𝐮 𝐦𝐚𝐬𝐭𝐞𝐫𝐩𝐢𝐞𝐜𝐞 𝐨𝐟 𝐧𝐚𝐭𝐮𝐫𝐞",
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
    title: "Sentosa Island – Singapore’s Playground Paradise",
    description: "Sentosa Island is Singapore’s ultimate leisure and adventure destination, offering a blend of sun-soaked beaches, thrilling attractions, and lush greenery just minutes from the city center. Known for its world-class resorts, Universal Studios Singapore, S.E.A. Aquarium, and vibrant beach clubs, Sentosa is perfect for families, couples, and solo travelers alike. The island’s seamless blend of relaxation and excitement, from tranquil coastal walks to adrenaline-pumping rides, makes it a must-visit for anyone seeking fun and unforgettable experiences in Singapore.",
    date: "2025.04",
    instagramPostId: "DJRTD99sCnI",
    instagramUrl: "https://www.instagram.com/p/DJRTD99sCnI/",
    city: "Singapore",
    country: "Singapore"
  },

  {
    lat: 1.2864,
    lng: 103.8531,
    title: "Singapore – The Futuristic Garden City",
    description: "Singapore’s most central point lies in the heart of the Downtown Core, where the city’s iconic skyline, vibrant culture, and lush green spaces converge. Surrounded by landmarks like Marina Bay Sands, Gardens by the Bay, and the Singapore River, this area epitomizes the city’s blend of ultra-modern architecture and natural beauty. Every corner is spotless, efficient, and full of surprises, with Michelin-level street food, world-class shopping, and a seamless mix of cultures. Whether you’re marveling at the skyline from a lotus pond or exploring the bustling streets, central Singapore is a must for every traveler’s bucket list.",
    date: "2025.04",
    instagramPostId: "DJRR3ZGsQM0",
    instagramUrl: "https://www.instagram.com/p/DJRR3ZGsQM0/",
    city: "Singapore",
    country: "Singapore"
  },
  {
    lat: 20.2500,
    lng: 105.9740,
    title: "Vietnamese Boat Rowers of Trang An, Ninh Binh",
    description: "In Ninh Binh’s UNESCO-listed Trang An Scenic Landscape Complex, local boat rowers—often women—are the heart of the experience, expertly guiding visitors through winding waterways surrounded by towering limestone karsts and lush greenery. These skilled rowers, sometimes using their feet to paddle, embody the region’s deep connection to the river and its traditions. Wearing iconic conical hats, they navigate tranquil rivers and hidden grottoes, sharing stories about local life and the natural wonders of ‘Ha Long Bay on Land.’ A boat tour here is not just a journey through breathtaking scenery, but also a cultural encounter with the people who call this magical landscape home.",
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
    description: "From the warm smiles to the strong community spirit, the people of Vietnam leave a lasting impression. Captured in front of the iconic Presidential Palace in Hanoi, this scene reflects the kindness and unity that define the country. The Presidential Palace, a stunning example of French colonial architecture surrounded by lush gardens, stands as a symbol of both Vietnam’s history and its vibrant present. Located in Ba Dinh district near the Ho Chi Minh Mausoleum, the palace grounds are a popular gathering spot for families and visitors, making it an ideal place to experience the heart of Vietnamese culture.",
    date: "2024-Present",
    instagramPostId: "DJJ2JJSsFfI",
    instagramUrl: "https://www.instagram.com/p/DJJ2JJSsFfI/",
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
    description: "Annecy, France, charms visitors with its stunning lake views—clear water, a dramatic mountain backdrop, and the romantic Pont des Amours bridge adorned with love locks. The city is famed for its cheese fondue, colorful old town architecture with canals and bridges, and a relaxed, photogenic vibe. Annecy is perfect for walking, exploring local markets, small shops, and quiet streets, with plenty of gelato stops along the way. Whether you’re after a slow day outdoors or a taste of Savoie culture, Annecy is a top destination for friends and travelers seeking beauty and tranquility.",
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
    description: "Annecy, France, charms visitors with its stunning lake views—clear water, a dramatic mountain backdrop, and the romantic Pont des Amours bridge adorned with love locks. The city is famed for its cheese fondue, colorful old town architecture with canals and bridges, and a relaxed, photogenic vibe. Annecy is perfect for walking, exploring local markets, small shops, and quiet streets, with plenty of gelato stops along the way. Whether you’re after a slow day outdoors or a taste of Savoie culture, Annecy is a top destination for friends and travelers seeking beauty and tranquility.",
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
    description: "Puerto Viejo’s main street is the vibrant heart of this laid-back Caribbean beach town in Costa Rica. Packed with souvenir shops, tattoo studios, braiding stalls, and colorful local businesses, it’s the go-to spot for travelers looking for unique keepsakes and authentic experiences. From handmade crafts and traditional braids to adventurous tattoos, the main street buzzes with energy day and night. The area is easily walkable, lined with restaurants, bars, and the sounds of reggae, making it a must-visit for anyone wanting to soak up the local culture and take home a memorable souvenir.",
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
    description: "Valladolid, Mexico, is a vibrant colonial city in the Yucatán Peninsula known for its pastel-colored streets, rich Mayan heritage, and laid-back atmosphere. The city’s main avenues, like Calzada de los Frailes, are filled with photogenic houses, artisan shops, and street stalls offering everything from handmade crafts to traditional braids and tattoos. Valladolid is also famous for its proximity to iconic cenotes such as Cenote Suytun and Cenote Xkeken, and for being a gateway to Chichen Itza. Whether you’re strolling past the colorful Valladolid letters in Parque Sisal, sampling authentic tacos, or exploring the local art scene at Casa de los Venados, Valladolid offers a unique blend of culture, history, and Instagram-worthy experiences.",
    date: "2025.01",
    instagramPostId: "DJFW6zVM3jY",
    instagramUrl: "https://www.instagram.com/p/DJFW6zVM3jY/",
    city: "Valladolid",
    country: "Mexico"
  },
  {
    lat: 41.9400,
    lng: 21.3000,
    title: "Matka Canyon – North Macedonia’s Natural Wonder",
    description: "Matka Canyon, located just 17 km west of Skopje, is North Macedonia’s premier outdoor destination, celebrated for its dramatic cliffs, emerald waters, and diverse flora and fauna. The canyon features the oldest artificial lake in the country, created by a dam on the Treska River, and offers a wealth of activities: kayaking, boat tours to the famed Vrelo Cave (one of the world’s deepest underwater caves), hiking scenic trails, and exploring medieval monasteries like St. Andrew’s and St. Nicholas Šiševski. With over 5,000 hectares of protected landscape, Matka Canyon is a haven for nature lovers, adventure seekers, and anyone looking to escape the city for breathtaking views, serene waters, and a glimpse into North Macedonia’s natural and cultural heritage.",
    date: "2025.01",
    instagramPostId: "DJFGURIseLz",
    instagramUrl: "https://www.instagram.com/p/DJFGURIseLz/",
    city: "Skopje",
    country: "North Macedonia"
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