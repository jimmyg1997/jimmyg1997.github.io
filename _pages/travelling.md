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

## Instagram Feed {#instagram-feed}

<div class="instagram-feed">
  <div class="instagram-grid">
    <!-- Instagram Post 1 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DCfVqXxMQ5-/" data-instgrm-version="14" data-instgrm-width="1000">
        <a href="https://www.instagram.com/p/DCfVqXxMQ5-/" target="_blank">View this post on Instagram</a>
      </blockquote>
    </div>
    <!-- Instagram Post 2 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DMDgGKJMEnE/" data-instgrm-version="14" data-instgrm-width="1000">
        <a href="https://www.instagram.com/p/DMDgGKJMEnE/" target="_blank">View this post on Instagram</a>
      </blockquote>
    </div>
    <!-- Instagram Post 3 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DGuyZCVMAj7/" data-instgrm-version="14" data-instgrm-width="1000">
        <a href="https://www.instagram.com/p/DGuyZCVMAj7/" target="_blank">View this post on Instagram</a>
      </blockquote>
    </div>
  </div>
</div>

<script async src="//www.instagram.com/embed.js"></script>
<script>
  window.addEventListener('load', function() {
    if (typeof instgrm !== 'undefined' && instgrm.Embeds) {
      try {
        // Only process blockquote elements, not iframes (which are handled separately)
        const blockquotes = document.querySelectorAll('blockquote.instagram-media');
        if (blockquotes.length > 0) {
          instgrm.Embeds.process();
        }
      } catch (e) {
        console.warn('Instagram embed processing error (non-critical):', e);
      }
    }
  });
</script>

<style>
/* Some global blog CSS likely forces canvas height:auto; that breaks WebGL maps.
   Explicitly force MapLibre / OpenLayers canvases to fill their containers. */
#openlayers-map {
  position: relative;
}

#openlayers-map .ol-viewport {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

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
    height: auto;
    min-height: 360px;
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
    height: auto;
    min-height: 0;
    max-height: none;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
  }
/* Instagram blockquote styling for larger display */
.instagram-media {
  width: 100% !important;
  max-width: 1000px !important;
  margin: 0 auto !important;
  display: block !important;
}

.instagram-media iframe {
  width: 100% !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: none !important;
  border: none !important;
  border-radius: 8px !important;
  object-fit: contain !important;
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
    height: auto !important;
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: none;
  }
}

/* Custom Instagram Gallery Styles */
.instagram-feed {
  margin: 2rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.instagram-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  box-sizing: border-box;
}

.instagram-post {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow: visible;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
  margin: 0 auto;
}

.instagram-post:hover {
  transform: translateY(-2px);
}

.instagram-header {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #efefef;
}

.instagram-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
}

.instagram-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.instagram-user {
  flex: 1;
  text-align: left;
}

.instagram-user strong {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #262626;
}

.instagram-user span {
  font-size: 12px;
  color: #8e8e8e;
}

.instagram-more {
  font-size: 18px;
  color: #262626;
  cursor: pointer;
}

.instagram-image {
  width: 100%;
  aspect-ratio: 1;
  overflow: visible;
}

.instagram-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.instagram-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
}

.instagram-icons {
  display: flex;
  gap: 16px;
}

