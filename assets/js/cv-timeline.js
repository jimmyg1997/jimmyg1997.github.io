// Professional Timeline - Simple & Clean
(function() {
  'use strict';
  
  const data = [
    { type: 'work', name: 'Grid Dynamics', desc: 'Building ML/LLM models', start: '2025-12', end: null, icon: '🧠' },
    { type: 'work', name: 'KLIMAKA NGO', desc: 'Building LLM models', start: '2025-02', end: null, icon: '🧠' },
    { type: 'work', name: 'HSBC', desc: 'Building ML models', start: '2024-06', end: '2025-11', icon: '🧠' },
    { type: 'education', name: 'PhD Research', desc: 'PhD research in healthcare data science @ Ionian Panepistimio', start: '2025-06', end: null, icon: '🔬' },
    { type: 'education', name: 'Spanish B2', desc: 'Pursuing B2 in Spanish', start: '2024-03', end: null, icon: '🇪🇸' },
    { type: 'personal', name: 'Calisthenics', desc: 'Calisthenics milestone training', start: '2022-01', end: null, icon: '🏋️' },
    { type: 'achievement', name: 'EIT Health i-Days 2025', desc: '2nd Place (HygeIA)', start: '2025-11', end: '2025-11', icon: '🥈' },
    { type: 'achievement', name: 'Brain ECoG Hackathon', desc: '1st Place Winner (69 teams, 404 participants)', start: '2025-09', end: '2025-09', icon: '🏆' }
  ];
  
  const startYear = 2022;
  const endYear = 2026;
  const totalMonths = (endYear - startYear + 1) * 12;
  
  function parseDate(str) {
    if (!str) return null;
    const [y, m] = str.split('-').map(Number);
    return { year: y, month: m || 1 };
  }
  
  function getCurrent() {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1 };
  }
  
  function toMonths(date) {
    return (date.year - startYear) * 12 + (date.month - 1);
  }
  
  function toPercent(months) {
    return (months / totalMonths) * 100;
  }
  
  function formatDate(date) {
    if (!date) return '';
    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${m[date.month - 1]} ${date.year}`;
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
    
    // Calculate positions and rows
    const items = [];
    const rows = [];
    
    data.forEach((item, idx) => {
      const start = parseDate(item.start);
      const end = item.end ? parseDate(item.end) : getCurrent();
      if (!start) return;
      
      const startM = toMonths(start);
      const endM = toMonths(end);
      const left = toPercent(startM);
      const width = toPercent(endM - startM);
      
      // Find row
      let row = 0;
      for (let r = 0; r < rows.length; r++) {
        const overlap = rows[r].some(e => {
          const eRight = e.left + e.width;
          return !((left + width) <= e.left || left >= eRight);
        });
        if (!overlap) {
          row = r;
          break;
        }
        row = r + 1;
      }
      
      if (!rows[row]) rows[row] = [];
      rows[row].push({ left, width });
      
      items.push({ item, idx, left, width, row, start, end });
    });
    
    const maxRow = rows.length - 1;
    
    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'cv-timeline-wrapper';
    
    // Labels column
    const labelsCol = document.createElement('div');
    labelsCol.className = 'cv-labels-column';
    
    items.forEach(({ item, row, start, end }) => {
      const label = document.createElement('div');
      label.className = `cv-label-row cv-${item.type}`;
      label.style.top = `${row * 50 + 10}px`;
      
      const dateStr = item.end && item.end === item.start
        ? formatDate(start)
        : item.end
        ? `${formatDate(start)} - ${formatDate(end)}`
        : `${formatDate(start)} - Present`;
      
      label.innerHTML = `
        <div class="cv-label-date">${dateStr}</div>
        <div class="cv-label-text">${item.icon} ${item.name}</div>
      `;
      
      labelsCol.appendChild(label);
    });
    
    // Timeline column
    const timelineCol = document.createElement('div');
    timelineCol.className = 'cv-timeline-column';
    
    // Year markers
    for (let y = startYear; y <= endYear; y++) {
      const marker = document.createElement('div');
      marker.className = 'cv-year-marker';
      marker.textContent = y;
      marker.style.left = `${((y - startYear) / (endYear - startYear)) * 100}%`;
      timelineCol.appendChild(marker);
    }
    
    // Bars
    items.forEach(({ item, left, width, row }) => {
      const bar = document.createElement('div');
      bar.className = `cv-timeline-bar cv-${item.type}`;
      bar.style.left = `${left}%`;
      bar.style.width = `${Math.max(width, 1.5)}%`;
      bar.style.top = `${row * 50 + 10}px`;
      bar.style.zIndex = maxRow - row + 1;
      
      bar.innerHTML = `<span class="cv-bar-icon">${item.icon}</span><span class="cv-bar-text">${item.name}</span>`;
      bar.title = `${item.name}: ${item.desc}`;
      
      timelineCol.appendChild(bar);
    });
    
    wrapper.appendChild(labelsCol);
    wrapper.appendChild(timelineCol);
    timeline.appendChild(wrapper);
    
    timeline.style.height = `${(maxRow + 1) * 50 + 30}px`;
    
    // Render axis
    renderAxis();
  }
  
  function renderAxis() {
    const axis = document.querySelector('.cv-timeline-axis');
    if (!axis) return;
    
    axis.innerHTML = '';
    
    for (let y = startYear; y <= endYear; y++) {
      const el = document.createElement('div');
      el.className = 'cv-axis-year';
      el.textContent = y;
      axis.appendChild(el);
    }
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
    document.querySelectorAll('.cv-timeline-bar, .cv-label-row').forEach(el => {
      const itemType = el.className.match(/cv-(work|education|personal|achievement)/)?.[1];
      el.style.opacity = (type === 'all' || itemType === type) ? '1' : '0.2';
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
