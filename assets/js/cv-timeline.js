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
    { type: 'personal', name: 'Article Writing', desc: 'Writing articles on Substack & LinkedIn', start: '2026-01', end: null, icon: '✍️', link: '/articles/#new-year-reflection' },
    { type: 'personal', name: 'Finished "1984"', desc: 'Completed reading George Orwell\'s 1984', start: '2025-12', end: '2025-12', icon: '📚', link: '/personal/#1984' },
    { type: 'achievement', name: 'Brain ECoG Hackathon', desc: '1st Place Winner (69 teams, 404 participants)', start: '2025-09', end: '2025-09', icon: '🏆' },
    { type: 'achievement', name: 'EIT Health i-Days 2025', desc: '2nd Place (HygeIA)', start: '2025-11', end: '2025-11', icon: '🥈' }
  ];
  
  const config = {
    startYear: 2022,
    endYear: 2026,
    rowHeight: 60,
    labelWidth: 360,
    barHeight: 44,
    zoomLevel: 1.0,
    minZoom: 0.5,
    maxZoom: 3.0
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
      // Ensure minimum width for visibility, especially for single-month items
      const calculatedWidth = right - left;
      const width = Math.max(3, calculatedWidth); // Minimum 3% width for visibility
      
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
    const chartHeight = (maxRow + 1) * config.rowHeight + 80;
    
    // Create Gantt chart structure
    const ganttWrapper = document.createElement('div');
    ganttWrapper.className = 'cv-gantt-wrapper';
    ganttWrapper.style.height = `${chartHeight}px`;
    ganttWrapper.style.paddingLeft = `${config.labelWidth}px`;
    
    // Test: Verify layout calculations
    console.log('Gantt Chart Layout:', {
      totalItems: items.length,
      maxRow: maxRow,
      chartHeight: chartHeight,
      labelWidth: config.labelWidth,
      rowHeight: config.rowHeight
    });
    
    // Labels column
    const labelsCol = document.createElement('div');
    labelsCol.className = 'cv-gantt-labels';
    
    items.forEach(({ item, row, start, end }) => {
      const label = document.createElement('div');
      label.className = `cv-gantt-label cv-${item.type}`;
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
      
      // Set position and height
      const labelTop = row * config.rowHeight + 8;
      label.style.top = `${labelTop}px`;
      label.style.height = `${config.rowHeight}px`;
      
      labelsCol.appendChild(label);
    });
    
    // Chart area with zoom container
    const chartArea = document.createElement('div');
    chartArea.className = 'cv-gantt-chart';
    chartArea.style.height = `${chartHeight}px`;
    chartArea.style.borderTop = '2px solid rgba(0, 31, 63, 0.15)';
    chartArea.style.marginTop = '30px';
    chartArea.style.paddingTop = '10px';
    chartArea.style.position = 'relative';
    chartArea.style.overflow = 'auto';
    chartArea.style.cursor = 'grab';
    
    const zoomContainer = document.createElement('div');
    zoomContainer.className = 'cv-gantt-zoom-container';
    zoomContainer.style.transform = `scale(${config.zoomLevel})`;
    zoomContainer.style.transformOrigin = 'top left';
    zoomContainer.style.width = `${100 / config.zoomLevel}%`;
    zoomContainer.style.position = 'relative';
    zoomContainer.style.minHeight = `${chartHeight / config.zoomLevel}px`;
    
    // Year markers
    for (let y = config.startYear; y <= config.endYear; y++) {
      const marker = document.createElement('div');
      marker.className = 'cv-gantt-year-marker';
      marker.textContent = y;
      marker.style.left = `${((y - config.startYear) / (config.endYear - config.startYear)) * 100}%`;
      zoomContainer.appendChild(marker);
    }
    
    // Gantt bars
    items.forEach(({ item, left, width, row }) => {
      const bar = document.createElement('div');
      bar.className = `cv-gantt-bar cv-${item.type}`;
      bar.style.left = `${left}%`;
      bar.style.width = `${width}%`;
      bar.style.top = `${row * config.rowHeight + 8}px`;
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
      bar.setAttribute('data-name', item.name);
      
      // Make clickable if link exists
      if (item.link) {
        bar.setAttribute('data-has-link', 'true');
        bar.addEventListener('click', (e) => {
          e.stopPropagation();
          window.location.href = item.link;
        });
      }
      
      // Hover tooltip with full text
      bar.addEventListener('mouseenter', (e) => showTooltip(e, item));
      bar.addEventListener('mouseleave', hideTooltip);
      
      zoomContainer.appendChild(bar);
    });
    
    chartArea.appendChild(zoomContainer);
    
    ganttWrapper.appendChild(labelsCol);
    ganttWrapper.appendChild(chartArea);
    timeline.appendChild(ganttWrapper);
    
    // Add zoom controls
    setupZoom(chartArea, zoomContainer);
    
    // Test: Verify all elements are properly positioned
    setTimeout(() => {
      const allLabels = document.querySelectorAll('.cv-gantt-label');
      const allBars = document.querySelectorAll('.cv-gantt-bar');
      console.log('Layout Test:', {
        labelsCount: allLabels.length,
        barsCount: allBars.length,
        labelsMatch: allLabels.length === items.length,
        barsMatch: allBars.length === items.length
      });
      
      // Check for overlapping text
      allLabels.forEach((label, idx) => {
        const rect = label.getBoundingClientRect();
        const content = label.querySelector('.cv-label-content');
        if (content) {
          const contentRect = content.getBoundingClientRect();
          const name = label.querySelector('.cv-label-name');
          const badge = label.querySelector('.cv-label-badge');
          
          if (name && badge) {
            const nameRect = name.getBoundingClientRect();
            const badgeRect = badge.getBoundingClientRect();
            const overlap = nameRect.right > badgeRect.left;
            
            if (overlap) {
              console.warn(`Label ${idx} (${items[idx].item.name}): Text overlapping with badge`);
            }
          }
        }
      });
    }, 100);
    
    // Render time axis
    renderTimeAxis();
  }
  
  function showTooltip(e, item) {
    hideTooltip();
    const bar = e.currentTarget || e;
    const desc = item ? item.desc : bar.getAttribute('data-desc');
    const name = item ? item.name : bar.getAttribute('data-name');
    const dateStr = item ? formatDateRange(item) : '';
    const link = item ? item.link : null;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'cv-gantt-tooltip';
    let linkHtml = '';
    if (link) {
      linkHtml = `<div class="cv-tooltip-link"><a href="${link}" target="_blank">View Details →</a></div>`;
    }
    tooltip.innerHTML = `
      <div class="cv-tooltip-header">
        <span class="cv-tooltip-icon">${item ? item.icon : '📌'}</span>
        <strong>${name}</strong>
      </div>
      <div class="cv-tooltip-date">${dateStr}</div>
      <div class="cv-tooltip-desc">${desc}</div>
      ${linkHtml}
    `;
    document.body.appendChild(tooltip);
    
    const rect = bar.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
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
  
  function setupZoom(chartArea, zoomContainer) {
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    
    // Mouse wheel zoom (Ctrl/Cmd + scroll)
    chartArea.addEventListener('wheel', (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        config.zoomLevel = Math.max(config.minZoom, Math.min(config.maxZoom, config.zoomLevel + delta));
        zoomContainer.style.transform = `scale(${config.zoomLevel})`;
        zoomContainer.style.width = `${100 / config.zoomLevel}%`;
        const currentHeight = chartArea.offsetHeight;
        zoomContainer.style.minHeight = `${currentHeight / config.zoomLevel}px`;
      }
    }, { passive: false });
    
    // Drag to pan
    chartArea.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        isDragging = true;
        chartArea.style.cursor = 'grabbing';
        startX = e.pageX - chartArea.offsetLeft;
        scrollLeft = chartArea.scrollLeft;
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - chartArea.offsetLeft;
      const walk = (x - startX) * 2;
      chartArea.scrollLeft = scrollLeft - walk;
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
      chartArea.style.cursor = 'grab';
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    chartArea.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].pageX - chartArea.offsetLeft;
      scrollLeft = chartArea.scrollLeft;
    }, { passive: true });
    
    chartArea.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - chartArea.offsetLeft;
      const walk = (x - touchStartX) * 2;
      chartArea.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
