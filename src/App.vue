<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png" title="come back to main page" /></router-link>
    <div class="nav">
      <button class="btn"><router-link to="/loop">Loop</router-link></button>
      <button class="btn"><router-link to="/event">Event</router-link></button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.nav {
  width: 95%;
  height: 34px;
  line-height: 34px;
  margin: 0 auto;
  position: relative;
  top: 20px;
}
.btn {
  line-height: 24px;
  margin-left: 15px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 15px;
  top: 15px;
}
</style>
