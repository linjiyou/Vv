<template>
  <div class="toast" ref="toast" id="toast">
    <span class="text">
      <slot v-if="!enableHtml"></slot>
      <p v-else v-html="$slots.default"></p>
    </span>
    <span class="line" ref="line"></span>
    <span
      class="close"
      v-if="closeButton"
      v-text="closeButton.text"
      @click="onClickClose"
    ></span>
  </div>
</template>

<script>
import Vue from "vue";
// 构造组件的选项
export default {
  name: "s-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: false,
    },
    autoCloseDelay: {
      type: Number,
      default: 3000,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
      this.close();
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay);
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    },
  },
  mounted() {
    this.updateStyle();
    this.execAutoClose();
  },
};
</script>

<style lang="less" scoped>
@font-size: 14px;
@toast-min-height: 40px;
@toast-bg: rgba(0, 0, 0, 0.75);
@toast-radius: 4px;
@toast-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: @font-size;
  line-height: 1.8;
  min-height: @toast-min-height;
  display: flex;
  align-items: center;
  background: @toast-bg;
  border-radius: @toast-radius;
  box-shadow: @toast-shadow;
  color: white;
  padding: 0 16px;

  .close {
    padding-left: 16px;
  }
  .line {
    height: 100%;
    border-left: 1px solid #aaa;
  }
  .text {
    display: inline-block;
    padding: 4px 16px 8px 0;

    max-width: 320px;
    word-break: break-all;
  }
}
</style>
