import Vue from 'vue'
import ScrollBetween from './components/scrollBetween/ScrollBetween.vue'
import ScrollBetweenContainer from './components/scrollBetween/ScrollBetweenContainer.vue'

export default {
  install (vue, options) {
    vue.component('scroll-between', ScrollBetween)
    vue.component('scroll-between-container', ScrollBetweenContainer)
    vue.prototype.$scrollBetweenBus = new Vue()
  }
}
