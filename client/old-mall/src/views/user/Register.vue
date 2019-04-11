<template>
  <div class="wrap">
    <div class="header">
      <span class="back iconfont">&#xe608;</span>
      <span class="name"></span>
    </div>
    <div class="logo">
      
    </div>
    <div class="form">
      <InputGroup type="text" name="用户名" placeholder="请输入用户名" v-model="user.userName"></InputGroup>
      <InputGroup type="text" name="账号" placeholder="请输入账号" v-model="user.accountNumber"></InputGroup>
      <InputGroup type="password" name="密码" placeholder="请输入密码" v-model="user.password"></InputGroup>
      <InputGroup type="password" name="确认密码" placeholder="请确认密码" v-model="user.password2"></InputGroup>
    </div>
    <div class="btn">
      <button class="register" @click="handleRegister">注册</button>
      <button class="login">已经有账号？登录</button>
    </div>
  </div>  
</template>
<script>
  import axios from 'axios'
  import InputGroup from "components/InputGroup"
  export default {
    name: "login",
    components: {
      InputGroup
    },
    data() {
      return {
        user: {
          userName: "",
          accountNumber: "",
          password: "",
          password2: ""
        }
      }
    },
    methods: {
      handleRegister() {
        axios.post('/api/user/register', {
          userName: this.user.userName,
          accountNumber: this.user.accountNumber,
          password: this.user.password
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '~assets/style/varible.styl'
  .wrap,.header,.logo,.form,.btn,button
    width 100%
    box-sizing border-box
  .wrap
    height 100%
    padding 0 $pageEdge
    .header
      height 8%
      border 1px solid #000
      display flex
      .back
        height 100%
        width 20%
        font-size .6rem
        line-height .9rem
      .name
        height 100%
        flex 1
    .logo
      height 30%
      border 1px solid #000
    .form
      height 30%
      border 1px solid #000
    .btn
      height 25%
      border 1px solid #000
      font-size 0  
      button
        height .6rem
        border-radius 3px
        text-align center
      .register
        background $themeColor
        color #fff
        text-align center
        border none
        box-shadow 0px 2px 2px #aaa
        margin-bottom .1rem
      .login
        background #fff
        color #999        
</style>  