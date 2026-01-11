// Professional Timeline - Clean & Working
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
    return Math.max(0, Math.min(100, (months / totalMonths) * 100));
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
    
    // Calculate positions
    const items = [];
    const rows = [];
    
    data.forEach((item, idx) => {
      const start = parseDate(item.start);
      const end = item.end ? parseDate(item.end) : getCurrent();
      if (!start) return;
      
      const startM = toMonths(start);
      const endM = toMonths(end);
      const left = toPercent(startM);
      const right = toPercent(endM);
      const width = Math.max(1.5, right - left);
      
      // Find non-overlapping row
      let row = 0;
      for (let r = 0; r < rows.length; r++) {
        const hasOverlap = rows[r].some(existing => {
          const existingRight = existing.left + existing.width;
          return !((left + width) <= existing.left || left >= existingRight);
        });
        if (!hasOverlap) {
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
    const rowHeight = 50;
    const labelWidth = 200;
    
    // Create container
    const wrapper = document.createElement('div');
    wrapper.className = 'cv-timeline-wrapper';
    wrapper.style.position = 'relative';
    wrapper.style.minHeight = `${(maxRow + 1) * rowHeight + 40}px`;
    wrapper.style.paddingLeft = `${labelWidth}px`;
    
    // Labels on left
    const labels = document.createElement('div');
    labels.className = 'cv-labels';
    labels.style.position = 'absolute';
    labels.style.left = '0';
    labels.style.top = '0';
    labels.style.width = `${labelWidth - 20}px`;
    
    items.forEach(({ item, row, start, end }) => {
      const label = document.createElement('div');
      label.className = `cv-label cv-${item.type}`;
      label.style.position = 'absolute';
      label.style.top = `${row * rowHeight + 10}px`;
      label.style.width = '100%';
      
      const dateStr = formatDateRange(item);
      label.innerHTML = `
        <div class="cv-label-date">${dateStr}</div>
        <div class="cv-label-name">${item.icon} ${item.name}</div>
      `;
      
      labels.appendChild(label);
    });
    
    // Timeline bars
    const barsContainer = document.createElement('div');
    barsContainer.className = 'cv-bars-container';
    barsContainer.style.position = 'relative';
    barsContainer.style.width = '100%';
    barsContainer.style.height = `${(maxRow + 1) * rowHeight + 40}px`;
    barsContainer.style.borderTop = '2px solid rgba(0, 31, 63, 0.15)';
    barsContainer.style.marginTop = '20px';
    barsContainer.style.paddingTop = '10px';
    
    // Year markers
    for (let y = startYear; y <= endYear; y++) {
      const marker = document.createElement('div');
      marker.className = 'cv-year-marker';
      marker.textContent = y;
      marker.style.position = 'absolute';
      marker.style.top = '-25px';
      marker.style.left = `${((y - startYear) / (endYear - startYear)) * 100}%`;
      marker.style.transform = 'translateX(-50%)';
      barsContainer.appendChild(marker);
    }
    
    // Bars
    items.forEach(({ item, left, width, row }) => {
      const bar = document.createElement('div');
      bar.className = `cv-timeline-bar cv-${item.type}`;
      bar.style.position = 'absolute';
      bar.style.left = `${left}%`;
      bar.style.width = `${width}%`;
      bar.style.top = `${row * rowHeight + 10}px`;
      bar.style.height = `${rowHeight - 10}px`;
      bar.style.zIndex = maxRow - row + 1;
      
      bar.innerHTML = `
        <span class="cv-bar-icon">${item.icon}</span>
        <span class="cv-bar-name">${item.name}</span>
      `;
      bar.title = `${item.name}: ${item.desc}`;
      
      barsContainer.appendChild(bar);
    });
    
    wrapper.appendChild(labels);
    wrapper.appendChild(barsContainer);
    timeline.appendChild(wrapper);
    
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
    document.querySelectorAll('.cv-timeline-bar, .cv-label').forEach(el => {
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
