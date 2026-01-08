// CV Timeline Filter Functionality
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimelineFilters);
  } else {
    initTimelineFilters();
  }
  
  function initTimelineFilters() {
    const timelineContainer = document.querySelector('.cv-timeline-container');
    if (!timelineContainer) return;
    
    const timelineItems = document.querySelectorAll('.cv-timeline-item');
    if (timelineItems.length === 0) return;
    
    // Safely get URL parameters
    let urlParams = null;
    try {
      if (window.location && window.location.search) {
        urlParams = new URLSearchParams(window.location.search);
      }
    } catch (e) {
      console.warn('Could not parse URL parameters:', e);
    }
    
    // Get filter from URL or default to 'all'
    const filterType = urlParams ? (urlParams.get('type') || 'all') : 'all';
    const filterLabel = urlParams ? (urlParams.get('label') || 'all') : 'all';
    const filterYear = urlParams ? (urlParams.get('year') || 'all') : 'all';
    
    // Apply initial filters
    applyFilters(filterType, filterLabel, filterYear);
    
    // Make legend items clickable
    const legendItems = document.querySelectorAll('.cv-timeline-legend-item');
    legendItems.forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function() {
        const text = this.textContent.trim();
        let type = 'all';
        
        if (text.includes('Professional Work')) type = 'work';
        else if (text.includes('Education') || text.includes('Research')) type = 'education';
        else if (text.includes('Fitness')) type = 'personal';
        
        updateURLAndFilter(type, 'all', 'all');
      });
    });
    
    // Make timeline labels clickable
    timelineItems.forEach(item => {
      const label = item.querySelector('.cv-timeline-label');
      if (label) {
        label.style.cursor = 'pointer';
        label.addEventListener('click', function() {
          const itemLabel = item.getAttribute('data-label');
          const itemType = item.getAttribute('data-type');
          updateURLAndFilter(itemType, itemLabel, 'all');
        });
      }
    });
    
    // Make year labels clickable
    const yearLabels = document.querySelectorAll('.cv-timeline-year');
    yearLabels.forEach(year => {
      year.style.cursor = 'pointer';
      year.addEventListener('click', function() {
        const yearValue = this.textContent.trim();
        updateURLAndFilter('all', 'all', yearValue);
      });
    });
  }
  
  function applyFilters(type, label, year) {
    const timelineItems = document.querySelectorAll('.cv-timeline-item');
    
    timelineItems.forEach(item => {
      let show = true;
      
      // Filter by type
      if (type !== 'all') {
        const itemType = item.getAttribute('data-type');
        if (itemType !== type) show = false;
      }
      
      // Filter by label
      if (label !== 'all' && show) {
        const itemLabel = item.getAttribute('data-label');
        if (!itemLabel || !itemLabel.includes(label)) show = false;
      }
      
      // Filter by year
      if (year !== 'all' && show) {
        const itemLabel = item.getAttribute('data-label');
        if (!itemLabel || !itemLabel.includes(year)) show = false;
      }
      
      // Apply visibility
      if (show) {
        item.style.opacity = '1';
        item.style.pointerEvents = 'auto';
      } else {
        item.style.opacity = '0.3';
        item.style.pointerEvents = 'none';
      }
    });
  }
  
  function updateURLAndFilter(type, label, year) {
    // Build URL parameters safely
    const params = new URLSearchParams();
    if (type !== 'all') params.set('type', type);
    if (label !== 'all') params.set('label', label);
    if (year !== 'all') params.set('year', year);
    
    // Update URL without page reload
    const newURL = params.toString() 
      ? window.location.pathname + '?' + params.toString() + window.location.hash
      : window.location.pathname + window.location.hash;
    
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', newURL);
    }
    
    // Apply filters
    applyFilters(type, label, year);
  }
})();

