/**
 * Articles page: sort by date, read modal, stats
 */
(function () {
  'use strict';

  var MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };

  function parseArticleSortKey(card) {
    var explicit = card.getAttribute('data-sort');
    if (explicit) return parseInt(explicit, 10);
    var dateEl = card.querySelector('.article-date');
    if (!dateEl) return 0;
    var parts = dateEl.textContent.trim().toLowerCase().split(/\s+/);
    if (parts.length < 2) return 0;
    var month = MONTHS[parts[0]] || 0;
    var year = parseInt(parts[1], 10) || 0;
    return year * 100 + month;
  }

  function sortArticlesGrid() {
    var grid = document.getElementById('articlesGrid');
    if (!grid) return;
    var cards = Array.from(grid.querySelectorAll('.article-card'));
    cards.sort(function (a, b) {
      return parseArticleSortKey(b) - parseArticleSortKey(a);
    });
    cards.forEach(function (card) {
      grid.appendChild(card);
    });
  }

  function updateStats() {
    var grid = document.getElementById('articlesGrid');
    if (!grid) return;
    var cards = grid.querySelectorAll('.article-card:not(.hidden)');
    var count = cards.length;
    var topics = new Set();
    var totalMin = 0;
    cards.forEach(function (card) {
      (card.getAttribute('data-tags') || '').split(/\s+/).forEach(function (t) {
        if (t) topics.add(t);
      });
      var rt = card.querySelector('.article-read-time');
      if (rt) {
        var m = rt.textContent.match(/(\d+)/);
        if (m) totalMin += parseInt(m[1], 10);
      }
    });
    var elCount = document.getElementById('articlesStatCount');
    var elTopics = document.getElementById('articlesStatTopics');
    var elReadNum = document.getElementById('articlesStatReadNum');
    if (elCount) elCount.textContent = String(count);
    if (elTopics) elTopics.textContent = String(topics.size);
    if (elReadNum) elReadNum.textContent = String(totalMin);
  }

  function openArticleModal(articleId) {
    var modal = document.getElementById('articleModal');
    var card = document.querySelector('.article-card[data-article-id="' + articleId + '"]');
    var content = document.getElementById('article-content-' + articleId);
    if (!modal || !card || !content) return;

    if (typeof stopSpeech === 'function') stopSpeech();

    var titleEl = modal.querySelector('.article-modal-title');
    var bodyEl = modal.querySelector('.article-modal-body');
    var actionsEl = modal.querySelector('.article-modal-actions');
    var cardActions = card.querySelector('.article-actions-compact');
    var cardLinks = card.querySelector('.article-links');

    if (titleEl) titleEl.textContent = (card.querySelector('.article-title') || {}).textContent || '';
    if (bodyEl) {
      bodyEl.innerHTML = content.innerHTML;
      bodyEl.classList.remove('article-content-collapsed');
    }
    if (actionsEl && cardActions) {
      actionsEl.innerHTML = cardActions.innerHTML;
      var speechBtn = actionsEl.querySelector('.speech-btn-small');
      if (speechBtn) {
        speechBtn.setAttribute('onclick', "toggleSpeech('" + articleId + "')");
      }
    }
    var linksSlot = modal.querySelector('.article-modal-links');
    if (linksSlot && cardLinks) linksSlot.innerHTML = cardLinks.innerHTML;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('article-modal-open');
    modal.dataset.articleId = articleId;
  }

  function closeArticleModal() {
    var modal = document.getElementById('articleModal');
    if (!modal) return;
    if (typeof stopSpeech === 'function') stopSpeech();
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('article-modal-open');
    delete modal.dataset.articleId;
  }

  window.openArticleModal = openArticleModal;
  window.closeArticleModal = closeArticleModal;

  document.addEventListener('DOMContentLoaded', function () {
    sortArticlesGrid();
    updateStats();

    var modal = document.getElementById('articleModal');
    if (modal) {
      modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
        el.addEventListener('click', closeArticleModal);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeArticleModal();
      });
    }

    document.querySelectorAll('.expand-btn').forEach(function (btn) {
      var id = (btn.getAttribute('onclick') || '').match(/toggleExpand\('([^']+)'\)/);
      if (id) {
        btn.removeAttribute('onclick');
        btn.addEventListener('click', function () {
          openArticleModal(id[1]);
        });
        var label = btn.querySelector('span:last-child');
        if (label) label.textContent = 'Read Article';
      }
    });

    var filterButtons = document.querySelectorAll('.articles-filter .filter-btn');
    if (filterButtons.length) {
      filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          setTimeout(updateStats, 0);
        });
      });
    }
  });
})();
