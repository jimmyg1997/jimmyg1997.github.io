/**
 * Shared carousel for publication / project galleries on /publications/
 */
(function () {
  'use strict';

  var galleries = {};

  function getValidImages(images) {
    return images
      .map(function (img, i) {
        return { img: img, i: i };
      })
      .filter(function (entry) {
        return entry.img && entry.img.complete && entry.img.naturalHeight !== 0;
      });
  }

  function show(galleryId, index) {
    var g = galleries[galleryId];
    if (!g) return;
    g.images.forEach(function (img, i) {
      if (!img) return;
      var active = i === index;
      img.classList.toggle('active', active);
      img.style.display = active ? 'block' : 'none';
    });
    g.dots.forEach(function (dot, i) {
      if (dot) dot.classList.toggle('active', i === index);
    });
    g.current = index;
  }

  function change(galleryId, direction) {
    var g = galleries[galleryId];
    if (!g) return;
    var valid = getValidImages(g.images);
    if (!valid.length) return;
    var pos = valid.findIndex(function (entry) {
      return entry.i === g.current;
    });
    if (pos < 0) pos = 0;
    var next = pos + direction;
    if (next >= valid.length) next = 0;
    if (next < 0) next = valid.length - 1;
    show(galleryId, valid[next].i);
  }

  function go(galleryId, index) {
    var g = galleries[galleryId];
    if (!g || !g.images[index]) return;
    if (g.images[index].complete && g.images[index].naturalHeight !== 0) {
      show(galleryId, index);
    }
  }

  function initGallery(galleryId) {
    var container = document.getElementById(galleryId);
    if (!container) return;

    var images = Array.from(container.querySelectorAll('.project-image'));
    var dots = Array.from(container.querySelectorAll('.dot'));
    var first = 0;
    for (var i = 0; i < images.length; i++) {
      if (images[i].classList.contains('active')) {
        first = i;
        break;
      }
    }

    galleries[galleryId] = { images: images, dots: dots, current: first };

    images.forEach(function (img) {
      img.addEventListener('error', function () {
        this.style.display = 'none';
      });
      if (img.complete && img.naturalHeight === 0) {
        img.style.display = 'none';
      }
    });

    function reveal() {
      show(galleryId, first);
    }

    if (images.every(function (img) {
      return img.complete;
    })) {
      reveal();
    } else {
      images.forEach(function (img) {
        img.addEventListener('load', reveal, { once: true });
      });
      setTimeout(reveal, 150);
    }
  }

  window.PubGallery = {
    change: change,
    go: go,
    init: initGallery
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.gallery-container[id]').forEach(function (el) {
      initGallery(el.id);
    });
  });
})();
