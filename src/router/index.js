import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Loop from '@/components/loop'
import Event from '@/components/event'
import View from '@/components/view'
import Element from '@/components/element'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '', component: Hello},
    {path: '/loop', component: Loop},
    {path: '/event', component: Event},
    {path: '/view', component: View},
    {path: '/element', component: Element}
  ]
})
