<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YuRadioGroup',
  provide () {
    return {
      radioGroup: this
    }
  }
}
</script>

<style scoped>

</style>
