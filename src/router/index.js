import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/conferences',
        name: 'ProgramView',
        component: () => import('../views/ProgramView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
