<template>
  <div>
    <div v-for="group in stackData" :key="group.title" class="stack-row">
      <h3 class="row-title">{{ group.title }}</h3>
      <div class="tech-row">
        <div
          v-for="item in group.items"
          :key="item.name"
          class="tech-badge"
          @click="$emit('select-tech', item.name)"
          :class="{ selected: selectedTech === item.name }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  stackData: {
    type: Array,
    required: true
  },
  selectedTech: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.stack-row {
  margin-bottom: 2.5rem;
}

.row-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  padding-bottom: 4px;
  border-bottom: 4px solid #2563eb;
  padding-left: 0.75rem;
}

.tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: #f1f5f9;
  color: #1e293b;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}




</style>
