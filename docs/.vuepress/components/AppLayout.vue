<template>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1 class="sidebar-title">Portfolio</h1>
        <p class="sidebar-subtitle">Developer Dashboard</p>
      </div>
      <nav class="sidebar-nav">
        <a 
          v-for="item in navigationItems" 
          :key="item.id"
          href="#" 
          class="nav-item"
          :class="{ active: currentPage === item.id }"
          @click.prevent="navigateTo(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>
    </aside>
    
    <main class="main-content">
      <div class="content-wrapper">
        <component :is="currentComponent" @navigate="handleNavigate" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import StackList from './StackList.vue'
import ProjectsList from './ProjectsList.vue'
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'
import DashboardHome from './DashboardHome.vue'

const currentPage = ref('dashboard')

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'Profile' },
  { id: 'contact', label: 'Contact' }
]

const currentComponent = computed(() => {
  switch (currentPage.value) {
    case 'dashboard':
      return DashboardHome
    case 'stack':
      return StackList
    case 'projects':
      return ProjectsList
    case 'about':
      return AboutSection
    case 'contact':
      return ContactSection
    default:
      return DashboardHome
  }
})

const navigateTo = (pageId) => {
  currentPage.value = pageId
}

const handleNavigate = (pageId) => {
  currentPage.value = pageId
}
</script>
