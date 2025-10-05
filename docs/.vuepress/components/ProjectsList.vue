<template>
  <div class="projects-content">
    <header class="page-header">
      <h1 class="page-title">Project Showcase</h1>
      <p class="page-subtitle">Click on any project to view detailed information</p>
    </header>
    
    <div class="projects-grid">
      <div 
        v-for="project in projects" 
        :key="project.slug" 
        class="project-card"
        @click="goToProject(project.slug)"
      >
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tech">
          <span v-for="tech in project.tech" :key="tech" class="tech-badge">
            {{ tech }}
          </span>
        </div>
        <div class="project-links" @click.stop>
          <a v-if="project.live" :href="project.live" target="_blank" rel="noopener" class="project-link">
            Live Demo
          </a>
          <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener" class="project-link">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from '../data/projects.json'

const goToProject = (slug) => {
  window.location.href = `/projects/${slug}.html`
}
</script>