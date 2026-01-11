// CV Timeline Interactive Functionality with Zoom, Months, and Overlap Handling
(function() {
  'use strict';
  
  // Timeline data with proper date parsing
  const timelineData = [
    { type: 'work', label: 'HSBC', start: '2024-06', end: '2025-11', name: 'HSBC' },
    { type: 'work', label: 'KLIMAKA NGO', start: '2025-02', end: null, name: 'KLIMAKA NGO' },
    { type: 'work', label: 'Grid Dynamics', start: '2025-12', end: null, name: 'Grid Dynamics' },
    { type: 'education', label: 'Spanish B2', start: '2024-03', end: null, name: 'Spanish B2' },
    { type: 'education', label: 'PhD Research', start: '2025-06', end: null, name: 'PhD Research' },
    { type: 'personal', label: 'Calisthenics', start: '2022-01', end: null, name: 'Calisthenics' }
  ];
  
  // Timeline configuration
  const config = {
    startYear: 2022,
    endYear: 2026,
    zoomLevel: 1, // 1 = years, 2 = months
    minZoom: 1,
    maxZoom: 2,
    itemHeight: 56,
    itemSpacing: 2,
    containerPadding: 20
  };
  
  let currentZoom = config.zoomLevel;
  let selectedItem = null;
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimeline);
  } else {
    initTimeline();
  }
  
  function initTimeline() {
    const timelineContainer = document.querySelector('.cv-timeline-container');
    if (!timelineContainer) return;
    
    // Create zoom controls
    createZoomControls(timelineContainer);
    
    // Initialize timeline
    renderTimeline();
    
    // Setup event listeners
    setupEventListeners();
    
    // Apply initial filters from URL
    applyFiltersFromURL();
  }
  
  function createZoomControls(container) {
    const controls = document.createElement('div');
    controls.className = 'cv-timeline-controls';
    controls.innerHTML = `
      <div class="cv-zoom-controls">
        <button class="cv-zoom-btn" id="zoom-out" title="Zoom Out (Years)" aria-label="Zoom Out">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <span class="cv-zoom-level" id="zoom-level">Years</span>
        <button class="cv-zoom-btn" id="zoom-in" title="Zoom In (Months)" aria-label="Zoom In">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <button class="cv-reset-btn" id="reset-view" title="Reset View">Reset</button>
    `;
    
    const timeline = container.querySelector('.cv-timeline');
    if (timeline) {
      timeline.parentNode.insertBefore(controls, timeline);
    }
    
    // Zoom event listeners
    document.getElementById('zoom-in')?.addEventListener('click', () => zoomIn());
    document.getElementById('zoom-out')?.addEventListener('click', () => zoomOut());
    document.getElementById('reset-view')?.addEventListener('click', () => resetView());
  }
  
  function zoomIn() {
    if (currentZoom < config.maxZoom) {
      currentZoom++;
      updateZoomUI();
      renderTimeline();
    }
  }
  
  function zoomOut() {
    if (currentZoom > config.minZoom) {
      currentZoom--;
      updateZoomUI();
      renderTimeline();
    }
  }
  
  function resetView() {
    currentZoom = config.zoomLevel;
    selectedItem = null;
    updateZoomUI();
    renderTimeline();
    clearFilters();
  }
  
  function updateZoomUI() {
    const zoomLevel = document.getElementById('zoom-level');
    if (zoomLevel) {
      zoomLevel.textContent = currentZoom === 1 ? 'Years' : 'Months';
    }
    
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    
    if (zoomInBtn) zoomInBtn.disabled = currentZoom >= config.maxZoom;
    if (zoomOutBtn) zoomOutBtn.disabled = currentZoom <= config.minZoom;
  }
  
  function parseDate(dateStr) {
    if (!dateStr) return null;
    const [year, month] = dateStr.split('-').map(Number);
    return { year, month: month || 1 };
  }
  
  function dateToPosition(date, containerWidth) {
    const totalMonths = (config.endYear - config.startYear + 1) * 12;
    const startMonths = (config.startYear - 2022) * 12;
    const dateMonths = (date.year - 2022) * 12 + (date.month - 1);
    const position = ((dateMonths - startMonths) / totalMonths) * 100;
    return Math.max(0, Math.min(100, position));
  }
  
  function getCurrentDate() {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  }
  
  function calculateBarPositions() {
    const containerWidth = 100; // percentage
    const positions = [];
    const rows = [];
    
    timelineData.forEach((item, index) => {
      const startDate = parseDate(item.start);
      const endDate = item.end ? parseDate(item.end) : getCurrentDate();
      
      if (!startDate) return;
      
      const left = dateToPosition(startDate, containerWidth);
      const endPos = dateToPosition(endDate, containerWidth);
      const width = Math.max(2, endPos - left); // Minimum 2% width for visibility
      
      // Find a row where this bar doesn't overlap
      let row = 0;
      for (let r = 0; r < rows.length; r++) {
        const overlaps = rows[r].some(existing => {
          const existingLeft = existing.left;
          const existingRight = existing.left + existing.width;
          const newRight = left + width;
          // Add small buffer to prevent touching bars
          return !(newRight <= existingLeft + 0.5 || left >= existingRight - 0.5);
        });
        
        if (!overlaps) {
          row = r;
          break;
        }
        row = r + 1;
      }
      
      if (!rows[row]) rows[row] = [];
      rows[row].push({ left, width, item, index });
      
      positions.push({ left, width, row, item, index });
    });
    
    return { positions, maxRow: rows.length - 1 };
  }
  
  function renderTimeline() {
    const timeline = document.querySelector('.cv-timeline');
    if (!timeline) return;
    
    const { positions, maxRow } = calculateBarPositions();
    
    // Clear existing items
    const existingItems = timeline.querySelectorAll('.cv-timeline-item');
    existingItems.forEach(item => item.remove());
    
    // Create items with proper positioning
    positions.forEach(({ left, width, row, item, index }) => {
      const itemEl = document.createElement('div');
      itemEl.className = `cv-timeline-item ${selectedItem === index ? 'selected' : ''}`;
      itemEl.setAttribute('data-type', item.type);
      itemEl.setAttribute('data-label', item.label);
      itemEl.setAttribute('data-index', index);
      itemEl.style.top = `${row * (config.itemHeight + config.itemSpacing)}px`;
      
      const bar = document.createElement('div');
      bar.className = 'cv-timeline-bar';
      bar.style.left = `${left}%`;
      bar.style.width = `${width}%`;
      bar.style.zIndex = maxRow - row + 1;
      
      const label = document.createElement('span');
      label.className = 'cv-timeline-bar-label';
      const icon = item.type === 'work' ? '💼' : item.type === 'education' ? '🔬' : '🏋️';
      label.textContent = `${icon} ${item.name}`;
      
      bar.appendChild(label);
      itemEl.appendChild(bar);
      
      const textLabel = document.createElement('div');
      textLabel.className = 'cv-timeline-label';
      textLabel.textContent = item.name;
      itemEl.appendChild(textLabel);
      
      // Add tooltip with date range
      const startDate = parseDate(item.start);
      const endDate = item.end ? parseDate(item.end) : getCurrentDate();
      const dateStr = item.end
        ? `${formatDate(startDate)} - ${formatDate(endDate)}`
        : `${formatDate(startDate)} - Present`;
      
      bar.setAttribute('title', `${item.name}\n${dateStr}`);
      bar.setAttribute('data-tooltip', `${item.name}: ${dateStr}`);
      
      timeline.appendChild(itemEl);
    });
    
    // Update axis
    renderAxis();
    
    // Update timeline height
    timeline.style.minHeight = `${(maxRow + 1) * (config.itemHeight + config.itemSpacing) + 40}px`;
    
    // Re-attach event listeners
    setupItemListeners();
  }
  
  function formatDate(date) {
    if (!date) return '';
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[date.month - 1]} ${date.year}`;
  }
  
  function renderAxis() {
    const axis = document.querySelector('.cv-timeline-axis');
    if (!axis) return;
    
    axis.innerHTML = '';
    
    if (currentZoom === 1) {
      // Show years
      axis.style.gridTemplateColumns = 'repeat(5, 1fr)';
      axis.removeAttribute('data-zoom');
      for (let year = config.startYear; year <= config.endYear; year++) {
        const yearEl = document.createElement('div');
        yearEl.className = 'cv-timeline-year';
        yearEl.textContent = year;
        yearEl.setAttribute('data-year', year);
        axis.appendChild(yearEl);
      }
    } else {
      // Show months
      const totalMonths = (config.endYear - config.startYear + 1) * 12;
      axis.style.gridTemplateColumns = `repeat(${totalMonths}, 1fr)`;
      axis.setAttribute('data-zoom', 'months');
      for (let year = config.startYear; year <= config.endYear; year++) {
        for (let month = 1; month <= 12; month++) {
          const monthEl = document.createElement('div');
          monthEl.className = 'cv-timeline-month';
          const monthNames = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
          monthEl.textContent = monthNames[month - 1];
          monthEl.setAttribute('title', `${month}/${year}`);
          monthEl.setAttribute('data-year', year);
          monthEl.setAttribute('data-month', month);
          axis.appendChild(monthEl);
        }
      }
    }
  }
  
  function setupItemListeners() {
    const items = document.querySelectorAll('.cv-timeline-item');
    const bars = document.querySelectorAll('.cv-timeline-bar');
    
    items.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        selectItem(index);
      });
      
      item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
        highlightOverlapping(item);
      });
      
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
        clearHighlights();
      });
    });
    
    bars.forEach(bar => {
      bar.addEventListener('mouseenter', showTooltip);
      bar.addEventListener('mouseleave', hideTooltip);
    });
  }
  
  function selectItem(index) {
    selectedItem = selectedItem === index ? null : index;
    renderTimeline();
  }
  
  function highlightOverlapping(item) {
    const itemRect = item.getBoundingClientRect();
    const itemLeft = parseFloat(item.querySelector('.cv-timeline-bar').style.left);
    const itemWidth = parseFloat(item.querySelector('.cv-timeline-bar').style.width);
    const itemRight = itemLeft + itemWidth;
    
    document.querySelectorAll('.cv-timeline-item').forEach(otherItem => {
      if (otherItem === item) return;
      
      const otherBar = otherItem.querySelector('.cv-timeline-bar');
      if (!otherBar) return;
      
      const otherLeft = parseFloat(otherBar.style.left);
      const otherWidth = parseFloat(otherBar.style.width);
      const otherRight = otherLeft + otherWidth;
      
      const overlaps = !(otherRight <= itemLeft || otherLeft >= itemRight);
      
      if (overlaps) {
        otherItem.classList.add('overlapping');
      }
    });
  }
  
  function clearHighlights() {
    document.querySelectorAll('.cv-timeline-item').forEach(item => {
      item.classList.remove('overlapping');
    });
  }
  
  function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'cv-tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip') || e.target.getAttribute('title');
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 40}px`;
    
    setTimeout(() => tooltip.classList.add('visible'), 10);
  }
  
  function hideTooltip() {
    const tooltip = document.querySelector('.cv-tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }
  
  function setupEventListeners() {
    // Legend items
    const legendItems = document.querySelectorAll('.cv-timeline-legend-item');
    legendItems.forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function() {
        const text = this.textContent.trim();
        let type = 'all';
        
        if (text.includes('Professional Work')) type = 'work';
        else if (text.includes('Education') || text.includes('Research')) type = 'education';
        else if (text.includes('Fitness')) type = 'personal';
        
        filterByType(type);
      });
    });
    
    // Year/Month axis clicks
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('cv-timeline-year') || 
          e.target.classList.contains('cv-timeline-month')) {
        const year = e.target.getAttribute('data-year');
        filterByYear(year);
      }
    });
    
    // Click outside to deselect
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.cv-timeline-item') && 
          !e.target.closest('.cv-timeline-controls')) {
        selectedItem = null;
        renderTimeline();
      }
    });
  }
  
  function filterByType(type) {
    const items = document.querySelectorAll('.cv-timeline-item');
    items.forEach(item => {
      const itemType = item.getAttribute('data-type');
      if (type === 'all' || itemType === type) {
        item.style.opacity = '1';
        item.style.pointerEvents = 'auto';
      } else {
        item.style.opacity = '0.25';
        item.style.pointerEvents = 'none';
      }
    });
  }
  
  function filterByYear(year) {
    const items = document.querySelectorAll('.cv-timeline-item');
    items.forEach(item => {
      const index = parseInt(item.getAttribute('data-index'));
      const data = timelineData[index];
      if (!data) return;
      
      const startDate = parseDate(data.start);
      const endDate = data.end ? parseDate(data.end) : getCurrentDate();
      const yearNum = parseInt(year);
      
      const matches = startDate.year <= yearNum && endDate.year >= yearNum;
      
      if (matches) {
        item.style.opacity = '1';
        item.style.pointerEvents = 'auto';
      } else {
        item.style.opacity = '0.25';
        item.style.pointerEvents = 'none';
      }
    });
  }
  
  function clearFilters() {
    const items = document.querySelectorAll('.cv-timeline-item');
    items.forEach(item => {
      item.style.opacity = '1';
      item.style.pointerEvents = 'auto';
    });
  }
  
  function applyFiltersFromURL() {
    let urlParams = null;
    try {
      if (window.location && window.location.search) {
        urlParams = new URLSearchParams(window.location.search);
      }
    } catch (e) {
      console.warn('Could not parse URL parameters:', e);
    }
    
    if (urlParams) {
      const type = urlParams.get('type');
      const year = urlParams.get('year');
      
      if (type) filterByType(type);
      if (year) filterByYear(parseInt(year));
    }
  }
})();
