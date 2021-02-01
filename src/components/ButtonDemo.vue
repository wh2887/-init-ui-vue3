<template>
  <h1>Button 组件示例</h1>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
  <div class="demo api">
    <h2>API</h2>
    <table>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>value</td>
        <td>是否选中</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>禁用状态</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Button1Demo from './demo-code/Button1Demo.vue';
import Button2Demo from './demo-code/Button2Demo.vue';
import Button3Demo from './demo-code/Button3Demo.vue';
import Button4Demo from './demo-code/Button4Demo.vue';
import Button5Demo from './demo-code/Button5Demo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo, Button},
  setup() {
    const onClick = () => {
      console.log('Button被点击了');
    };
    return {onClick, Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
  }
};
</script>

<style lang="scss" scoped>

</style>