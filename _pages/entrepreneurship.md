---
title: "Entrepreneurship"
layout: single
permalink: /entrepreneurship/
classes:
  - dg-page-entrepreneurship
author_profile: true
toc: true
toc_sticky: true
toc_label: "On This Page"
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/projects-header.png
excerpt: "Ventures at the intersection of AI, product, and real-world impact in Greece."
---

<div class="dg-entrepreneurship-intro">
  <p>I build products where machine learning meets everyday problems — from shared living in Greek cities to bystander CPR when every minute counts. These are active ventures I co-founded or lead as technical co-builder, not side demos.</p>
</div>

<div class="dg-entrepreneurship-stats">
  <div class="dg-entrepreneurship-stat">
    <span class="dg-entrepreneurship-stat__value">2</span>
    <span class="dg-entrepreneurship-stat__label">Active ventures</span>
  </div>
  <div class="dg-entrepreneurship-stat">
    <span class="dg-entrepreneurship-stat__value">Greece-first</span>
    <span class="dg-entrepreneurship-stat__label">Market focus</span>
  </div>
  <div class="dg-entrepreneurship-stat">
    <span class="dg-entrepreneurship-stat__value">AI + product</span>
    <span class="dg-entrepreneurship-stat__label">Core stack</span>
  </div>
</div>

## Active ventures {#active-ventures}

<div class="dg-entrepreneurship-grid">

<article class="dg-venture-card" id="roomatos">
  <header class="dg-venture-card__header">
    <div class="dg-venture-card__brand">
      <img src="/assets/images/entrepreneurship/roomatos-logo.jpg" alt="Roomatos" class="dg-venture-card__logo" width="120" height="40">
      <div>
        <h3 id="roomatos-heading">Roomatos</h3>
        <p class="dg-venture-card__tagline">AI-first roommate matching for Greece</p>
      </div>
    </div>
    <span class="dg-venture-card__status">Active · Co-founder</span>
  </header>

  <div class="dg-venture-card__meta">
    <span class="dg-venture-card__period">Sep 2025 — Present</span>
    <span class="dg-venture-card__market">B2C · roomatos.gr</span>
  </div>

  <p class="dg-venture-card__lead">Roomatos helps people find compatible roommates by lifestyle — not just rent and postcode. I co-founded the product and build the <strong>compatibility scoring and matching engine</strong> that powers Explore, Roomatch, and group household flows.</p>

  <div class="dg-venture-card__highlights">
    <h4 id="roomatos-shipped">What we shipped</h4>
    <ul>
      <li><strong>Weighted matching</strong> — location, budget, habits, and lifestyle signals with explainable pairwise scores for 1:1 and group applications</li>
      <li><strong>Full product surface</strong> — explore & filters, inbox, trainings with XP/badges, house groups, rent tracker, digital agreements</li>
      <li><strong>Monetization</strong> — Stripe premium, freemium Roomatch daily limits, bilingual Greek/English UX</li>
      <li><strong>Production platform</strong> — Next.js 15, Supabase (32+ tables, RLS), Vercel; GDPR audit and Playwright E2E</li>
    </ul>
  </div>

  <p class="dg-venture-card__stack"><b>Stack</b> Next.js · TypeScript · Supabase · Stripe · next-intl · TensorFlow.js (verification)</p>

  <div class="dg-venture-card__links">
    <a href="https://roomatos.gr" class="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">Visit roomatos.gr</a>
    <a href="https://roomatos.gr/en/about" class="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">About the team</a>
  </div>
</article>

