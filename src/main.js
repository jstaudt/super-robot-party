// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {routes} from './router'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueFire);
Vue.use(VueRouter);
Vue.use(VueYouTubeEmbed)

const router = new VueRouter({
    routes,
    mode: 'history'
})
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h =>h (App)
})
