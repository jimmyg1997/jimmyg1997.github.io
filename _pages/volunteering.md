---
title: Volunteering
layout: single
permalink: /volunteering/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/volunteering-header.jpg
excerpt: "Making a difference through community service and youth leadership"
---

<div class="volunteering-intro">
  <p>This section documents my volunteering journey, from local community initiatives to international youth exchanges. Each experience has contributed to my personal growth and reinforced my commitment to making a positive impact in the world.</p>
</div>

<style>
/* Card Grid Layout */
.timeline {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}
@media (max-width: 900px) {
  .timeline {
    grid-template-columns: 1fr;
  }
}
.timeline-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s;
  position: relative;
}
.timeline-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.timeline-date {
  font-size: 0.95em;
  color: #888;
  margin-bottom: 0.5em;
}
.timeline-image {
  width: 100%;
  max-width: 320px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin: 1rem 0;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  transition: transform 0.15s;
}
.timeline-image:hover {
  transform: scale(1.04);
}
.expand-link, .collapse-link {
  color: #0074D9;
  cursor: pointer;
  font-weight: bold;
  margin-left: 0.5em;
}
.expand-link:hover, .collapse-link:hover {
  text-decoration: underline;
}

/* Modal Styles */
#image-modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0; top: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.7);
  align-items: center;
  justify-content: center;
}
#image-modal.active {
  display: flex;
}
#image-modal img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.25);
}
#image-modal .close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 10001;
}
</style>

<div id="image-modal">
  <span class="close-btn" onclick="closeImageModal()">&times;</span>
  <img id="modal-img" src="" alt="Popup image">
</div>
<script>
function openImageModal(src, alt) {
  document.getElementById('modal-img').src = src;
  document.getElementById('modal-img').alt = alt;
  document.getElementById('image-modal').classList.add('active');
}
function closeImageModal() {
  document.getElementById('image-modal').classList.remove('active');
  document.getElementById('modal-img').src = '';
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('image-modal').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('close-btn')) closeImageModal();
  });
});
</script>

## Volunteering Timeline {#volunteering-timeline}