<article class="dg-venture-card dg-venture-card--health" id="hygeia">
  <header class="dg-venture-card__header dg-venture-card__header--hygeia">
    <div class="dg-venture-card__brand dg-venture-card__brand--hygeia">
      <img src="/assets/images/entrepreneurship/hygeia-logo.png" alt="hygeIA" class="dg-venture-card__logo dg-venture-card__logo--hygeia" width="180" height="68">
      <div>
        <h3 id="hygeia-heading" class="dg-venture-card__sr-only">hygeIA</h3>
        <p class="dg-venture-card__tagline dg-venture-card__tagline--hygeia">The Uber of First Aid — workplace SOS · AI · compliance</p>
      </div>
    </div>
    <span class="dg-venture-card__status dg-venture-card__status--health">Active · Co-builder · Demo Day 2026</span>
  </header>

  <div class="dg-venture-card__meta">
    <span class="dg-venture-card__period">Jan 2026 — Present</span>
    <span class="dg-venture-card__market">B2B · Industry · Maritime · Education</span>
  </div>

  <p class="dg-venture-card__lead">hygeIA is an end-to-end workplace emergency platform for Greece — <strong>one SOS tap</strong> logs GPS, alerts the floor, occupational physician, and manager in under 10 seconds, then opens real-time Greek voice guidance through ERC 2025 protocols. Medical steps come only from a hardcoded protocol engine; Meltemi classifies voice intent and never generates clinical advice. Works offline in warehouses, basements, and at sea.</p>

  <p class="dg-venture-card__note">Co-built with Papageorgiou Vasiliki (MD) and Skreka Theodora (Occupational Health). Pitched at Archimedes Accelerator Demo Day (Athens, June 2026). Evolved from <a href="/personal/#eit-health-idays-2025-competition">EIT Health i-Days 2025</a> (2nd place nationwide).</p>

  <div class="dg-venture-card__highlights">
    <h4 id="hygeia-built">What we built</h4>
    <ul>
      <li><strong>SOS → response pipeline</strong> — one-tap emergency, push/SMS alerts, AI guide live in ~10s, admin EKAB dispatch with one tap, automatic accident log book</li>
      <li><strong>Greek AI assistant</strong> — Meltemi NLU with offline edge path; two-way voice so hands stay on the patient, not the screen</li>
      <li><strong>ERC 2025 real-time guidance</strong> — JSON state machine, voice confirmation, injury photo upload with AI triage assist</li>
      <li><strong>Compliance by design</strong> — Law 5239/2025 alignment, HSE admin dashboard, certification expiry alerts, PDF reports for inspections</li>
      <li><strong>High-risk verticals</strong> — factories &gt;250 staff, Piraeus shipping fleets (STCW + offline), private schools</li>
    </ul>
  </div>

  <p class="dg-venture-card__stack"><b>Stack</b> React Native · Expo · Meltemi 7B · Supabase · Zustand · ERC JSON state machine · expo-speech</p>

  <div class="dg-venture-card__media dg-venture-card__media--hygeia">
    <img src="/assets/images/projects/idays-2.jpeg" alt="hygeIA pitch slide — workplace emergency platform" class="dg-venture-card__media-img" width="560" height="315" loading="lazy">
    <p class="dg-venture-card__media-caption">Archimedes Demo Day 2026 · Athens</p>
  </div>

  <div class="dg-venture-card__links">
    <a href="https://github.com/dimigeorgiou/hygeIA" class="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="/personal/#eit-health-idays-2025-competition" class="btn btn--primary btn--small">i-Days competition</a>
  </div>
</article>

</div>

## How I work on ventures {#how-i-work}

<div class="dg-entrepreneurship-principles">
  <div class="dg-entrepreneurship-principle">
    <h4 id="problem-first">Problem first</h4>
    <p>Greek market constraints — language, regulation, trust, and infrastructure — shape every technical bet.</p>
  </div>
  <div class="dg-entrepreneurship-principle">
    <h4 id="safe-ai-boundaries">Safe AI boundaries</h4>
    <p>LLMs for understanding messy input; deterministic systems for anything high-stakes (matching rules, ERC protocols).</p>
  </div>
  <div class="dg-entrepreneurship-principle">
    <h4 id="ship-to-learn">Ship to learn</h4>
    <p>Production deployments, real users, and measurable outcomes — not slide-deck prototypes.</p>
  </div>
</div>
