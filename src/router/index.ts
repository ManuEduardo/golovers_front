import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/pages/login.vue'
import {useAuthStore} from "@/stores/AuthStore";

const AuthLayout = () => import("@/layouts/AuthLayout/index.vue")
const GroupsLayout = () => import("@/layouts/GroupsLayout/index.vue")
const PanelLayout = () => import("@/layouts/PanelLayout/index.vue")
const Groups = () => import("@/pages/groups/index.vue")
const GroupsCreate = () => import("@/pages/groups/create.vue")
const Panel = () => import("@/pages/panels/index.vue")
const Kanban = () => import("@/pages/kanban/index.vue")
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
                    path: 'grupos',
                    component: GroupsLayout,
                    children: [
                        {
                            path: '',
                            name: 'groups',
                            meta: {
                                title: 'GRUPOS'
                            },
                            component: Groups,
                        },
                        {
                            path: 'archivados',
                            meta: {
                                title: 'GRUPOS'
                            },
                            component: Groups,
                        },
                        {
                            path: 'crear',
                            name: 'groups-create',
                            meta: {
                                title: 'GRUPOS'
                            },
                            component: GroupsCreate,
                        }
                    ]
                },
                {
                    path: 'paneles/:idGroup',
                    component: PanelLayout,
                    props: true,
                    children: [
                        {
                            path: 'inicio',
                            name: 'panels',
                            meta: {
                                title: 'PANEL DE CONTROL'
                            },
                            props: true,
                            component: Panel,
                        },
                        {
                            path: 'anuncios',
                            name: 'announcements',
                            component: Announcements,
                        },
                        {
                            path: 'kanban/:idKanban',
                            name: 'kanban',
                            meta: {
                                title: 'Tablero'
                            },
                            props: true,
                            component: Kanban,
                        }
                    ]
                },
            ]
        },

        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: Test
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
