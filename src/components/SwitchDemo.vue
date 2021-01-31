<template>
  <h1> Switch 组件示例 </h1>
  <div class="demo">
    <h2>基本用法</h2>
    <div class="demo-sample">
      <div class="demo-component">
        <Switch v-model:value="keySwitch"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="keySwitch" /&gt;</pre>
      </div>
    </div>
  </div>
  <div class="demo">
    <h2>禁用状态</h2>
    <div class="demo-sample">
      <div class="demo-component">
        <Switch v-model:value="keySwitch" disabled/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="keySwitch" disabled /&gt;</pre>
      </div>
    </div>
  </div>
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
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
import Button from '../lib/Button.vue';

export default {
  components: {Button, Switch},
  setup() {
    const keySwitch = ref(false);
    return {keySwitch};
  }
};
</script>

<style lang="scss" scoped>
@import "src/lib/styles/helper";

.demo {
  padding: 10px 0;

  &-sample {
    margin: 10px 0;
    border: 1px solid $light-grey-5;
    padding: 8px 16px;

    &:hover {
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    }

    > .demo-component, .demo-actions {
      padding-bottom: 10px;
    }

    > .demo-component {

    }

    > .demo-actions {

    }

    > .demo-code {

    }
  }
}
</style>