.instagram-icons span {
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.instagram-icons span:hover {
  transform: scale(1.1);
}

.instagram-save {
  font-size: 24px;
  cursor: pointer;
}

.instagram-likes {
  padding: 0 12px 8px;
  text-align: left;
}

.instagram-likes strong {
  font-size: 14px;
  color: #262626;
}

.instagram-caption {
  padding: 0 12px 8px;
  text-align: left;
  font-size: 14px;
  line-height: 1.4;
  color: #262626;
}

.instagram-caption strong {
  font-weight: 600;
}

.instagram-time {
  padding: 0 12px 12px;
  text-align: left;
  font-size: 12px;
  color: #8e8e8e;
  text-transform: uppercase;
}

/* Loading spinner */
.instagram-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #8e8e8e;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3897f0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Instagram overlay for hover effect */
.instagram-image {
  position: relative;
  overflow: hidden;
}

.instagram-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.instagram-post:hover .instagram-overlay {
  opacity: 1;
}

.instagram-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid white;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.instagram-link:hover {
  background: white;
  color: #3897f0;
}

@media (min-width: 900px) {
  .instagram-feed {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .instagram-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    box-sizing: border-box;
  }
  .instagram-post {
    width: 100%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease;
    margin: 0 auto;
  }
}
@media (max-width: 899px) and (min-width: 600px) {
  .instagram-feed {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .instagram-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 700px;
    width: 100%;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    box-sizing: border-box;
  }
  .instagram-post {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .instagram-media iframe {
    width: 100% !important;
    min-height: 700px !important;
    max-height: 1000px !important;
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

## Travel Summary {#travel-summary}

<div class="travel-summary-section" style="margin: 2rem 0; padding: 2rem; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; border: 1px solid #dee2e6;">
  
  <div id="travel-insights" style="margin-bottom: 2rem;">
    <!-- Insights will be populated by JavaScript -->
  </div>
  <div id="travel-timeline-viz">
    <!-- Timeline visualization will be populated by JavaScript -->
  </div>
</div>


<!-- ## Interactive Travel Map {#interactive-travel-map} -->

## Interactive Travel Map {#interactive-travel-map}

<div style="margin: 3rem 0;">
  <div style="background: linear-gradient(135deg, #fff3e0 0%, #f5f5f5 100%); padding: 1rem 1.5rem; border-radius: 10px; margin-bottom: 1rem; border-left: 4px solid #FF9800;">
    <p style="margin: 0; color: #333; font-size: 0.95rem; line-height: 1.6;">
      <strong style="color: #F57C00;">📸 Detailed Interactive Map</strong> — Full Instagram post embeds in popups. Click any marker to view the complete post with images and captions. Best for detailed exploration!
    </p>
  </div>
  <div id="openlayers-map" style="width: 100%; height: 450px; border-radius: 12px; border: 1px solid #ddd; box-shadow: 0 4px 12px rgba(0,0,0,0.06);"></div>
  <div class="travel-stats" style="display: flex; justify-content: center; gap: 2rem; margin-top: 1.5rem; text-align: center;">
    <div style="background: #f8f9fa; padding: 0.75rem 1.25rem; border-radius: 8px; border-left: 4px solid #001f3f;">
      <strong id="openlayers-countries" style="font-size: 2.0em; color: #001f3f;">0</strong>
      <div style="color: #666; font-size: 1.05em;">Countries</div>
    </div>
    <div style="background: #f8f9fa; padding: 0.75rem 1.25rem; border-radius: 8px; border-left: 4px solid #28a745;">
      <strong id="openlayers-cities" style="font-size: 2.0em; color: #28a745;">0</strong>
      <div style="color: #666; font-size: 1.05em;">Cities</div>
    </div>
    <div style="background: #f8f9fa; padding: 0.75rem 1.25rem; border-radius: 8px; border-left: 4px solid #dc3545;">
      <strong id="openlayers-posts" style="font-size: 2.0em; color: #dc3545;">0</strong>
      <div style="color: #666; font-size: 1.05em;">Posts</div>
    </div>
  </div>
</div>

<!-- OpenLayers -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@9.2.4/ol.css">
<script src="https://cdn.jsdelivr.net/npm/ol@9.2.4/dist/ol.js"></script>

<script>
function initExperimentalMaps() {
  // Wait until myTravelPosts is available (it is defined in the commented Interactive Travel Map script)
  if (!window.myTravelPosts || !Array.isArray(window.myTravelPosts) || window.myTravelPosts.length === 0) {
    // Try again a few times in case the other script runs slightly later
    if (!initExperimentalMaps._retries) initExperimentalMaps._retries = 0;
    if (initExperimentalMaps._retries < 40) {
      console.log('[ExperimentalMaps] myTravelPosts not ready yet, retry', initExperimentalMaps._retries + 1);
      initExperimentalMaps._retries += 1;
      setTimeout(initExperimentalMaps, 250);
    }
    return;
  }

  console.log('[ExperimentalMaps] Initialising with', window.myTravelPosts.length, 'posts');

  // Build a reusable GeoJSON-like structure
  const travelFeatures = window.myTravelPosts
    .filter(p => typeof p.lat === 'number' && typeof p.lng === 'number')
    .map((post, index) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [post.lng, post.lat]
      },
      properties: {
        id: index,
        title: post.title || '',
        city: post.city || '',
        country: post.country || '',
        date: post.date || '',
        instagramUrl: post.instagramUrl || (post.instagramPostId ? ('https://www.instagram.com/p/' + post.instagramPostId + '/') : '')
      }
    }));

  const travelFeatureCollection = {
    type: 'FeatureCollection',
    features: travelFeatures
  };

  console.log('[ExperimentalMaps] travelFeatures count:', travelFeatures.length);
  console.log('[ExperimentalMaps] OpenLayers present:', typeof ol !== 'undefined');

  // Shared analytics: unique countries, unique cities, total posts
  const countriesSet = new Set(window.myTravelPosts.map(p => p.country).filter(Boolean));
  const citiesSet = new Set(window.myTravelPosts.map(p => p.city).filter(Boolean));
  const totalPosts = window.myTravelPosts.length;

  const countriesCount = countriesSet.size;
  const citiesCount = citiesSet.size;

  console.log('[ExperimentalMaps] analytics -> countries:', countriesCount, 'cities:', citiesCount, 'posts:', totalPosts);

  // Populate analytics for OpenLayers stats strip (if present)
  const olCountriesEl = document.getElementById('openlayers-countries');
  const olCitiesEl = document.getElementById('openlayers-cities');
  const olPostsEl = document.getElementById('openlayers-posts');
  if (olCountriesEl) olCountriesEl.textContent = countriesCount;
  if (olCitiesEl) olCitiesEl.textContent = citiesCount;
  if (olPostsEl) olPostsEl.textContent = totalPosts;

  // Common popup HTML generator with X button
  function buildPopupHTML(props) {
    const safe = (v) => String(v || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const title = safe(props.title);
    const city = safe(props.city);
    const country = safe(props.country);
    const date = safe(props.date);
    const url = props.instagramUrl || '#';
    const instaId = (props.instagramUrl && props.instagramUrl.split('/p/')[1])
      ? props.instagramUrl.split('/p/')[1].split('/')[0]
      : '';

    return `
      <div style="position: relative; width: 260px; max-height: 420px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; overflow-y: auto; padding-top: 4px;">
        <button
          type="button"
          class="exp-popup-close-btn"
          aria-label="Close"
          style="position: absolute; top: 4px; right: 4px; border: none; background: rgba(0,0,0,0.6); color: #fff; border-radius: 999px; width: 22px; height: 22px; font-size: 16px; line-height: 1; cursor: pointer; z-index: 1000; display: flex; align-items: center; justify-content: center; font-weight: bold;">
          ×
        </button>
        <div style="margin-bottom: 8px; padding-right: 26px;">
          <div style="font-weight: 600; font-size: 0.9rem; color: #001f3f; margin-bottom: 4px;">${title}</div>
          <div style="font-size: 0.8rem; color: #555; margin-bottom: 2px;">${city}${city && country ? ', ' : ''}${country}</div>
          <div style="font-size: 0.75rem; color: #888;">${date}</div>
        </div>
        ${instaId ? `
        <div style="border-radius: 10px; overflow: hidden; margin-bottom: 8px;">
          <iframe
            src="https://www.instagram.com/p/${instaId}/embed/captioned/?cr=1&v=14&wp=260"
            width="100%"
            height="360"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
            loading="lazy"
            data-instgrm-permalink=""
            style="border: none; overflow: hidden;">
          </iframe>
        </div>
        ` : ''}
        <div style="text-align: center; margin-top: 4px;">
          <a href="${url}" target="_blank" style="display: inline-block; padding: 6px 12px; border-radius: 999px; background: #001f3f; color: #fff; font-size: 0.8rem; font-weight: 500; text-decoration: none;">
            View full Instagram post
          </a>
        </div>
      </div>
    `;
  }

  // ---------------------------
  // OpenLayers map
  // ---------------------------
  let popupOverlay = null;
  if (typeof ol !== 'undefined' && document.getElementById('openlayers-map')) {
    console.log('[ExperimentalMaps] Creating OpenLayers map');
    const features = travelFeatures.map(f => {
      return new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(f.geometry.coordinates)),
        properties: f.properties
      });
    });

    const vectorSource = new ol.source.Vector({ features });

    // Wrap the vector source with clustering
    const clusterSource = new ol.source.Cluster({
      distance: 40, // Distance in pixels within which features will be clustered
      source: vectorSource
    });

    // Style function that shows cluster count or individual marker
    const styleFunction = function(feature) {
      const size = feature.get('features').length;
      if (size > 1) {
        // Cluster style - show count
        return new ol.style.Style({
        image: new ol.style.Circle({
            radius: 15 + Math.min(size / 5, 10), // Grows slightly with more markers
            fill: new ol.style.Fill({ color: 'rgba(0, 116, 217, 0.8)' }),
            stroke: new ol.style.Stroke({ color: '#ffffff', width: 3 })
          }),
          text: new ol.style.Text({
            text: size.toString(),
            fill: new ol.style.Fill({ color: '#fff' }),
            font: 'bold 14px sans-serif'
          })
        });
      } else {
        // Individual marker style
        return new ol.style.Style({
          image: new ol.style.Circle({
            radius: 10,
          fill: new ol.style.Fill({ color: '#001f3f' }),
          stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 })
          })
        });
      }
    };

    const vectorLayer = new ol.layer.Vector({
      source: clusterSource,
      style: styleFunction
    });

    const openLayersMap = new ol.Map({
      target: 'openlayers-map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        vectorLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([19.9450, 50.0647]),
        zoom: 4,        // start closer so cities are visible
        maxZoom: 18     // allow zoom in to city level
      })
    });

    // Try to fit all points nicely; fall back gracefully if it fails
    if (features.length > 0) {
      try {
        const extent = vectorSource.getExtent();
        openLayersMap.getView().fit(extent, { padding: [40, 40, 40, 40], maxZoom: 8 });
      } catch (e) {
        const firstGeom = features[0].getGeometry();
        const coord = firstGeom.getCoordinates();
        console.warn('[ExperimentalMaps] OpenLayers fit failed, centering on first feature', e);
        openLayersMap.getView().setCenter(coord);
      }
    }

    // Make sure map is aware of its container size
    setTimeout(function() {
      openLayersMap.updateSize();
    }, 100);

    // Simple overlay popup
    const popupContainer = document.createElement('div');
    popupContainer.className = 'ol-popup';
    popupContainer.style.background = '#fff';
    popupContainer.style.borderRadius = '12px';
    popupContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    popupContainer.style.padding = '10px';
    popupContainer.style.minWidth = '260px';
    popupContainer.style.maxWidth = '280px';

    popupOverlay = new ol.Overlay({
      element: popupContainer,
      autoPan: true,
      autoPanAnimation: { duration: 250 }
    });

    openLayersMap.addOverlay(popupOverlay);

    openLayersMap.on('singleclick', function(evt) {
      const feature = openLayersMap.forEachFeatureAtPixel(
        evt.pixel,
        function(f) { return f; }
      );
      if (!feature) {
        popupOverlay.setPosition(undefined);
        return;
      }
      
      // Check if this is a cluster
      const features = feature.get('features');
      if (features && features.length > 1) {
        // This is a cluster - zoom in to break it apart
        const view = openLayersMap.getView();
        const currentZoom = view.getZoom();
        view.animate({
          center: evt.coordinate,
          zoom: currentZoom + 2,
          duration: 500
        });
        popupOverlay.setPosition(undefined);
        return;
      }
      
      // Single marker - show popup
      const actualFeature = features && features.length === 1 ? features[0] : feature;
      const props = actualFeature.get('properties') || {};
      popupContainer.innerHTML = buildPopupHTML(props);
      popupOverlay.setPosition(evt.coordinate);
      
      // Wire up X button using event delegation (avoids Instagram embed.js conflicts)
      const closeBtn = popupContainer.querySelector('.exp-popup-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          popupOverlay.setPosition(undefined);
        });
      }
    });
  }

  // Unified close function for OpenLayers (ESC key)
  window.closeExpPopup = function() {
    if (popupOverlay) {
      popupOverlay.setPosition(undefined);
    }
  };

  // ESC key handler for experimental maps
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      window.closeExpPopup();
    }
  });
}

