---
title: 🏋️‍♂️ Calisthenics & Nutrition
layout: single
permalink: /calisthenics/
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_color: "#001f3f"
  overlay_filter: "0.5"
  overlay_image: /assets/images/calisthenics-header.png
excerpt: "Documenting my fitness journey, workout progress, and nutritional insights"
---

<!-- <div class="fitness-intro">
  <p>This section tracks my calisthenics journey, nutrition approaches, and overall fitness progression. Follow me on Instagram <a href="https://www.instagram.com/dimisthenics/" target="_blank">@dimisthenics</a> for more workout content.</p>

  <a href="https://www.instagram.com/dimisthenics/" target="_blank" class="btn btn--primary">Follow My Calisthenics Journey on Instagram</a>
</div> -->

<div class="fitness-intro glass-card">
  <div class="intro-header">
    <h2>My Fitness Journey</h2>
    <div class="fitness-icons">💪 🏃‍♂️ 🎯</div>
  </div>
  
  <p>This section tracks my calisthenics journey, nutrition approaches, and overall fitness progression.</p>
  
  <div class="social-connect">
    <span class="connect-text">Follow my journey</span>
    <a href="https://www.instagram.com/dimisthenics/" target="_blank" class="instagram-btn">
      <i class="fab fa-instagram"></i>
      @dimisthenics
    </a>
  </div>
</div>



