<template>
  <div class="event">
    <button @click="addCount">add</button>
    <button @click="minusCount" :disabled="count<=0" :class="[count<=0?className:'']">minus</button>
    <p>点击次数: {{count}} <span v-show="count<=0"> 当前次数为0次!</span></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        className: 'minu'
      }
    },
    methods: {
      addCount: function () {
        this.count += 1
        /**
         * 在根实例注册了store选项，store实例注入到根组件下所有子组件中，所以子组件可以通过store.commit方法触发状态变更，通过store.state来获取状态
         */
//        this.$store.commit('increment')
        this.$store.commit('increment', 2)
        console.log('当前count累计值为：' + this.$store.state.count)
      },
      minusCount: function () {
        if (this.count > 0) {
          this.count -= 1
        } else {
          this.count = 0
        }
        /**
         *提交mutation的对象风格提交方式，包含type属性对象，当使用对象风格提交方式时，store中则需通过对象属性获取方法来获取传入参数
         * n的值为5,则在store中mutation的increment中应为num.n
         * 在Vuex中，mutation是同步事务，要处理异步操作用Action
         */
        this.$store.commit({
          type: 'plus',
          n: 5
        })
        console.log('当前count值为（mutation的对象风格提交方式）：' + this.$store.state.count)

        /**
         * Action通过store.dispatch方法触发
         */
        this.$store.dispatch('increment')
        console.log('当前count累计值为（Action事例）：' + this.$store.state.count)
      }
    }
  }
</script>

<style scoped>
  .event {
    margin-top: 50px;
    text-align: center;
  }

  .event button {
    font-size: 24px;
    font-weight: bolder;
    display: inline-block;
    padding: 2px 10px;
    cursor: pointer;
  }

  .event button:first-child {
    /* 自定义鼠标图片样式
     * 图片地址最好为绝对地址（当图片不显示时，可尝试使用绝对路径或相对路径）
     * 为防止不同浏览器对图片的兼容问题，图片格式最好为cur或ico格式
     * 为防止图片大小不一致问题，图片尺寸推荐32*32
    */
    cursor: url("http://ued.taobao.com/blog/wp-content/themes/taobaoued/images/cursor.ico"), auto;
  }

  span {
    font-size: 12px;
    color: #f00;
  }

  .minu {
    cursor: not-allowed !important;
  }
</style>
