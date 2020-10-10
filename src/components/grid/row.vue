<template>
  <div
    class="row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  >
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
  created() {
  
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
