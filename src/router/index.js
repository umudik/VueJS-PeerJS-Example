import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/chat/',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/settings/',
        name: 'Settings',
        component: Settings
    },

]

const router = new VueRouter({
    routes
})

export default router