---
title: "Contact Me"
layout: single
permalink: /contact/
author_profile: true
toc: false
header:
  overlay_color: "#0F0F0E"
  overlay_filter: "0.55"
  overlay_image: /assets/images/contact-header.jpg
excerpt: "Get in touch with me"
---

<div class="dg-contact" markdown="0">

<p class="dg-contact__intro">I'm always open to interesting conversations, collaboration opportunities, or questions about my work. Feel free to reach out using the form below or the links that follow.</p>

<section class="dg-contact__section" id="contact-form">
  <h2 class="dg-contact__heading">Contact form</h2>

  <div class="dg-contact__form-wrap">
    <form
      class="dg-contact__form"
      id="dg-contact-form"
      action="https://formspree.io/f/xqarllrb"
      method="POST"
    >
      <input type="hidden" name="_subject" value="New message from dimigeorgiou.github.io">
      <input type="hidden" name="_format" value="plain">
      <input type="hidden" name="_replyto" value="">
      <input type="text" name="_gotcha" class="dg-contact__honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">

      <div class="dg-contact__row">
        <div class="dg-contact__field">
          <label class="dg-contact__label" for="dg-contact-name">Full name <span aria-hidden="true">*</span></label>
          <input class="dg-contact__input" type="text" name="name" id="dg-contact-name" required autocomplete="name" placeholder="Enter your full name">
        </div>
        <div class="dg-contact__field">
          <label class="dg-contact__label" for="dg-contact-email">Email address <span aria-hidden="true">*</span></label>
          <input class="dg-contact__input" type="email" name="email" id="dg-contact-email" required autocomplete="email" placeholder="your.email@example.com">
        </div>
      </div>

      <div class="dg-contact__field">
        <label class="dg-contact__label" for="dg-contact-subject">Subject</label>
        <input class="dg-contact__input" type="text" name="subject" id="dg-contact-subject" autocomplete="off" placeholder="Brief description of your inquiry">
      </div>

      <div class="dg-contact__field">
        <label class="dg-contact__label" for="dg-contact-message-field">Message <span aria-hidden="true">*</span></label>
        <textarea class="dg-contact__textarea" name="message" id="dg-contact-message-field" rows="6" required placeholder="Please provide details about your inquiry, collaboration opportunity, or question…"></textarea>
      </div>

      <div class="dg-contact__actions">
        <button type="submit" class="dg-contact__submit" id="dg-contact-submit">
          <span id="dg-contact-submit-text">Send message</span>
        </button>
        <p class="dg-contact__note">I typically respond within 48 hours during weekdays.</p>
        <div id="dg-contact-message" class="dg-contact__message" aria-live="polite"></div>
      </div>
    </form>
  </div>
</section>

<section class="dg-contact__section" id="connect-on-social-media">
  <h2 class="dg-contact__heading">Connect on social media</h2>

  <ul class="dg-contact__social">
    <li>
      <a href="https://www.linkedin.com/in/dimitriosgeorgiou/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin" aria-hidden="true"></i>
        <span>LinkedIn</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/dimigeorgiou/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github" aria-hidden="true"></i>
        <span>GitHub</span>
      </a>
    </li>
    <li>
      <a href="mailto:dgeorgiou3@gmail.com">
        <i class="fas fa-envelope" aria-hidden="true"></i>
        <span>Email</span>
      </a>
    </li>
    <li>
      <a href="https://scholar.google.com/citations?user=whiGlXQAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-graduation-cap" aria-hidden="true"></i>
        <span>Google Scholar</span>
      </a>
    </li>
  </ul>
</section>

<section class="dg-contact__section" id="academic-professional-inquiries">
  <h2 class="dg-contact__heading">Academic &amp; professional inquiries</h2>

  <div class="dg-contact__callout">
    <p>For academic collaborations, speaking engagements, or professional opportunities, please email me directly at <a href="mailto:dgeorgiou3@gmail.com">dgeorgiou3@gmail.com</a> with a detailed description of your proposal.</p>
    <p><strong>Response time:</strong> I typically respond within 48 hours during weekdays. For urgent matters, please indicate this in your subject line.</p>
  </div>
</section>

</div>

<script src="{{ '/assets/js/contact-form.js' | relative_url }}"></script>
