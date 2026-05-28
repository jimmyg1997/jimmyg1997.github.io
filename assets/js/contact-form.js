/**
 * Contact page — Formspree submit with inline feedback.
 */
(function () {
  'use strict';

  var form = document.getElementById('dg-contact-form');
  if (!form) return;

  var submitBtn = document.getElementById('dg-contact-submit');
  var submitText = document.getElementById('dg-contact-submit-text');
  var messageEl = document.getElementById('dg-contact-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitText.textContent = 'Sending…';
    messageEl.innerHTML = '';
    messageEl.className = 'dg-contact__message';

    var formData = new FormData(form);
    var emailField = document.getElementById('dg-contact-email');
    if (emailField && emailField.value) {
      formData.set('_replyto', emailField.value);
      formData.set('email', emailField.value);
    }

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          messageEl.innerHTML =
            '<div class="dg-contact__alert dg-contact__alert--success" role="status">' +
            '<i class="fas fa-check-circle" aria-hidden="true"></i>' +
            '<span>Thank you — your message was sent. I will reply as soon as I can.</span></div>';
          form.reset();
          return;
        }
        return response.json().then(function (data) {
          throw new Error(data.error || 'Something went wrong. Please try again.');
        });
      })
      .catch(function (error) {
        messageEl.innerHTML =
          '<div class="dg-contact__alert dg-contact__alert--error" role="alert">' +
          '<i class="fas fa-exclamation-circle" aria-hidden="true"></i>' +
          '<span>' + error.message + '</span></div>';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitText.textContent = 'Send message';
      });
  });
})();
