/**
 * Created by Kevin on 2019/5/31.
 */
import Vue from 'vue'
import App from './app'
import router from './router'
import request from './utils/request'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import 'swiper/dist/css/swiper.css'

import $ from 'jquery'
Vue.use($);

import 'layui-layer/layer'
import 'layui-layer/layer.css'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('./assets/imgage/loading-failed.png'),
  loading: require('./assets/imgage/reload.png'),
  attempt: 1,
  lazyComponent: true
});

// 轮播图
Vue.use(VueAwesomeSwiper);

Vue.prototype.$axios = request;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
});
