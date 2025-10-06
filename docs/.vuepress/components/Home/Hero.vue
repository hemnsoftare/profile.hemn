<template>
  <section class="hero-section">
    <div class="hero-content">
      <img src="/images/hemn.png" alt="Hemn Farhad Ahmad" class="hero-image" />
      <h1 class="hero-name">Hemn Farhad Ahmad</h1>
      <p class="hero-title">Full-Stack Developer</p>
    </div>
  </section>
</template>

<script setup>
// No script logic needed — static hero
</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: screen;
  color: #1f2937; /* gray-800 */
  font-family: 'Inter', sans-serif;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-image {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #d2ddef; /* blue-500 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.hero-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 1rem;
}

.hero-title {
  font-size: 1.25rem;
  color: #4b5563; /* gray-600 */
  letter-spacing: 1px;
}
</style>
