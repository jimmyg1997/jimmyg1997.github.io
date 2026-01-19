---
title: Volunteering
layout: single
permalink: /volunteering/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/volunteering-header.jpg
excerpt: "Making a difference through community service and youth leadership"
---

<div class="volunteering-intro">
  <p>This section documents my volunteering journey, from local community initiatives to international youth exchanges and ongoing support for humanitarian causes. Each experience has contributed to my personal growth and reinforced my commitment to making a positive impact in the world.</p>
</div>

<style>
/* Single Column Layout */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

/* Uniform font sizes - slightly bigger */
.volunteering-intro p {
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
  margin: 0;
}

.timeline-item h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.625rem;
  line-height: 1.4;
}

.timeline-date {
  font-size: 0.9375rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.timeline-summary, .timeline-details {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 0.75rem;
}

/* Ensure all posts are collapsed by default */
.timeline-summary {
  display: block !important;
}

.timeline-details {
  display: none !important;
}

/* Extra aggressive rule for UEK specifically */
#uek-details {
  display: none !important;
}

/* Force hide collapse button when details are hidden */
.timeline-details[style*="display: none"] .collapse-link,
.timeline-details[style*="display:none"] .collapse-link,
.timeline-details:not([style*="display: block"]):not([style*="display:block"]) .collapse-link {
  display: none !important;
}

/* Force show expand button when summary is visible */
.timeline-summary:not([style*="display: none"]):not([style*="display:none"]) .expand-link {
  display: inline !important;
}

/* Force hide expand button when summary is hidden */
.timeline-summary[style*="display: none"] .expand-link,
.timeline-summary[style*="display:none"] .expand-link {
  display: none !important;
}

/* Force show collapse button when details are visible */
.timeline-details[style*="display: block"] .collapse-link,
.timeline-details[style*="display:block"] .collapse-link {
  display: inline !important;
}

.timeline-details a {
  color: #2563eb;
  font-weight: 600;
  text-decoration: underline;
}

.timeline-details a:hover {
  color: #1d4ed8;
}

/* Hide duplicate UEK entries in TOC */
.toc__menu a[href="#uek-job-fair-2025"]:not(:first-of-type),
.toc__menu li:has(a[href="#uek-job-fair-2025"]) ~ li:has(a[href="#uek-job-fair-2025"]) {
  display: none !important;
}

/* Alternative approach: hide duplicate TOC entries */
.toc__menu li:has(a[href*="uek-job-fair"]) + li:has(a[href*="uek-job-fair"]) {
  display: none !important;
}

/* Smaller font for web app (desktop) */
@media (min-width: 700px) {
  .timeline-item h3 {
    font-size: 1.125rem;
  }
  .timeline-date {
    font-size: 0.9375rem;
  }
  .timeline-summary, .timeline-details {
    font-size: 0.9375rem;
  }
}

.timeline-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s;
  position: relative;
}
.timeline-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.timeline-image {
  width: 100%;
  max-width: 600px;
  height: 350px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  margin: 1rem auto;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  transition: transform 0.15s;
  display: block;
}
.timeline-image:hover {
  transform: scale(1.04);
}
.expand-link, .collapse-link {
  color: #0074D9;
  cursor: pointer;
  font-weight: bold;
  margin-left: 0.5em;
  display: inline;
}
.expand-link:hover, .collapse-link:hover {
  text-decoration: underline;
}

/* Modal Styles - Updated to match lightbox */
.image-lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: auto;
  animation: fadeIn 0.3s ease;
}

.image-lightbox.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-lightbox-content {
  position: relative;
  margin: auto;
  padding: 20px;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-lightbox-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.3s ease;
}

.image-lightbox-close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10000;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
}

.image-lightbox-close:hover,
.image-lightbox-close:focus {
  color: #f1f1f1;
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.image-lightbox-prev,
.image-lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  user-select: none;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-lightbox-prev {
  left: 20px;
}

.image-lightbox-next {
  right: 20px;
}

.image-lightbox-prev:hover,
.image-lightbox-next:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .image-lightbox-close {
    top: 10px;
    right: 15px;
    font-size: 30px;
    width: 40px;
    height: 40px;
  }
  
  .image-lightbox-prev,
  .image-lightbox-next {
    width: 40px;
    height: 40px;
    font-size: 24px;
    padding: 12px;
  }
  
  .image-lightbox-prev {
    left: 10px;
  }
  
  .image-lightbox-next {
    right: 10px;
  }
}

