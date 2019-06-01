<template>
  <div id="app">
    <keep-alive>
      <router-view @setCurrentTime="getCurrentTime" v-if="isRouterAlive">
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    //以依赖注入，给子组件孙组件调用
    provide() {
      return {}
    },
    data() {
      return {
        isRouterAlive: true,
        music: {},
        currentTime: 0
      }
    },
    components: {},
    methods: {
      handleScroll() {
        //浏览器滚动条
        let app_scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //div 滚动条 = 浏览器滚动条
        if (app_scrollTop > 1100) {
          //this.$refs.back_top.style.display = 'inline-block'
          // this.$el.querySelector('.back-top').style.display = 'inline-block'
        } else {
          //this.$refs.back_top.style.display = 'none'
          // this.$el.querySelector('.back-top').style.display = 'none'
        }
      }
    },
    mounted() {

    }
  }
</script>

<style></style>
