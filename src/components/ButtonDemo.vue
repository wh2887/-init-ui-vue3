<template>
  <h2>Button 示例</h2>
  <h3>示例1： size 属性</h3>
  <div>
    <Button size="small"> small</Button>
    <Button> normal</Button>
    <Button size="big"> big</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
  }
};
</script>

<style lang="scss" scoped>

</style>