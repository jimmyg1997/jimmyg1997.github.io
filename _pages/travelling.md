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
  },

  {
    lat: 48.1459,
    lng: 17.1077,
    title: "Bratislava – 1-Day Itinerary Highlights",
    description: "Bratislava, Slovakia’s charming capital, is perfect for a one-day adventure packed with color, creativity, and local flavor. Start by getting lost in the mesmerizing mirrors and lights of Multium, then grab a unique soup-in-a-bread-cone at Soupculture. Find calm at Čajovňa v podzemí, a cozy underground teahouse, before wrapping up your day with a dreamy sunset from one of the city’s iconic bridges. Bratislava’s walkable center is full of quirky museums, vibrant Old Town streets, and hidden gems—ideal for slow travel and spontaneous discoveries.",
    date: "2025.01",
    instagramPostId: "DJFDADSSkw6",
    instagramUrl: "https://www.instagram.com/p/DJFDADSSkw6/",
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
    description: "In the heart of San Jose, Costa Rica, coffee culture meets artistry with this adorable sloth-painted wooden filter coffee maker, known as a chorreador. Handcrafted and found in local artisan markets, this unique souvenir brings a touch of Costa Rican charm and 'pura vida' spirit to your daily coffee routine. The sloth motif—beloved in Costa Rica—makes every cup cuter and serves as a perfect memento from the city’s vibrant craft scene. Whether brewing at home or gifting to a fellow coffee lover, this piece captures the warmth, creativity, and slow-paced joy of Costa Rican life.",
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
    description: "The Yucatán region of Mexico is a treasure trove of breathtaking landscapes, ancient Mayan wonders, and vibrant colonial towns. From hidden cenotes like the crystal-clear Cenote Ik-Kil to the iconic pyramid of Chichén Itzá—one of the world’s most famous archaeological sites—this area is a dream for explorers. Cruising through scenic roads feels like traveling back in time, with stops in colorful cities such as Valladolid, known for its charming colonial streets and lively atmosphere. The region’s food scene is rich with shrimp tacos, brunch spots, and flavors inspired by Mayan culture. Whether you’re wandering photogenic avenues, swimming in cenotes, or admiring Mayan glyph art, the Yucatán offers a unique blend of history, adventure, and culture.",
    date: "2025.12",
    instagramPostId: "DH176kllbx8",
    instagramUrl: "https://www.instagram.com/p/DH176kllbx8/",
    city: "Valladolid",
    country: "Mexico"
  },
  {
    lat: 20.6896,
    lng: -88.2056,
    title: "Exploring the Yucatán Region, Mexico",
    description: "The Yucatán region is home to some of Mexico’s most breathtaking landscapes and ancient wonders, from hidden cenotes to iconic pyramids. Cruising through its scenic roads feels like traveling back in time, with stops in colorful colonial towns like Valladolid for coffee and a stroll. Don’t miss swimming in the crystal-clear Cenote Ik-Kil, exploring the awe-inspiring pyramid of Chichén Itzá—a giant Mayan calendar with 365 steps—and soaking up the vibrant vibes of Valladolid’s charming streets. The region’s food scene features shrimp tacos, green landscapes, and brunch inspired by Mayan culture. Whether you’re wandering photogenic avenues, swimming in cenotes, or admiring Mayan art, the Yucatán offers a dream for explorers.",
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
    description: "The Quintana Roo coastline is famed for its turquoise waters, vibrant beach towns, and colorful local culture. From Cancun’s perfect weather and endless beaches to the charming streets and souvenir stalls of Puerto Morelos, every stop offers a new adventure. Playa del Carmen enchants with stunning sunset views and delicious guacamole, while Akumal invites you to swim with turtles and snorkel vibrant reefs. Whether you’re exploring Mayan ruins, bargaining for unique crafts like painted skulls and textiles, or simply soaking up the sun, this stretch of the Riviera Maya is a paradise for adventurers, foodies, and anyone seeking relaxation and exploration.",
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
    description: "The Quintana Roo coastline is famed for its turquoise waters, vibrant beach towns, and colorful local culture. From Cancun’s perfect weather and endless beaches to the charming streets and souvenir stalls of Puerto Morelos, every stop offers a new adventure. Playa del Carmen enchants with stunning sunset views and delicious guacamole, while Akumal invites you to swim with turtles and snorkel vibrant reefs. Whether you’re exploring Mayan ruins, bargaining for unique crafts like painted skulls and textiles, or simply soaking up the sun, this stretch of the Riviera Maya is a paradise for adventurers, foodies, and anyone seeking relaxation and exploration.",
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
    description: "Puntarenas is Costa Rica’s coastal gem, offering a unique blend of culture, nature, and serenity. Founded in 1575, this bustling port town is known for its beautiful beaches, vibrant local life, and rich history. Visitors can enjoy relaxed strolls along the oceanfront, feast on fresh seafood at open-air cafés, and explore lively local markets. The town’s Paseo de los Turistas promenade is lined with shade trees, seafood restaurants, and vendors selling souvenirs and the famous Churchill dessert. Puntarenas is a gateway to adventure, with easy access to the Nicoya Peninsula, nearby wildlife refuges, and boat tours to Tortuga Island. Whether you’re seeking peaceful views, authentic Costa Rican lifestyle, or a taste of local festivities, Puntarenas offers a welcoming and memorable experience.",
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
    description: "Puntarenas is Costa Rica’s coastal gem, offering a unique blend of culture, nature, and serenity. Founded in 1575, this bustling port town is known for its beautiful beaches, vibrant local life, and rich history. Visitors can enjoy relaxed strolls along the oceanfront, feast on fresh seafood at open-air cafés, and explore lively local markets. The town’s Paseo de los Turistas promenade is lined with shade trees, seafood restaurants, and vendors selling souvenirs and the famous Churchill dessert. Puntarenas is a gateway to adventure, with easy access to the Nicoya Peninsula, nearby wildlife refuges, and boat tours to Tortuga Island. Whether you’re seeking peaceful views, authentic Costa Rican lifestyle, or a taste of local festivities, Puntarenas offers a welcoming and memorable experience.",
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
    description: "The Polish Aviation Museum in Kraków is one of the world’s premier aviation museums, set on the historic grounds of the former Rakowice-Czyżyny airfield—one of Europe’s oldest, dating back to 1912. The museum’s collection features over 300 aircraft, including rare World War I and II planes, Soviet-era jets like the MiG-29, gliders, helicopters, and unique artifacts such as the only surviving Russian Grigorovich M-15 flying boat. Visitors can explore open-air exhibits, historic hangars, and a modern main building shaped like a propeller. The museum is a must-visit for aviation enthusiasts, history buffs, and families, offering immersive experiences, interactive displays, and special events like air shows. Ticket prices are affordable, with discounts for students and free admission for young children.",
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
    description: "Fifteen minutes of staring at the same patch of trees, and then—finally—I spot it. A bundle of fur clinging lazily to a branch, moving so slowly it’s almost imperceptible. Its face, frozen in a permanent, sleepy smile, tilts slightly as if acknowledging my presence. The world around it is alive with buzzing insects and chattering monkeys, yet the sloth exists in its own peaceful dimension, unbothered, unhurried. Watching it, I feel my own heartbeat slow, my thoughts quiet. Maybe, for once, nature is teaching me to stop rushing.",
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
    description: "Wandering through the misty roads of Cartago, Costa Rica, feels like stepping into a dream. Surrounded by lush green valleys, towering volcanoes like Irazú, and hidden waterfalls, the region offers an unforgettable drive through nature’s masterpiece. Cartago is home to the mystical ruins of Santiago Apóstol, the stunning Orosi Valley, and the magnificent Basilica of Our Lady of the Angels—one of the most important pilgrimage sites in Latin America. The city’s colonial past, vibrant markets, and proximity to both the Pacific and Caribbean make it a perfect destination for road trip lovers, history enthusiasts, and nature seekers. Cartago’s cool climate, scenic drives, and rich cultural heritage invite travelers to explore beyond Costa Rica’s beaches and discover its original capital in the heart of the Central Valley.",
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
    description: "Just a short ride from downtown, the Amador Causeway offers stunning views of the Panama City skyline and the Panama Canal. Built using rocks from the canal’s excavation, this iconic road connects four small islands, blending history, nature, and leisure. Visitors can enjoy breathtaking sunsets, rent a bike to cruise the 6km stretch, dine at waterfront restaurants serving fresh seafood, and explore the Frank Gehry-designed Museum of Biodiversity. The causeway is free to visit, with rental fees applying for bikes and attractions, making it ideal for solo travelers, couples, families, and photography lovers.",
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
    description: "Just a short ride from downtown, the Amador Causeway offers stunning views of the Panama City skyline and the Panama Canal. Built using rocks from the canal’s excavation, this iconic road connects four small islands, blending history, nature, and leisure. Visitors can enjoy breathtaking sunsets, rent a bike to cruise the 6km stretch, dine at waterfront restaurants serving fresh seafood, and explore the Frank Gehry-designed Museum of Biodiversity. The causeway is free to visit, with rental fees applying for bikes and attractions, making it ideal for solo travelers, couples, families, and photography lovers.",
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
    description: "Colombia isn’t just famous for coffee—it’s a global leader in specialty brews! This coffee-tasting journey in Quinta Camacho, Chapinero—Bogotá’s trendiest neighborhood—offers award-winning specialty coffees from different Colombian regions. Visitors learn about the bean-to-cup process with expert baristas and explore Bogotá’s vibrant café culture. The experience includes guided tastings at top specialty coffee shops and insights into why Colombian coffee is considered among the world’s finest. Ideal for coffee lovers and travelers seeking immersive local experiences.",
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
    description: "Colombia isn’t just famous for coffee—it’s a global leader in specialty brews! This coffee-tasting journey in Quinta Camacho, Chapinero—Bogotá’s trendiest neighborhood—offers award-winning specialty coffees from different Colombian regions. Visitors learn about the bean-to-cup process with expert baristas and explore Bogotá’s vibrant café culture. The experience includes guided tastings at top specialty coffee shops and insights into why Colombian coffee is considered among the world’s finest. Ideal for coffee lovers and travelers seeking immersive local experiences.",
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
    instagramPostId: "DGb8n-3lh-O",
    instagramUrl: "https://www.instagram.com/p/DGb8n-3lh-O/",
    city: "Panama City",
    country: "Panama"
  },
  {
    lat: 8.956960,
    lng: -79.534767,
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
    description: "Manuel Antonio National Park, nestled on Costa Rica’s Pacific coast near Quepos, is a small yet stunning protected area renowned for its incredible biodiversity and breathtaking scenery. The park is a paradise where lush rainforest meets pristine white-sand beaches and turquoise waters, home to sloths, howler monkeys, toucans, and over 100 species of mammals and 180+ bird species. Visitors can explore scenic jungle trails, relax on beaches like Playa Espadilla Sur and Playa Manuel Antonio, and snorkel among coral reefs. The park is open Tuesday through Sunday, 7:30 am to 4 pm, with visitor limits to preserve its natural beauty. Ticket fees vary: foreigners $18/adult, children $5, locals $5 (adults), $1.50 (children). Manuel Antonio is a must-visit for nature lovers and adventure seekers alike.",
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
    instagramPostId: "CL_K/",
    instagramUrl: "https://www.instagram.com/p/CL_K/",
    city: "Kraków",
    country: "Poland"
  },

  {
    lat: 50.0647,
    lng: 19.9480,
    title: "Making Homemade Pierogis in Krakow, Poland",
    description: "After three years, I’m back in Krakow—the place where it all began. Nothing beats the smell of fresh pierogis cooking in the kitchen, just like my grandmother used to make them. The process is therapeutic: hand-rolling the dough, stuffing it with savory fillings, and folding them with love. It’s more than just food; it’s a piece of my heart that I’ve carried across borders. Krakow is where I feel most connected to my roots—full of nostalgia, tradition, and joy in simple moments. This is the magic of homemade pierogis: a true taste of Polish heritage, best enjoyed with family and friends in the city’s warm, welcoming kitchens.",
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
    description: "Costa Rica’s festive spirit shines in San Jose during Christmas with a joyful gingerbread house competition, where families come together to craft creative, festive houses in a warm, community atmosphere. This unique experience blends local holiday traditions with hands-on workshops, allowing both kids and adults to express their creativity and create lasting memories. The event highlights Costa Rican craftsmanship and the holiday vibe at the heart of the city, making it a perfect activity for families, creative enthusiasts, and Christmas lovers seeking to embrace the magic of the season.",
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
    description: "Cascada El Chiflón is a breathtaking waterfall in Colombia, cascading over 70 meters and surrounded by lush, tropical greenery. Its name, 'El Chiflón,' comes from the whistling sound made by the rushing water. Visitors can enjoy crystal-clear pools for a refreshing dip, serene hiking trails with jaw-dropping views, and suspension bridges offering panoramic vistas. Entry is approximately $3 (10,000 COP). The site is perfect for hikers, photographers, and anyone seeking tranquility in nature, with plenty of photo spots for adventure seekers. Cascada El Chiflón is a must-visit gem for those exploring Colombia’s natural beauty.",
    date: "2024.12",
    instagramPostId: "DE6GZEjJ9XH",
    instagramUrl: "https://www.instagram.com/p/DE6GZEjJ9XH/",
    city: "Boyacá",
    country: "Colombia"
  },
  {
    lat: 8.9739,
    lng: -79.5306,
    title: "Discover Ancon Hill, Panama City",
    description: "Ancon Hill (Cerro Ancón) stands tall at 199 meters, offering the best panoramic views of Panama City, the famous Miraflores Locks, and the lush rainforest. It is a protected area home to unique wildlife like sloths, toucans, and butterflies. The lush greenery becomes even more vibrant in the rain, and wildlife spotting improves as many animals become more active. Ancon Hill is a gift from nature with no entry charge, symbolizing Panama’s sovereignty, with a flag at the summit commemorating independence. The hike is moderate and accessible for most, taking around 30-40 minutes to the top. It is ideal for nature lovers, photographers, and adventure seekers.",
    date: "2024.12",
    instagramPostId: "DEyAeSHMAyY",
    instagramUrl: "https://www.instagram.com/p/DEyAeSHMAyY/",
    city: "Panama City",
    country: "Panama"
  },
  {
    lat: 8.9525,
    lng: -79.5350,
    title: "Casco Viejo – Panama City’s Historic Soul",
    description: "Casco Viejo, also known as Casco Antiguo or San Felipe, is the UNESCO-listed historic district of Panama City, celebrated for its cobblestone streets, colonial architecture, vibrant murals, and lively atmosphere. Founded in 1673 after the original city was destroyed by pirates, Casco Viejo is a cultural melting pot where French, Spanish, and Caribbean influences blend in restored neoclassical buildings, centuries-old churches, boutique cafés, rooftop bars, and colorful plazas. Highlights include the famous Golden Altar at Iglesia de San José, the bustling Plaza de la Independencia, and panoramic city views from rooftop lounges. Entry to explore Casco Viejo is free, with guided tours available for $10–$20. It’s a must-visit for history lovers, foodies, and anyone seeking Panama’s vibrant nightlife and cultural heart.",
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
    description: "Nestled in the scenic hills near Cartago, the Carlos Durán Sanatorium is one of Costa Rica’s most intriguing and eerie attractions. Built in 1918 by Dr. Carlos Durán Cartín—who briefly served as the country’s president—the sanatorium was originally a tuberculosis treatment center, chosen for its remote location and healing climate. At its peak, it housed up to 300 patients and was staffed largely by nuns from the Sisters of Charity Santa Anna. The facility later served as an orphanage and prison before closing permanently in the 1970s. Today, the decaying Gothic-modernist buildings and graffiti-lined corridors have earned a reputation as the country’s most haunted site, attracting history buffs, ghost hunters, and explorers. Visitors can roam the grounds, discover chilling legends of ghostly nuns and children, and capture panoramic views of Cartago and the Irazú Volcano. Admission is about $3, with guided tours available for a deeper dive into its mysterious past.",
    date: "2024.12",
    instagramPostId: "DEqu51e1ZKK",
    instagramUrl: "https://www.instagram.com/p/DEqu51e1ZKK/",
    city: "Cartago",
    country: "Costa Rica"
  },
  {
    lat: 21.1619,
    lng: -86.8515,
    title: "Should You Rent a Car in Cancun, Mexico?",
    description: "Renting a car in Cancun is a great way to unlock the best of Mexico’s Yucatán Peninsula, offering freedom to explore cenotes, Mayan ruins, and charming towns at your own pace. Many travelers worry about hidden fees, frozen deposits, or scams at the airport, but with reputable agencies like Jolly Car Rent, Discover Cars, or Fiesta Car Rental, you can enjoy transparent pricing, no hidden fees, and reliable service. Always opt for full coverage insurance (required by Mexican law), inspect your vehicle, and confirm all costs upfront. Most agencies require a valid driver’s license, passport, credit card, and a minimum age of 18–25. Renting a car is often cheaper and more flexible than relying on tours or taxis, making it ideal for adventurous travelers who want to see more than just the resorts.",
    date: "2024.12",
    instagramPostId: "DEn6vrEIKI4",
    instagramUrl: "https://www.instagram.com/p/DEn6vrEIKI4/",
    city: "Cancun",
    country: "Mexico"
  },

  {
    lat: 9.6566,
    lng: -82.7546,
    title: "Renting an Airbnb in Puerto Viejo, Costa Rica",
    description: "Looking for a tropical escape that blends adventure and relaxation? Renting an Airbnb in Puerto Viejo de Talamanca is the perfect choice. Wake up to howler monkeys calling from the treetops, unwind with toucans, sloths, and the soothing sound of tropical rain, and experience true eco-living while staying close to stunning Caribbean beaches. Price ranges vary from budget-friendly ($50–$100/night) to luxe options ($150–$250+/night), making it ideal for couples, groups, or anyone seeking a romantic escape. Puerto Viejo is home to Costa Rica’s top surf spots and boasts a laid-back Caribbean vibe that’s unmatched anywhere else.",
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
    description: "Cenote Ik-Kil is a spectacular natural limestone sinkhole (cenote azul) near Chichén Itzá, sacred to the Mayans and famed for its jaw-dropping 40-meter depth and crystal-clear sapphire waters. Surrounded by lush jungle vines, it feels like stepping into an otherworldly oasis—perfect for swimming, floating, and escaping the heat. The cenote features a diving platform for thrill-seekers and is just 3km from Chichén Itzá, making it an ideal stop after exploring ancient ruins. Tickets cost about $5 USD (100 MXN), with lockers and life jackets available for rent. While it’s a paradise for adventure junkies, swimmers, and families, visitors should be aware of occasional water contamination and frequent crowds. Pro tip: Visit early or late afternoon to avoid the rush.",
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
    description: "Puntarenas is Costa Rica’s coastal gem, offering a unique blend of culture, nature, and serenity. Founded in 1575, this bustling port town is known for its beautiful beaches, vibrant local life, and rich history. Visitors can enjoy relaxed strolls along the oceanfront, feast on fresh seafood at open-air cafés, and explore lively local markets. The town’s Paseo de los Turistas promenade is lined with shade trees, seafood restaurants, and vendors selling souvenirs and the famous Churchill dessert. Puntarenas is a gateway to adventure, with easy access to the Nicoya Peninsula, nearby wildlife refuges, and boat tours to Tortuga Island. Whether you’re seeking peaceful views, authentic Costa Rican lifestyle, or a taste of local festivities, Puntarenas offers a welcoming and memorable experience.",
    date: "2024.12",
    instagramPostId: "DEUA-Vwsm_p",
    instagramUrl: "https://www.instagram.com/p/DEUA-Vwsm_p/",
    city: "Puntarenas",
    country: "Costa Rica"
  },
  {
    lat: 4.5231,
    lng: -73.9856,
    title: "Cascada La Chorrera – Colombia’s Tallest Waterfall Near Bogotá",
    description: "Cascada La Chorrera is Colombia’s tallest waterfall, plunging an impressive 590 meters (1,936 feet) through lush cloud forests near the town of Choachi, just 30 kilometers from Bogotá. Reaching the falls is an adventure: order an Uber or take a bus, then hike 2–3 hours through scenic paramo landscapes, crossing suspension bridges and passing smaller waterfalls like El Chiflón along the way. The moderately difficult hike rewards visitors with breathtaking views and the chance to swim in cold, crystal-clear waters. Entrance costs around $10 USD, with transport from Bogotá typically $50 by Uber. The entire trip takes about 5 hours, making it a perfect day escape for hikers, nature lovers, and anyone seeking Colombia’s wild beauty.",
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
    description: "Manuel Antonio National Park is one of the world’s smallest yet most biodiverse national parks, renowned for its lush rainforests, turquoise beaches, and abundant wildlife—including sloths, monkeys, and colorful toucans. Visitors can hike stunning jungle trails that lead to pristine beaches, swim, snorkel, or simply enjoy unmatched views. Entry fees are $18 for adults and free for kids under 12; the park is open from 7 AM to 4 PM, closed on Tuesdays. Hidden gems include Playa Biesanz for calm waters and ziplining adventures through the rainforest canopy. For sunset, El Avión Restaurant offers epic ocean views paired with fresh seafood and drinks. Manuel Antonio is a paradise for adventure lovers, nature enthusiasts, and anyone seeking a unique Costa Rican experience.",
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
    description: "The Saint Coffee Festival 2024 at Hala Cracovia in Kraków is a must-visit event for coffee enthusiasts, taking place on 14–15 December 2024. The festival features exclusive coffee tastings with rare brews from over 30 specialty roasters worldwide and thrilling live barista battles where top baristas compete for the ultimate coffee crown. Fun facts: the festival celebrates Saint Drogo, the patron saint of coffee lovers, and local legend claims that the aroma of freshly brewed coffee helps ward off the winter blues. A day pass costs 20zł and includes a recyclable cup you can keep. The festival is perfect for anyone passionate about coffee culture, specialty brews, and Kraków’s vibrant community spirit.",
    date: "2024.12",
    instagramPostId: "DDni8MUlo6D",
    instagramUrl: "https://www.instagram.com/p/DDni8MUlo6D/",
    city: "Kraków",
    country: "Poland"
  },

  {
    lat: 50.0468,
    lng: 19.9571,
    title: "Christmas Breakfast Weekend at Hala Lipowa, Kraków",
    description: "Hala Lipowa in Kraków comes alive during the Christmas season with a perfect blend of festive vibes, great food, and community spirit. The weekend kicks off with the Breakfast Festival, where for 29 PLN, guests enjoy classic breakfasts paired with coffee in a cozy, welcoming setting. On Sunday, the Jarmark Świąteczny (Christmas Market) transforms the venue with handmade decorations, local crafts, unique gifts, and seasonal treats, all set to the backdrop of live music that elevates the holiday magic. Hala Lipowa’s vibrant food hall atmosphere, diverse street food stalls, and creative events make it a must-visit for anyone seeking Kraków’s authentic holiday charm and culinary delights.",
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
    description: "Krakow’s Main Square comes alive each December with the magical lighting ceremony of its iconic Christmas tree. This year’s tree stands 15 meters tall and dazzles with 26,000 energy-saving lights, 63 icicles, and over 1,000 baubles, creating a festive atmosphere in the heart of the city. The event draws locals and visitors alike to celebrate the start of the holiday season beneath the historic spires of St. Mary’s Basilica. The lighting ceremony is a highlight of Krakow’s winter, perfect for families, photographers, and anyone seeking the true spirit of Christmas in Poland.",
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
    title: "Wroclaw’s Magical Christmas Market",
    description: "Wroclaw’s Jarmark Bożonarodzeniowy transforms the city’s Old Town Rynek into a fairytale wonderland, blending Gothic architecture with twinkling lights. Unique traditions include sipping on grzaniec galicyjski (Galician mulled wine) from collectible mugs—some flavors are exclusive to this market! Entry is free, and visitors can browse handcrafted ornaments, candles, and treats from local and international vendors. The market is family-friendly, featuring whimsical dwarf displays and Santa’s sleigh rides for children. More than just a market, it’s a festive tradition and the perfect way to embrace the season’s spirit. The event runs from November 17 to December 24 at Rynek, Plac Solny, and Świdnicka Street.",
    date: "2024.12",
    instagramPostId: "DDFJbYMLd9J",
    instagramUrl: "https://www.instagram.com/p/DDFJbYMLd9J/",
    city: "Wroclaw",
    country: "Poland"
  },
  {
    lat: 50.050846,
    lng: 19.931291,
    title: "19th Krakow Jazz Autumn – What a Night! Manggha Museum",
    description: "The 19th Krakow Jazz Autumn ended on a high note at the iconic Manggha Museum, with the final concert of the Blue Shroud Band residency and a phenomenal performance by the ADAM Quartet. This world-class jazz festival brings together international musicians and innovative collaborations—like the ADAM Quartet’s fresh take on classical and contemporary music with guests such as Laufey and ISH. The festival’s atmosphere blends Krakow’s vibrant culture, stunning venues, and unforgettable live music. Mark your calendar for 2025 and immerse yourself in the magic of Krakow Jazz Autumn!",
    date: "2024.11",
    instagramPostId: "DC5ZKH3IqGB",
    instagramUrl: "https://www.instagram.com/p/DC5ZKH3IqGB/",
    city: "Kraków",
    country: "Poland"
  },
  {
    lat: 50.0545,
    lng: 19.9366,
    title: "Lapidarium at Wawel Castle – Kraków’s Hidden Treasure",
    description: "Step into the heart of history with the Lapidarium, a hidden gem within Wawel Castle that showcases ancient stone artifacts, sculptures, tombstones, and architectural fragments from Poland’s royal past. Located in the castle’s medieval cloisters, the Lapidarium offers a peaceful setting for reflection and a fascinating glimpse into Kraków’s rich cultural heritage. The collection features stone carvings dating back to the 14th century, highlighting medieval craftsmanship and artistic styles, as well as fragments from historical buildings and monuments from across Poland. This contemplative museum is perfect for history buffs, art lovers, and anyone seeking a unique and immersive experience in Polish history.",
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
    description: "The Bonsai & Ikebana exhibition at Manggha Museum in Kraków offers a serene journey into Japanese art and tradition. Ikebana, which originated in Japan during the 6th century as a Buddhist offering practice, emphasizes harmony between heaven, earth, and humankind. Bonsai is not a type of tree but an art form of cultivating miniature trees in containers—some bonsai trees can live for over 1,000 years! The exhibition highlights the meditative and philosophical aspects of both arts: Ikebana’s use of negative space, asymmetry, and seasonal elements, and Bonsai’s range of styles from formal upright to windswept, reflecting nature’s beauty. Visitors can experience the balance, simplicity, and deep connection to nature that define these timeless Japanese traditions.",
    date: "2024.11",
    instagramPostId: "DCJ1EqkMSg3",
    instagramUrl: "https://www.instagram.com/p/DCJ1EqkMSg3/",
    city: "Kraków",
    country: "Poland"
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
      <img src="/assets/images/travel/vietnam-2025.png" alt="Northen Vietnam">
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