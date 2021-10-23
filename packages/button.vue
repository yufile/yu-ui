<template>
  <button class="yu-button" :class="[`yu-button--${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle,'is-disabled':disabled}]" :disabled="disabled" @click="handleClick">
    <span class="level">
      <i v-show="icon" :class="icon"></i>
      <span v-if="$slots.default">
          <slot></slot>
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'YuButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.yu-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0 5px;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #ecf5ff;
    background-color: #ecf5ff;
  }
}
/*正常按钮*/
.yu-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    color: #fff;
    border-color: #67a4f8;
    background-color: #67a4f8;
  }
}

.yu-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    color: #fff;
    border-color: #86c06e;
    background-color: #86c06e;
  }
}

.yu-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    color: #fff;
    border-color: #b2b3bd;
    background-color: #b2b3bd;
  }
}

.yu-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    color: #fff;
    border-color: #e8bd50;;
    background-color: #e8bd50;
  }
}

.yu-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    color: #fff;
    border-color: #f38787;
    background-color: #f38787;
  }
}
/*朴素按钮*/
.yu-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}

.yu-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
}

.yu-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
}

.yu-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
}

.yu-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
}
/*椭圆按钮*/
.yu-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
/*原型按钮*/
.yu-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
/* 图标和字体共存 */
.yu-button [class *='yu-icon-'] + span {
  margin-left: 5px;
}

.level {
  display: flex;
  align-content: center;
}

/*禁用样式*/
.yu-button--default.is-disabled {
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  cursor: not-allowed;
  &:hover,
  &:focus {
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
  }
}
.yu-button--primary.is-disabled{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
.yu-button--success.is-disabled{
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
}
.yu-button--info.is-disabled {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
}
.yu-button--warning.is-disabled {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
}
.yu-button--danger.is-disabled {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
}
/*朴素禁用*/
.yu-button--primary.is-plain.is-disabled{
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
}
.yu-button--success.is-plain.is-disabled{
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
}
.yu-button--info.is-plain.is-disabled {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
}
.yu-button--warning.is-plain.is-disabled {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
}
.yu-button--danger.is-plain.is-disabled {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  cursor: not-allowed;
  &:hover,
  &:focus {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
}
</style>
