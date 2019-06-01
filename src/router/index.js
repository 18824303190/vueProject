/**
 * Created by Kevin on 2019/5/31.
 */

import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入
import GYHome_3 from '../components/Home/GYHome_Three'

NProgress.inc(0.2);
NProgress.configure({easing: 'ease', speed: 500, showSpinner: false});

Vue.use(Router);

const router = new Router({
  //mode: 'history',
  linkActiveClass: 'linkActive',
  routes: [
    {
      path: '/',
      component: GYHome_3
    }
  ],
});

/**
 * to 即将去往的路由
 * form 当前离开的路由
 * next  进行通过的钩子函数 参数： 1无参数表示通过 2:false 中断当前导游 3:{path:'/'} 指定页面
 **/
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

/**
 * 后置钩子
 **/
router.afterEach((to, form) => {
  NProgress.done()
});


export default router