/* Gallery Styles for Volunteering Page */
.project-gallery {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 1.5rem auto;
}

.gallery-container {
  position: relative;
  width: 100%;
  min-height: 400px;
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background: #f8fafc;
  display: block;
}

.project-image.active {
  opacity: 1;
  z-index: 1;
}

.project-image:not(.active) {
  z-index: 0;
}

.project-image[src=""],
.project-image:not([src]) {
  display: none;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s ease;
  font-weight: 300;
  line-height: 1;
}

.gallery-nav:hover {
  background: rgba(0, 0, 0, 0.9);
}

.gallery-nav.prev {
  left: 15px;
}

.gallery-nav.next {
  right: 15px;
}

.gallery-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: background 0.3s ease;
  border: 2px solid white;
}

.dot.active {
  background: white;
}

@media (max-width: 768px) {
  .gallery-container {
    height: 350px;
  }
  
  .gallery-nav {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
</style>

<!-- Image Lightbox Modal -->
<div id="imageLightbox" class="image-lightbox">
  <span class="image-lightbox-close">&times;</span>
  <span class="image-lightbox-prev">&#10094;</span>
  <span class="image-lightbox-next">&#10095;</span>
  <div class="image-lightbox-content">
    <img id="lightboxImage" src="" alt="">
  </div>
</div>

<script>
// Remove duplicate TOC entries
(function() {
  function removeDuplicateTOCEntries() {
    const tocLinks = document.querySelectorAll('.toc__menu a[href^="#"]');
    const seenHrefs = new Set();
    
    tocLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href && seenHrefs.has(href)) {
        // This is a duplicate, remove its parent li
        const li = link.closest('li');
        if (li) {
          li.remove();
        }
      } else if (href) {
        seenHrefs.add(href);
      }
    });
  }
  
  // Run on DOM ready and after delays
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeDuplicateTOCEntries);
  } else {
    removeDuplicateTOCEntries();
  }
  setTimeout(removeDuplicateTOCEntries, 100);
  setTimeout(removeDuplicateTOCEntries, 500);
  setTimeout(removeDuplicateTOCEntries, 1000);
})();

// Initialize all timeline entries to correct state
(function() {
  function initializeTimelineEntries() {
    const allSummaries = document.querySelectorAll('.timeline-summary');
    const allDetails = document.querySelectorAll('.timeline-details');
    
    allSummaries.forEach(function(summary) {
      summary.style.setProperty('display', 'block', 'important');
    });
    
    allDetails.forEach(function(details) {
      details.style.setProperty('display', 'none', 'important');
    });
    
    // Specifically ensure UEK details are hidden
    const uekDetails = document.getElementById('uek-details');
    if (uekDetails) {
      uekDetails.style.setProperty('display', 'none', 'important');
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTimelineEntries);
  } else {
    initializeTimelineEntries();
  }
  setTimeout(initializeTimelineEntries, 100);
  setTimeout(initializeTimelineEntries, 500);
})();

// Toggle function for expand/collapse
function toggleVolunteering(id) {
  const summary = document.getElementById(id + '-summary');
  const details = document.getElementById(id + '-details');
  if (summary && details) {
    // Check computed style to see what's currently visible
    const summaryStyle = window.getComputedStyle(summary);
    const isSummaryVisible = summaryStyle.display !== 'none';
    
    if (isSummaryVisible) {
      // Summary is visible, hide it and show details
      summary.style.setProperty('display', 'none', 'important');
      details.style.setProperty('display', 'block', 'important');
    } else {
      // Summary is hidden, show it and hide details
      summary.style.setProperty('display', 'block', 'important');
      details.style.setProperty('display', 'none', 'important');
    }
    
    // Force update button visibility
    const expandLinks = summary.querySelectorAll('.expand-link');
    const collapseLinks = details.querySelectorAll('.collapse-link');
    
    expandLinks.forEach(link => {
      link.style.display = isSummaryVisible ? 'none' : 'inline';
    });
    
    collapseLinks.forEach(link => {
      link.style.display = isSummaryVisible ? 'inline' : 'none';
    });
  }
}

