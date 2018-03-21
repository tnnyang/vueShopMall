// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/css/base.css'
import './util/fontSize'
import clipper from './util/clipper'
import wcView from 'wc-view'
import 'wc-view/style.css'
import VueLazyload from 'vue-lazyload'
import VueScroller from 'vue-scroller'
import Calendar from 'vue2-datepick'

import store from './vuex/'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(clipper)
Vue.use(wcView)
Vue.use(VueLazyload)
Vue.use(VueScroller)
Vue.use(Calendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueAwesomeSwiper,
  template: '<App/>',
  components: { App }
})
