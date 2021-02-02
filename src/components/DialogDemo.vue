<template>
  <h1>Dialog 组件示例</h1>
  <p style="margin: 10px 0;color: #636366;font-size: 14px;">在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
  <Demo :component="Dialog1Demo" description="弹出一个对话框。"/>
  <Demo :component="Dialog2Demo" description="支持传入函数可选项，打开对话框。"/>
  <APIDemo :describe="describe"/>
</template>

<script lang="ts">
import Dialog1Demo from './demo-code/Dialog1Demo.vue';
import Dialog2Demo from './demo-code/Dialog2Demo.vue';
import Demo from './Demo.vue';
import APIDemo from './APIDemo.vue';

export default {
  components: {APIDemo, Demo},
  setup() {
    const describe = [
      {attribute: 'visible', explain: '是否显示 Dialog，支持 v-model', type: 'boolean', defaultValue: 'false'},
      {attribute: 'closeOnClickOverlay', explain: '是否可以通过点击 overlay 关闭 Dialog', type: 'boolean', defaultValue: 'true'},
      {attribute: 'ok', explain: '点击成功按钮执行的函数', type: 'Function', defaultValue: '---'},
      {attribute: 'cancel', explain: '点击 失败/取消 按钮执行的函数', type: 'Function', defaultValue: '---'},
    ];
    return {Dialog1Demo, Dialog2Demo, describe};
  }
};
</script>
