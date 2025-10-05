<template>
  <div class="project-detail-content">
    <header class="page-header">
      <h1 class="page-title">{{ project?.title || 'Project Details' }}</h1>
      <p class="page-subtitle">{{ project?.description || 'Detailed project information' }}</p>
    </header>
    
    <div v-if="project" class="project-detail">
      <div class="project-overview card">
        <div class="card-header">
          <h2 class="card-title">Project Overview</h2>
        </div>
        <p>{{ project.details?.overview || project.description }}</p>
      </div>
      
      <div v-if="project.details?.features?.length" class="project-features card">
        <div class="card-header">
          <h2 class="card-title">Key Features</h2>
        </div>
        <ul class="features-list">
          <li v-for="feature in project.details.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
      
      <div v-if="project.details?.challenges?.length" class="project-challenges card">
        <div class="card-header">
          <h2 class="card-title">Challenges</h2>
        </div>
        <ul class="challenges-list">
          <li v-for="challenge in project.details.challenges" :key="challenge">{{ challenge }}</li>
        </ul>
      </div>
      
      <div v-if="project.details?.results" class="project-results card">
        <div class="card-header">
          <h2 class="card-title">Results</h2>
        </div>
        <p>{{ project.details.results }}</p>
      </div>
      
      <div class="project-tech-stack card">
        <div class="card-header">
          <h2 class="card-title">Technology Stack</h2>
        </div>
        <div class="tech-badges">
          <span v-for="tech in project.tech" :key="tech" class="tech-badge">
            {{ tech }}
          </span>
        </div>
      </div>
      
      <div class="project-links card">
        <div class="card-header">
          <h2 class="card-title">Project Links</h2>
        </div>
        <div class="project-links-grid">
          <a v-if="project.live" :href="project.live" target="_blank" rel="noopener" class="project-link">
            Live Demo
          </a>
          <a v-if="project.repo" :href="project.repo" target="_blank"  class="project-link">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
    
    <div v-else class="card text-center">
      <h2 class="card-title">Project Not Found</h2>
      <p>The requested project could not be found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import projectsData from '../data/projects.json'

const project = ref(null)

onMounted(() => {
  // Get slug from URL path
  const path = window.location.pathname
  const slug = path.split('/').pop()?.replace('.html', '')
  project.value = projectsData.find(p => p.slug === slug)
})
</script>
