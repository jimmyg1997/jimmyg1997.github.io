// Interactive Professional Timeline with Zoom & Details
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
  
  const config = {
    startYear: 2022,
    endYear: 2026,
    zoomLevel: 1, // 1 = years, 2 = months
    rowHeight: 56,
    labelWidth: 220
  };
  
  let selectedItem = null;
  let expandedItem = null;
  
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
    
    createControls(container);
    render();
    setupFilters();
  }
  
  function createControls(container) {
    const controls = document.createElement('div');
    controls.className = 'cv-timeline-controls';
    controls.innerHTML = `
      <div class="cv-zoom-controls">
        <button class="cv-zoom-btn ${config.zoomLevel === 1 ? 'active' : ''}" data-zoom="1">
          <span>Years</span>
        </button>
        <button class="cv-zoom-btn ${config.zoomLevel === 2 ? 'active' : ''}" data-zoom="2">
          <span>Months</span>
        </button>
      </div>
      <button class="cv-reset-btn" id="cv-reset">Reset View</button>
    `;
    
    const timeline = container.querySelector('.cv-timeline');
    if (timeline) {
      container.insertBefore(controls, timeline);
    }
    
    // Zoom controls
    controls.querySelectorAll('.cv-zoom-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        config.zoomLevel = parseInt(btn.getAttribute('data-zoom'));
        controls.querySelectorAll('.cv-zoom-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
      });
    });
    
    document.getElementById('cv-reset')?.addEventListener('click', () => {
      config.zoomLevel = 1;
      selectedItem = null;
      expandedItem = null;
      controls.querySelectorAll('.cv-zoom-btn').forEach(b => {
        b.classList.toggle('active', parseInt(b.getAttribute('data-zoom')) === 1);
      });
      clearFilters();
      render();
    });
  }
  
  function render() {
    const timeline = document.querySelector('.cv-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    const totalMonths = config.zoomLevel === 1 
      ? (config.endYear - config.startYear + 1) * 12
      : (config.endYear - config.startYear + 1) * 12;
    
    // Calculate positions
    const items = [];
    const rows = [];
    
    data.forEach((item, idx) => {
      const start = parseDate(item.start);
      const end = item.end ? parseDate(item.end) : getCurrent();
      if (!start) return;
      
      const startM = toMonths(start);
      const endM = toMonths(end);
      const left = toPercent(startM, totalMonths);
      const right = toPercent(endM, totalMonths);
      const width = Math.max(2, right - left);
      
      // Find row
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
    const timelineHeight = (maxRow + 1) * config.rowHeight + 60;
    
    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'cv-timeline-wrapper';
    wrapper.style.minHeight = `${timelineHeight}px`;
    wrapper.style.paddingLeft = `${config.labelWidth}px`;
    
    // Labels
    const labels = document.createElement('div');
    labels.className = 'cv-labels';
    
    items.forEach(({ item, row, start, end }) => {
      const label = document.createElement('div');
      label.className = `cv-label cv-${item.type}`;
      label.style.top = `${row * config.rowHeight + 15}px`;
      
      const dateStr = formatDateRange(item);
      const isExpanded = expandedItem === item.name;
      
      label.innerHTML = `
        <div class="cv-label-date">${dateStr}</div>
        <div class="cv-label-name">${item.icon} ${item.name}</div>
        ${isExpanded ? `<div class="cv-label-desc">${item.desc}</div>` : ''}
      `;
      
      labels.appendChild(label);
    });
    
    // Timeline bars container
    const barsContainer = document.createElement('div');
    barsContainer.className = 'cv-bars-container';
    barsContainer.style.height = `${timelineHeight}px`;
    barsContainer.style.borderTop = '3px solid rgba(0, 31, 63, 0.15)';
    barsContainer.style.marginTop = '25px';
    barsContainer.style.paddingTop = '15px';
    barsContainer.style.position = 'relative';
    
    // Year/Month markers
    if (config.zoomLevel === 1) {
      for (let y = config.startYear; y <= config.endYear; y++) {
        const marker = document.createElement('div');
        marker.className = 'cv-year-marker';
        marker.textContent = y;
        marker.style.left = `${((y - config.startYear) / (config.endYear - config.startYear)) * 100}%`;
        barsContainer.appendChild(marker);
      }
    } else {
      const monthLabels = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
      for (let y = config.startYear; y <= config.endYear; y++) {
        monthLabels.forEach((m, i) => {
          const marker = document.createElement('div');
          marker.className = 'cv-month-marker';
          marker.textContent = m;
          marker.title = `${monthLabels[i]} ${y}`;
          const monthsFromStart = (y - config.startYear) * 12 + i;
          marker.style.left = `${(monthsFromStart / totalMonths) * 100}%`;
          barsContainer.appendChild(marker);
        });
      }
    }
    
    // Bars
    items.forEach(({ item, left, width, row }) => {
      const bar = document.createElement('div');
      bar.className = `cv-timeline-bar cv-${item.type} ${selectedItem === item.name ? 'selected' : ''} ${expandedItem === item.name ? 'expanded' : ''}`;
      bar.style.left = `${left}%`;
      bar.style.width = `${width}%`;
      bar.style.top = `${row * config.rowHeight + 15}px`;
      bar.style.height = `${config.rowHeight - 10}px`;
      bar.style.zIndex = maxRow - row + 1;
      
      bar.innerHTML = `
        <div class="cv-bar-content">
          <span class="cv-bar-icon">${item.icon}</span>
          <span class="cv-bar-name">${item.name}</span>
        </div>
        <div class="cv-bar-details">${item.desc}</div>
      `;
      
      bar.setAttribute('data-item', item.name);
      bar.setAttribute('data-desc', item.desc);
      bar.setAttribute('data-date', formatDateRange(item));
      
      // Click to expand
      bar.addEventListener('click', (e) => {
        e.stopPropagation();
        if (expandedItem === item.name) {
          expandedItem = null;
        } else {
          expandedItem = item.name;
        }
        selectedItem = item.name;
        render();
      });
      
      barsContainer.appendChild(bar);
    });
    
    wrapper.appendChild(labels);
    wrapper.appendChild(barsContainer);
    timeline.appendChild(wrapper);
    
    // Click outside to deselect
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.cv-timeline-bar')) {
        selectedItem = null;
        expandedItem = null;
        render();
      }
    });
    
    renderAxis();
  }
  
  function renderAxis() {
    const axis = document.querySelector('.cv-timeline-axis');
    if (!axis) return;
    
    axis.innerHTML = '';
    axis.className = `cv-timeline-axis cv-zoom-${config.zoomLevel}`;
    
    if (config.zoomLevel === 1) {
      for (let y = config.startYear; y <= config.endYear; y++) {
        const el = document.createElement('div');
        el.className = 'cv-axis-year';
        el.textContent = y;
        axis.appendChild(el);
      }
    } else {
      const monthLabels = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
      for (let y = config.startYear; y <= config.endYear; y++) {
        monthLabels.forEach((m, i) => {
          const el = document.createElement('div');
          el.className = 'cv-axis-month';
          el.textContent = m;
          el.title = `${monthLabels[i]} ${y}`;
          axis.appendChild(el);
        });
      }
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
      el.style.opacity = (type === 'all' || itemType === type) ? '1' : '0.25';
    });
  }
  
  function clearFilters() {
    document.querySelectorAll('.cv-timeline-bar, .cv-label').forEach(el => {
      el.style.opacity = '1';
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
