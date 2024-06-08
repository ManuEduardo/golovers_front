import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/pages/login.vue'
import {useAuthStore} from "@/stores/AuthStore";

const AuthLayout = () => import("@/layouts/AuthLayout.vue")
const Groups = () => import("@/pages/groups/index.vue")
const Test = () => import("@/pages/test.vue")
const Announcements = () => import("@/pages/announcements/index.vue")

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
                    path: '/grupos',
                    name: 'groups',
                    meta: {
                        title: 'GRUPOS'
                    },
                    component: Groups,
                }
            ]
        },
        {
            path:'/anuncios',
            name:'announcements',
            component: Announcements,
            meta: {
                requiresAuth: true
            },
        }
    ]
})

router.beforeEach((to, from, next) => {
    const {isAuth} = useAuthStore()
    if (to.matched[0].name === 'login') {
        if (isAuth) {
            next({name: 'groups'})
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuth) {
        next({name: 'login'})
    } else {
        next()
    }
})

export default router
