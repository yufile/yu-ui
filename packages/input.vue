<template>
  <div class="yu-input " :class="{'yu-input--suffix':showIcon}">
    <!--  密码显示和隐藏 这块 通过是否传 showPassword这个属性来控制 ，如果要是传值了
    就通过封装组件内部自己控制 type 的值是text还是password 。
    如果要是没有传值就通过外部传的参数控制input类型 -->
    <input
      :type="showPassword ? (showPasswordVisible ? 'text' : 'password') : type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      class="yu-input__inner"
      :style="{width: width,height:height}"
      :class="{'is-disabled':disabled}" :value="value" @input="handleInput">
    <span class="yu-input__suffix" v-if="showIcon">
      <i class="yu-icon-close" v-if="clear && value" @click="clearContent"></i>
      <i class="yu-icon-showpassword"
         v-if="showPassword"
         @click="ShowPassWord"
         :class="{'yu-icon-showpassword-active': showPasswordVisible}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'YuInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: null,
      default: ''
    },
    clear: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '40px'
    }
  },
  data () {
    return {
      showPasswordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    // 清空input
    clearContent () {
      this.$emit('input', '')
    },
    ShowPassWord () {
      this.showPasswordVisible = !this.showPasswordVisible
    }
  },
  computed: {
    showIcon () {
      return this.clear || this.showPassword
    }
  }
}
</script>

<style lang="scss">
.yu-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;

  .yu-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &:hover {
      border-color: #606266;
    }
  }

  input {
    cursor: pointer;
  }

  .is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;

    &:hover {
      border-color: #e4e7ed;
    }
  }
}

.yu-input--suffix {
  .yu-input__inner {
    padding-right: 30px;
  }

  .yu-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;

    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.64, .045, .355, 1);
    }
    .yu-icon-showpassword-active {
      color: #67a4f8;
    }
  }
}

</style>
