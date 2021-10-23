<template>
  <div class="yu-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YuCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style scoped>

</style>
