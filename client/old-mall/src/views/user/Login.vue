<template>
  <div class="wrap">
    <Header :headerName="headerName"></Header>
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
      <input type="button" class="login" @click="handleLogin" value="登录" />
      <input type="button" class="register" @click="changeToRegister" value="还没有账号？注册" />
    </div>
  </div>  
</template>
<script>
  import axios from 'axios'
  import Header from 'components/Header.vue'
  import InputGroup from "components/InputGroup"
  export default {
    name: "login",
    components: {
      Header,
      InputGroup
    },
    data() {
      return {
        headerName: "登录",
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
          console.log(res)
          localStorage.setItem('loginToken', res.data.token)
          let user = res.data.user
          let newUser = {}
          for(let i in user) {
            if(i !== 'password') {
              newUser[i] = user[i]
            }
          }
          localStorage.setItem('user', JSON.stringify(newUser))
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