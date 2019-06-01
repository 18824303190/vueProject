<template>
    <div id="app">
        <!-- 头部 -->
        <Header></Header>
        <!-- 路由 -->
        <keep-alive>
            <router-view v-if="isRouterAlive">
            </router-view>
        </keep-alive>
        <!-- 底部 -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Layout/Header'
    import Footer from './components/Layout/Footer'

    export default {
        name: 'App',
        //以依赖注入，给子组件孙组件调用
        provide() {
            return {}
        },
        data() {
            return {
                isRouterAlive: true,
                currentTime: 0
            }
        },
        components: {
            Header,
            Footer
        },
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
            layer.alert('Hello FF!')
        }
    }
</script>

<style lang="less">
    @import "theme/index";
</style>