// Run immediately if DOM is already ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperimentalMaps);
} else {
  initExperimentalMaps();
}
</script>

<!-- Commented out: Original Interactive Travel Map (Leaflet) -->
<!-- <div class="interactive-travel-map" style="margin: 2rem 0;">
  <div id="travel-map" style="height: 500px; border-radius: 10px; border: 2px solid #ddd; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></div>
  
  <div class="travel-stats" style="display: flex; justify-content: center; gap: 2rem; margin-top: 1.5rem; text-align: center;">
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #001f3f;">
      <strong id="countries-visited" style="font-size: 2.2em; color: #001f3f;">0</strong>
      <div style="color: #666; font-size: 1.1em;">Countries Visited</div>
    </div>
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #28a745;">
      <strong id="cities-explored" style="font-size: 2.2em; color: #28a745;">0</strong>
      <div style="color: #666; font-size: 1.1em;">Cities Explored</div>
    </div>
    <div style="background: #f8f9fa; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #dc3545;">
      <strong id="travel-posts" style="font-size: 2.2em; color: #dc3545;">0</strong>
      <div style="color: #666; font-size: 1.1em;">Travel Posts</div>
    </div>
  </div>
</div>
<!-- Leaflet CSS and JS --> -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- Leaflet MarkerCluster for grouped markers with numbers -->
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css" />
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css" />
<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>