<style>
/* Instagram Feed Responsive Fix */
* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
.fitness-intro {
            position: relative;
            max-width: 500px;
            width: 100%;
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 40px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .glass-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
            animation: shimmer 4s infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .intro-header {
            text-align: center;
            margin-bottom: 25px;
            position: relative;
            z-index: 1;
        }

        .intro-header h2 {
            color: #fff;
            font-size: 2.2em;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .fitness-icons {
            font-size: 1.5em;
            opacity: 0.8;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }

        .fitness-intro p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1em;
            line-height: 1.6;
            text-align: center;
            margin-bottom: 30px;
            position: relative;
            z-index: 1;
        }

        .social-connect {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            position: relative;
            z-index: 1;
        }

        .connect-text {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9em;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .instagram-btn {
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            color: white;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
        }

        .instagram-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .instagram-btn:hover::before {
            left: 100%;
        }

        .instagram-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .instagram-btn i {
            font-size: 1.2em;
        }

        /* Font Awesome fallback */
        .fab {
            display: inline-block;
            width: 1.2em;
            height: 1.2em;
            text-align: center;
        }

        .fab::before {
            content: "📸";
            font-size: 1em;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .glass-card {
                padding: 30px 20px;
            }
            
            .intro-header h2 {
                font-size: 1.8em;
            }
            
            .fitness-intro p {
                font-size: 1em;
            }
            
            .instagram-btn {
                padding: 12px 25px;
                font-size: 1em;
            }
        }

        /* Additional glassmorphism elements */
        .glass-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        }

        /* Floating elements for extra visual interest */
        .floating-element {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
            width: 20px;
            height: 20px;
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            width: 15px;
            height: 15px;
            top: 20%;
            right: 15%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            width: 25px;
            height: 25px;
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

.instagram-grid {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  box-sizing: border-box;
}
.instagram-post {
  width: 100%;
  max-width: 340px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 320px;
  box-sizing: border-box;
}
.instagram-embed-container {
  width: 100%;
  aspect-ratio: 1/1;
  min-height: 340px;
  max-height: 420px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.instagram-embed-container iframe {
  width: 100% !important;
  height: 100% !important;
  min-height: 340px;
  max-height: 420px;
  border: none;
  display: block;
}
@media (max-width: 900px) {
  .instagram-grid {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .instagram-post {
    width: 100%;
    min-width: 0;
    flex: 1 1 100%;
  }
}
</style>

## Instagram Feed {#instagram-feed}

<div class="instagram-feed">
  
  <div class="instagram-grid">
    <!-- Instagram Post 1 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DGtlycKsmB9/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DGtlycKsmB9/embed/captioned/cr=1&v=14&wp=540&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency></iframe>
        </div>
      </blockquote>
    </div>
    <!-- Instagram Post 2 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DGss-fkN4_x/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DGss-fkN4_x/embed/captioned/cr=1&v=14&wp=540&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency></iframe>
        </div>
      </blockquote>
    </div>
    <!-- Instagram Post 3 -->
    <div class="instagram-post">
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DFKocpts1JU/" data-instgrm-version="14" data-instgrm-width="100%">
        <div class="instagram-embed-container">
          <iframe src="https://www.instagram.com/p/DFKocpts1JU/embed/captioned/cr=1&v=14&wp=540&rd=https%3A%2F%2Fjimmyg1997.github.io" frameborder="0" scrolling="no" allowtransparency></iframe>
        </div>
      </blockquote>
    </div>
  </div>
</div>
<script async src="//www.instagram.com/embed.js"></script>

## Current Workout Plan {#current-workout-plan}
<div class="workout-plan">
  <h3 id="five-day-split">5-Day Split: Calisthenics + Legs</h3>
  <p>This is my current training plan focused on developing straight arm and bent arm strength, with a dedicated leg day.</p>
  
  <div class="workout-day" id="straight-arm">
    <h4 id="day-1-3-straight-arm">Day 1 & 3: Straight Arm</h4>
    <table class="workout-table">
      <thead>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps/Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Front Lever</td>
          <td>3</td>
          <td>8-15s</td>
        </tr>
        <tr>
          <td>Tuck Planche</td>
          <td>3</td>
          <td>8-15s</td>
        </tr>
        <tr>
          <td>Front Lever Pull</td>
          <td>3</td>
          <td>3-5</td>
        </tr>
        <tr>
          <td>L-Sit to Planche</td>
          <td>3</td>
          <td>3-5</td>
        </tr>
        <tr>
          <td>Arch Active Hang</td>
          <td>3</td>
          <td>3-5</td>
        </tr>
        <tr>
          <td>Dumbbell Planche Raise</td>
          <td>3</td>
          <td>8-12</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="workout-day" id="bent-arm">
    <h4 id="day-2-4-bent-arm">Day 2 & 4: Bent Arm</h4>
    <table class="workout-table">
      <thead>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Handstand Push-Up</td>
          <td>3</td>
          <td>3-6</td>
        </tr>
        <tr>
          <td>Pull-Up</td>
          <td>3</td>
          <td>3-6</td>
        </tr>
        <tr>
          <td>Parallel Bar Dip</td>
          <td>3</td>
          <td>8-12</td>
        </tr>
        <tr>
          <td>Front Lever Row</td>
          <td>3</td>
          <td>3-6</td>
        </tr>
        <tr>
          <td>Pseudo Planche Push-Up</td>
          <td>3</td>
          <td>6-10</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="workout-day" id="legs">
    <h4 id="day-5-legs">Day 5: Legs</h4>
    <table class="workout-table">
      <thead>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Squat</td>
          <td>3</td>
          <td>8-12</td>
        </tr>
        <tr>
          <td>Romanian Deadlift</td>
          <td>3</td>
          <td>10-15</td>
        </tr>
        <tr>
          <td>Split Squat</td>
          <td>2</td>
          <td>10-20</td>
        </tr>
        <tr>
          <td>Hamstring Curl</td>
          <td>3</td>
          <td>10-15</td>
        </tr>
        <tr>
          <td>Calf Raise</td>
          <td>3</td>
          <td>Max</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <p class="workout-note">I track my progress in <a href="https://docs.google.com/spreadsheets/d/1PN7sDG8riJvig4173k3wGKs76VvxjHXD9Dgv4ADtYXE/edit?gid=1432199206#gid=1432199206" target="_blank">this Google Sheets document</a>.</p>
</div>

## Fitness Journey Timeline {#fitness-journey-timeline}

<div class="timeline">
  <div class="timeline-item" id="advanced-skills">
    <div class="timeline-date">2025</div>
    <div class="timeline-content">
      <h3 id="advanced-skills-2025">Advanced Skills</h3>
      <p>Working on front lever pull-ups and planche progressions, with consistent training 5 days per week. Focus on straight arm strength and skill development.</p>
    </div>
  </div>

  <div class="timeline-item" id="intermediate-training">
    <div class="timeline-date">2024</div>
    <div class="timeline-content">
      <h3 id="intermediate-training-2024">Intermediate Training</h3>
      <p>Achieved first milestones on basics (weighted dips, weighted pull-ups, weighted chin-ups), 100% form of handstand hold (and handstand variations), first attemptos of weigthed muscle-ups. Increased training frequency to 4 days per week, and began focusing on more advanced calisthenics skills.</p>
    </div>
  </div>
  
  <div class="timeline-item" id="intermediate-training">
    <div class="timeline-date">2023</div>
    <div class="timeline-content">
      <h3 id="intermediate-training-2023">Intermediate Training</h3>
      <p>Achieved muscle-ups, front lever (fast enough) and handstand holds, mastered back lever </p>
    </div>
  </div>
  
  <div class="timeline-item" id="building-foundations">
    <div class="timeline-date">2022</div>
    <div class="timeline-content">
      <h3 id="building-foundations-2022">Building Foundations</h3>
      <p>Focused on mastering the basics: pull-ups, dips, push-ups, and core strength. Established consistent training routine of 3 days per week.</p>
    </div>
  </div>
  
</div>

## Featured Skills & Progress {#featured-skills-progress}

<div class="skills-grid">
  <div class="skill-item" id="planche">
    <h3 id="planche-progress">Planche</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 30%;">30%</div>
    </div>
    <p><b>Current status</b>: Advanced tuck planche, working towards straddle planche</p>
  </div>

  <div class="skill-item" id="front-lever-pull-up">
    <h3 id="front-lever-pull-up-progress">Front Lever</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 20%;">20%</div>
    </div>
    <p><b>Current status</b>: 3 reps with band for -18kg, False Grip</p>
  </div>
  
  <div class="skill-item" id="front-lever">
    <h3 id="front-lever-progress">Front Lever</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 100%;">100%</div>
    </div>
    <p><b>Current status</b>: Full front lever for at least 6 seconds</p>
  </div>

  <div class="skill-item" id="handstand">
    <h3 id="handstand-push-up-progress">Handstand Push-up</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 40%;">40%</div>
    </div>
    <p><b>Current status</b>: Push-up on parallettes (not touching the floor, wide grip, 3 reps), Push-ups on floor (touching the floor, wide grip, 3 reps) </p>
  </div>
  
  <div class="skill-item" id="handstand">
    <h3 id="handstand-progress">Handstand</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 100%;">100%</div>
    </div>
    <p><b>Current status</b>: Freestanding handstand for 60 sec</p>
  </div>

  <div class="skill-item" id="weighted-muscle-up">
    <h3 id="weighted-muscle-up-progress">Weighted Muscle-Up</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 40%;">40%</div>
    </div>
    <p><b>Current status</b>: 1RM for +16.25kg (form 4 out 10), 3RM for +12kg (form 6 out of 10). Working on the form.</p>
  </div>

  
  <div class="skill-item" id="muscle-up">
    <h3 id="muscle-up-progress">Muscle-Up</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 100%;">100%</div>
    </div>
    <p><b>Current status</b>: Almost Clean muscle-ups, working on consecutive repetitions. 10 reps</p>
  </div>


<div class="skill-item" id="weigthed-dip">
    <h3 id="weighted-dips-progress">Weighted Dips</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 40%;">40%</div>
    </div>
    <p><b>Current status</b>: Clean dips, working on progressive overload. 10 reps for +25kg</p>
  </div>


<div class="skill-item" id="weigthed-pull-up">
    <h3 id="weighted-pull-up-progress">Weighted Pull-Up</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 40%;">40%</div>
    </div>
    <p><b>Current status</b>: Clean pull-ups, working on progressive overload. 10 reps for +20kg</p>
  </div>


<!-- ## Workout Routines {#workout-routines} -->

<!-- <div class="routines-section">
  {% for routine in site.calisthenics %}
    {% if routine.type == "workout" %}
      <div class="routine-card">
        <h3 id="{{ routine.title | slugify }}"><a href="{{ routine.url }}">{{ routine.title }}</a></h3>
        <p class="routine-meta">{{ routine.difficulty }} | {{ routine.duration }} minutes | {{ routine.frequency }}</p>
        <p>{{ routine.excerpt | truncate: 150 }}</p>
        <a href="{{ routine.url }}" class="btn btn--primary btn--small">View Full Routine</a>
      </div>
    {% endif %}
  {% endfor %}
</div> -->

## Nutrition Tips & Meal Plans {#nutrition-tips-meal-plans}

<div class="nutrition-section">
  {% for post in site.calisthenics %}
    {% if post.type == "nutrition" %}
      <div class="nutrition-card">
        <h3 id="{{ post.title | slugify }}"><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | truncate: 150 }}</p>
        <a href="{{ post.url }}" class="btn btn--primary btn--small">Read More</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

<!-- ## Progress Photos {#progress-photos} -->

<!-- <div class="progress-gallery">
  {% for photo in site.data.fitness_progress %}
    <div class="progress-item">
      <div class="progress-date">{{ photo.date }}</div>
      <img src="{{ photo.image }}" alt="Progress photo {{ photo.date }}">
      <p>{{ photo.description }}</p>
    </div>
  {% endfor %}
</div>  -->