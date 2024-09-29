import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'  // 改为 HomePage
import ResumePage from '../views/Resume.vue'
import ContactPage from '../views/Contact.vue'
import PublicationPage from '../views/Publication.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',  // 改为 HomePage
    component: HomePage
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/publication',
    name: 'Publication',
    component: PublicationPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
