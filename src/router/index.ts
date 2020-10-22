import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'WeatherOverview',
        component: () => import(/* webpackChunkName: "WeatherOverview" */ '../presentations/weather/views/WeatherOverview.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
