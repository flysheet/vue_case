import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoadPage from '@/components/LoadPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoadPage',
      component: LoadPage
    }, {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
