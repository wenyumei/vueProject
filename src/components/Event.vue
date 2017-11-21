<template>
  <div class="event">
    <button @click="addCount">add</button>
    <button @click="minusCount" :disabled="count<=0" :class="[count<=0?className:'']">minus</button>
    <p>点击次数: {{count}} <span v-show="count<=0"> 当前次数为0次!</span></p>
  </div>
</template>

<script>
  export default {
    name: 'event',
    data () {
      return {
        count: 0,
        className: 'minu'
      }
    },
    methods: {
      addCount: function () {
        this.count += 1
      },
      minusCount: function () {
        if (this.count > 0) {
          this.count -= 1
        } else {
          this.count = 0
        }
      }
    }
  }
</script>

<style>
  .event {
    margin-top: 50px;
  }
  .event button {
    font-size: 24px;
    font-weight: bolder;
    display: inline-block;
    padding: 2px 10px;
    cursor: pointer;
  }
  span {
    font-size: 12px;
    color: #f00;
  }
  .minu {
    cursor: not-allowed !important;
  }
</style>
