---
title: "Gift Wishlist"
layout: single
permalink: /wishlist/
author_profile: true
toc: true
toc_sticky: true
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

## Books

<div class="wishlist-section">
  {% for item in site.data.wishlist %}
    {% if item.category == "books" %}
      <div class="wishlist-item">
        <h3>{{ item.name }}</h3>
        <p class="price-range">{{ item.price_range }}</p>
        <p>{{ item.description }}</p>
        {% if item.link %}
          <a href="{{ item.link }}" class="btn btn--primary btn--small" target="_blank">View Item</a>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>

## Tech & Gadgets

<div class="wishlist-section">
  {% for item in site.data.wishlist %}
    {% if item.category == "tech" %}
      <div class="wishlist-item">
        <h3>{{ item.name }}</h3>
        <p class="price-range">{{ item.price_range }}</p>
        <p>{{ item.description }}</p>
        {% if item.link %}
          <a href="{{ item.link }}" class="btn btn--primary btn--small" target="_blank">View Item</a>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>

## Fitness Equipment

<div class="wishlist-section">
  {% for item in site.data.wishlist %}
    {% if item.category == "fitness" %}
      <div class="wishlist-item">
        <h3>{{ item.name }}</h3>
        <p class="price-range">{{ item.price_range }}</p>
        <p>{{ item.description }}</p>
        {% if item.link %}
          <a href="{{ item.link }}" class="btn btn--primary btn--small" target="_blank">View Item</a>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>

## Clothing & Accessories

<div class="wishlist-section">
  {% for item in site.data.wishlist %}
    {% if item.category == "clothing" %}
      <div class="wishlist-item">
        <h3>{{ item.name }}</h3>
        <p class="price-range">{{ item.price_range }}</p>
        <p>{{ item.description }}</p>
        {% if item.link %}
          <a href="{{ item.link }}" class="btn btn--primary btn--small" target="_blank">View Item</a>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>

## Experiences

<div class="wishlist-section">
  {% for item in site.data.wishlist %}
    {% if item.category == "experiences" %}
      <div class="wishlist-item">
        <h3>{{ item.name }}</h3>
        <p class="price-range">{{ item.price_range }}</p>
        <p>{{ item.description }}</p>
        {% if item.link %}
          <a href="{{ item.link }}" class="btn btn--primary btn--small" target="_blank">View Item</a>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>

## Donations

<div class="wishlist-section">
  <p>If you'd prefer to make a donation in my name, here are some organizations I support:</p>
  {% for item in site.data.wishlist %}
    {% if item.category == "donations" %}
      <div class="wishlist-item">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        {% if item.link %}
          <a href="{{ item.link }}" class="btn btn--primary btn--small" target="_blank">View Organization</a>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>

---

<div class="wishlist-footer">
  <p>Don't see anything that inspires you? A thoughtful card or spending quality time together is always appreciated!</p>
</div> 