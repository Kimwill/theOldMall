import Vue from 'vue'
import Router from 'vue-router'
import User from 'views/User.vue'
import Login from 'views/Login.vue'
import Register from 'views/Register.vue'
import Home from 'views/Home.vue'
import Index from 'views/Index.vue'
import News from 'views/News.vue'
import Add from 'views/Add.vue'
import Me from 'views/Me.vue'
import Blog from 'views/Blog.vue'
import BlogDetail from 'views/BlogDetail'
import GoodDetail from 'views/GoodDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {name: 'index'}
    }, 
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        }, 
        {
          path: 'blog',
          name: 'blog',
          component: Blog,
        }, 
        {
          path: 'add',
          name: 'add',
          component: Add
        }, 
        {
          path: 'news',
          name: 'news',
          component: News
        }, 
        {
          path: 'me',
          name: 'me',
          component: Me
        }
      ]
    }, 
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        }, 
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    },
    {
      path: '/blogDetail',
      name: 'blogDetail',
      component: BlogDetail
    },
    {
      path: '/goodDetail',
      name: 'goodDetail',
      component: GoodDetail
    }
  ]
})
