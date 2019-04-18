<template>
  <div class="wrap">
    <div class="header">
      <span class="back iconfont">&#xe608;</span>
      <span class="name">登录</span>
    </div>
    <div class="logo">
      <div class="imgWrap">
        <img src="./../../assets/img/user/avatar.png">
      </div>
    </div>
    <div class="form">
      <div class="inputWrap">
        <InputGroup type="text" name="账号" placeholder="请输入账号" v-model="user.accountNumber"></InputGroup>
        <InputGroup type="password" name="密码" placeholder="请输入密码" v-model="user.password"></InputGroup>
      </div>
    </div>
    <div class="btn">
      <button class="login" @click="handleLogin">登录</button>
      <button class="register" @click="changeToRegister">还没有账号？注册</button>
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
          accountNumber: "",
          password: ""
        }
      }
    },
    methods: {
      handleLogin() {
        axios.post('/api/user/login', {
          accountNumber: this.user.accountNumber,
          password: this.user.password
        })
        .then((res) => {
          // console.log(res.data.token)
          localStorage.setItem('loginToken', res.data.token)
          this.$router.push({name: 'me'})
        })
        .catch((err) => {
          console.log(err);
        })
      },
      changeToRegister() {
        this.$router.replace({name: "register"})
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
    padding $pageEdge
    background-color #fff
    .header
      height 1rem
      // border 1px solid #000
      position relative
      .back
        height 100%
        font-size .6rem
        line-height 1rem
        position absolute
        left 0
        z-index 100
      .name
        height 100%
        line-height 1rem
        position absolute
        left 0
        right 0
        text-align center
        font-size $headerFontSize
    .logo
      height 3rem
      // border 1px solid #000
      .imgWrap
        width 100%
        height 100%
        box-sizing border-box
        padding .5rem
        text-align center
        img
          height 100%
    .form
      height 30%
      // border 1px solid #000
    .btn
      height 25%
      // border 1px solid #000
      font-size 0
      button
        height .6rem
        border-radius 3px
        text-align center
        border none
        box-shadow 0px 2px 2px #aaa
        margin-bottom .1rem
        outline none
      .login
        background-color $themeColor
        color #fff
      .register
        background #fff
        color #999        
</style>  