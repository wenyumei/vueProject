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
    <pre>
      《见与不见》

      你见，或者不见我，
      我就在那里，
      不悲不喜；

      你念，或者不念我，
      情就在那里，
      不来不去；

      你爱，或者不爱我，
      爱就在那里，
      不增不减；

      你跟，或者不跟我，
      我的手就在你的手里，
      不舍不弃；

      来我怀里，
      或，
      让我住进你心里。

      默然，相爱；
      寂静，欢喜。
    </pre>
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