// Image Lightbox functionality for Volunteering page
(function() {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const closeBtn = document.querySelector('.image-lightbox-close');
  const prevBtn = document.querySelector('.image-lightbox-prev');
  const nextBtn = document.querySelector('.image-lightbox-next');
  
  let currentImages = [];
  let currentIndex = 0;
  
  function getClickableImages() {
    // Try multiple selectors
    let images = Array.from(document.querySelectorAll('.timeline-image, .project-image'));
        
    if (images.length === 0) {
      // Fallback: get all images on the page
      images = Array.from(document.querySelectorAll('img')).filter(img => {
        if (img.closest('.gallery-nav')) return false;
        if (img.classList.contains('dot')) return false;
        return img.src && img.src !== '';
      });
    }
    
    console.log('Total clickable images:', images.length);
    return images;
  }
  
  function openLightbox(index) {
    currentImages = getClickableImages();
    if (currentImages.length === 0) return;
    
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function updateLightboxImage() {
    if (currentImages.length === 0) return;
    
    if (currentIndex < 0) currentIndex = currentImages.length - 1;
    if (currentIndex >= currentImages.length) currentIndex = 0;
    
    const img = currentImages[currentIndex];
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || 'Image';
    
    // Show/hide navigation buttons
    if (currentImages.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
    }
  }
  
  function showNext() {
    currentIndex++;
    updateLightboxImage();
  }
  
  function showPrev() {
    currentIndex--;
    updateLightboxImage();
  }
  
  // Initialize click handlers for all images
  function initializeImageHandlers() {
    const images = getClickableImages();

    
    
    images.forEach((img) => {
      // Skip if already initialized
      if (img.dataset.lightboxInit === 'true') return;
      
      img.style.cursor = 'pointer';
      
      // Add click handler
      img.addEventListener('click', function(e) {
        // Don't open lightbox if clicking gallery navigation buttons or dots
        if (e.target.closest('.gallery-nav') || e.target.closest('.gallery-dots')) {
          return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        const allImages = getClickableImages();
        const clickedIndex = allImages.indexOf(img);
        if (clickedIndex >= 0) {
          openLightbox(clickedIndex);
        }
        
      });
      
      // Mark as initialized
      img.dataset.lightboxInit = 'true';
    });
  }
  
  // Simpler initialization - run immediately
  initializeImageHandlers();

  // Also run after delays
  setTimeout(initializeImageHandlers, 500);
  setTimeout(initializeImageHandlers, 1000);
  setTimeout(initializeImageHandlers, 2000);
  setTimeout(initializeImageHandlers, 3000);
    
  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }
  
  // Previous/Next buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showPrev();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showNext();
    });
  }
  
  // Close on background click
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Keyboard navigation (ESC, Arrow keys)
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    } else if (e.key === 'ArrowRight') {
      showNext();
    }
  });
})();
// UEK Gallery functionality - Global scope for onclick handlers
let currentImageIndexUek = 0;
let imagesUek = [];
let dotsUek = [];

function showImageUek(index) {
  if (imagesUek.length === 0) return;
  imagesUek.forEach((img, i) => {
    if (img && img.complete && img.naturalHeight !== 0) {
      img.classList.toggle('active', i === index);
      img.style.display = i === index ? 'block' : 'none';
    } else {
      img.style.display = 'none';
    }
  });
  dotsUek.forEach((dot, i) => {
    if (dot) {
      dot.classList.toggle('active', i === index);
    }
  });
}

function changeImageUek(direction) {
  if (imagesUek.length === 0) return;
  
  currentImageIndexUek += direction;
  
  if (currentImageIndexUek >= imagesUek.length) {
    currentImageIndexUek = 0;
  } else if (currentImageIndexUek < 0) {
    currentImageIndexUek = imagesUek.length - 1;
  }
  
  showImageUek(currentImageIndexUek);
}

function currentImageUek(index) {
  if (imagesUek.length === 0) return;
  const img = imagesUek[index];
  if (img && img.complete && img.naturalHeight !== 0) {
    currentImageIndexUek = index;
    showImageUek(currentImageIndexUek);
  }
}
// Initialize UEK gallery
document.addEventListener('DOMContentLoaded', function() {
  imagesUek = Array.from(document.querySelectorAll('#uek-gallery .project-image'));
  dotsUek = Array.from(document.querySelectorAll('#uek-gallery .dot'));
  
  if (imagesUek.length > 0) {
    showImageUek(0);
  }
});

