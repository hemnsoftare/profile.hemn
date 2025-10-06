<template>
  <section class="tech-section">
    <h3 class="tech-title">Tech Stack</h3>

    <div class="tech-grid">
      <div v-for="stack in techStacks" :key="stack.title" class="tech-card">
        <h4 class="tech-card-title">{{ stack.title }}</h4>
        <p class="tech-card-details">{{ stack.details }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const techStacks = [
  {
    title: "Frontend",
    details:
      "React.js, Next.js, Vue.js, Nuxt.js, React Native, TypeScript, Three.js, Tailwind CSS, Bootstrap, Sass, ShadCN UI",
  },
  {
    title: "Backend",
    details: "Laravel, PHP, Next.js, Firebase, Prisma ORM",
  },
  {
    title: "Database",
    details: "MySQL, PostgreSQL",
  },
];
</script>

<style scoped>
.tech-section {
  margin-bottom: 2.5rem;
  text-align: center;
}

.tech-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1f2937; /* gray-800 */
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.tech-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb; /* gray-200 */
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.tech-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.tech-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #16a34a; /* green-600 */
  margin-bottom: 0.5rem;
}

.tech-card-details {
  font-size: 0.95rem;
  color: #4b5563; /* gray-600 */
  line-height: 1.6;
}
</style>
