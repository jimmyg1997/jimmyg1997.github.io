// CV Timeline - Comprehensive Professional Timeline
(function() {
  'use strict';
  
  // Complete timeline data with all information
  const timelineData = [
    // Professional Work
    { 
      type: 'work', 
      name: 'Grid Dynamics', 
      description: 'Building ML/LLM models',
      start: '2025-12', 
      end: null, 
      icon: '🧠',
      status: 'active'
    },
    { 
      type: 'work', 
      name: 'KLIMAKA NGO', 
      description: 'Building LLM models',
      start: '2025-02', 
      end: null, 
      icon: '🧠',
      status: 'active'
    },
    { 
      type: 'work', 
      name: 'HSBC', 
      description: 'Building ML models',
      start: '2024-06', 
      end: '2025-11', 
      icon: '🧠',
      status: 'finished'
    },
    
    // Education & Research
    { 
      type: 'education', 
      name: 'PhD Research', 
      description: 'PhD research in healthcare data science @ Ionian Panepistimio',
      start: '2025-06', 
      end: null, 
      icon: '🔬',
      status: 'active'
    },
    { 
      type: 'education', 
      name: 'Spanish B2', 
      description: 'Pursuing B2 in Spanish',
      start: '2024-03', 
      end: null, 
      icon: '🇪🇸',
      status: 'active'
    },
    
    // Personal
    { 
      type: 'personal', 
      name: 'Calisthenics', 
      description: 'Calisthenics milestone training',
      start: '2022-01', 
      end: null, 
      icon: '🏋️',
      status: 'active'
    },
    
    // Achievements
    { 
      type: 'achievement', 
      name: 'EIT Health i-Days 2025', 
      description: '2nd Place (HygeIA)',
      start: '2025-11', 
      end: '2025-11', 
      icon: '🥈',
      status: 'finished'
    },
    { 
      type: 'achievement', 
      name: 'Brain ECoG Hackathon', 
      description: '1st Place Winner (69 teams, 404 participants)',
      start: '2025-09', 
      end: '2025-09', 
      icon: '🏆',
      status: 'finished'
    }
  ];
  
  const config = {
    startYear: 2022,
    endYear: 2026,
    itemHeight: 48,
    itemSpacing: 12,
    labelWidth: 180
  };
  
  let currentZoom = 1;
  let selectedIndex = null;
  
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
        <button class="cv-zoom-btn ${currentZoom === 1 ? 'active' : ''}" id="zoom-years">Years</button>
        <button class="cv-zoom-btn ${currentZoom === 2 ? 'active' : ''}" id="zoom-months">Months</button>
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
      const width = Math.max(2, right - left);
      
      // Find non-overlapping row
      let row = 0;
      for (let r = 0; r < rows.length; r++) {
        const hasOverlap = rows[r].some(existing => {
          const existingRight = existing.left + existing.width;
          return !(right <= existing.left + 1 || left >= existingRight - 1);
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
    
    timeline.innerHTML = '';
    
    // Create timeline items with labels
    positions.forEach(({ left, width, row, item, index }) => {
      const itemEl = document.createElement('div');
      itemEl.className = `cv-timeline-item cv-${item.type} ${selectedIndex === index ? 'selected' : ''}`;
      itemEl.setAttribute('data-index', index);
      itemEl.style.top = `${row * (config.itemHeight + config.itemSpacing)}px`;
      
      // Label on the left
      const label = document.createElement('div');
      label.className = 'cv-item-label';
      const startDate = parseDate(item.start);
      const endDate = item.end ? parseDate(item.end) : getCurrentDate();
      const dateStr = item.end && item.end === item.start
        ? formatDate(startDate)
        : item.end
        ? `${formatDate(startDate)} - ${formatDate(endDate)}`
        : `${formatDate(startDate)} - Present`;
      
      label.innerHTML = `
        <div class="cv-label-date">${dateStr}</div>
        <div class="cv-label-name">${item.icon} ${item.name}</div>
        <div class="cv-label-desc">${item.description}</div>
      `;
      itemEl.appendChild(label);
      
      // Bar on the right
      const bar = document.createElement('div');
      bar.className = 'cv-timeline-bar';
      bar.style.left = `${config.labelWidth + 20}px`;
      bar.style.width = `calc(100% - ${config.labelWidth + 40}px)`;
      bar.style.marginLeft = `${(left / 100) * (window.innerWidth - config.labelWidth - 60))}px`;
      bar.style.width = `${(width / 100) * (window.innerWidth - config.labelWidth - 60))}px`;
      
      // Bar container with percentage-based positioning
      const barContainer = document.createElement('div');
      barContainer.className = 'cv-bar-container';
      
      const actualBar = document.createElement('div');
      actualBar.className = 'cv-bar';
      actualBar.style.left = `${left}%`;
      actualBar.style.width = `${width}%`;
      actualBar.style.zIndex = maxRow - row + 1;
      actualBar.innerHTML = `<span class="cv-bar-content">${item.name}</span>`;
      
      const tooltipText = `${item.name}\n${item.description}\n${dateStr}`;
      actualBar.setAttribute('data-tooltip', tooltipText);
      
      barContainer.appendChild(actualBar);
      itemEl.appendChild(barContainer);
      
      timeline.appendChild(itemEl);
    });
    
    timeline.style.height = `${(maxRow + 1) * (config.itemHeight + config.itemSpacing) + 20}px`;
    
    renderAxis();
    attachListeners();
  }
  
  function renderAxis() {
    const axis = document.querySelector('.cv-timeline-axis');
    if (!axis) return;
    
    axis.innerHTML = '';
    axis.className = `cv-timeline-axis ${currentZoom === 1 ? 'cv-years' : 'cv-months'}`;
    
    if (currentZoom === 1) {
      for (let year = config.startYear; year <= config.endYear; year++) {
        const el = document.createElement('div');
        el.className = 'cv-axis-label';
        el.textContent = year;
        el.setAttribute('data-year', year);
        axis.appendChild(el);
      }
    } else {
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
    document.querySelectorAll('.cv-bar').forEach(bar => {
      bar.addEventListener('mouseenter', showTooltip);
      bar.addEventListener('mouseleave', hideTooltip);
      bar.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = e.target.closest('.cv-timeline-item');
        if (item) {
          document.querySelectorAll('.cv-timeline-item').forEach(i => i.classList.remove('selected'));
          item.classList.add('selected');
          selectedIndex = parseInt(item.getAttribute('data-index'));
        }
      });
    });
    
    document.querySelectorAll('.cv-axis-label').forEach(label => {
      label.addEventListener('click', () => {
        const year = label.getAttribute('data-year');
        if (year) filterByYear(parseInt(year));
      });
    });
  }
  
  function showTooltip(e) {
    hideTooltip();
    const tooltip = document.createElement('div');
    tooltip.className = 'cv-tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 50}px`;
    
    setTimeout(() => tooltip.classList.add('visible'), 10);
  }
  
  function hideTooltip() {
    document.querySelectorAll('.cv-tooltip').forEach(t => t.remove());
  }
  
  function setupListeners() {
    document.getElementById('zoom-years')?.addEventListener('click', () => {
      currentZoom = 1;
      updateZoomUI();
      renderTimeline();
    });
    
    document.getElementById('zoom-months')?.addEventListener('click', () => {
      currentZoom = 2;
      updateZoomUI();
      renderTimeline();
    });
    
    document.getElementById('reset-view')?.addEventListener('click', () => {
      currentZoom = 1;
      selectedIndex = null;
      updateZoomUI();
      clearFilters();
      renderTimeline();
    });
    
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
    
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.cv-timeline-item')) {
        document.querySelectorAll('.cv-timeline-item').forEach(item => {
          item.classList.remove('selected');
        });
        selectedIndex = null;
      }
    });
  }
  
  function updateZoomUI() {
    document.getElementById('zoom-years')?.classList.toggle('active', currentZoom === 1);
    document.getElementById('zoom-months')?.classList.toggle('active', currentZoom === 2);
  }
  
  function filterByType(type) {
    document.querySelectorAll('.cv-timeline-item').forEach(item => {
      const itemType = item.className.match(/cv-(work|education|personal|achievement)/)?.[1];
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
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      renderTimeline();
    }, 250);
  });
})();
