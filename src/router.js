import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: '',
            path: '/',
            component: () => import(/* webpackChunkName: "HelloWorld" */ './components/HelloWorld.vue'),
        },
        {
            name: 'regular',
            path: '/regular',
            component: () => import(/* webpackChunkName: "HelloWorld" */ './components/regular.vue'),
        },
        {
            name: 'swiper',
            path: '/swiper',
            component: () => import(/* webpackChunkName: "HelloWorld" */ './components/swiper.vue'),
        }
    ]
})