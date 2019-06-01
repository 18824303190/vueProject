<template>
  <div class="init">
    <div>
      This is index Page.
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name: 'init',
    methods: {},
    watch: {},
    mounted() {
      layer.alert('Hello FF!')
    }
  }
</script>

<style>
  *{margin:0;padding:0;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;font-family:Arial,"微软雅黑"}img{border:none;max-width:100%;vertical-align:middle}body,button,dd,dl,dt,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,ul{margin:0;padding:0;list-style:none;overflow-x:hidden;color:#333}h1,h2,h3,h4,h5,h6{font-size:100%}input,textarea{-webkit-user-select:text;-ms-user-select:text;user-select:text;-webkit-appearance:none;font-size:1em;line-height:1.5em}table{border-collapse:collapse}input,select,textarea{outline:0;border:none;background:0 0}a{outline:0;cursor:pointer;color:#333;text-decoration:none}a:active,a:link{text-decoration:none}a:visited{text-decoration:none}a:hover{text-decoration:none}a{text-decoration:none;-webkit-touch-callout:none}em,i{font-style:normal}li,ol{list-style:none}body{margin:0}
</style>
