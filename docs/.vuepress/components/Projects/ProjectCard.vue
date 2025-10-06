<template>
  <div class="project-card" @click="goToProject">
    <div class="card-header">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
    </div>

    <div class="project-tech">
      <span v-for="tech in project.tech" :key="tech" class="tech-badge">
        {{ tech }}
      </span>
    </div>

    <div class="project-links" @click.stop>
      <a v-if="project.live" :href="project.live" target="_blank" class="project-link">🌐 Live Demo</a>
      <a v-if="project.repo" :href="project.repo" target="_blank" class="project-link">💻 GitHub</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})


</script>

<style scoped>
.project-card {
  background: linear-gradient(145deg, #ffffff, #eceef0);
  border-radius: 1rem;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}


.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
}

.project-description {
  font-size: 1rem;
  color: #475569;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: #e2e8f0;
  color: #1e293b;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  font-size: 0.9rem;
  color: #2563eb;
  font-weight: 600;
}


</style>