<style>
/* Custom styling for marker clusters */
.marker-cluster-small,
.marker-cluster-medium,
.marker-cluster-large {
  background-clip: padding-box;
  border-radius: 50%;
}

.marker-cluster-small {
  background-color: rgba(0, 116, 217, 0.6);
}

.marker-cluster-small div {
  background-color: rgba(0, 116, 217, 0.8);
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: white;
  line-height: 30px;
}

.marker-cluster-medium {
  background-color: rgba(0, 116, 217, 0.6);
}

.marker-cluster-medium div {
  background-color: rgba(0, 116, 217, 0.8);
  width: 40px;
  height: 40px;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: white;
  line-height: 40px;
}

.marker-cluster-large {
  background-color: rgba(0, 31, 63, 0.6);
}

.marker-cluster-large div {
  background-color: rgba(0, 31, 63, 0.8);
  width: 50px;
  height: 50px;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 25px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  line-height: 50px;
}

.marker-cluster {
  background-clip: padding-box;
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}
</style>

<!-- Load travel posts data from external file -->
<script src="{{ '/assets/js/travel-posts-data.js' | relative_url }}"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Travel data is now loaded from external file: assets/js/travel-posts-data.js
  // Wait for the data to be available before initializing map
  if (!window.myTravelPosts || !Array.isArray(window.myTravelPosts)) {
    console.log('Waiting for travel data to load...');
    setTimeout(arguments.callee, 100);
    return;
  }
  
  console.log('Travel data loaded with', window.myTravelPosts.length, 'posts. Initializing map with clustering...');
  
  const dataReadyEvent = new CustomEvent('travelDataReady', { 
    detail: { posts: window.myTravelPosts } 
  });
  window.dispatchEvent(dataReadyEvent);

  // Initialize the main interactive map (lightweight & scroll-friendly)
  const travelMap = L.map('travel-map', {
    center: [50.0647, 19.9450], // Centered on Krakow
    zoom: 4,
    maxZoom: 18,                // allow zooming in to city level
    scrollWheelZoom: false,     // disable wheel zoom by default for better page scrolling
    zoomControl: true
  });

  // Add tile layer with fallback
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(travelMap);

  // Enable scroll zoom only when hovering the map container (better UX on long pages)
  const travelMapContainer = document.getElementById('travel-map');
  if (travelMapContainer) {
    travelMapContainer.addEventListener('mouseenter', function() {
      travelMap.scrollWheelZoom.enable();
    });
    travelMapContainer.addEventListener('mouseleave', function() {
      travelMap.scrollWheelZoom.disable();
    });
  }

  // Custom marker icon (slightly larger for easier clicking)
  const travelIcon = L.divIcon({
    html: `<div style="
      background: linear-gradient(135deg, #001f3f, #0074D9);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 3px 10px rgba(0,0,0,0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    ">📍</div>`,
    className: 'travel-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  // Check if markerClusterGroup is available
  if (!L.markerClusterGroup) {
    console.error('Leaflet.markercluster plugin not loaded!');
    alert('Marker clustering plugin failed to load. Showing individual markers instead.');
  }
  
  // Create marker cluster group - markers will group together with numbers
  const markers = L.markerClusterGroup({
    maxClusterRadius: 80,        // Distance in pixels to group markers
    spiderfyOnMaxZoom: true,    // Break apart clusters at max zoom
    showCoverageOnHover: false,  // Don't show cluster area on hover
    zoomToBoundsOnClick: true,   // Zoom in when clicking cluster
    disableClusteringAtZoom: 15, // Show individual markers when zoomed in close
    iconCreateFunction: function(cluster) {
      const childCount = cluster.getChildCount();
      let c = ' marker-cluster-';
      if (childCount < 10) {
        c += 'small';
      } else if (childCount < 50) {
        c += 'medium';
      } else {
        c += 'large';
      }
      return new L.DivIcon({
        html: '<div><span>' + childCount + '</span></div>',
        className: 'marker-cluster' + c,
        iconSize: new L.Point(40, 40)
      });
    }
  });

  // Add markers for each travel post (full Instagram embed in popup)
  myTravelPosts.forEach(post => {
    const safeTitle = (post.title || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeCity = (post.city || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeCountry = (post.country || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeDate = (post.date || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const instagramId = post.instagramPostId || '';
    const instagramUrl = post.instagramUrl || (instagramId ? ('https://www.instagram.com/p/' + instagramId + '/') : '#');

    const popupContent = `
      <div style="position: relative; width: 320px; max-height: 480px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; overflow-y: auto; padding-top: 4px;">
        <button
          type="button"
          class="popup-close-btn"
          aria-label="Close"
          style="position: absolute; top: 4px; right: 4px; border: none; background: rgba(0,0,0,0.5); color: #fff; border-radius: 999px; width: 22px; height: 22px; font-size: 14px; cursor: pointer; z-index: 10;">
          ×
        </button>
        <div style="margin-bottom: 8px; padding-right: 26px;">
          <div style="font-weight: 600; font-size: 0.9rem; color: #001f3f; margin-bottom: 4px;">${safeTitle}</div>
          <div style="font-size: 0.8rem; color: #555; margin-bottom: 2px;">${safeCity}${safeCity && safeCountry ? ', ' : ''}${safeCountry}</div>
          <div style="font-size: 0.75rem; color: #888;">${safeDate}</div>
        </div>
        ${instagramId ? `
        <div style="border-radius: 10px; overflow: hidden; margin-bottom: 8px;">
          <iframe
            src="https://www.instagram.com/p/${instagramId}/embed/captioned/?cr=1&v=14&wp=320"
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
            loading="lazy"
            style="border: none; overflow: hidden;">
          </iframe>
        </div>
        ` : ''}
        <div style="margin-top: 4px; text-align: center;">
          <a 
            href="${instagramUrl}" 
            target="_blank"
            style="display: inline-block; padding: 6px 12px; border-radius: 999px; background: #001f3f; color: #fff; font-size: 0.8rem; font-weight: 500; text-decoration: none;">
            View full Instagram post
          </a>
  </div>
</div>
    `;

    const marker = L.marker([post.lat, post.lng], { icon: travelIcon })
      .bindPopup(popupContent, {
        maxWidth: 320,
        minWidth: 320,
        maxHeight: 480,
        className: 'travel-popup',
        closeButton: true,
        autoPan: true,
        keepInView: true
      });

    // Wire up custom close button inside popup and ESC key handling
    marker.on('popupopen', function(e) {
      const popupEl = e.popup.getElement();
      if (!popupEl) return;

      const closeBtn = popupEl.querySelector('.popup-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function() {
          travelMap.closePopup();
        });
      }
    });
    
    // Add marker to cluster group instead of directly to map
    markers.addLayer(marker);
  });

  // Add all clustered markers to the map at once
  console.log('Adding', markers.getLayers().length, 'markers to cluster group');
  travelMap.addLayer(markers);
  console.log('Marker cluster group added to map. Clusters should now be visible!');

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

  // ESC key handler for Leaflet map
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      if (travelMap) {
        travelMap.closePopup();
      }
    }
  });
});
</script>


