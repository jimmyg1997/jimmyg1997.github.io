---
title: Projects
layout: single
permalink: /projects/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/projects-header.png
excerpt: "Machine Learning & Data Science Portfolio"
---

<div class="projects-intro">
  <p>A comprehensive portfolio showcasing expertise in machine learning, data science, and healthcare AI. Each project demonstrates end-to-end development from data processing to production deployment.</p>
</div>

## Healthcare & AI Research Projects {#healthcare-ai-research-projects}

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/greek-clinical-agent-lab.png" alt="Greek Clinical Agent Lab — framework comparison report dashboard" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="greek-clinical-agent-lab">Greek Clinical Agent Lab</h3>
    <p><strong>Purpose:</strong> Controlled research lab comparing <strong>AutoGen</strong>, <strong>LangGraph</strong>, and <strong>CrewAI</strong> on Greek mental-health helpline audio — same Whisper transcript, same clinical safety rules, measured side-by-side.</p>
    <p><strong>Architecture:</strong> ASR-first pipeline with local <code>faster-whisper</code> (frozen transcript shared by all frameworks) → parallel agent orchestration → rule-based clinical enrichment (C-SSRS-style risk flags, evidence spans, hallucination guard, de-identification) → live comparison dashboard with exportable reports.</p>
    <p><strong>Results (sample session, ~13 min Greek audio):</strong> Whisper <code>large-v2</code> WER <strong>9.8%</strong> vs human gold · LangGraph orchestration <strong>2.65s</strong> (fastest) · AutoGen <strong>4.21s</strong> with 100% entity F1 · CrewAI <strong>19.5s</strong> with 4-role crew · all three agreed on supervisor review for active ideation.</p>
    <p><strong>Note:</strong> Educational research prototype — not for clinical deployment. Built to explore agent orchestration where mistakes matter, on anonymized helpline-style audio (ΚΛΙΜΑΚΑ domain).</p>
    <p class="tech-stack"><strong>Tech Stack:</strong> Python 3.12, FastAPI, faster-whisper, OpenAI (NER only), AutoGen, LangGraph, CrewAI, Grafana/Prometheus/Loki, vanilla JS dashboard</p>
    <div class="project-links">
      <a href="https://github.com/dimigeorgiou/greek-clinical-agent-lab" class="btn btn--primary" target="_blank" rel="noopener">View Code</a>
    </div>
  </div>
</div>

<style>
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

/* Handle missing images gracefully */
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

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/suicide-prevention.png" alt="Suicide Prevention Survey" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="suicide-prevention-survey">Suicide Prevention Survey Platform</h3>
    <p><strong>Purpose:</strong> Clinical decision support system for Greek hospitals enabling doctors to assess patient suicide risk through validated screening tools.</p>
    <p><strong>Technical Implementation:</strong> Built with Streamlit for rapid deployment, integrated with PostgreSQL for secure data storage, and featuring real-time risk scoring algorithms. Implements GDPR-compliant data handling and encrypted patient information storage.</p>
    <p><strong>Impact:</strong> Deployed in pilot hospitals, supporting mental health professionals in early intervention and risk assessment.</p>
    <p class="tech-stack"><strong>Tech Stack:</strong> Python, Streamlit, PostgreSQL, Pandas, Plotly, Security Encryption</p>
    <div class="project-links">
      <a href="https://github.com/dimigeorgiou/suicide-prevention-survey" class="btn btn--primary" target="_blank">View Code</a>
    </div>
  </div>
</div>

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/covid-classification.png" alt="COVID-19 Genetic Classification" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="covid-19-genetic-classification">COVID-19 Genetic Factor Classification</h3>
    <p><strong>Purpose:</strong> Machine learning system for COVID-19 diagnosis based solely on genetic factors, supporting clinical decision-making when traditional testing is unavailable.</p>
    <p><strong>ML Pipeline:</strong> Feature engineering on genetic markers, ensemble models (Random Forest, XGBoost, LightGBM), SHAP values for model interpretability, and cross-validation for robust performance.</p>
    <p><strong>Results:</strong> 87% accuracy in predicting COVID-19 status from genetic factors, with detailed feature importance analysis identifying key genetic markers.</p>
    <p class="tech-stack"><strong>Tech Stack:</strong> Python, Scikit-learn, XGBoost, SHAP, Pandas, NumPy, Seaborn</p>
    <div class="project-links">
      <a href="https://github.com/dimigeorgiou/COVID-19-Tabular-Classification-Genes" class="btn btn--primary" target="_blank">View Code</a>
    </div>
  </div>
