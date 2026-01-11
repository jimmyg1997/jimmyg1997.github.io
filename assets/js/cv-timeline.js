// Professional Experience Visualization - Card Grid Design
(function() {
  'use strict';
  
  const experiences = [
    { type: 'work', name: 'Grid Dynamics', desc: 'Building ML/LLM models', start: '2025-12', end: null, icon: '🧠', color: '#2563eb' },
    { type: 'work', name: 'KLIMAKA NGO', desc: 'Building LLM models', start: '2025-02', end: null, icon: '🧠', color: '#2563eb' },
    { type: 'work', name: 'HSBC', desc: 'Building ML models', start: '2024-06', end: '2025-11', icon: '🧠', color: '#2563eb' },
    { type: 'education', name: 'PhD Research', desc: 'PhD research in healthcare data science @ Ionian Panepistimio', start: '2025-06', end: null, icon: '🔬', color: '#059669' },
    { type: 'education', name: 'Spanish B2', desc: 'Pursuing B2 in Spanish', start: '2024-03', end: null, icon: '🇪🇸', color: '#059669' },
    { type: 'personal', name: 'Calisthenics', desc: 'Calisthenics milestone training', start: '2022-01', end: null, icon: '🏋️', color: '#7c3aed' },
    { type: 'achievement', name: 'EIT Health i-Days 2025', desc: '2nd Place (HygeIA)', start: '2025-11', end: '2025-11', icon: '🥈', color: '#f59e0b' },
    { type: 'achievement', name: 'Brain ECoG Hackathon', desc: '1st Place Winner (69 teams, 404 participants)', start: '2025-09', end: '2025-09', icon: '🏆', color: '#f59e0b' }
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
    
    const timeline = container.querySelector('.cv-timeline');
    if (!timeline) return;
    
    render(timeline);
    setupFilters();
  }
  
  function render(timeline) {
    timeline.innerHTML = '';
    
    // Sort by start date (newest first)
    const sorted = [...experiences].sort((a, b) => {
      const aStart = parseDate(a.start);
      const bStart = parseDate(b.start);
      if (!aStart || !bStart) return 0;
      return bStart.year - aStart.year || bStart.month - aStart.month;
    });
    
    // Create grid
    const grid = document.createElement('div');
    grid.className = 'cv-experience-grid';
    
    sorted.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = `cv-experience-card cv-${item.type}`;
      card.setAttribute('data-type', item.type);
      
      const dateStr = formatDateRange(item);
      const isActive = !item.end;
      
      card.innerHTML = `
        <div class="cv-card-header" style="background: ${item.color}20; border-left: 4px solid ${item.color}">
          <div class="cv-card-icon">${item.icon}</div>
          <div class="cv-card-title">${item.name}</div>
        </div>
        <div class="cv-card-body">
          <div class="cv-card-date">${dateStr}</div>
          <div class="cv-card-desc">${item.desc}</div>
          ${isActive ? '<div class="cv-card-badge">Active</div>' : ''}
        </div>
      `;
      
      grid.appendChild(card);
    });
    
    timeline.appendChild(grid);
    
    // Render timeline axis
    renderAxis();
  }
  
  function renderAxis() {
    const axis = document.querySelector('.cv-timeline-axis');
    if (!axis) return;
    
    axis.innerHTML = '';
    axis.className = 'cv-timeline-axis';
    
    const years = [2022, 2023, 2024, 2025, 2026];
    years.forEach(year => {
      const el = document.createElement('div');
      el.className = 'cv-axis-year';
      el.textContent = year;
      axis.appendChild(el);
    });
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
    document.querySelectorAll('.cv-experience-card').forEach(card => {
      const cardType = card.getAttribute('data-type');
      if (type === 'all' || cardType === type) {
        card.style.display = 'block';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
