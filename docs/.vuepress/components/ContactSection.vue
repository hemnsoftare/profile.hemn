<template>
  <div class="contact-content">
    <header class="page-header">
      <h1 class="page-title">Contact Center</h1>
      <p class="page-subtitle">Let's connect and discuss opportunities</p>
    </header>
    
    <div class="contact-intro">
      <p>Let's connect! I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology.</p>
    </div>
    
    <div class="contact-methods">
      <div v-for="link in contacts" :key="link.label" class="contact-item">
        <div class="contact-label">{{ link.label }}</div>
        <a :href="link.href" target="_blank" rel="noopener" class="contact-link">{{ link.text }}</a>
      </div>
    </div>
    
    <div v-if="note" class="card text-center">
      <h2 class="card-title">Additional Info</h2>
      <p>{{ note }}</p>
    </div>
  </div>
</template>

<script setup>
import contactData from '../data/contact.json'
const contacts = contactData.contacts
const note = contactData.note
</script>