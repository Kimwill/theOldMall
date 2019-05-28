<template>
  <div class="wrap">
    <Header :headerName="headerName"></Header>
    <div class="logo">
      <div class="imgWrap">
        <img src="./../../assets/img/user/avatar.png">
      </div>    
    </div>
    <div class="form">
      <InputGroup type="text" name="用户名" placeholder="请输入用户名" v-model="user.userName"></InputGroup>
      <InputGroup type="text" name="账号" placeholder="请输入账号" v-model="user.accountNumber"></InputGroup>
      <InputGroup type="password" name="密码" placeholder="请输入密码" v-model="user.password" @change.native="checkPassword"></InputGroup>
      <InputGroup type="password" name="确认密码" placeholder="请确认密码" v-model="user.password2" @change.native="isSame"></InputGroup>
    </div>
    <div class="btn">
      <input type="button" class="register" @click="handleRegister" value="注册" />
      <input type="button" class="login" @click="changeToLogin" value="已经有账号？登录" />
    </div>
  </div>  
</template>
<script>
  import axios from 'axios'
  import Header from 'components/Header'
  import InputGroup from "components/InputGroup"
  export default {
    name: "login",
    components: {
      Header,
      InputGroup
    },
    data() {
      return {
        headerName: '注册',
        user: {
          userName: "",
          accountNumber: "",
          password: "",
          password2: ""
        },
        isPasswordLega: false
      }
    },
    methods: {
      checkPassword() {
        this.user.password.length >= 6 ? this.isPasswordLega = true : this.isPasswordLega = false
      },
      isSame() {
        this.user.password === this.user.password2 ? this.isPasswordLega = true : this.isPasswordLega = false
      },
      handleRegister() {
        if(!this.isPasswordLega) return
        axios.post('/api/user/register', {
          userName: this.user.userName,
          accountNumber: this.user.accountNumber,
          password: this.user.password
        })
        .then((res) => {
          console.log(res);
          this.$router.push({name: 'login'})
        })
        .catch((err) => {
          console.log(err);
        })
      }, 
      changeToLogin() {
        this.$router.replace({name: "login"})
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
      width 100%
      // border 1px solid #000
      font-size 0  
      input
        height .6rem
        width 100%
        display block
        border-radius 3px
        text-align center
        outline none
      .register
        background $themeColor
        color #fff
        border none
        box-shadow 0px 2px 2px #aaa
        margin-bottom .1rem
      .login
        background #fff
        color #999        
</style>  