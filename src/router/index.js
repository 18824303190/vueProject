/**
 * Created by Kevin on 2019/5/31.
 */

import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css' //这个样式必须引入
import GYHome_3 from '../components/Home/GYHome_Three'


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





export default router
