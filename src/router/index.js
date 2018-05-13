import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Blog from '@/components/blog'
import Home from '@/components/blog/home'
import Article from '@/components/blog/article'
import Admin from '@/components/admin'
import PageNotFound from '@/components/error/pagenotfound'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Blog,
      children: [
        { path: '', component: Home },
        { path: '/article/:id', component: Article }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      meta: { requiresAuth: true }
    },
    { path: '*', component: PageNotFound }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // todo 
    next()
  } else {
    next()
  }
})

export default router
