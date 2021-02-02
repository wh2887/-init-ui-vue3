<template>
  <h1>Button 组件示例</h1>
  <p style="margin: 10px 0;color: #636366;font-size: 14px;">常用的操作按钮。</p>
  <Demo :component="Button1Demo" description="基础的按钮用法。提供三种不同类型的按钮样式：默认按钮，文本按钮，链接按钮。"/>
  <Demo :component="Button2Demo" description="Button 组件提供三种尺寸可选，可以在不同场景下选择合适的按钮尺寸。"/>
  <Demo :component="Button3Demo" description="按钮等级有三种类型：主按钮、默认按钮、危险按钮。"/>
  <Demo :component="Button4Demo" description="按钮不可用状态。"/>
  <Demo :component="Button5Demo" description="在按钮上显示加载状态。" />
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