import { defineClientConfig } from 'vuepress/client'
import AppLayout from './pages/ProfilePage.vue'
import StackList from './pages/SkillsPage.vue'
import ProjectsList from './pages/ProjectsPage.vue'
import AboutSection from './pages/AboutPage.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('AppLayout', AppLayout)
    app.component('StackList', StackList)
    app.component('ProjectsList', ProjectsList)
    app.component('AboutSection', AboutSection)
  },
})
