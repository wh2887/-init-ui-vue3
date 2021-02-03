<demo>
基本用法
</demo>
<template>
  <Button>默认按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="text">文本按钮</Button>
</template>

<script lang="ts">
// 此组件引入方式为开发使用，生产者使用请移步 [开始使用] 这一章节！
import Button from '../../lib/Button.vue';

export default {
  components: {Button}
};
</script>
