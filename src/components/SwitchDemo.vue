<template>
  <h1> Switch 组件示例 </h1>
  <p style="margin: 10px 0;color: #636366;font-size: 14px;">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
  <Demo :component="Switch1Demo" description="最简单的用法。"/>
  <Demo :component="Switch2Demo" description="Switch 失效状态。"/>
  <APIDemo :describe="describe"/>
</template>

<script lang="ts">
import Switch1Demo from './demo-code/Switch1Demo.vue';
import Switch2Demo from './demo-code/Switch2Demo.vue';
import APIDemo from './APIDemo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo, APIDemo},
  setup() {
    const describe = [
      {attribute: 'value', explain: '是否选中', type: 'boolean', defaultValue: 'false'},
      {attribute: 'disabled', explain: '禁用状态', type: 'boolean', defaultValue: 'false'},
    ];
    return {Switch1Demo, Switch2Demo, describe};
  }
};
</script>