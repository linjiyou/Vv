<template>
<transition name="slide">
  <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="hide">close</button>
  </div>
</transition>
</template>

<script>
export default {
 name:"s-sider",
 data(){
   return{
     visible:true
   }
 },
 methods:{
   hide(){
     this.visible=!this.visible
   }
 }
}
</script>

<style lang="less" scoped>
   .sider{
     position: relative;
     >button{
       position: absolute;
       top: 0;
       right: 0;
     }
   }
   .slide-enter-active,.slide-leave-active{
     transition: all .5s;
   }
   .slide-enter,.slide-leave-to{
     margin-left: -200px;
   }
</style>