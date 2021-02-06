<demo>
禁用状态
</demo>
<template>
  <Button disabled> button</Button>
  <Button theme="link" disabled> link</Button>
  <Button theme="text" disabled> text</Button>
</template>

<script lang="ts">
// 此组件引入方式为开发使用，生产者使用请移步 [开始使用] 这一章节！
import {Button} from '../../lib/index';
export default {
  components: {Button},
};
</script>