// Force reinitialize lightbox for all images after everything loads
window.addEventListener('load', function() {
  setTimeout(function() {
    // Clear all lightbox flags
    const allImages = document.querySelectorAll('.page[class*="volunteering"] img');
    allImages.forEach(img => {
      delete img.dataset.lightboxInit;
    });
    
    // Trigger lightbox initialization
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
  }, 500);
});


</script>

## Volunteering Timeline {#volunteering-timeline}

<style>
.page__content h2 {
  font-size: 1.375rem !important;
  font-weight: 700 !important;
  color: #1e293b !important;
  margin: 2.5rem 0 1.5rem 0 !important;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #e5e7eb;
}
</style>

<div class="timeline">
  <!-- 2025 -->
  <div class="timeline-item" id="wheeling2help-vietnam">
    <div class="timeline-content">
      <div class="timeline-date">April 2025</div>
      <h3 id="wheeling2help-vietnam-2025">Volunteer - Wheeling2help NGO</h3>
      <p class="timeline-summary" id="vietnam-summary">
        Volunteered with Wheeling2help in Da Bia, Vietnam, focusing on community development. Collaborating with the Muong ethnic community, I contributed to improving infrastructure at the local kindergarten...
        <span class="expand-link" onclick="toggleVolunteering('vietnam')">Expand</span>
      </p>
      <p class="timeline-details" id="vietnam-details" style="display:none;">
        Volunteered with Wheeling2help in Da Bia, Vietnam, focusing on community development. Collaborating with the Muong ethnic community, I contributed to improving infrastructure at the local kindergarten and cultural centre, assisted in agricultural tasks, and participated in traditional art workshops. This immersive experience deepened my appreciation for cultural heritage preservation and reinforced my commitment to sustainable community empowerment.
        <span class="collapse-link" onclick="toggleVolunteering('vietnam')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/wheeling2help-vietnam.png" alt="Wheeling2help Vietnam" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="uek-job-fair">
    <div class="timeline-content">
      <div class="timeline-date">March 2025</div>
      <h3 id="uek-job-fair-2025">HSBC Representative - UEK Job Fairs 2025</h3>
      <p class="timeline-summary" id="uek-summary">
        Represented HSBC at the UEK Job Fairs 2025 (04/03/2025) at Krakow University of Economics, part of the first job fairs of the 2025 Spring edition. Engaged with students and graduates about career opportunities in...
        <span class="expand-link" onclick="toggleVolunteering('uek')">Expand</span>
      </p>
      <p class="timeline-details timeline-summary" id="uek-details" style="display:none;">
        Represented HSBC at the UEK Job Fairs 2025 (04/03/2025) at Krakow University of Economics, part of the first job fairs of the 2025 Spring edition. Engaged with students and graduates about career opportunities in:<br><br>
        • Permanent roles across Risk & Compliance, Technology, Operations, Global Transformation, and Finance<br>
        • The HSBC Graduate Programme – a structured pathway to leadership roles<br>
        • Summer internships in Data, Engineering, Operations, and CyberSecurity<br><br>
        As part of the RCAS team working in Automation as a Data Scientist, I had the opportunity to dive deeper into technology-driven discussions. At HSBC, fairness and transparency in the selection process are key, ensuring candidates are evaluated based on their skills, potential, and values.
        <br><br>
        <a href="https://tiny.pl/rym9f1_d" target="_blank" rel="noopener noreferrer">More details about the UEK Job Fair</a> | <a href="https://www.linkedin.com/company/hsbc/jobs/" target="_blank" rel="noopener noreferrer">HSBC Job Vacancies</a>
        <span class="collapse-link" onclick="toggleVolunteering('uek')">Collapse</span>
      </p>
      <div class="project-gallery">
        <div class="gallery-container" id="uek-gallery">
          <img src="/assets/images/volunteering/kue-1.jpeg" alt="UEK Job Fair 2025" class="project-image active" data-index="0">
          <img src="/assets/images/volunteering/kue-2.jpeg" alt="HSBC Booth at UEK" class="project-image" data-index="1">
          <img src="/assets/images/volunteering/kue-3.jpeg" alt="Student Engagement" class="project-image" data-index="2">
          <img src="/assets/images/volunteering/kue-4.jpeg" alt="Career Discussions" class="project-image" data-index="3">
          
          <button class="gallery-nav prev" onclick="changeImageUek(-1)">‹</button>
          <button class="gallery-nav next" onclick="changeImageUek(1)">›</button>
          
          <div class="gallery-dots">
            <span class="dot active" onclick="currentImageUek(0)"></span>
            <span class="dot" onclick="currentImageUek(1)"></span>
            <span class="dot" onclick="currentImageUek(2)"></span>
            <span class="dot" onclick="currentImageUek(3)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 2024 -->
  <div class="timeline-item" id="erasmus-2024">
    <div class="timeline-content">
      <div class="timeline-date">May - June 2024</div>
      <h3 id="erasmus-youth-exchange-2024">Team Lead - Erasmus+ Youth Exchange</h3>
      <p class="timeline-summary" id="erasmus-summary">
        Led the Greek team 🇬🇷 at the Erasmus+ Youth Exchange, «rECOnnect», held in Tatra Mountains, Murzasichle, Zakopane, Poland📍. Focused on environmental initiatives and youth leadership...
        <span class="expand-link" onclick="toggleVolunteering('erasmus')">Expand</span>
      </p>
      <p class="timeline-details" id="erasmus-details" style="display:none;">
        Led the Greek team 🇬🇷 at the Erasmus+ Youth Exchange, «rECOnnect», held in Tatra Mountains, Murzasichle, Zakopane, Poland📍. Focused on environmental initiatives and youth leadership development.
        <span class="collapse-link" onclick="toggleVolunteering('erasmus')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/reconnect.png" alt="Erasmus+ Youth Exchange" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="wheeling2help-nepal">
    <div class="timeline-content">
      <div class="timeline-date">May 2024</div>
      <h3 id="wheeling2help-nepal-2024">Volunteer - Wheeling2help NGO</h3>
      <p class="timeline-summary" id="nepal-summary">
        Volunteered with Wheeling2help in Nepal, focusing on community empowerment through environmental conservation, sports development, and educational support...
        <span class="expand-link" onclick="toggleVolunteering('nepal')">Expand</span>
      </p>
      <p class="timeline-details" id="nepal-details" style="display:none;">
        Volunteered with Wheeling2help in Nepal, focusing on community empowerment through environmental conservation, sports development, and educational support initiatives.
        <span class="collapse-link" onclick="toggleVolunteering('nepal')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/wheeling2help-nepal.png" alt="Wheeling2help Nepal" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="wheeling2help-kenya">
    <div class="timeline-content">
      <div class="timeline-date">January 2024</div>
      <h3 id="wheeling2help-kenya-2024">Volunteer - Wheeling2help NGO</h3>
      <p class="timeline-summary" id="kenya-summary">
        Volunteered with Wheeling2help in Kenya, working on environmental conservation, sports development, and education initiatives for sustainable...
        <span class="expand-link" onclick="toggleVolunteering('kenya')">Expand</span>
      </p>
      <p class="timeline-details" id="kenya-details" style="display:none;">
        Volunteered with Wheeling2help in Kenya, working on environmental conservation, sports development, and education initiatives for sustainable community impact.
        <span class="collapse-link" onclick="toggleVolunteering('kenya')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/wheeling2help-kenya.png" alt="Wheeling2help Kenya" class="timeline-image">
    </div>
  </div>

  <!-- 2023-Present -->
  <div class="timeline-item" id="unhcr-support">
    <div class="timeline-content">
      <div class="timeline-date">Mid-2023 - Present</div>
      <h3 id="unhcr-donations">Monthly Supporter - UNHCR (The UN Refugee Agency)</h3>
      <p class="timeline-summary" id="unhcr-summary">
        I have been supporting UNHCR through monthly donations since mid-2023. UNHCR works tirelessly to protect and assist millions of refugees, asylum-seekers, and internally displaced people around the world. My donations help provide shelter, medicine, essential items, and psychosocial, economic, and legal support to those in need...
        <span class="expand-link" onclick="toggleVolunteering('unhcr')">Expand</span>
      </p>
      <p class="timeline-details" id="unhcr-details" style="display:none;">
        I have been supporting <strong>UNHCR (The UN Refugee Agency)</strong> through monthly donations since mid-2023. UNHCR works tirelessly to protect and assist millions of refugees, asylum-seekers, and internally displaced people around the world.
        
        In 2024, I made monthly donations of €15.00, totaling €180.00 for the year. These donations help UNHCR provide shelter, medicine, and essential items to millions of people who have been displaced and found themselves in danger. The support also enables psychosocial, economic, and legal assistance, helping people regain their dignity and rebuild their lives.
        
        I continue to make monthly donations to support UNHCR's mission. If you would like to support UNHCR's work, you can <a href="https://www.unhcr.org/donate" target="_blank" rel="noopener noreferrer">donate here</a>.
        <span class="collapse-link" onclick="toggleVolunteering('unhcr')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/unhcr.png" alt="UNHCR Support" class="timeline-image">
    </div>
  </div>

  <!-- 2021-2023 -->
  <div class="timeline-item" id="cognihub">
    <div class="timeline-content">
      <div class="timeline-date">January 2021 - October 2023</div>
      <h3 id="cognihub-marketing">Marketing Coordinator - CogniHub</h3>
      <p class="timeline-summary" id="cognihub-summary">
        Led marketing initiatives for CogniHub, an interdisciplinary non-profit student organization promoting interdisciplinarity through events...
        <span class="expand-link" onclick="toggleVolunteering('cognihub')">Expand</span>
      </p>
      <p class="timeline-details" id="cognihub-details" style="display:none;">
        Led marketing initiatives for CogniHub, an interdisciplinary non-profit student organization promoting interdisciplinarity through events, talks, and workshops.
        <span class="collapse-link" onclick="toggleVolunteering('cognihub')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/cognihub.png" alt="CogniHub" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="citycampus">
    <div class="timeline-content">
      <div class="timeline-date">January - November 2021</div>
      <h3 id="citycampus-rd">Research And Development Specialist - citycampus.gr</h3>
      <p class="timeline-summary" id="citycampus-summary">
        Conducted competitive research and analyzed statistics using Python, Google Analytics, and SimilarWeb to improve educational platform...
        <span class="expand-link" onclick="toggleVolunteering('citycampus')">Expand</span>
      </p>
      <p class="timeline-details" id="citycampus-details" style="display:none;">
        Conducted competitive research and analyzed statistics using Python, Google Analytics, and SimilarWeb to improve educational platform performance.
        <span class="collapse-link" onclick="toggleVolunteering('citycampus')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/citycampus.png" alt="CityCampus" class="timeline-image">
    </div>
  </div>

  <!-- 2018 -->
  <div class="timeline-item" id="web-summit">
    <div class="timeline-content">
      <div class="timeline-date">November 2018</div>
      <h3 id="web-summit-volunteer">Student Volunteer - Web Summit</h3>
      <p class="timeline-summary" id="websummit-summary">
        Member of the Media Team at the world's largest tech conference in Lisbon, Portugal, assisting in interview booths and press conferences...
        <span class="expand-link" onclick="toggleVolunteering('websummit')">Expand</span>
      </p>
      <p class="timeline-details" id="websummit-details" style="display:none;">
        Member of the Media Team at the world's largest tech conference in Lisbon, Portugal, assisting in interview booths and press conferences.
        <span class="collapse-link" onclick="toggleVolunteering('websummit')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/websummit.png" alt="Web Summit" class="timeline-image">
    </div>
  </div>

  <!-- 2017-2018 -->
  <div class="timeline-item" id="cansat">
    <div class="timeline-content">
      <div class="timeline-date">September 2017 - April 2018</div>
      <h3 id="cansat-greece">Contact Person Volunteer - CanSat in Greece</h3>
      <p class="timeline-summary" id="cansat-summary">
        Responsible for supporting one of ten participating school teams with programming and information-related challenges throughout the 8-month program...
        <span class="expand-link" onclick="toggleVolunteering('cansat')">Expand</span>
      </p>
      <p class="timeline-details" id="cansat-details" style="display:none;">
        Responsible for supporting one of ten participating school teams with programming and information-related challenges throughout the 8-month program.
        <span class="collapse-link" onclick="toggleVolunteering('cansat')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/cansat.png" alt="CanSat" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="job-fair">
    <div class="timeline-content">
      <div class="timeline-date">November 2017 - April 2018</div>
      <h3 id="job-fair-athens">Main Event Projects Volunteer - Job Fair Athens</h3>
      <p class="timeline-summary" id="jobfair-summary">
        Organized panels, speeches, and sessions on various topics including Technology and Life failures during the two-day event...
        <span class="expand-link" onclick="toggleVolunteering('jobfair')">Expand</span>
      </p>
      <p class="timeline-details" id="jobfair-details" style="display:none;">
        Organized panels, speeches, and sessions on various topics including Technology and Life failures during the two-day event.
        <span class="collapse-link" onclick="toggleVolunteering('jobfair')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/job-fair.png" alt="Job Fair Athens" class="timeline-image">
    </div>
  </div>

  <!-- 2017 -->
  <div class="timeline-item" id="business-week">
    <div class="timeline-content">
      <div class="timeline-date">March 2018</div>
      <h3 id="business-week-2018">Interaction Volunteer - Business Week 2018</h3>
      <p class="timeline-summary" id="businessweek-summary">
        Represented the Career's office at The American College of Greece, promoting the internship program of Deree College...
        <span class="expand-link" onclick="toggleVolunteering('businessweek')">Expand</span>
      </p>
      <p class="timeline-details" id="businessweek-details" style="display:none;">
        Represented the Career's office at The American College of Greece, promoting the internship program of Deree College.
        <span class="collapse-link" onclick="toggleVolunteering('businessweek')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/business-week.png" alt="Business Week" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="tedx">
    <div class="timeline-content">
      <div class="timeline-date">May 2017</div>
      <h3 id="tedx-athens">Registration & Ticketing Volunteer - TEDxAthens</h3>
      <p class="timeline-summary" id="tedx-summary">
        Managed registration and ticketing operations for the TEDxAthens event...
        <span class="expand-link" onclick="toggleVolunteering('tedx')">Expand</span>
      </p>
      <p class="timeline-details" id="tedx-details" style="display:none;">
        Managed registration and ticketing operations for the TEDxAthens event.
        <span class="collapse-link" onclick="toggleVolunteering('tedx')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/tedx.png" alt="TEDxAthens" class="timeline-image">
    </div>
  </div>

  <!-- 2016 -->
  <div class="timeline-item" id="arduino">
    <div class="timeline-content">
      <div class="timeline-date">December 2016</div>
      <h3 id="arduino-workshop">Arduino Workshops Organizer - IEEE NTUA Student Branch</h3>
      <p class="timeline-summary" id="arduino-summary">
        Organized and conducted a 4-day Arduino workshop for students...
        <span class="expand-link" onclick="toggleVolunteering('arduino')">Expand</span>
      </p>
      <p class="timeline-details" id="arduino-details" style="display:none;">
        Organized and conducted a 4-day Arduino workshop for students.
        <span class="collapse-link" onclick="toggleVolunteering('arduino')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/arduino.png" alt="Arduino Workshop" class="timeline-image">
    </div>
  </div>

  <!-- 2011-2017 -->
  <div class="timeline-item" id="mun">
    <div class="timeline-content">
      <div class="timeline-date">March 2011 - May 2017</div>
      <h3 id="model-united-nations">Delegate - Model United Nations</h3>
      <p class="timeline-summary" id="mun-summary">
        Participated in various MUN conferences representing different countries and committees (Bosnia Herzegovina, Guatemala, U.S.A, Sierra Leone, Azerbaijan, Chile, China, DRC)...
        <span class="expand-link" onclick="toggleVolunteering('mun')">Expand</span>
      </p>
      <p class="timeline-details" id="mun-details" style="display:none;">
        Participated in various MUN conferences representing different countries and committees:
        <ul>
          <li>Costeas-Geitonas School MUN 2011 - Delegate of Bosnia Herzegovina</li>
          <li>Platon School MUN 2012 - Delegate of Guatemala</li>
          <li>Deutsche Schule Athens MUN 2012 - Delegate of U.S.A</li>
          <li>Costeas-Geitonas School MUN 2012 - Ambassador of Sierra Leone</li>
          <li>Platon School MUN 2013 - Ambassador of Azerbaijan</li>
          <li>Athens MUN 2013 - Ambassador of Chile</li>
          <li>Platon School MUN 2014 - Delegate of China</li>
          <li>Thessaloniki International Student MUN 2016 - Ambassador of Democratic Republic of Congo</li>
        </ul>
        <span class="collapse-link" onclick="toggleVolunteering('mun')">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/mun.png" alt="Model United Nations" class="timeline-image">
    </div>
  </div>
</div> 