<template>
  <div id="app">
    <nav-bar></nav-bar>
   <main-wrap>
      <router-view/>
   </main-wrap>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import MainWrap from "./components/MainWrap/MainWrap.vue"

export default {

  components: {
    NavBar,
    MainWrap
  }
}
</script>
<style lang="less">

  @import "../static/iconfont/iconfont.css";

</style>
