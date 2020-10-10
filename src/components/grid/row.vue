<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-row",
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    },
  },
  mounted() {
    if (this.gutter) {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter;
      });
    }
  },
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
  height: 100%;
}
</style>
