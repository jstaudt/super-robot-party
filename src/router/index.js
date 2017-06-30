// import Vue from 'vue'
// import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contact from '@/components/Contact'
// Vue.use(Router)



export const routes = [
    { path: '/', name: 'Hello', component: Hello},
    { path: '/contact', name: 'Contact', component: Contact}
]
