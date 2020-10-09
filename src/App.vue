<template>
  <div id="app">
    <div v-if="false">
      <!-- // medium / small / mini -->
      <v-button>按钮</v-button>
      <v-button icon="settings">按钮</v-button>
      <v-button :loading="true">按钮</v-button>
      <v-button disabled>按钮</v-button>
    </div>
    <div style="margin-top:50px" v-if="false">
      <v-button size="medium" iconPosition="right" icon="settings"
        >按钮</v-button
      >
      <v-button size="small" iconPosition="right" icon="settings"
        >按钮</v-button
      >
      <v-button size="mini" iconPosition="right" icon="settings">按钮</v-button>
    </div>
    <div class="my-input">
      <s-input value="linjiyou"></s-input>

      <s-input value="linjiyou" disabled></s-input>

      <s-input value="linjiyou" readonly></s-input>

    </div>
    <div class="my-input">
        <s-input error="姓名不能少于两个字"></s-input>
    </div>
  </div>
</template>

<script>
import Button from "./components/button/button";
import Input from "./components/input/input";
export default {
  name: "App",
  components: {
    vButton: Button,
    sInput: Input,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.my-input{
  display: flex;
  margin-top: 20px;

}
</style>
