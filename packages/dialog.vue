<template>
  <transition name="dialog">
    <div class="yu-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="yu-dialog" :style="{width:width, top:top}">
        <div class="yu-dialog__header">
          <slot name="title">
            <span class="yu-dialog__title">{{ title }}</span>
          </slot>
          <button class="yu-dialog__headerbtn" @click="handleClose">
            <i class="yu-icon-close"></i>
          </button>
        </div>
        <div class="yu-dialog__body">
          <slot></slot>
        </div>
        <div class="yu-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'YuDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.yu-dialog__wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  .yu-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    box-sizing: border-box;

    .yu-dialog__header {
      padding: 20px 20px 10px;

      .yu-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }

      .yu-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }

    .yu-dialog__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    .yu-dialog__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}

.dialog-enter-active {
  animation: dialog .3s linear;
}

.dialog-leave-active {
  animation: dialog .3s reverse;
}

@keyframes dialog {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
