<template>
  <div class="layout" :class="layoutCla">
      <slot></slot>
  </div>
</template>

<script>
export default {
   name:"s-layout",
   data(){
       return{
           layoutCla:{
               hasSider:false
           }
       }
   },
   created(){

   },
   mounted(){
  
    this.$children.forEach(vm => {
        if(vm.$options.name==='s-sider'){
              this.layoutCla.hasSider=true
        }
    });
   }
}
</script>

<style lang="less" scoped>
 .layout{
     display: flex;
     flex-grow: 1;
     flex-direction: column;
     border:1px solid black;
     &.hasSider{
         flex-direction:row;
     }
 }
</style>