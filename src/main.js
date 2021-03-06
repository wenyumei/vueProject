// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

/* eslint-disable no-new */

/**
 * 可以通过store.state来获取状态对象，以及通过store.commit方法触发状态变更
 * 在Vuex中store数据改变的唯一方法是mutation，即处理数据逻辑的方法全部都放在mutations中
 * @type {Store}
 */
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // },

    increment (state, num) {
      state.count += num
    },
    plus (state, num) {
      state.count -= num.n
      if (state.count < 0) {
        state.count = 0
      }
    }
  },
  actions: {
    increment (context) {
      context.commit('increment', 2)
    }
  }
})

new Vue({
  el: '#app',
  router,
  store, // 把store对象提供给‘store’选项，可以把store的实例注入所有的子组件
  template: '<App/>',
  components: {App}
})
