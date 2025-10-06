<template>
  <section class="about-section">
    <Hero/>
    <!-- About Me -->
    <div class="section">
      <h2 class="section-title">About Me</h2>
      <p class="section-text">
        Born in <strong>2004</strong>, currently a <strong>Software & Informatics Engineering student at Salahaddin University</strong>, and a passionate <strong>Full-Stack Developer</strong>.<br />
        I specialize in <strong>modern frontend frameworks</strong> and <strong>scalable backend solutions</strong>, with a focus on <strong>React/Next.js, Vue/Nuxt.js, and Laravel</strong>.<br />
        I love solving complex problems, building clean user interfaces, and crafting performant APIs.
      </p>
    </div>

    <!-- Current Focus -->
 <Focus/>

    <!-- Tech Stack -->
 <TechStack/>

   <QuickStats/>
    <!-- Features -->
    <div class="section">
      <h3 class="sub-title">Features</h3>
      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <h4 class="feature-title">{{ feature.title }}</h4>
          <p class="feature-text">{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      {{ footer }}
    </footer>
  </section>
</template>

<script setup>
import Focus from '../components/home/Focus.vue';
import Hero from '../components/home/hero.vue';
import QuickStats from '../components/home/QuickStats.vue';
import TechStack from '../components/home/TechStack.vue';

const features = [
  {
    title: "Frontend Development",
    details:
      "React.js, Next.js, Vue.js, Nuxt.js, React Native, TypeScript, Three.js, jQuery, HTML5, CSS3, Tailwind CSS, Bootstrap, Sass, ShadCN UI",
  },
  {
    title: "Backend Development",
    details: "Laravel (PHP), Next.js API routes, Firebase, Prisma ORM",
  },
  {
    title: "Database",
    details: "MySQL, PostgreSQL",
  },
];

const footer = "© 2025 Hemn Farhad Ahmad. All rights reserved.";
</script>

<style scoped>
.about-section {
  max-width: 80rem; /* 5xl */
  margin: 0 auto;
  padding: 2.5rem 1rem;
  color: #1f2937; /* gray-800 */
  font-family: 'Inter', sans-serif;
}

.section {
  margin-bottom: 2.5rem; /* mb-10 */
}

.section-title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-text {
  line-height: 1.75;
}

.sub-title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.list {
  list-style-type: disc;
  padding-left: 1.25rem;
}

.list li {
  margin-bottom: 0.25rem;
  line-height: 1.6;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb; /* gray-200 */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.feature-title {
  font-size: 1.125rem; /* text-lg */
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-text {
  font-size: 0.875rem;
  color: #374151; /* gray-700 */
}

.footer {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280; /* gray-500 */
  margin-top: 2.5rem;
}
</style>
