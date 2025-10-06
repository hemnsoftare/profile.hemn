<template>
  <section class="about-section">
    <AboutHeader />

    <div class="about-intro">
      <p> {{ data.intro }}</p>
    </div>

    <div class="cards-grid">
      <AboutCard
        :title="'Achievements'"
        :subtitle="'Key highlights and accomplishments'"
        :items="data.highlights"
      />
      <AboutCard
        v-if="data.experience?.length"
        :title="'Experience'"
        :subtitle="'Professional background'"
        :items="data.experience"
      />
    </div>
  </section>
</template>

<script setup>
import data from '../data/about.json'
import AboutHeader from '../components/About/AboutHeader.vue'
import AboutCard from '../components/About/AboutCard.vue'
</script>

<style scoped>
.about-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
}

.about-intro {
  text-align: center;
  font-size: 1rem;
  color: #475569;
  margin-bottom: 2.5rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>
