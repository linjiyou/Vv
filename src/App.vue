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
      <s-input :value="message" @input="input"></s-input>
      <p>{{ message }}</p>
      <s-input value="linjiyou" disabled></s-input>
      <s-input value="linjiyou" readonly></s-input>
    </div>
    <div class="my-input">
      <s-input error="姓名不能少于两个字"></s-input>
    </div>
    <!-- ==================网格系统====================== -->
    <!-- 程序员的工作50%以上不是写代码 -->
    <!-- git branch        git push origin '本地分支':远程分支 -->
    <div class="grid">
      <!-- <s-row>
        <s-col></s-col>
        <s-col></s-col>
      </s-row>
      <s-row>
        <s-col></s-col>
        <s-col></s-col>
        <s-col></s-col>
        <s-col></s-col>
      </s-row>
      <s-row>
        <s-col data-span="5"></s-col>
        <s-col data-span="19"></s-col>
      </s-row>
      <s-row>
        <s-col data-span="6"></s-col>
        <s-col data-span="6"></s-col>
        <s-col data-span="6"></s-col>
        <s-col data-span="6"></s-col>
      </s-row>
      <s-row>
        <s-col data-span="5"></s-col>
        <s-col data-span="5" offset="14"></s-col>
      </s-row>
      <s-row>
        <s-col data-span="5"></s-col>
        <s-col data-span="5" offset="5"></s-col>
        <s-col data-span="5" offset="4"></s-col>
      </s-row>
      <s-row gutter="20">
        <s-col></s-col>
        <s-col></s-col>
        <s-col></s-col>
        <s-col></s-col>
      </s-row>
      <s-row gutter="100">
        <s-col></s-col>
        <s-col></s-col>
        <s-col></s-col>
        <s-col></s-col>
      </s-row> -->
      <s-row :gutter="12" >
        <s-col data-span="24" ipad-span="12" narrow-pc-span="8">
          <div style="height:100px; background:#bbb;border:1px solid #aaa" ></div>
        </s-col>
          <s-col data-span="24" ipad-span="12" narrow-pc-span="8">
          <div style="height:100px; background:#bbb;border:1px solid #aaa" ></div>
        </s-col>
         <s-col data-span="24" ipad-span="12" narrow-pc-span="8">
          <div style="height:100px; background:#bbb;border:1px solid #aaa" ></div>
        </s-col>
         <s-col data-span="24" ipad-span="12" narrow-pc-span="8">
          <div style="height:100px; background:#bbb;border:1px solid #aaa" ></div>
        </s-col>
         <s-col data-span="24" ipad-span="12" narrow-pc-span="8">
          <div style="height:100px; background:#bbb;border:1px solid #aaa" ></div>
        </s-col>
      </s-row>
    </div>
  </div>
</template>

<script>
import Button from "./components/button/button";
import Input from "./components/input/input";
import Col from "./components/grid/col";
import Row from "./components/grid/row";
import Vue from "vue";

Vue.component("s-input", Input);
Vue.component("s-row", Row);
Vue.component("s-col", Col);
export default {
  name: "App",
  components: {
    vButton: Button,
  },
  methods: {
    change(e) {
      console.log(e.target.value);
    },
    input(e) {
      this.message = e;
    },
  },
  data() {
    return {
      message: "hi",
    };
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.my-input {
  display: flex;
  margin-top: 20px;
}
.grid {
  height: 100px;
}
</style>
