// Professional Timeline Visualization - Clean Design
(function() {
  'use strict';
  
  const timelineData = [
    { type: 'work', name: 'Grid Dynamics', desc: 'Building ML/LLM models', start: '2025-12', end: null, icon: '🧠' },
    { type: 'work', name: 'KLIMAKA NGO', desc: 'Building LLM models', start: '2025-02', end: null, icon: '🧠' },
    { type: 'work', name: 'HSBC', desc: 'Building ML models', start: '2024-06', end: '2025-11', icon: '🧠' },
    { type: 'education', name: 'PhD Research', desc: 'PhD research in healthcare data science @ Ionian Panepistimio', start: '2025-06', end: null, icon: '🔬' },
    { type: 'education', name: 'Spanish B2', desc: 'Pursuing B2 in Spanish', start: '2024-03', end: null, icon: '🇪🇸' },
    { type: 'personal', name: 'Calisthenics', desc: 'Calisthenics milestone training', start: '2022-01', end: null, icon: '🏋️' },
    { type: 'achievement', name: 'EIT Health i-Days 2025', desc: '2nd Place (HygeIA)', start: '2025-11', end: '2025-11', icon: '🥈' },
    { type: 'achievement', name: 'Brain ECoG Hackathon', desc: '1st Place Winner (69 teams, 404 participants)', start: '2025-09', end: '2025-09', icon: '🏆' }
  ];
  
  const config = {
    startYear: 2022,
    endYear: 2026,
    totalMonths: 60
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    const container = document.querySelector('.cv-timeline-container');
    if (!container) return;
    
    renderTimeline();
    setupInteractions();
  }
  
  function parseDate(dateStr) {
    if (!dateStr) return null;
    const [year, month] = dateStr.split('-').map(Number);
    return { year, month: month || 1 };
  }
  
  function getCurrentDate() {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  }
  
  function dateToMonths(date) {
    return (date.year - config.startYear) * 12 + (date.month - 1);
  }
  
  function formatDate(date) {
    if (!date) return '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.month - 1]} ${date.year}`;
  }
  
  function calculateLayout() {
    const items = [];
    const rows = [];
    
    timelineData.forEach((item, index) => {
      const startDate = parseDate(item.start);
      const endDate = item.end ? parseDate(item.end) : getCurrentDate();
      if (!startDate) return;
      
      const startMonths = dateToMonths(startDate);
      const endMonths = dateToMonths(endDate);
      const left = (startMonths / config.totalMonths) * 100;
      const width = ((endMonths - startMonths) / config.totalMonths) * 100;
      
      // Find row
      let row = 0;
      for (let r = 0; r < rows.length; r++) {
        const overlaps = rows[r].some(existing => {
          const existingRight = existing.left + existing.width;
          return !((left + width) <= existing.left || left >= existingRight);
        });
        if (!overlaps) {
          row = r;
          break;
        }
        row = r + 1;
      }
      
      if (!rows[row]) rows[row] = [];
      rows[row].push({ left, width });
      
      items.push({
        item,
        index,
        left,
        width,
        row,
        startDate,
        endDate
      });
    });
    
    return { items, maxRow: rows.length - 1 };
  }
  
  function renderTimeline() {
    const timeline = document.querySelector('.cv-timeline');
    if (!timeline) return;
    
    const { items, maxRow } = calculateLayout();
    
    timeline.innerHTML = '';
    
    // Create grid
    const grid = document.createElement('div');
    grid.className = 'cv-timeline-grid';
    
    // Year markers
    for (let year = config.startYear; year <= config.endYear; year++) {
      const marker = document.createElement('div');
      marker.className = 'cv-year-marker';
      marker.textContent = year;
      marker.style.left = `${((year - config.startYear) / (config.endYear - config.startYear)) * 100}%`;
      grid.appendChild(marker);
    }
    
    // Timeline bars
    items.forEach(({ item, left, width, row, startDate, endDate }) => {
      const bar = document.createElement('div');
      bar.className = `cv-timeline-bar cv-${item.type}`;
      bar.style.left = `${left}%`;
      bar.style.width = `${Math.max(width, 2)}%`;
      bar.style.top = `${row * 50 + 30}px`;
      bar.style.zIndex = maxRow - row + 1;
      
      const dateStr = item.end && item.end === item.start
        ? formatDate(startDate)
        : item.end
        ? `${formatDate(startDate)} - ${formatDate(endDate)}`
        : `${formatDate(startDate)} - Present`;
      
      bar.innerHTML = `
        <span class="cv-bar-icon">${item.icon}</span>
        <span class="cv-bar-name">${item.name}</span>
        <div class="cv-bar-tooltip">
          <strong>${item.name}</strong><br>
          ${item.desc}<br>
          <em>${dateStr}</em>
        </div>
      `;
      
      grid.appendChild(bar);
    });
    
    // Labels on the left
    const labels = document.createElement('div');
    labels.className = 'cv-timeline-labels';
    
    items.forEach(({ item, row, startDate, endDate }) => {
      const label = document.createElement('div');
      label.className = `cv-timeline-label cv-${item.type}`;
      label.style.top = `${row * 50 + 30}px`;
      
      const dateStr = item.end && item.end === item.start
        ? formatDate(startDate)
        : item.end
        ? `${formatDate(startDate)} - ${formatDate(endDate)}`
        : `${formatDate(startDate)} - Present`;
      
      label.innerHTML = `
        <div class="cv-label-date">${dateStr}</div>
        <div class="cv-label-name">${item.icon} ${item.name}</div>
      `;
      
      labels.appendChild(label);
    });
    
    timeline.appendChild(labels);
    timeline.appendChild(grid);
    
    timeline.style.height = `${(maxRow + 1) * 50 + 60}px`;
    
    renderAxis();
  }
  
  function renderAxis() {
    const axis = document.querySelector('.cv-timeline-axis');
    if (!axis) return;
    
    axis.innerHTML = '';
    
    for (let year = config.startYear; year <= config.endYear; year++) {
      const yearEl = document.createElement('div');
      yearEl.className = 'cv-axis-year';
      yearEl.textContent = year;
      axis.appendChild(yearEl);
    }
  }
  
  function setupInteractions() {
    // Bar hover effects
    document.addEventListener('mouseover', (e) => {
      const bar = e.target.closest('.cv-timeline-bar');
      if (bar) {
        const tooltip = bar.querySelector('.cv-bar-tooltip');
        if (tooltip) {
          tooltip.style.display = 'block';
          const rect = bar.getBoundingClientRect();
          tooltip.style.left = `${rect.left + rect.width / 2}px`;
          tooltip.style.top = `${rect.top - 60}px`;
        }
      }
    });
    
    document.addEventListener('mouseout', (e) => {
      const bar = e.target.closest('.cv-timeline-bar');
      if (bar) {
        const tooltip = bar.querySelector('.cv-bar-tooltip');
        if (tooltip) tooltip.style.display = 'none';
      }
    });
    
    // Legend filtering
    document.querySelectorAll('.cv-timeline-legend-item').forEach(item => {
      item.addEventListener('click', function() {
        const text = this.textContent.trim();
        let type = 'all';
        if (text.includes('Professional')) type = 'work';
        else if (text.includes('Education')) type = 'education';
        else if (text.includes('Fitness')) type = 'personal';
        else if (text.includes('Achievement')) type = 'achievement';
        
        filterByType(type);
      });
    });
  }
  
  function filterByType(type) {
    document.querySelectorAll('.cv-timeline-bar, .cv-timeline-label').forEach(el => {
      const itemType = el.className.match(/cv-(work|education|personal|achievement)/)?.[1];
      if (type === 'all' || itemType === type) {
        el.style.opacity = '1';
      } else {
        el.style.opacity = '0.2';
      }
    });
  }
})();
