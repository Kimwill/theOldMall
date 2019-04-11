import Vue from 'vue'
import Router from 'vue-router'
import User from 'views/user/User.vue'
import Login from 'views/user/Login.vue'
import Register from 'views/user/Register.vue'
import Home from 'views/Home.vue'
import Index from 'views/good/Index.vue'
import News from 'views/news/News.vue'
import Add from 'views/add/Add.vue'
import Me from 'views/me/Me.vue'
import Blog from 'views/blog/Blog.vue'
import BlogDetail from 'views/blog/BlogDetail.vue'
import GoodDetail from 'views/good/GoodDetail.vue'
import pullToRefreshLoad from 'components/pullToRefreshLoad.vue'
import UploadTest from 'components/UploadTest.vue'
import Issue from 'views/me/issue/Issue.vue'
import MyGood from 'views/me/issue/MyGood.vue'
import MyBlog from 'views/me/issue/MyBlog.vue'

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
          component: Blog
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
      path: '/BlogDetail/:id',
      name: 'blogDetail',
      component: BlogDetail
    },
    {
      path: '/goodDetail/:id',
      name: 'goodDetail',
      component: GoodDetail
    },
    {
      path: '/me/issue',
      name: 'issue',
      component: Issue,
      children: [
        {
          path: 'myGood',
          name: 'myGood',
          component: MyGood
        },
        {
          path: 'myBlog',
          name: 'myBlog',
          component: MyBlog
        }
      ]
    },
    {
      path: '/pullToRefreshLoad',
      name: 'pullToRefreshLoad',
      component: pullToRefreshLoad
    },
    {
      path: '/uploadTest',
      name: 'uploadTest',
      component: UploadTest
    }
  ]
})
