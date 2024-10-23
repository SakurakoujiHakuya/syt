//配置pages里的两个路由组件
import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
            children: [{
                path: 'register',
                component: () => import('@/pages/hospital/register/index.vue'),
            },
            {
                path: 'rePartOne',
                component: () => import('@/pages/hospital/register/rePartOne.vue')
            },
            {
                path: 'rePartTwo',
                component: () => import('@/pages/hospital/register/rePartTwo.vue')
            },
            {
                path: 'detail',
                component: () => import('@/pages/hospital/detail.vue')
            },
            {
                path: 'notice',
                component: () => import('@/pages/hospital/notice.vue')
            },
            {
                path: 'search',
                component: () => import('@/pages/hospital/search.vue')
            },
            {
                path: 'stop',
                component: () => import('@/pages/hospital/stop.vue')
            }
            ]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    // 控制滚动条到顶端
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    }
})

