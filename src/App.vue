<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png" title="come back to main page"/></router-link>
    <div class="nav">
      <button class="btn">
        <router-link to="/loop">Loop</router-link>
      </button>
      <button class="btn">
        <router-link to="/event">Event</router-link>
      </button>
      <button class="btn">
        <router-link to="/view">View</router-link>
      </button>
      <button class="btn">
        <router-link to="/element">Element</router-link>
      </button>
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    font-weight: 700;
    padding: 0 15px;
  }

  .btn:hover a, .btn:active a {
    color: #409eff;
  }

  .nav, .hello, .loop, .event, .routerView {
    text-align: center;
  }
</style>
