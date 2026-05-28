---
title: "Gift Wishlist"
layout: single
permalink: /wishlist/
author_profile: true
toc: true
toc_sticky: true
toc_label: "On This Page"
toc_icon: "gift"
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/wishlist-header.jpg
excerpt: "A list of things I'd enjoy receiving as gifts"
---

<div class="wishlist-intro">
  <p>This page is for friends and family who are looking for gift ideas. These are things I'd enjoy receiving but wouldn't necessarily buy for myself. The list is organized by category and price range to help you find something that fits your budget.</p>
  <p><strong>Last updated:</strong> {{ site.time | date: "%B %d, %Y" }}</p>
</div>

<style>
.wishlist-intro {
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.wishlist-footer {
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
}

.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.25rem 0 1.5rem 0;
}

.wishlist-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.wishlist-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: #2563eb;
}

.wishlist-card.bought {
  opacity: 0.6;
}

.wishlist-card.bought::after {
  content: '✓ Bought';
  position: absolute;
  top: 10px;
  right: 10px;
  background: #10b981;
  color: white;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.6875rem;
  font-weight: 600;
}

.wishlist-image {
  width: 100%;
  height: 170px;
  object-fit: contain;
  background: #f9fafb;
  padding: 0.75rem;
}

.wishlist-content {
  padding: 0.875rem;
}

.wishlist-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.4375rem 0;
  line-height: 1.3;
}

.wishlist-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625rem;
}

.wishlist-price {
  background: #eff6ff;
  color: #2563eb;
  padding: 3px 8px;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 600;
}

.wishlist-date {
  font-size: 0.6875rem;
  color: #9ca3af;
}

.wishlist-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4375rem;
  width: 100%;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white !important;
  text-align: center;
  padding: 0.5625rem;
  border-radius: 7px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8125rem;
  transition: all 0.2s ease;
  white-space: nowrap;
  direction: ltr;
}

.wishlist-link:hover {
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  color: white !important;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin: 1.75rem 0 0.875rem 0;
  padding-bottom: 0.625rem;
  border-bottom: 2px solid #e5e7eb;
}

.category-icon {
  font-size: 1.3125rem;
}

.category-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

@media (max-width: 768px) {
  .wishlist-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 0.875rem;
  }
}
</style>

{% assign categories = "books,tech,fitness,travel,content_creation,clothing,creative,experiences,donations" | split: "," %}
{% assign category_names = "Books,Tech & Gadgets,Fitness Equipment,Travel,Content Creation,Clothing & Accessories,Creative & Art,Experiences,Donations" | split: "," %}
{% assign category_icons = "📚,💻,🏋️,✈️,📹,👕,🎨,🎭,💝" | split: "," %}

{% assign max_index = categories.size | minus: 1 %}
{% for cat in (0..max_index ) %}
  {% assign cat_key = categories[cat] %}
  {% assign cat_name = category_names[cat] %}
  {% assign cat_icon = category_icons[cat] %}
  {% assign items = site.data.wishlist | where: "category", cat_key %}
  {% if items.size > 0 %}
  <div class="category-header" id="{{ cat_key }}">
    <span class="category-icon">{{ cat_icon }}</span>
    <h2 class="category-title" id="{{ cat_key }}-title">{{ cat_name }}</h2>
  </div>

  <div class="wishlist-grid">
    {% for item in items %}
    <div class="wishlist-card{% if item.bought %} bought{% endif %}" id="{{ item.name | slugify }}">
      {% if item.image %}
        <img src="{{ item.image }}" alt="{{ item.name }}" class="wishlist-image">
      {% else %}
        <div class="wishlist-image" style="display: flex; align-items: center; justify-content: center; color: #9ca3af; font-size: 3rem;">{{ cat_icon }}</div>
      {% endif %}
      <div class="wishlist-content">
        <h3 class="wishlist-name" id="{{ item.name | slugify }}-title">{{ item.name }}</h3>
        <div class="wishlist-meta">
          <span class="wishlist-price">{{ item.price_range }}</span>
          <span class="wishlist-date">{{ item.date_added | default: "—" }}</span>
        </div>
        {% if item.link and item.link != "" and item.link != "#" %}
          <a href="{{ item.link }}" target="_blank" class="wishlist-link" rel="noopener noreferrer">View Product</a>
        {% else %}
          <div class="wishlist-link wishlist-link-disabled" style="background: #9ca3af; cursor: not-allowed;">No Link Available</div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
{% endfor %}

<div class="wishlist-footer">
  <p>Don't see anything that inspires you? A thoughtful card or spending quality time together is always appreciated!</p>
</div> 