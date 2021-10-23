<template>
  <div class="yu-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YuForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    provide () {
      return {
        Form: this
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
