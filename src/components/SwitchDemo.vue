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