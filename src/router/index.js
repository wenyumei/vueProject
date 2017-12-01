import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Loop from '@/components/loop'
import Event from '@/components/event'
import View from '@/components/view'
import Element from '@/components/element'

const One = {template: '<div>one</div>'}
const Two = {template: '<div>two</div>'}
const Three = {template: '<div>three</div>'}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '', component: Hello},
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
    },
    {path: '/element', component: Element}
  ]
})
