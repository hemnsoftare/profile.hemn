<template>
  <section class="stack-section">
    <!-- Header -->
    <HeaderSkills />

    <!-- Stack Rows -->
    <StackRows
      :stackData="stackData"
      :selectedTech="selectedTech"
      @select-tech="selectedTech = $event"
    />

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import stackData from '../data/skills.json'
import HeaderSkills from '../components/skills/HeaderSkills.vue'
import StackRows from '../components/skills/StackRows.vue'

const selectedTech = ref('')

const filteredProjects = computed(() => {
  if (!selectedTech.value) return []
  return projectsData.filter(project =>
    project.tech.some(tech =>
      tech.toLowerCase().includes(selectedTech.value.toLowerCase())
    )
  )
})

const goToProject = (slug) => {
  window.location.href = `/projects/${slug}.html`
}
</script>
