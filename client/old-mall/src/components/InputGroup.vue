<template>
  <div class="inputGroup">
    <label :for="name">{{name}}</label>
    <input
      :type="type" 
      :name="name" 
      :id="name" 
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>
<script>
  export default {
    name: "inputGroup",
    // model: {
    //   prop: 'value',
    //   event: 'input'
    // },
    props: {
      value: String,
      type: String,
      name: String,
      placeholder: String
    }
  }
</script>
<style lang="stylus" scoped>
  .inputGroup
    width 100%
    height .6rem
    display flex
    justify-content space-between
    font-size .3rem
    color #000
    border-bottom 1px solid #ccc
    margin-top .2rem
    label
      width 30%
      height 100%
      line-height .6rem
      border none
      letter-spacing .05rem
    input
      border none
      outline none
      flex 1
      font-size .28rem
  ::-webkit-input-placeholder
    color #ccc
    font-size .28rem
  ::-moz-input-placeholder
    color #ccc
    font-size .28rem
  :-ms-input-placeholder
    color #ccc
    font-size .28rem
  ::-ms-input-placeholder
    color #ccc
    font-size .28rem
  ::placeholder
    color #ccc
    font-size .28rem
</style>