</div>

## Data Science & Automation Projects {#data-science-automation-projects}

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/yt-notebooklm-obsidian.png" alt="YouTube to NotebookLM to Obsidian — vault dashboard graph view" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="yt-notebooklm-obsidian">YouTube → NotebookLM → Obsidian</h3>
    <p><strong>Purpose:</strong> End-to-end automation that turns any YouTube playlist or channel into searchable, linked Obsidian notes — with summaries, key ideas, wikilinks, and optional NotebookLM artifacts (audio overview, mind map, quiz, flashcards).</p>
    <p><strong>Features:</strong> Resume-safe pipeline (<code>--resume</code>, <code>--update</code>), Greek/English subtitle support, local vault dashboard with topic sync and scoped graph views, and single-video ingest from the browser UI.</p>
    <p class="tech-stack"><strong>Tech Stack:</strong> Python, FastAPI, OpenAI / Gemini, NotebookLM, Obsidian Markdown, Playwright, pytest</p>
    <div class="project-links">
      <a href="https://github.com/dimigeorgiou/yt-notebooklm-obsidian" class="btn btn--primary" target="_blank" rel="noopener">View Code</a>
    </div>
  </div>
</div>

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/habit-tracker.png" alt="Habit Tracker" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="habit-tracker">Habit Tracker</h3>
    <p><strong>Purpose:</strong> Personal productivity application for tracking daily habits and building consistent routines.</p>
    <p><strong>Features:</strong> Daily habit logging, progress visualization, streak tracking, customizable habit categories, and data persistence for long-term progress monitoring.</p>
    <p><strong>Implementation:</strong> Built with modern web technologies, featuring an intuitive interface for quick daily check-ins and comprehensive analytics to visualize habit consistency over time.</p>
    <p class="tech-stack"><strong>Tech Stack:</strong> React 18 + TypeScript, Vite, Tailwind CSS, Supabase (database/auth), Capacitor (iOS/Android), Vite PWA, Recharts, Framer Motion.</p>
    <div class="project-links">
      <a href="https://github.com/dimigeorgiou/habit-tracker" class="btn btn--primary" target="_blank">View Code</a>
    </div>
  </div>
</div>

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/gmail-reporter.png" alt="Gmail Newsletter Reporter" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="gmail-newsletter-reporter">Gmail Newsletter Reporter</h3>
    <p><strong>Purpose:</strong> Automated email intelligence system integrating multiple Google APIs and OpenAI for smart email summarization and reporting.</p>
    <p><strong>Features:</strong> Gmail API integration for email extraction, OpenAI GPT for intelligent summarization, automatic Google Docs report generation, Telegram notifications, and CLI configuration management.</p>
    <p><strong>Architecture:</strong> Modular Python design with async processing, configurable pipelines, and scheduled automation via cron jobs.</p>
    <p class="tech-stack"><strong>Tech Stack:</strong> Python, Gmail API, Google Sheets API, Google Docs API, OpenAI API, Telegram Bot API, AsyncIO, Click (CLI)</p>
    <div class="project-links">
      <a href="https://github.com/dimigeorgiou/gmail-newsletter-reporter" class="btn btn--primary" target="_blank">View Code</a>
    </div>
  </div>
