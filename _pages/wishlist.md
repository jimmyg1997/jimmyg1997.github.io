---
title: "Gift Wishlist"
layout: single
permalink: /wishlist/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "
#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/wishlist-header.jpg
excerpt: "A list of things I'd enjoy receiving as gifts"
---

<div class="wishlist-intro">
  <p>This page is for friends and family who are looking for gift ideas. These are things I'd enjoy receiving but wouldn't necessarily buy for myself. The list is organized by category and price range to help you find something that fits your budget.</p>
  <p><strong>Last updated:</strong> {{ site.time | date: "%B %d, %Y" }}</p>
</div>


<style>
.wishlist-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}
.wishlist-table th, .wishlist-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
  vertical-align: middle;
}
.wishlist-table th {
  background-color: #f5f5f5;
}
.wishlist-table img {
  max-width: 50px;
  max-height: 50px;
  object-fit: contain;
}
.wishlist-table td a {
  text-decoration: none;
}
@media (max-width: 768px) {
  .wishlist-table td, .wishlist-table th {
    font-size: 0.9rem;
    padding: 0.3rem;
  }
}
</style>
{% assign categories = "books,tech,fitness,clothing,experiences,donations" | split: "," %}
{% assign category_names = "Books,Tech & Gadgets,Fitness Equipment,Clothing & Accessories,Experiences,Donations" | split: "," %}

{% for cat in (0..categories.size) %}
  {% assign cat_key = categories[cat] %}
  {% assign cat_name = category_names[cat] %}
  {% assign items = site.data.wishlist | where: "category", cat_key %}
  {% if items.size > 0 %}
  ## {{ cat_name }}

  <table class="wishlist-table">
    <thead>
      <tr>
        <th>✔</th>
        <th>Image</th>
        <th>Item</th>
        <th>Price</th>
        <th>Link</th>
        <th>Added</th>
        <th>Bought</th>
      </tr>
    </thead>
    <tbody>
      {% for item in items %}
      <tr>
        <td>{% if item.bought %}✅{% else %}⬜{% endif %}</td>
        <td>
          {% if item.image %}
            <img src="{{ item.image }}" alt="{{ item.name }}">
          {% else %}
            –
          {% endif %}
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price_range }}</td>
        <td>
          {% if item.link %}
            <a href="{{ item.link }}" target="_blank">🔗</a>
          {% else %}
            –
          {% endif %}
        </td>
        <td>{{ item.date_added | default: "—" }}</td>
        <td>{{ item.date_bought | default: "—" }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
  {% endif %}
{% endfor %}

---





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