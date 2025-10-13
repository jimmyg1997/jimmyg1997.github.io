---
title: 🧠 Projects
layout: single
permalink: /projects/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/projects-header.png
excerpt: "Exploring the intersection of data science, machine learning, and healthcare"
---

<div class="projects-intro">
  <p>My work spans across various domains of data science, machine learning, and healthcare informatics. This page provides an overview of my major project categories.</p>
</div>


## Data Science Projects {#data-science-projects}


<div class="project-card" id="gmail-reporter">
  <h3 id="gmail-newsletter-reporter">Gmail Newsletter Reporter</h3>
  <div class="project-content">
    <div class="project-details">
      <img src="../assets/images/projects/gmail-reporter.png" alt="Gmail Newsletter Reporter" class="project-image">
      <div class="project-text">
        <p>📧 A Python-based automation project that integrates Gmail, Google Sheets, Google Docs, Telegram and OpenAI APIs to streamline email summarization and report generation. It leverages CLI configurations to provide a seamless experience.</p>
        <div class="project-links">
          <a href="https://github.com/jimmyg1997/gmail-newsletter-reporter" class="btn btn--primary" target="_blank">View on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card" id="polls-analyzer">
  <h3 id="polls-analyzer">Polls Analyzer</h3>
  <div class="project-content">
    <div class="project-details">
      <img src="../assets/images/projects/polls-analyzer.png" alt="Polls Analyzer" class="project-image">
      <div class="project-text">
        <p>📊💬 Streamlit App to Create & Analyze Polls. Design polls, collect responses, and visualize results in real-time 🚀. Get insights quickly with interactive charts and analytics 📈.</p>
        <div class="project-links">
          <a href="https://github.com/jimmyg1997/polls-analyzer" class="btn btn--primary" target="_blank">View on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card" id="ml-feature-engineering">
  <h3 id="ml-feature-engineering-fastapi">ML Feature Engineering FastAPI Docker</h3>
  <div class="project-content">
    <div class="project-details">
      <img src="../assets/images/projects/ml-feature-engineering.png" alt="ML Feature Engineering FastAPI Docker" class="project-image">
      <div class="project-text">
        <p>🤖 Docker Compose image with Uvicorn managed for a simple Machine Learning Feature Engineering FastAPI web application in Python 3.6 and above with multiple endpoints.</p>
        <div class="project-links">
          <a href="https://github.com/jimmyg1997/ml-feature-engineering-fastapi-docker" class="btn btn--primary" target="_blank">View on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Healthcare & PhD Projects {#healthcare-projects}

<div class="project-card" id="ecog-video-analysis">
  <h3 id="ecog-video-analysis">🏆 ECoG Video Analysis - 1st Place Winner</h3>
  <div class="project-content">
    <div class="project-details">
      <div class="project-gallery">
        <div class="gallery-container">
          <img src="../assets/images/projects/ecog-video-analysis.png" alt="ECoG Video Analysis - BCI Competition Winner" class="project-image active" data-index="0">
          <img src="../assets/images/projects/ecog-video-analysis1.png" alt="ECoG Video Analysis - Screenshot 1" class="project-image" data-index="1">
          <img src="../assets/images/projects/ecog-video-analysis2.png" alt="ECoG Video Analysis - Screenshot 2" class="project-image" data-index="2">
          <img src="../assets/images/projects/ecog-video-analysis3.png" alt="ECoG Video Analysis - Screenshot 3" class="project-image" data-index="3">
          <img src="../assets/images/projects/ecog-video-analysis4.png" alt="ECoG Video Analysis - Screenshot 4" class="project-image" data-index="4">
          
          <button class="gallery-nav prev" onclick="changeImage(-1)">‹</button>
          <button class="gallery-nav next" onclick="changeImage(1)">›</button>
          
          <div class="gallery-dots">
            <span class="dot active" onclick="currentImage(0)"></span>
            <span class="dot" onclick="currentImage(1)"></span>
            <span class="dot" onclick="currentImage(2)"></span>
            <span class="dot" onclick="currentImage(3)"></span>
            <span class="dot" onclick="currentImage(4)"></span>
          </div>
        </div>
      </div>
      <div class="project-text">
        <p>🧠 <strong>1st Place Winner</strong> in the Data Analysis category at the Brain ECoG Hackathon among 69 teams and 404 participants from over 50 countries! 🌍</p>
        <p>Advanced neural decoding pipeline for analyzing ECoG data with real-time video synchronization, interactive 3D brain visualizations, and state-of-the-art machine learning models achieving 89.6% accuracy in 7-class visual stimulus classification.</p>
        <p><strong>Key Achievements:</strong></p>
        <ul>
          <li>160-channel ECoG + 252 video trials with advanced artifact removal</li>
          <li>Multiple ML approaches: CSP-LDA, EEGNet, transformers</li>
          <li>Real-time video annotation with multi-region brain overlays</li>
          <li>Interactive web application with live brain-video playback</li>
        </ul>
        <div class="project-links">
          <a href="https://github.com/jimmyg1997/ecog-video-analysis" class="btn btn--primary" target="_blank">View on GitHub</a>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7381093095079178240/" class="btn btn--primary" target="_blank">LinkedIn Post</a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.project-gallery {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.gallery-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.project-image.active {
  opacity: 1;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
}

