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

import NProgress from "nprogress"

import $ from 'jquery'


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
window.$ = $;

Vue.config.productionTip = false;

// bus
let bus = {
    install(Vue, options) {
        Vue.prototype.$bus = Vue;
    }
};
Vue.use(bus);

/**
 * to 即将去往的路由
 * form 当前离开的路由
 * next  进行通过的钩子函数 参数： 1无参数表示通过 2:false 中断当前导游 3:{path:'/'} 指定页面
 **/
router.beforeEach((to, from, next) => {
    // 统计代码
    setTimeout(() => {
        let current = '';
        if (location.host.indexOf(':') > 0) {
            current = location.host.split(':')[0];
        } else {
            current = location.host;
        }
        let host = current.split('.');
        let nodes = '';
        if (host.length == 3) {
            host.shift();
            nodes = host.join('.')
        } else {
            nodes = location.host;
        }
        (function () {
            let scriptNode = document.createElement("script");
            scriptNode.type = "text/javascript";
            scriptNode.src = `${HM_URL}/${nodes}.js`;
            document.getElementsByTagName("head")[0].appendChild(scriptNode);
        })();
    }, 50);

    next();
});

/**
 * 后置钩子
 **/
router.afterEach((to, form) => {
    NProgress.done()
});

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<app/>'
});
