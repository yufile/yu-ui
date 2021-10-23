<template>
  <div class="yu-switch" @click="handleClick" :class="{'is-checked':value}">
    <input type="checkbox" :name="name" class="yu-switch__input" ref="input">
    <span class="yu-switch__core" ref="core">
      <span class="yu-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'YuSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 由于数据更新之后会会导致子组件数据没有传递过来出现bug，所以需要使用异步函数等待
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$refs.input = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input = this.value
  }
}
</script>

<style scoped lang="scss">
.yu-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .yu-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .yu-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align: middle;

    .yu-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.yu-switch.is-checked {
  .yu-switch__core {
    border-color: #409eff;
    background-color: #409eff;

    .yu-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
