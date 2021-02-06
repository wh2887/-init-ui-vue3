<demo>
基本用法
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
// 此组件引入方式为开发使用，生产者使用请移步 [开始使用] 这一章节！
import {Tabs,Tab} from '../../lib/index';
import {ref} from 'vue';

export default {
  components: {Tabs, Tab},
  setup() {
    const x = ref('导航1');
    return {x};
  },
};
</script>
