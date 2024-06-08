import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/pages/login.vue'

const AuthLayout = () => import("@/layouts/AuthLayout.vue")
const Home = () => import("@/pages/home.vue")
const Test = ()=>import("@/pages/test.vue")

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/pruebas',
            name: 'test',
            component: Test
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: AuthLayout,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: '/inicio',
                    name: 'home',
                    component: Home,
                }
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    const auth = false
    if (to.matched[0].name === 'login') {
        if (auth) {
            next({name: 'home'})
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresAuth) && !auth) {
        next({name: 'login'})
    } else {
        next()
    }
})

export default router