<style>
.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.insight-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,31,63,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.insight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #001f3f, #0074D9, #001f3f);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.insight-card:hover::before {
  transform: scaleX(1);
}

.insight-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0,31,63,0.15);
  border-color: rgba(0,31,63,0.2);
}

.insight-value {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.insight-label {
  font-size: 0.75rem;
  color: #495057;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.insight-sublabel {
  font-size: 0.7rem;
  color: #6c757d;
  margin-top: 0.4rem;
  font-weight: 400;
  font-style: italic;
}

.countries-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.countries-header {
  text-align: center;
  margin-bottom: 1rem;
  color: #001f3f;
  font-size: 1.1rem;
  font-weight: 600;
}

.countries-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  align-items: center;
}

.country-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #f8f9fa;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  border: 1px solid #e9ecef;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.country-item:hover {
  background: #001f3f;
  color: white;
  transform: translateY(-1px);
}

.country-flag {
  font-size: 1.1rem;
}

.country-posts {
  background: #001f3f;
  color: white;
  padding: 0.1rem 0.4rem;
  border-radius: 10px;
  font-size: 0.7rem;
  margin-left: 0.2rem;
}

.country-item:hover .country-posts {
  background: white;
  color: #001f3f;
}

/* Elegant Timeline Styles */
.timeline-viz-elegant {
  background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);
  margin-top: 2rem;
  border: 1px solid rgba(0,31,63,0.08);
  max-width: 100%;
}