</div>

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/polls-analyzer.png" alt="Polls Analyzer" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="polls-analyzer">Polls Analyzer - Interactive Survey Platform</h3>
    <p><strong>Purpose:</strong> Full-stack survey creation and analysis platform with real-time visualization and statistical insights.</p>
    <p><strong>Features:</strong> Dynamic poll creation interface, real-time response collection, interactive charts (Plotly), statistical analysis (Chi-square, correlation), and exportable reports.</p>
    <p><strong>Analytics:</strong> Response distribution analysis, demographic segmentation, trend identification, and automated insight generation.</p>
    <p class="tech-stack"><strong>Tech Stack:</strong> Python, Streamlit, Plotly, Pandas, NumPy, SciPy, SQLite</p>
    <div class="project-links">
      <a href="https://github.com/dimigeorgiou/polls-analyzer" class="btn btn--primary" target="_blank">View Code</a>
    </div>
  </div>
</div>

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/ml-feature-engineering.png" alt="ML Feature Engineering API" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="ml-feature-engineering-api">ML Feature Engineering FastAPI Service</h3>
    <p><strong>Purpose:</strong> Production-ready microservice for automated feature engineering and ML preprocessing at scale.</p>
    <p><strong>Architecture:</strong> FastAPI for high-performance async endpoints, Docker Compose for containerization, Uvicorn for ASGI server, and comprehensive API documentation with Swagger UI.</p>
    <p><strong>Features:</strong> Automated feature generation, missing value imputation, categorical encoding, feature scaling, and feature selection algorithms. RESTful API design with input validation and error handling.</p>
    <p><strong>Performance:</strong> Handles 1000+ requests/second, horizontal scaling via Docker Swarm, and production-ready logging and monitoring.</p>
    <p class="tech-stack"><strong>Tech Stack:</strong> Python, FastAPI, Docker, Uvicorn, Scikit-learn, Pandas, Pydantic, Pytest</p>
    <div class="project-links">
      <a href="https://github.com/dimigeorgiou/ml-feature-engineering-fastapi-docker" class="btn btn--primary" target="_blank">View Code</a>
    </div>
  </div>
</div>

## Media & Personal Projects {#media-personal-projects}

<div class="project-card full-width">
  <div class="project-image-wrapper">
    <img src="/assets/images/projects/bonobo-gentlemen.png" alt="Bonobo Gentlemen Podcast" class="project-main-image">
  </div>
  <div class="project-content">
    <h3 id="bonobo-gentlemen-podcast">Bonobo Gentlemen Podcast</h3>
    <p><strong>About:</strong> A podcast series exploring the intersection of technology, personal development, and life philosophy. Episodes feature in-depth discussions on machine learning, career development, mental health, and productivity.</p>
    <p><strong>Topics:</strong> AI/ML industry insights, career transitions in tech, work-life balance, mental health awareness, productivity systems, and continuous learning strategies.</p>
    <p><strong>Production:</strong> Audio editing with Audacity, hosting on Spotify and Apple Podcasts, and social media promotion strategy.</p>
    <div class="project-links">
      <a href="https://open.spotify.com/episode/6A4DSZ3T7MX6pTnh0XDlau" class="btn btn--primary" target="_blank">Listen on Spotify</a>
    </div>
  </div>
</div>

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
// Image Lightbox functionality for Projects page
(function() {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const closeBtn = document.querySelector('.image-lightbox-close');
  const prevBtn = document.querySelector('.image-lightbox-prev');
  const nextBtn = document.querySelector('.image-lightbox-next');
  
  let currentImages = [];
  let currentIndex = 0;
  
  // Get all clickable images (exclude logos, navigation elements, etc.)
  function getClickableImages() {
    return Array.from(document.querySelectorAll('.page[class*="projects"] img')).filter(img => {
      // Exclude logos, navigation buttons, dots, etc.
      const excludeClasses = ['gallery-nav', 'dot'];
      const excludeParents = img.closest('.gallery-nav, .gallery-dots');
      
      if (excludeParents) return false;
      
      for (let cls of excludeClasses) {
        if (img.classList.contains(cls)) return false;
      }
      
      // Only include images that have a valid src
      return img.src && img.src !== '' && img.complete && img.naturalHeight !== 0;
    });
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
  document.addEventListener('DOMContentLoaded', function() {
    const images = getClickableImages();
    
    images.forEach((img, index) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openLightbox(index);
      });
    });
  });
  
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
</script>

