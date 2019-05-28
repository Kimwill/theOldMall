import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/user/Login.vue'
import Register from 'views/user/Register.vue'
import Home from 'views/Home.vue'
import Index from 'views/good/Index.vue'
import News from 'views/news/News.vue'
import GoodNews from 'views/news/GoodNews'
import CommentNews from 'views/news/CommentNews'
import ActivityNews from 'views/news/ActivityNews'
import Me from 'views/me/Me.vue'
import Blog from 'views/blog/Blog.vue'
import BlogDetail from 'views/blog/BlogDetail.vue'
import GoodDetail from 'views/good/GoodDetail.vue'
import Issue from 'views/me/issue/Issue.vue'
import MyGood from 'views/me/issue/MyGood.vue'
import MyBlog from 'views/me/issue/MyBlog.vue'
import MyBuy from 'views/me/buy/MyBuy.vue'
import MySale from 'views/me/sale/MySale.vue'
import EditInfo from 'views/me/editInfo/EditInfo.vue'
import EditAvatar from 'views/me/editInfo/EditAvatar'
import AddBlog from 'views/add/AddBlog'
import AddGood from 'views/add/AddGood'
import Buy from 'views/buy/Buy'

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
          path: 'news',
          name: 'news',
          component: News,
          children: [
            {
              path: 'goodNews',
              name: 'goodNews',
              component: GoodNews
            },
            {
              path: 'commentNews',
              name: 'commentNews',
              component: CommentNews
            },
            {
              path: 'activityNews',
              name: 'activityNews',
              component: ActivityNews
            }
          ]
        }, 
        {
          path: 'me',
          name: 'me',
          component: Me
        }
      ]
    }, 
    {
      path: '/user/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user/register',
      name: 'register',
      component: Register
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
      path: '/me/buy',
      name: 'myBuy',
      component: MyBuy
    },
    {
      path: '/me/sale',
      name: 'mySale',
      component: MySale
    },
    {
      path: '/me/editInfo',
      name: 'editInfo',
      component: EditInfo
    },
    {
      path: '/me/editInfo/editAvatar',
      name: 'editAvatar',
      component: EditAvatar
    },
    {
      path: '/add/addBlog',
      name: 'addBlog',
      component: AddBlog
    },
    {
      path: '/add/addGood',
      name: 'addGood',
      component: AddGood
    },
    {
      path: '/buy/:id',
      name: 'buy',
      component: Buy
    }
  ]
})
