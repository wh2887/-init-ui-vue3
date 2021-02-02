<template>
  <h1> Switch 组件示例 </h1>
  <Demo :component="Switch1Demo"/>
  <Demo :component="Switch2Demo"/>
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