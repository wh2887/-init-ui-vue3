<demo>
基本用法
</demo>
<template>
  <Switch v-model:value="keySwitch"/>
</template>

<script lang="ts">
// 此组件引入方式为开发使用，生产者使用请移步 [开始使用] 这一章节！
import {Switch} from '../../lib/index';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const keySwitch = ref(false);
    return {keySwitch};
  }
};
</script>
