<template>
  <div class="hello">
    <div class="string-wrap">
      <div>{{msg}}</div>
      <div v-show="msg.length == 0">还没有数据哦~~</div>
    </div>
    <div>
      <input type="text" placeholder="please input" v-model="msg" />
      <button @click="reverseString" :disabled="msg.length == 0">reverse</button>
      <button @click="cleanString" :disabled="msg.length == 0">clean</button>
    </div>
    <div class="tips">
      <div v-if="isReverse">已反转字符串</div>
      <div v-if="isClean">已清除数据</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isReverse: false,
      isClean: false
    }
  },
  methods: {
    reverseString: function () {
      if (this.msg) {
        this.msg = this.msg.split('').reverse().join('')
        this.isReverse = true
        setTimeout(() => {
          this.isReverse = false
        }, 1000)
      }
    },
    cleanString: function () {
      if (this.msg) {
        this.msg = ''
        this.isClean = true
        setTimeout(() => {
          this.isClean = false
        }, 1000)
      }
    }
  }
}
</script>

<style>
  .string-wrap {
    width: 500px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    min-height: 30px;
    word-wrap: break-word;
  }
  .tips {
    width: 500px;
    margin: 0 auto;
    text-align: right;
    color: #f00;
  }
</style>
