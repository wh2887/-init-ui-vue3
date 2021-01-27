<template>
  <h2>Button 示例</h2>
  <h3>示例1： size 属性</h3>
  <div>
    <Button size="small"> small</Button>
    <Button> normal</Button>
    <Button size="big"> big</Button>
  </div>
  <h3>示例2： theme 属性</h3>
  <div>
    <Button theme="button"> button</Button>
    <Button theme="link"> link</Button>
    <Button theme="text"> text</Button>
  </div>
  <h3>示例3： level 属性</h3>
  <div>
    <div>
      <Button> normal</Button>
      <Button level="main"> main</Button>
      <Button level="danger"> danger</Button>
    </div>
    <div>
      <Button theme="link"> normal</Button>
      <Button theme="link" level="main"> link main</Button>
      <Button theme="link" level="danger"> link danger</Button>
    </div>
    <div>
      <Button theme="text"> normal</Button>
      <Button theme="text" level="main"> text main</Button>
      <Button theme="text" level="danger"> text danger</Button>
    </div>
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