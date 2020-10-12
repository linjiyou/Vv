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
      type: [Number, String,Array],
    },
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      if( typeof gutter== 'object'){
       gutter= gutter[0]
      }
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
  flex-wrap: wrap;
  height: 100%;
}
</style>
