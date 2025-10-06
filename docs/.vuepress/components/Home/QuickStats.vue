<template>
  <section class="stats-section">
    <h3 class="stats-title">Quick Stats</h3>

    <div class="stats-grid">
      <div v-for="(stat, index) in stats" :key="index" class="stat-card">
        <h4 class="stat-text" v-html="stat.text"></h4>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { text: "Based in <strong>Halwer, Iraq</strong>" },
  { text: "Student @ Salahaddin University" },
  { text: "1+ years of Next.js & Full-Stack Development experience" },
  { text: "<strong>hemnfarhad14@gmail.com</strong>" },
];
</script>

<style scoped>
.stats-section {
  margin-bottom: 2.5rem;
  text-align: center;
}

.stats-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1f2937; /* gray-800 */
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.stat-text {
  font-size: 1rem;
  font-weight: 500;
  color: #374151; /* gray-700 */
  line-height: 1.6;
}
</style>
