<template>
  <div class="inputGroup">
    <label :for="name">{{name}}</label>
    <input
      :type="type" 
      :name="name" 
      :id="name" 
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>
<script>
  export default {
    name: "inputGroup",
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: String,
      type: String,
      name: String
    }
  }
</script>
<style lang="stylus">
  .inputGroup
    width 100%;
    height value
    display flex
</style>