<template>
  <div class="routerView">
    <h1>Router Views</h1>
    <ul>
      <li>
        <router-link to="/order">/order</router-link>
      </li>
      <li>
        <router-link to="/reverse">/other</router-link>
      </li>
    </ul>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style>
  .routerView {
    width: 30%;
    margin: 0 auto;
    position: relative;
    top: 30px;
  }

  ul li, .view {
    text-align: left;
  }

  .view {
    text-indent: 50px;
  }
</style>
