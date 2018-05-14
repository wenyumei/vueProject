<template>
  <div class="main">
    <router-link to="/"><img src="./assets/logo.png" title="come back to main page"/></router-link>
    <div class="nav">
      <router-link v-for="menu in menus" :to="menu.router_path" active-class="active">
        <button class="btn">{{menu.name}}</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menus: [
          {
            router_path: '/loop',
            name: 'Loop'
          },
          {
            router_path: '/event',
            name: 'Event'
          },
          {
            router_path: '/view',
            name: 'View'
          },
          {
            router_path: '/element',
            name: 'Element'
          }
        ]
      }
    }
  }
</script>

<style>
  .main {
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
    text-align: center;
    position: relative;
    top: 20px;
  }

  .btn {
    line-height: 24px;
    margin-left: 15px;
    font-weight: 700;
    padding: 0 15px;
  }

  .btn:hover, .btn:active, .active .btn {
    color: #409eff;
  }
</style>
