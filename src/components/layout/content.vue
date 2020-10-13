<template>
  <div class="content">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:"s-content"
}
</script>

<style lang="less" scoped>
  .content{
      flex-grow: 1;
  }
</style>