.timeline-header-elegant {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0,31,63,0.1);
}

.timeline-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.timeline-title {
  margin: 0;
  color: #001f3f;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.timeline-container {
  position: relative;
  padding-left: 2rem;
}

.timeline-year-card {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
  padding-left: 1rem;
}

.timeline-year-card:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 1.5rem;
  top: 4rem;
  bottom: -2.5rem;
  width: 2px;
  background: linear-gradient(180deg, #001f3f 0%, rgba(0,31,63,0.2) 50%, transparent 100%);
}

.year-marker {
  flex-shrink: 0;
  width: 80px;
  position: relative;
}

.year-number {
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.6rem 0.85rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,31,63,0.2);
  position: relative;
  z-index: 2;
}

.year-line {
  display: none;
}

.year-content {
  flex: 1;
  min-width: 0;
  padding-top: 0.25rem;
}

.year-stats-compact {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.stat-badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 18px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.countries-badge {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1565C0;
  border: 1px solid rgba(21,101,192,0.2);
}

.posts-badge {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  color: #7b1fa2;
  border: 1px solid rgba(123,31,162,0.2);
}

.countries-flow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  line-height: 1.6;
}

.country-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: white;
  padding: 0.4rem 0.7rem;
  border-radius: 14px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #2c3e50;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.08);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
}

.country-chip:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 4px 12px rgba(0,31,63,0.15);
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  color: white;
  border-color: transparent;
}

/* Page-specific styles removed - using global page__inner-wrap styles */

