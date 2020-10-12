<template>
  <div class="col" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-col",
  props: {},
  created() {},
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      let { gutter } = this;
      if (typeof gutter == "object") {
        return {
          paddingLeft: this.gutter[0] / 2 + "px",
          paddingRight: this.gutter[0] / 2 + "px",
          marginTop: this.gutter[1] / 2 + "px",
          marginBottom: this.gutter[1] / 2 + "px",
        };
      } else {
        return {
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px",
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
.col {
  height: 100%;
  width: 50%;
}
// 默认iPhone
.span-loop(@index) when (@index > 0) {
  .col[data-span="@{index}"] {
    width: (@index / 24) * 100%;
  }
  .span-loop(@index - 1);
}
.span-loop(24);
.offset-loop(@index) when (@index > 0) {
  .col[offset="@{index}"] {
    margin-left: (@index / 24) * 100%;
  }
  .offset-loop(@index - 1);
}
.offset-loop(24);
.col-content {
  border: 1px solid #aaa;
  height: 100%;
  background: gray;
}

@media screen and (min-width: 576px) {
  .span-loop(@index) when (@index > 0) {
    .col[ipad-span="@{index}"] {
      width: (@index / 24) * 100%;
    }
    .span-loop(@index - 1);
  }
  .span-loop(24);
  .offset-loop(@index) when (@index > 0) {
    .col[ipad-offset="@{index}"] {
      margin-left: (@index / 24) * 100%;
    }
    .offset-loop(@index - 1);
  }
  .offset-loop(24);
}
@media screen and (min-width: 769px) {
  .span-loop(@index) when (@index > 0) {
    .col[narrow-pc-span="@{index}"] {
      width: (@index / 24) * 100%;
    }
    .span-loop(@index - 1);
  }
  .span-loop(24);
  .offset-loop(@index) when (@index > 0) {
    .col[narrow-pc-offset="@{index}"] {
      margin-left: (@index / 24) * 100%;
    }
    .offset-loop(@index - 1);
  }
  .offset-loop(24);
}
@media screen and (min-width: 993px) {
  .span-loop(@index) when (@index > 0) {
    .col[pc-span="@{index}"] {
      width: (@index / 24) * 100%;
    }
    .span-loop(@index - 1);
  }
  .span-loop(24);
  .offset-loop(@index) when (@index > 0) {
    .col[pc-offset="@{index}"] {
      margin-left: (@index / 24) * 100%;
    }
    .offset-loop(@index - 1);
  }
  .offset-loop(24);
}
@media screen and (min-width: 1201px) {
  .span-loop(@index) when (@index > 0) {
    .col[wide-pc-span="@{index}"] {
      width: (@index / 24) * 100%;
    }
    .span-loop(@index - 1);
  }
  .span-loop(24);
  .offset-loop(@index) when (@index > 0) {
    .col[wide-pc-span="@{index}"] {
      margin-left: (@index / 24) * 100%;
    }
    .offset-loop(@index - 1);
  }
  .offset-loop(24);
}
</style>
