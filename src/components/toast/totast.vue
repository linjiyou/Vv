<template>
    <div class="toast">
     <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
   name:"s-toast"
}
</script>

<style lang="less" scoped>
@font-size:14px;
@toast-height:40px;
@toast-bg:rgba(0,0,0,0.75);
@toast-radius:4px;
@toast-shadow:0px 0px 3px 0px rgba(0,0,0,0.5);
  .toast{
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      font-size: @font-size;
      line-height: 1.8;
      height: @toast-height;
      display: flex;
      align-items: center;
      background: @toast-bg;
      border-radius: @toast-radius;
      box-shadow: @toast-shadow;
      color: white;
      padding: 0 16px ;

  }
</style>