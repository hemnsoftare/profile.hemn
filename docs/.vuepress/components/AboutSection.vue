<template>
  <div class="about-content">
    <header class="page-header">
      <h1 class="page-title">Developer Profile</h1>
      <p class="page-subtitle">My background, experience, and passion for development</p>
    </header>
    
    <div class="about-intro">
      <p>{{ data.intro }}</p>
    </div>
    
    <div class="grid grid-2">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Achievements</h2>
          <p class="card-subtitle">Key highlights and accomplishments</p>
        </div>
        <ul class="highlights-list">
          <li v-for="highlight in data.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </div>
      
      <div v-if="data.experience?.length" class="card">
        <div class="card-header">
          <h2 class="card-title">Experience</h2>
          <p class="card-subtitle">Professional background</p>
        </div>
        <ul class="experience-list">
          <li v-for="exp in data.experience" :key="exp">{{ exp }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '../data/about.json'
</script>