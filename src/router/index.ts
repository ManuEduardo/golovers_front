import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/home.vue'

const About = () => import("@/pages/about.vue")
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})

export default router
