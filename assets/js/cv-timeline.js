// Professional Gantt Chart Timeline
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
  
  const config = {
    startYear: 2022,
    endYear: 2026,
    rowHeight: 50,
    labelWidth: 220,
    barHeight: 36
  };
  
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
    return (date.year - config.startYear) * 12 + (date.month - 1);
  }
  
  function toPercent(months, totalMonths) {
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
    
    render();
    setupFilters();
  }
  
  function render() {
    const timeline = document.querySelector('.cv-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    const totalMonths = (config.endYear - config.startYear + 1) * 12;
    
    // Calculate positions and handle overlaps
    const items = [];
    const rows = [];
    
    // Sort by start date for consistent rendering
    const sorted = [...data].sort((a, b) => {
      const aStart = parseDate(a.start);
      const bStart = parseDate(b.start);
      if (!aStart || !bStart) return 0;
      return aStart.year - bStart.year || aStart.month - bStart.month;
    });
    
    sorted.forEach((item, idx) => {
      const start = parseDate(item.start);
      const end = item.end ? parseDate(item.end) : getCurrent();
      if (!start) return;
      
      const startM = toMonths(start);
      const endM = toMonths(end);
      const left = toPercent(startM, totalMonths);
      const right = toPercent(endM, totalMonths);
      const width = Math.max(2, right - left);
      
      // Find non-overlapping row
      let row = 0;
      for (let r = 0; r < rows.length; r++) {
        const hasOverlap = rows[r].some(existing => {
          const existingRight = existing.left + existing.width;
          const margin = 0.5;
          return !((left + width + margin) <= existing.left || (left - margin) >= existingRight);
        });
        if (!hasOverlap) {
          row = r;
          break;
        }
        row = r + 1;
      }
      
      if (!rows[row]) rows[row] = [];
      rows[row].push({ left, width });
      
      items.push({ item, left, width, row, start, end });
    });
    
    const maxRow = rows.length - 1;
    const chartHeight = (maxRow + 1) * config.rowHeight + 60;
    
    // Create Gantt chart structure
    const ganttWrapper = document.createElement('div');
    ganttWrapper.className = 'cv-gantt-wrapper';
    ganttWrapper.style.height = `${chartHeight}px`;
    ganttWrapper.style.paddingLeft = `${config.labelWidth}px`;
    
    // Labels column
    const labelsCol = document.createElement('div');
    labelsCol.className = 'cv-gantt-labels';
    
    items.forEach(({ item, row, start, end }) => {
      const label = document.createElement('div');
      label.className = `cv-gantt-label cv-${item.type}`;
      label.style.top = `${row * config.rowHeight + 7}px`;
      
      const dateStr = formatDateRange(item);
      const isActive = !item.end;
      
      label.innerHTML = `
        <div class="cv-label-content">
          <span class="cv-label-icon">${item.icon}</span>
          <div class="cv-label-text">
            <div class="cv-label-name">${item.name}</div>
            <div class="cv-label-date">${dateStr}</div>
          </div>
          ${isActive ? '<span class="cv-label-badge">ACTIVE</span>' : ''}
        </div>
      `;
      
      // Ensure proper height alignment
      label.style.height = `${config.rowHeight}px`;
      
      labelsCol.appendChild(label);
    });
    
    // Chart area
    const chartArea = document.createElement('div');
    chartArea.className = 'cv-gantt-chart';
    chartArea.style.height = `${chartHeight}px`;
    chartArea.style.borderTop = '2px solid rgba(0, 31, 63, 0.15)';
    chartArea.style.marginTop = '30px';
    chartArea.style.paddingTop = '10px';
    chartArea.style.position = 'relative';
    
    // Year markers
    for (let y = config.startYear; y <= config.endYear; y++) {
      const marker = document.createElement('div');
      marker.className = 'cv-gantt-year-marker';
      marker.textContent = y;
      marker.style.left = `${((y - config.startYear) / (config.endYear - config.startYear)) * 100}%`;
      chartArea.appendChild(marker);
    }
    
    // Gantt bars
    items.forEach(({ item, left, width, row }) => {
      const bar = document.createElement('div');
      bar.className = `cv-gantt-bar cv-${item.type}`;
      bar.style.left = `${left}%`;
      bar.style.width = `${width}%`;
      bar.style.top = `${row * config.rowHeight + 7}px`;
      bar.style.height = `${config.barHeight}px`;
      bar.style.zIndex = maxRow - row + 1;
      
      const isActive = !item.end;
      
      bar.innerHTML = `
        <div class="cv-bar-content">
          <span class="cv-bar-icon">${item.icon}</span>
          <span class="cv-bar-text">${item.name}</span>
        </div>
      `;
      
      bar.title = `${item.name}: ${item.desc}`;
      bar.setAttribute('data-desc', item.desc);
      
      // Hover tooltip
      bar.addEventListener('mouseenter', showTooltip);
      bar.addEventListener('mouseleave', hideTooltip);
      
      chartArea.appendChild(bar);
    });
    
    ganttWrapper.appendChild(labelsCol);
    ganttWrapper.appendChild(chartArea);
    timeline.appendChild(ganttWrapper);
    
    // Render time axis
    renderTimeAxis();
  }
  
  function showTooltip(e) {
    hideTooltip();
    const bar = e.currentTarget;
    const desc = bar.getAttribute('data-desc');
    const name = bar.querySelector('.cv-bar-text').textContent;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'cv-gantt-tooltip';
    tooltip.innerHTML = `<strong>${name}</strong><br>${desc}`;
    document.body.appendChild(tooltip);
    
    const rect = bar.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 50}px`;
    tooltip.style.transform = 'translateX(-50%)';
    
    setTimeout(() => tooltip.classList.add('visible'), 10);
  }
  
  function hideTooltip() {
    document.querySelectorAll('.cv-gantt-tooltip').forEach(t => t.remove());
  }
  
  function renderTimeAxis() {
    const axis = document.querySelector('.cv-timeline-axis');
    if (!axis) return;
    
    axis.innerHTML = '';
    axis.className = 'cv-gantt-axis';
    
    for (let y = config.startYear; y <= config.endYear; y++) {
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
    document.querySelectorAll('.cv-gantt-bar, .cv-gantt-label').forEach(el => {
      const itemType = el.className.match(/cv-(work|education|personal|achievement)/)?.[1];
      el.style.opacity = (type === 'all' || itemType === type) ? '1' : '0.25';
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
