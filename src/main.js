import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import topTip from '@/components/top-tip'
import smoothscroll from 'smoothscroll-polyfill'
import 'styles/waves.min.css'
import {
  Search,
  ActionSheet,
  Swipe,
  SwipeItem,
  Button,
  Checkbox,
  CheckboxGroup,
  PasswordInput,
  NumberKeyboard,
  PullRefresh,
  Tab,
  Tabs
} from 'vant'
import 'styles/reset.css'
import 'styles/border.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)
smoothscroll.polyfill()

fastclick.attach(document.body)
// import ""
Vue.use(Search)
Vue.use(Button)
Vue.use(ActionSheet)
Vue.use(PullRefresh)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(PasswordInput).use(NumberKeyboard)
Vue.use(Tab).use(Tabs)

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/load.gif',
  loading: 'https://s2.ax1x.com/2019/09/08/n8qAAS.gif',
  attempt: 5,
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
})

Vue.component('top-tip', topTip)
// eslint-disable-next-line
Vue.prototype.$wave = (Waves)
Vue.prototype.$axios = (axios)
/* eslint-disable no-new */
// eslint-disable-next-line no-unused-vars
var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.vm = vm
