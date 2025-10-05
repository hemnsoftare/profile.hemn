import { defineClientConfig } from 'vuepress/client'
import AppLayout from './components/AppLayout.vue'
import StackList from './components/StackList.vue'
import ProjectsList from './components/ProjectsList.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import DashboardHome from './components/DashboardHome.vue'
import ProjectDetail from './components/ProjectDetail.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('AppLayout', AppLayout)
    app.component('StackList', StackList)
    app.component('ProjectsList', ProjectsList)
    app.component('AboutSection', AboutSection)
    app.component('ContactSection', ContactSection)
    app.component('DashboardHome', DashboardHome)
    app.component('ProjectDetail', ProjectDetail)
  },
})
