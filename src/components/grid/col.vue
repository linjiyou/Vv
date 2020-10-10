<template>
  <div class="col" :style="colStyle">
    <div class="col-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-col",
  props: {

  },
  created(){

  },
  data(){
      return{
          gutter:0,
          
      }
  },
  computed:{
      colStyle(){
          return{
            paddingLeft:this.gutter/2+'px',
            paddingRight:this.gutter/2+'px'
          }
      }
  }
};
</script>

<style lang="less" scoped>
.col {
  height: 100%;
  width: 50%;
  padding: 0 10px;
}

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
.col-content{
    border:1px solid #aaa;
    height: 100%;
    background: gray;
}
</style>
