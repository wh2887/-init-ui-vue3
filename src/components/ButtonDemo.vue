<template>
  <h2>Button 示例</h2>
  <h3>示例1： size 属性</h3>
  <div>
    <Button size="small"> small</Button>
    <Button> normal</Button>
    <Button size="big"> big</Button>
  </div>
  <hr/>
  <h3>示例1： theme 属性</h3>
  <div>
    <Button theme="button"> button</Button>
    <Button theme="link"> link</Button>
    <Button theme="text"> text</Button>
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