<demo>
按钮尺寸
</demo>
<template>
  <Button size="big">big</Button>
  <Button size="normal">normal</Button>
  <Button size="small">small</Button>
</template>

<script lang="ts">
// 此组件引入方式为开发使用，生产者使用请移步 [开始使用] 这一章节！
import Button from '../../lib/Button.vue';
export default {
  components: {Button}
}
</script>
