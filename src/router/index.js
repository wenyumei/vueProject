import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Loop from '@/components/Loop'
import Event from '@/components/Event'
import View from '@/components/View'
const One = {template: '<div>one</div>'}
const Two = {template: '<div>two</div>'}
const Three = {template: '<div>three</div>'}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Hello',
      component: Hello
    },
    {path: '/loop', component: Loop},
    {path: '/event', component: Event},
    {
      path: '/view',
      component: View,
      children: [
        {
          path: '/order',
          components: {
            default: One,
            a: Two,
            b: Three
          }
        },
        {
          path: '/reverse',
          components: {
            default: Three,
            a: Two,
            b: One
          }
        }
      ]
    }
  ]
})
