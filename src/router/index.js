import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: main
    }
  ]
})
