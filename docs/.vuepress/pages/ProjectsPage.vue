<template>
  <section class="projects-section">
    <ProjectsHeader />
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import projects from '../data/projects.json'
import ProjectsHeader from '../components/Projects/ProjectsHeader.vue'
import ProjectCard from '../components/Projects/ProjectCard.vue'
</script>

<style scoped>
.projects-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
  font-family: 'Inter', sans-serif;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
