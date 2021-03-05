import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from './components/Home.vue'
import Card from '@pages/card/index.vue'
import MyComponent from './components/MyComponent.vue'
import MemberRegister from '@pages/member/Register.vue'
import MemberList from '@pages/member/List.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/members/register',
        name: 'MemberRegister',
        component: MemberRegister
    },
    {
        path: '/members/list',
        name: 'MemberList',
        component: MemberList
    },
    {
        path: '/card',
        name: 'Card',
        component: Card
    },
    {
        path: '/mycomp/:mynum',
        name: 'MyComponent',
        component: MyComponent,
        props: function(route) {
            return {
                mynum: parseInt(route.params.mynum)
            }
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
