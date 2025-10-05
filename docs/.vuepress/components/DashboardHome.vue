<template>
  <div class="dashboard-content">
    <header class="page-header">
      <h1 class="page-title">Developer Dashboard</h1>
      <p class="page-subtitle">Full-Stack Developer passionate about modern web technologies</p>
    </header>
    
    <!-- Stats Section -->
    <div class="stats-section">
      <div class="home-stats">
        <div class="stat-card">
          <div class="stat-number">5+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">20+</div>
          <div class="stat-label">Projects Completed</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">10+</div>
          <div class="stat-label">Technologies</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="main-content-grid">
      <!-- Left Column -->
      <div class="left-column">
        <!-- About Me Card -->
        <div class="card about-card">
          <div class="card-header">
            <h2 class="card-title">About Me</h2>
            <p class="card-subtitle">Developer Profile</p>
          </div>
          <div class="about-content">
            <p>I'm a passionate Full-Stack Developer specializing in modern web technologies. I love crafting robust, scalable, and user-friendly applications from concept to deployment.</p>
          </div>
        </div>

        <!-- Quick Access Card -->
        <div class="card quick-access-card">
          <div class="card-header">
            <h2 class="card-title">Quick Access</h2>
            <p class="card-subtitle">Navigate to sections</p>
          </div>
          <div class="quick-links">
            <a href="#" @click.prevent="$emit('navigate', 'projects')" class="project-link">Projects</a>
            <a href="#" @click.prevent="$emit('navigate', 'stack')" class="project-link">Tech Stack</a>
            <a href="#" @click.prevent="$emit('navigate', 'about')" class="project-link">Profile</a>
            <a href="#" @click.prevent="$emit('navigate', 'contact')" class="project-link">Contact</a>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="right-column">
        <!-- Core Skills Card -->
        <div class="card skills-card">
          <div class="card-header">
            <h2 class="card-title">Core Skills</h2>
            <p class="card-subtitle">Technical expertise</p>
          </div>
          <ul class="highlights-list">
            <li>Vue.js & React development</li>
            <li>Node.js backend services</li>
            <li>Database optimization</li>
            <li>Cloud deployment strategies</li>
          </ul>
        </div>

        <!-- Achievements Card -->
        <div class="card achievements-card">
          <div class="card-header">
            <h2 class="card-title">Achievements</h2>
            <p class="card-subtitle">Key highlights</p>
          </div>
          <ul class="highlights-list">
            <li>5+ years of development experience</li>
            <li>20+ projects completed</li>
            <li>Modern tech stack expertise</li>
            <li>Performance optimization focus</li>
          </ul>
        </div>

        <!-- Recent Activity Card -->
        <div class="card activity-card">
          <div class="card-header">
            <h2 class="card-title">Recent Activity</h2>
            <p class="card-subtitle">Latest updates</p>
          </div>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon">🚀</div>
              <div class="activity-content">
                <div class="activity-title">New Project Launch</div>
                <div class="activity-description">TaskFlow v2.0 released</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">⚡</div>
              <div class="activity-content">
                <div class="activity-title">Performance Update</div>
                <div class="activity-description">InsightBoard optimized</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">🔧</div>
              <div class="activity-content">
                <div class="activity-title">Tech Stack Update</div>
                <div class="activity-description">Added Vue 3 support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['navigate'])
</script>