<div class="timeline">
  <!-- 2025 -->
  <div class="timeline-item" id="wheeling2help-vietnam">
    <div class="timeline-content">
      <div class="timeline-date">April 2025</div>
      <h3 id="wheeling2help-vietnam-2025">Volunteer - Wheeling2help NGO</h3>
      <p class="timeline-summary">
        Volunteered with Wheeling2help in Da Bia, Vietnam, focusing on community development. Collaborating with the Muong ethnic community, I contributed to improving infrastructure at the local kindergarten...
        <span class="expand-link" onclick="this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='block';">Expand</span>
      </p>
      <p class="timeline-details" style="display:none;">
        Volunteered with Wheeling2help in Da Bia, Vietnam, focusing on community development. Collaborating with the Muong ethnic community, I contributed to improving infrastructure at the local kindergarten and cultural centre, assisted in agricultural tasks, and participated in traditional art workshops. This immersive experience deepened my appreciation for cultural heritage preservation and reinforced my commitment to sustainable community empowerment.
        <span class="collapse-link" onclick="this.parentElement.style.display='none'; this.parentElement.previousElementSibling.style.display='block';">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/wheeling2help-vietnam.png" alt="Wheeling2help Vietnam" class="timeline-image" onclick="openImageModal(this.src, this.alt)">
    </div>
  </div>

  <!-- 2024 -->
  <div class="timeline-item" id="erasmus-2024">
    <div class="timeline-content">
      <div class="timeline-date">May - June 2024</div>
      <h3 id="erasmus-youth-exchange-2024">Team Lead - Erasmus+ Youth Exchange</h3>
      <p class="timeline-summary">
        Led the Greek team 🇬🇷 at the Erasmus+ Youth Exchange, «rECOnnect», held in Tatra Mountains, Murzasichle, Zakopane, Poland📍. Focused on environmental initiatives and youth leadership...
        <span class="expand-link" onclick="this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='block';">Expand</span>
      </p>
      <p class="timeline-details" style="display:none;">
        Led the Greek team 🇬🇷 at the Erasmus+ Youth Exchange, «rECOnnect», held in Tatra Mountains, Murzasichle, Zakopane, Poland📍. Focused on environmental initiatives and youth leadership development.
        <span class="collapse-link" onclick="this.parentElement.style.display='none'; this.parentElement.previousElementSibling.style.display='block';">Collapse</span>
      </p>
      <img src="../assets/images/volunteering/reconnect.png" alt="Erasmus+ Youth Exchange" class="timeline-image" onclick="openImageModal(this.src, this.alt)">
    </div>
  </div>

  <div class="timeline-item" id="wheeling2help-nepal">
    <div class="timeline-content">
      <div class="timeline-date">May 2024</div>
      <h3 id="wheeling2help-nepal-2024">Volunteer - Wheeling2help NGO</h3>
      <p>Volunteered with Wheeling2help in Nepal, focusing on community empowerment through environmental conservation, sports development, and educational support initiatives.</p>
      <img src="../assets/images/volunteering/wheeling2help-nepal.png" alt="Wheeling2help Nepal" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="wheeling2help-kenya">
    <div class="timeline-content">
      <div class="timeline-date">January 2024</div>
      <h3 id="wheeling2help-kenya-2024">Volunteer - Wheeling2help NGO</h3>
      <p>Volunteered with Wheeling2help in Kenya, working on environmental conservation, sports development, and education initiatives for sustainable community impact.</p>
      <img src="../assets/images/volunteering/wheeling2help-kenya.png" alt="Wheeling2help Kenya" class="timeline-image">
    </div>
  </div>

  <!-- 2021-2023 -->
  <div class="timeline-item" id="cognihub">
    <div class="timeline-content">
      <div class="timeline-date">January 2021 - October 2023</div>
      <h3 id="cognihub-marketing">Marketing Coordinator - CogniHub</h3>
      <p>Led marketing initiatives for CogniHub, an interdisciplinary non-profit student organization promoting interdisciplinarity through events, talks, and workshops.</p>
      <img src="../assets/images/volunteering/cognihub.png" alt="CogniHub" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="citycampus">
    <div class="timeline-content">
      <div class="timeline-date">January - November 2021</div>
      <h3 id="citycampus-rd">Research And Development Specialist - citycampus.gr</h3>
      <p>Conducted competitive research and analyzed statistics using Python, Google Analytics, and SimilarWeb to improve educational platform performance.</p>
      <img src="../assets/images/volunteering/citycampus.png" alt="CityCampus" class="timeline-image">
    </div>
  </div>

  <!-- 2018 -->
  <div class="timeline-item" id="web-summit">
    <div class="timeline-content">
      <div class="timeline-date">November 2018</div>
      <h3 id="web-summit-volunteer">Student Volunteer - Web Summit</h3>
      <p>Member of the Media Team at the world's largest tech conference in Lisbon, Portugal, assisting in interview booths and press conferences.</p>
      <img src="../assets/images/volunteering/websummit.png" alt="Web Summit" class="timeline-image">
    </div>
  </div>

  <!-- 2017-2018 -->
  <div class="timeline-item" id="cansat">
    <div class="timeline-content">
      <div class="timeline-date">September 2017 - April 2018</div>
      <h3 id="cansat-greece">Contact Person Volunteer - CanSat in Greece</h3>
      <p>Responsible for supporting one of ten participating school teams with programming and information-related challenges throughout the 8-month program.</p>
      <img src="../assets/images/volunteering/cansat.png" alt="CanSat" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="job-fair">
    <div class="timeline-content">
      <div class="timeline-date">November 2017 - April 2018</div>
      <h3 id="job-fair-athens">Main Event Projects Volunteer - Job Fair Athens</h3>
      <p>Organized panels, speeches, and sessions on various topics including Technology and Life failures during the two-day event.</p>
      <img src="../assets/images/volunteering/job-fair.png" alt="Job Fair Athens" class="timeline-image">
    </div>
  </div>

  <!-- 2017 -->
  <div class="timeline-item" id="business-week">
    <div class="timeline-content">
      <div class="timeline-date">March 2018</div>
      <h3 id="business-week-2018">Interaction Volunteer - Business Week 2018</h3>
      <p>Represented the Career's office at The American College of Greece, promoting the internship program of Deree College.</p>
      <img src="../assets/images/volunteering/business-week.png" alt="Business Week" class="timeline-image">
    </div>
  </div>

  <div class="timeline-item" id="tedx">
    <div class="timeline-content">
      <div class="timeline-date">May 2017</div>
      <h3 id="tedx-athens">Registration & Ticketing Volunteer - TEDxAthens</h3>
      <p>Managed registration and ticketing operations for the TEDxAthens event.</p>
      <img src="../assets/images/volunteering/tedx.png" alt="TEDxAthens" class="timeline-image">
    </div>
  </div>

  <!-- 2016 -->
  <div class="timeline-item" id="arduino">
    <div class="timeline-content">
      <div class="timeline-date">December 2016</div>
      <h3 id="arduino-workshop">Arduino Workshops Organizer - IEEE NTUA Student Branch</h3>
      <p>Organized and conducted a 4-day Arduino workshop for students.</p>
      <img src="../assets/images/volunteering/arduino.png" alt="Arduino Workshop" class="timeline-image">
    </div>
  </div>

  <!-- 2011-2017 -->
  <div class="timeline-item" id="mun">
    <div class="timeline-content">
      <div class="timeline-date">March 2011 - May 2017</div>
      <h3 id="model-united-nations">Delegate - Model United Nations</h3>
      <p>Participated in various MUN conferences representing different countries and committees:</p>
      <ul>
        <li>Costeas-Geitonas School MUN 2011 - Delegate of Bosnia Herzegovina</li>
        <li>Platon School MUN 2012 - Delegate of Guatemala</li>
        <li>Deutsche Schule Athens MUN 2012 - Delegate of U.S.A</li>
        <li>Costeas-Geitonas School MUN 2012 - Ambassador of Sierra Leone</li>
        <li>Platon School MUN 2013 - Ambassador of Azerbaijan</li>
        <li>Athens MUN 2013 - Ambassador of Chile</li>
        <li>Platon School MUN 2014 - Delegate of China</li>
        <li>Thessaloniki International Student MUN 2016 - Ambassador of Democratic Republic of Congo</li>
      </ul>
      <img src="../assets/images/volunteering/mun.png" alt="Model United Nations" class="timeline-image">
    </div>
  </div>
</div> 