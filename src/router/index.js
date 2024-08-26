import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Events from '../views/Events.vue'
import EventArticle from '@/views/EventArticle.vue'; // Import the new component

const routes = [
  { path: '/ibal/', name: 'Home', component: Home },
  { path: '/ibal/projects', name: 'Projects', component: Projects },
  { path: '/ibal/about', name: 'About', component: About },
  { path: '/ibal/services', name: 'Services', component: Services },
  { path: '/ibal/events', name: 'Events', component: Events },
  {
    path: '/ibal/events/:id', // Dynamic route for event articles
    name: 'EventArticle',
    component: EventArticle,
    props: true, // Pass route params as props to the component
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
