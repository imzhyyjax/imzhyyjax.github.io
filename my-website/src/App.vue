<template>
  <HomeView/>
</template>

<script>
import HomeView from './components/HomeView.vue'  // 更新引用到你的 Home 组件

export default {
  name: 'App',
  components: {
    HomeView  // 使用 Home 组件
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
