// CV Timeline - Clean, Compact, Elegant Design
(function() {
  'use strict';
  
  // Timeline data - no duplicates
  const timelineData = [
    { type: 'work', name: 'HSBC', start: '2024-06', end: '2025-11', icon: '💼' },
    { type: 'work', name: 'KLIMAKA NGO', start: '2025-02', end: null, icon: '💼' },
    { type: 'work', name: 'Grid Dynamics', start: '2025-12', end: null, icon: '💼' },
    { type: 'education', name: 'Spanish B2', start: '2024-03', end: null, icon: '🇪🇸' },
    { type: 'education', name: 'PhD Research', start: '2025-06', end: null, icon: '🔬' },
    { type: 'personal', name: 'Calisthenics', start: '2022-01', end: null, icon: '🏋️' }
  ];
  
  const config = {
    startYear: 2022,
    endYear: 2026,
    itemHeight: 36,
    itemSpacing: 8
  };
  
  let currentZoom = 1; // 1 = years, 2 = months
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    const container = document.querySelector('.cv-timeline-container');
    if (!container) return;
    
    createControls(container);
    renderTimeline();
    setupListeners();
  }
  
  function createControls(container) {
    const controls = document.createElement('div');
    controls.className = 'cv-timeline-controls';
    controls.innerHTML = `
      <div class="cv-zoom-group">
        <button class="cv-zoom-btn" id="zoom-out" title="Years View">
          <span>Years</span>
        </button>
        <button class="cv-zoom-btn" id="zoom-in" title="Months View">
          <span>Months</span>
        </button>
      </div>
      <button class="cv-reset-btn" id="reset-view">Reset</button>
    `;
    
    const timeline = container.querySelector('.cv-timeline');
    if (timeline) {
      container.insertBefore(controls, timeline);
    }
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
  
  function dateToPosition(date) {
    const totalMonths = (config.endYear - config.startYear + 1) * 12;
    const startMonths = (config.startYear - 2022) * 12;
    const dateMonths = (date.year - 2022) * 12 + (date.month - 1);
    return ((dateMonths - startMonths) / totalMonths) * 100;
  }
  
  function formatDate(date) {
    if (!date) return '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.month - 1]} ${date.year}`;
  }
  
  function calculatePositions() {
    const positions = [];
    const rows = [];
    
    timelineData.forEach((item, index) => {
      const startDate = parseDate(item.start);
      const endDate = item.end ? parseDate(item.end) : getCurrentDate();
      if (!startDate) return;
      
      const left = Math.max(0, dateToPosition(startDate));
      const right = Math.min(100, dateToPosition(endDate));
      const width = Math.max(1, right - left);
      
      // Find non-overlapping row
      let row = 0;
      for (let r = 0; r < rows.length; r++) {
        const hasOverlap = rows[r].some(existing => {
          const existingRight = existing.left + existing.width;
          return !(right <= existing.left || left >= existingRight);
        });
        if (!hasOverlap) {
          row = r;
          break;
        }
        row = r + 1;
      }
      
      if (!rows[row]) rows[row] = [];
      rows[row].push({ left, width, index });
      positions.push({ left, width, row, item, index });
    });
    
    return { positions, maxRow: rows.length - 1 };
  }
  
  function renderTimeline() {
    const timeline = document.querySelector('.cv-timeline');
    if (!timeline) return;
    
    const { positions, maxRow } = calculatePositions();
    
    // Clear existing
    timeline.innerHTML = '';
    
    // Create compact items
    positions.forEach(({ left, width, row, item, index }) => {
      const itemEl = document.createElement('div');
      itemEl.className = `cv-timeline-item cv-${item.type}`;
      itemEl.setAttribute('data-index', index);
      itemEl.style.top = `${row * (config.itemHeight + config.itemSpacing)}px`;
      
      const bar = document.createElement('div');
      bar.className = 'cv-timeline-bar';
      bar.style.left = `${left}%`;
      bar.style.width = `${width}%`;
      bar.style.zIndex = maxRow - row + 1;
      
      const startDate = parseDate(item.start);
      const endDate = item.end ? parseDate(item.end) : getCurrentDate();
      const dateStr = item.end 
        ? `${formatDate(startDate)} - ${formatDate(endDate)}`
        : `${formatDate(startDate)} - Present`;
      
      bar.innerHTML = `<span class="cv-bar-icon">${item.icon}</span><span class="cv-bar-text">${item.name}</span>`;
      bar.setAttribute('data-tooltip', `${item.name}\n${dateStr}`);
      
      itemEl.appendChild(bar);
      timeline.appendChild(itemEl);
    });
    
    // Update height
    timeline.style.height = `${(maxRow + 1) * (config.itemHeight + config.itemSpacing) + 20}px`;
    
    // Render axis
    renderAxis();
    
    // Re-attach listeners
    attachListeners();
  }
  
  function renderAxis() {
    const axis = document.querySelector('.cv-timeline-axis');
    if (!axis) return;
    
    axis.innerHTML = '';
    
    if (currentZoom === 1) {
      // Years view - compact
      axis.className = 'cv-timeline-axis cv-years';
      for (let year = config.startYear; year <= config.endYear; year++) {
        const el = document.createElement('div');
        el.className = 'cv-axis-label';
        el.textContent = year;
        el.setAttribute('data-year', year);
        axis.appendChild(el);
      }
    } else {
      // Months view
      axis.className = 'cv-timeline-axis cv-months';
      for (let year = config.startYear; year <= config.endYear; year++) {
        for (let month = 1; month <= 12; month++) {
          const el = document.createElement('div');
          el.className = 'cv-axis-label cv-month';
          const monthNames = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
          el.textContent = monthNames[month - 1];
          el.setAttribute('title', `${month}/${year}`);
          el.setAttribute('data-year', year);
          el.setAttribute('data-month', month);
          axis.appendChild(el);
        }
      }
    }
  }
  
  function attachListeners() {
    // Bar interactions
    document.querySelectorAll('.cv-timeline-bar').forEach(bar => {
      bar.addEventListener('mouseenter', showTooltip);
      bar.addEventListener('mouseleave', hideTooltip);
      bar.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.cv-timeline-item').forEach(item => {
          item.classList.remove('selected');
        });
        e.currentTarget.closest('.cv-timeline-item')?.classList.add('selected');
      });
    });
    
    // Axis clicks
    document.querySelectorAll('.cv-axis-label').forEach(label => {
      label.addEventListener('click', () => {
        const year = label.getAttribute('data-year');
        if (year) filterByYear(parseInt(year));
      });
    });
  }
  
  function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'cv-tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 45}px`;
    
    setTimeout(() => tooltip.classList.add('visible'), 10);
  }
  
  function hideTooltip() {
    document.querySelectorAll('.cv-tooltip').forEach(t => t.remove());
  }
  
  function setupListeners() {
    // Zoom buttons
    document.getElementById('zoom-in')?.addEventListener('click', () => {
      currentZoom = 2;
      updateZoomUI();
      renderTimeline();
    });
    
    document.getElementById('zoom-out')?.addEventListener('click', () => {
      currentZoom = 1;
      updateZoomUI();
      renderTimeline();
    });
    
    // Reset
    document.getElementById('reset-view')?.addEventListener('click', () => {
      currentZoom = 1;
      updateZoomUI();
      clearFilters();
      renderTimeline();
    });
    
    // Legend
    document.querySelectorAll('.cv-timeline-legend-item').forEach(item => {
      item.addEventListener('click', function() {
        const text = this.textContent.trim();
        let type = 'all';
        if (text.includes('Professional')) type = 'work';
        else if (text.includes('Education')) type = 'education';
        else if (text.includes('Fitness')) type = 'personal';
        filterByType(type);
      });
    });
    
    // Click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.cv-timeline-item')) {
        document.querySelectorAll('.cv-timeline-item').forEach(item => {
          item.classList.remove('selected');
        });
      }
    });
  }
  
  function updateZoomUI() {
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    
    if (zoomIn) zoomIn.classList.toggle('active', currentZoom === 2);
    if (zoomOut) zoomOut.classList.toggle('active', currentZoom === 1);
  }
  
  function filterByType(type) {
    document.querySelectorAll('.cv-timeline-item').forEach(item => {
      const itemType = item.className.includes('cv-work') ? 'work' :
                      item.className.includes('cv-education') ? 'education' : 'personal';
      if (type === 'all' || itemType === type) {
        item.style.opacity = '1';
      } else {
        item.style.opacity = '0.2';
      }
    });
  }
  
  function filterByYear(year) {
    document.querySelectorAll('.cv-timeline-item').forEach(item => {
      const index = parseInt(item.getAttribute('data-index'));
      const data = timelineData[index];
      if (!data) return;
      
      const startDate = parseDate(data.start);
      const endDate = data.end ? parseDate(data.end) : getCurrentDate();
      const matches = startDate.year <= year && endDate.year >= year;
      
      item.style.opacity = matches ? '1' : '0.2';
    });
  }
  
  function clearFilters() {
    document.querySelectorAll('.cv-timeline-item').forEach(item => {
      item.style.opacity = '1';
    });
  }
})();
