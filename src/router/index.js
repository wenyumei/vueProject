import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Loop from '@/components/Loop'
import Event from '@/components/Event'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Hello',
      component: Hello
    },
    { path: '/loop', component: Loop },
    { path: '/event', component: Event }
  ]
})