@media (max-width: 768px) {
  .insights-grid {
  grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .insight-card {
    padding: 0.8rem;
  }
  
  .insight-value {
    font-size: 1.5rem;
  }
  
  .insight-label {
    font-size: 0.7rem;
  }
  
  .insight-sublabel {
    font-size: 0.65rem;
  }
  
  .countries-grid {
    gap: 0.5rem;
  }
  
  .timeline-viz-elegant {
    padding: 1.5rem;
    margin-top: 1.5rem;
  }
  
  .timeline-header-elegant {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
  }
  
  .timeline-icon {
    font-size: 2rem;
  }
  
  .timeline-title {
    font-size: 1.2rem;
  }
  
  .timeline-icon {
    font-size: 1.8rem;
  }
  
  .year-number {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }
  
  .stat-badge {
    font-size: 0.65rem;
    padding: 0.3rem 0.6rem;
  }
  
  .country-chip {
    font-size: 0.7rem;
    padding: 0.35rem 0.6rem;
  }
  
  .timeline-container {
    padding-left: 1rem;
  }
  
  .timeline-year-card {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    padding-left: 0.5rem;
  }
  
  .timeline-year-card:not(:last-child)::after {
    left: 0.75rem;
    top: 3.5rem;
  }
  
  .year-marker {
    width: 100%;
  }
  
  .year-number {
    font-size: 1.1rem;
    padding: 0.6rem 0.9rem;
  }
  
  .year-content {
    padding-top: 0;
  }
  
  .year-stats-compact {
    margin-bottom: 0.75rem;
  }
  
  .countries-flow {
    gap: 0.4rem;
  }
  
  .country-chip {
    font-size: 0.8125rem;
    padding: 0.4rem 0.7rem;
  }
  
  .page__content {
    padding-right: 1rem !important;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    if (typeof window.myTravelPosts === 'undefined') {
      console.error('myTravelPosts not found');
      return;
    }

    const posts = window.myTravelPosts;
    
    function getCountryFlag(country) {
      const flags = {
        'Vietnam': '🇻🇳', 'Greece': '🇬🇷', 'Poland': '🇵🇱', 'France': '🇫🇷',
        'Italy': '🇮🇹', 'Spain': '🇪🇸', 'Germany': '🇩🇪', 'Thailand': '🇹🇭',
        'Japan': '🇯🇵', 'USA': '🇺🇸', 'UK': '🇬🇧', 'Netherlands': '🇳🇱',
        'Portugal': '🇵🇹', 'Czech Republic': '🇨🇿', 'Austria': '🇦🇹',
        'Switzerland': '🇨🇭', 'Norway': '🇳🇴', 'Estonia': '🇪🇪', 'Lithuania': '🇱🇹',
        'Egypt': '🇪🇬', 'Costa Rica': '🇨🇷', 'Panama': '🇵🇦', 'Colombia': '🇨🇴',
        'Mexico': '🇲🇽', 'San Marino': '🇸🇲', 'Singapore': '🇸🇬', 'Nepal': '🇳🇵',
        'Morocco': '🇲🇦', 'Kenya': '🇰🇪', 'North Macedonia': '🇲🇰', 'Slovakia': '🇸🇰'
      };
      return flags[country] || '🌍';
    }
    
    // Calculate comprehensive statistics
    const uniqueCountries = [...new Set(posts.map(post => post.country))];
    const uniqueCities = [...new Set(posts.map(post => post.city))];
    
    // Parse dates properly - handle both "2025-05" and "2025" formats
    function parsePostDate(dateStr) {
      if (dateStr.includes('-')) {
        const [year, month] = dateStr.split('-');
        return { year: parseInt(year), month: parseInt(month) };
      } else {
        return { year: parseInt(dateStr), month: null };
      }
    }
    
    // Group by year
    const yearlyData = {};
    const monthlyData = {};
    
    posts.forEach(post => {
      const parsed = parsePostDate(post.date);
      const year = parsed.year;
      
      // Yearly grouping
      if (!yearlyData[year]) {
        yearlyData[year] = { countries: new Set(), posts: 0 };
      }
      yearlyData[year].countries.add(post.country);
      yearlyData[year].posts++;
      
      // Monthly grouping (if month is specified)
      if (parsed.month) {
        const monthKey = `${year}-${parsed.month.toString().padStart(2, '0')}`;
        if (!monthlyData[monthKey]) {
          monthlyData[monthKey] = { countries: new Set(), posts: 0 };
        }
        monthlyData[monthKey].countries.add(post.country);
        monthlyData[monthKey].posts++;
      }
    });
    
    const years = Object.keys(yearlyData).sort();
    const mostActiveYear = years.reduce((max, year) => 
      yearlyData[year].posts > (yearlyData[max]?.posts || 0) ? year : max, years[0]
    );
    
    // Country frequency
    const countryFreq = {};
    posts.forEach(post => {
      countryFreq[post.country] = (countryFreq[post.country] || 0) + 1;
    });
    
    const mostVisited = Object.entries(countryFreq)
      .sort(([,a], [,b]) => b - a)[0] || ['Unknown', 0];
    
    // Travel span and better statistics
    const firstYear = Math.min(...years.map(y => parseInt(y)));
    const lastYear = Math.max(...years.map(y => parseInt(y)));
    const travelSpan = lastYear - firstYear + 1;
    
    // More accurate posts per month calculation
    const monthsWithPosts = Object.keys(monthlyData).length;
    const postsPerMonth = monthsWithPosts > 0 ? 
      (posts.length / monthsWithPosts).toFixed(1) : 
      (posts.length / (travelSpan * 12)).toFixed(1);
    
    // Peak travel month (if we have monthly data)
    let peakMonth = null;
    if (Object.keys(monthlyData).length > 0) {
      peakMonth = Object.entries(monthlyData)
        .sort(([,a], [,b]) => b.posts - a.posts)[0];
    }
    
    // Generate better insights with additional statistics
    const totalContinents = new Set();
    const continentMap = {
      'Europe': ['Greece', 'Poland', 'France', 'Italy', 'Spain', 'Germany', 'Netherlands', 'UK', 'Portugal', 'Czech Republic', 'Austria', 'Switzerland', 'Norway', 'Estonia', 'Lithuania', 'San Marino', 'North Macedonia', 'Slovakia'],
      'Asia': ['Vietnam', 'Thailand', 'Japan', 'Singapore', 'Nepal'],
      'Americas': ['USA', 'Costa Rica', 'Panama', 'Colombia', 'Mexico'],
      'Africa': ['Egypt', 'Morocco', 'Kenya']
    };
    
    uniqueCountries.forEach(country => {
      for (let continent in continentMap) {
        if (continentMap[continent].includes(country)) {
          totalContinents.add(continent);
          break;
        }
      }
    });

    // Calculate travel intensity (posts per active month)
    const activeMonths = Object.keys(monthlyData).length;
    const travelIntensity = activeMonths > 0 ? (posts.length / activeMonths).toFixed(1) : '0';
    
    // Generate insights HTML with better styling and new statistics
    const insightsHTML = `
      <div class="insights-grid">
        <div class="insight-card">
          <div class="insight-value">${travelSpan} ${travelSpan === 1 ? 'Year' : 'Years'}</div>
          <div class="insight-label">Travel Span</div>
          <div class="insight-sublabel">${firstYear} – ${lastYear}</div>
        </div>
        <div class="insight-card">
          <div class="insight-value">${mostActiveYear}</div>
          <div class="insight-label">Most Active</div>
          <div class="insight-sublabel">${yearlyData[mostActiveYear].posts} posts</div>
        </div>
        <div class="insight-card">
          <div class="insight-value">${getCountryFlag(mostVisited[0])}</div>
          <div class="insight-label">Top Destination</div>
          <div class="insight-sublabel">${mostVisited[0]} (${mostVisited[1]})</div>
        </div>
        ${peakMonth ? `
        <div class="insight-card">
          <div class="insight-value">${peakMonth[0].split('-')[1]}/${peakMonth[0].split('-')[0]}</div>
          <div class="insight-label">Peak Month</div>
          <div class="insight-sublabel">${peakMonth[1].posts} posts</div>
        </div>
        ` : `
        <div class="insight-card">
          <div class="insight-value">${travelIntensity}</div>
          <div class="insight-label">Travel Intensity</div>
          <div class="insight-sublabel">Posts/Month</div>
        </div>
        `}
        <div class="insight-card">
          <div class="insight-value">${totalContinents.size}</div>
          <div class="insight-label">Continents</div>
          <div class="insight-sublabel">Explored</div>
        </div>
        <div class="insight-card">
          <div class="insight-value">${(uniqueCountries.length / years.length).toFixed(1)}</div>
          <div class="insight-label">Countries per Year</div>
          <div class="insight-sublabel">Average Rate</div>
        </div>
      </div>
    `;
    
    // Generate countries section
    const countriesHTML = `
      <div class="countries-section">
        <div class="countries-header">📍 Countries Explored</div>
        <div class="countries-grid">
          ${Object.entries(countryFreq)
            .sort(([,a], [,b]) => b - a)
            .map(([country, count]) => `
              <div class="country-item" title="${country}: ${count} posts">
                <span class="country-flag">${getCountryFlag(country)}</span>
                <span>${country}</span>
                <span class="country-posts">${count}</span>
              </div>
            `).join('')}
        </div>
      </div>
    `;
    
    // Generate elegant, concise timeline visualization
    const timelineHTML = `
      <div class="timeline-viz-elegant">
        <div class="timeline-header-elegant">
          <span class="timeline-icon">🗓️</span>
          <h3 class="timeline-title">Year by Year Journey</h3>
        </div>
        <div class="timeline-container">
          ${years.map((year, index) => {
            const yearData = yearlyData[year];
            const countries = Array.from(yearData.countries).sort();
            const countryCount = countries.length;
            const postCount = yearData.posts;
            
            return `
              <div class="timeline-year-card" style="animation: slideInLeft 0.6s ease ${index * 0.15}s both;">
                <div class="year-marker">
                  <div class="year-number">${year}</div>
                  <div class="year-line"></div>
                </div>
                <div class="year-content">
                  <div class="year-stats-compact">
                    <span class="stat-badge countries-badge">${countryCount} ${countryCount === 1 ? 'country' : 'countries'}</span>
                    <span class="stat-badge posts-badge">${postCount} ${postCount === 1 ? 'post' : 'posts'}</span>
                  </div>
                  <div class="countries-flow">
                    ${countries.map(country => `
                      <span class="country-chip" title="${country}">
                        ${getCountryFlag(country)} ${country}
                      </span>
                    `).join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      <style>
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      </style>
    `;
    
    // Update DOM - Remove countries section
    document.getElementById('travel-insights').innerHTML = insightsHTML;
    document.getElementById('travel-timeline-viz').innerHTML = timelineHTML;
    
  }, 100);
});
</script>

## Recent Adventures & Tour Guides {#recent-adventures}

<div class="recent-travels">
  <div class="travel-card" id="krakow-guide">
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

  <div class="travel-card" id="krakow-guide">
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

  </div>
</div>

<style>
.recent-travels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.travel-card {
  background: var(--bg-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}

.travel-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.travel-image {
  width: 100%;
  height: auto;
  min-height: 200px;
  overflow: visible;
  background: var(--bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
}

.travel-image img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
}

.travel-content {
  padding: 1.5rem;
}

.travel-content h3 {
  margin: 0 0 1rem 0;
  color: var(--text-dark);
  font-size: 1.5rem;
}

.travel-content p {
  color: var(--text-body);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .recent-travels {
    grid-template-columns: 1fr;
  }
}
</style>


