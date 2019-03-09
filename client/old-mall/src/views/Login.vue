<template>
  <div class="login">
    <InputGroup type="text" name="用户名" v-model="user.userName"></InputGroup>
    {{user.userName}}
  </div>
</template>
<script>
  import InputGroup from "./../components/InputGroup"
  export default {
    name: "login",
    components: {
      InputGroup
    },
    data() {
      return {
        user: {
          userName: ""
        }
      }
    }
  }
</script>