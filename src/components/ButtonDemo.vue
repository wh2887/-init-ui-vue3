<template>
  <h1>Button 组件示例</h1>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
  <APIDemo :describe="describe"/>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Button1Demo from './demo-code/Button1Demo.vue';
import Button2Demo from './demo-code/Button2Demo.vue';
import Button3Demo from './demo-code/Button3Demo.vue';
import Button4Demo from './demo-code/Button4Demo.vue';
import Button5Demo from './demo-code/Button5Demo.vue';
import Demo from './Demo.vue';
import APIDemo from './APIDemo.vue';

export default {
  components: {Demo, Button, APIDemo},
  setup() {
    const onClick = () => {
      console.log('Button被点击了');
    };
    const describe = [
      {attribute: 'theme', explain: '设置按钮类型', type: 'button | text | link', defaultValue: 'button'},
      {attribute: 'size', explain: '设置按钮尺寸', type: 'big | small | normal', defaultValue: 'normal'},
      {attribute: 'level', explain: '设置按钮等级', type: 'danger | main | normal', defaultValue: 'normal'},
      {attribute: 'disabled', explain: '禁用状态', type: 'boolean', defaultValue: 'false'},
      {attribute: 'loading', explain: '加载状态', type: 'boolean', defaultValue: 'false'},
    ];
    return {onClick, describe, Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
  }
};
</script>

<style lang="scss" scoped>

</style>