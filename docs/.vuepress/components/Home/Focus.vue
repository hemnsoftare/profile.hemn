<template>
  <section class="focus-section">
    <h3 class="focus-title">Current Focus</h3>

    <div class="focus-grid">
      <div v-for="item in focuses" :key="item.title" class="focus-card">
        <h4 class="focus-card-title">{{ item.title }}</h4>
        <p class="focus-card-details">{{ item.details }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const focuses = [
  {
    title: "Frontend",
    details: "React.js / Next.js, Vue.js / Nuxt.js, React Native",
  },
  {
    title: "Backend",
    details: "Laravel (PHP), Next.js APIs",
  },
  {
    title: "Other Interests",
    details: "Three.js (3D web), TypeScript mastery",
  },
];
</script>

<style scoped>
.focus-section {
  margin-bottom: 2.5rem;
}

.focus-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1f2937; /* gray-800 */
}

.focus-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .focus-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.focus-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.focus-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.focus-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb; /* blue-600 */
  margin-bottom: 0.5rem;
}

.focus-card-details {
  font-size: 0.95rem;
  color: #4b5563; /* gray-600 */
  line-height: 1.5;
}
</style>
