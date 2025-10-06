<template>
  <div class="about-card">
    <div class="card-header">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-subtitle">{{ subtitle }}</p>
    </div>
    <ul class="card-list">
      <li v-for="item in items" :key="item"> {{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  items: Array
})
</script>

<style scoped>
.about-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.12);
}

.card-header {
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
}

.card-subtitle {
  font-size: 0.875rem;
  color: #64748b;
}

.card-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #334155;
}
.card-list li {
     border-left: #1e293b 2px solid;
     padding-left: 0.41rem;
     border-radius: 5px;
}
</style>