.gallery-nav:hover {
  background: rgba(0, 0, 0, 0.9);
}

.gallery-nav.prev {
  left: 10px;
}

.gallery-nav.next {
  right: 10px;
}

.gallery-dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: white;
}

@media (max-width: 768px) {
  .gallery-container {
    height: 250px;
  }
  
  .gallery-nav {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
}
</style>

<script>
let currentImageIndex = 0;
const images = document.querySelectorAll('#ecog-video-analysis .project-image');
const dots = document.querySelectorAll('#ecog-video-analysis .dot');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
}

function currentImage(index) {
  currentImageIndex = index;
  showImage(currentImageIndex);
}

// Auto-advance gallery every 5 seconds
setInterval(() => {
  changeImage(1);
}, 5000);
</script>


<div class="project-card" id="suicide-prevention">
  <h3 id="suicide-prevention-survey">Suicide Prevention Survey</h3>
  <div class="project-content">
    <div class="project-details">
      <img src="../assets/images/projects/suicide-prevention.png" alt="Suicide Prevention Survey" class="project-image">
      <div class="project-text">
        <p>A Streamlit-based web app designed for Greek hospitals, allowing doctors to complete a survey for their patients to assess suicide risk.</p>
        <div class="project-links">
          <a href="https://github.com/jimmyg1997/suicide-prevention-survey" class="btn btn--primary" target="_blank">View on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="project-card" id="covid-classification">
  <h3 id="covid-19-classification">COVID-19 Tabular Classification Genes</h3>
  <div class="project-content">
    <div class="project-details">
      <img src="../assets/images/projects/covid-classification.png" alt="COVID-19 Tabular Classification Genes" class="project-image">
      <div class="project-text">
        <p>This tool is built by using machine learning techniques in order to help doctors in the diagnosis of COVID-19 status based only on genetic factors.</p>
        <div class="project-links">
          <a href="https://github.com/jimmyg1997/COVID-19-Tabular-Classification-Genes" class="btn btn--primary" target="_blank">View on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>


## Non-coding Projects {#non-coding-projects}

<div class="project-card" id="bonobo-gentlemen">
  <h3 id="bonobo-gentlemen-podcast">Bonobo Gentlemen Podcast</h3>
  <div class="project-content">
    <div class="project-details">
      <img src="../assets/images/projects/bonobo-gentlemen.png" alt="Bonobo Gentlemen Podcast" class="project-image">
      <div class="project-text">
        <p>A podcast series exploring personal development, technology, and life experiences. Each episode features in-depth discussions on various topics, from overthinking to personal growth.</p>
        <div class="project-links">
          <a href="https://open.spotify.com/episode/6A4DSZ3T7MX6pTnh0XDlau" class="btn btn--primary" target="_blank">Listen on Spotify</a>
        </div>
      </div>
    </div>
  </div>
</div>
