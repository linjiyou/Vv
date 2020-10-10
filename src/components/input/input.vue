<template>
  <div class="wrapper">
    <input
      type="text"
      class="sty-input"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :class="{ error: error }"
      @change="$emit('change',$event)"
      @focus="$emit('focus',$event)"
      @input="$emit('input',$event.target.value)"
      @blur="$emit('input',$event.target.value)"
    />
    <div v-if="error" class="tips">
      <icon name="error" class="icon-error"></icon>
      <span class="error-message">{{ error }}</span>
    </div>
  </div>
</template>

<script>
import Icon from "../../common/icon";
export default {
  name: "study-input",
  props: {
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@height: 32px;
@border-color: #999;
@border-color-hover: #666;
@border-radius: 4px;
@border-color-foucs: #1c89e9;
@font-size: 14px;
@border-shadow-color: rgba(0, 0, 0, 0.5);
@disabled-color: #bbb;
@error-color: #f1453d;
input:focus {
  outline: none;
}
.sty-input {
  height: @height;
  border: 1px solid @border-color;
  padding: 0 8px;
  border-radius: @border-radius;
  font-size: @font-size;
  &:hover {
    border-color: @border-color-hover;
  }
  &:focus {
    box-shadow: inset 0px 1px 3px @border-shadow-color;
    outline: none;
  }
  &[disabled],
  &[readonly] {
    border-color: @disabled-color;
    color: @disabled-color;
    cursor: not-allowed;
  }
}
.error {
  border-color: @error-color;
}
.tips {
  display: flex;
  align-items: center;
  > .g-icon {
    margin-right: 4px;
  }
}
.wrapper {
  margin-left: 20px;
}
.icon-error {
  fill: @error-color;
}
.error-message {
  color: @error-color;
}
</style>
