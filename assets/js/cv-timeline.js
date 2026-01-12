// Professional Timeline - Modern Vertical Design
(function() {
  'use strict';
  
  const data = [
    { type: 'work', name: 'Grid Dynamics', desc: 'Building ML/LLM models', start: '2025-12', end: null, icon: '🧠' },
    { type: 'work', name: 'KLIMAKA NGO', desc: 'Building LLM models', start: '2025-02', end: null, icon: '🧠' },
    { type: 'work', name: 'HSBC', desc: 'Building ML models', start: '2024-06', end: '2025-11', icon: '🧠' },
    { type: 'education', name: 'PhD Research', desc: 'PhD research in healthcare data science @ Ionian Panepistimio', start: '2025-06', end: null, icon: '🔬' },
    { type: 'education', name: 'Spanish B2', desc: 'Pursuing B2 in Spanish', start: '2024-03', end: null, icon: '🇪🇸' },
    { type: 'personal', name: 'Calisthenics', desc: 'Calisthenics milestone training', start: '2022-01', end: null, icon: '🏋️' },
    { type: 'achievement', name: 'Brain ECoG Hackathon', desc: '1st Place Winner (69 teams, 404 participants)', start: '2025-09', end: '2025-09', icon: '🏆' },
    { type: 'achievement', name: 'EIT Health i-Days 2025', desc: '2nd Place (HygeIA)', start: '2025-11', end: '2025-11', icon: '🥈' }
  ];
  
  function parseDate(str) {
    if (!str) return null;
    const [y, m] = str.split('-').map(Number);
    return { year: y, month: m || 1 };
  }
  
  function getCurrent() {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1 };
  }
  
  function formatDate(date) {
    if (!date) return '';
    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${m[date.month - 1]} ${date.year}`;
  }
  
  function formatDateRange(item) {
    const start = parseDate(item.start);
    const end = item.end ? parseDate(item.end) : getCurrent();
    if (!start) return '';
    
    if (item.end && item.end === item.start) {
      return formatDate(start);
    }
    if (item.end) {
      return `${formatDate(start)} - ${formatDate(end)}`;
    }
    return `${formatDate(start)} - Present`;
  }
  
  function init() {
    const container = document.querySelector('.cv-timeline-container');
    if (!container) return;
    
    render();
    setupFilters();
  }
  
  function render() {
    const timeline = document.querySelector('.cv-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    // Sort by start date (newest first)
    const sorted = [...data].sort((a, b) => {
      const aStart = parseDate(a.start);
      const bStart = parseDate(b.start);
      if (!aStart || !bStart) return 0;
      return bStart.year - aStart.year || bStart.month - bStart.month;
    });
    
    // Create vertical timeline
    const timelineEl = document.createElement('div');
    timelineEl.className = 'cv-vertical-timeline';
    
    sorted.forEach((item, idx) => {
      const dateStr = formatDateRange(item);
      const isActive = !item.end;
      
      const itemEl = document.createElement('div');
      itemEl.className = `cv-timeline-item cv-${item.type} ${isActive ? 'active' : ''}`;
      
      itemEl.innerHTML = `
        <div class="cv-item-line"></div>
        <div class="cv-item-dot"></div>
        <div class="cv-item-content">
          <div class="cv-item-header">
            <span class="cv-item-icon">${item.icon}</span>
            <div class="cv-item-title-group">
              <h4 class="cv-item-title">${item.name}</h4>
              <span class="cv-item-date">${dateStr}</span>
            </div>
            ${isActive ? '<span class="cv-item-badge">Active</span>' : ''}
          </div>
          <p class="cv-item-desc">${item.desc}</p>
        </div>
      `;
      
      timelineEl.appendChild(itemEl);
    });
    
    timeline.appendChild(timelineEl);
  }
  
  function setupFilters() {
    document.querySelectorAll('.cv-timeline-legend-item').forEach(el => {
      el.addEventListener('click', function() {
        const text = this.textContent.trim();
        let type = 'all';
        if (text.includes('Professional')) type = 'work';
        else if (text.includes('Education')) type = 'education';
        else if (text.includes('Fitness')) type = 'personal';
        else if (text.includes('Achievement')) type = 'achievement';
        
        filter(type);
      });
    });
  }
  
  function filter(type) {
    document.querySelectorAll('.cv-timeline-item').forEach(item => {
      const itemType = item.className.match(/cv-(work|education|personal|achievement)/)?.[1];
      item.style.opacity = (type === 'all' || itemType === type) ? '1' : '0.25';
      item.style.transform = (type === 'all' || itemType === type) ? 'scale(1)' : 'scale(0.95)';
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
