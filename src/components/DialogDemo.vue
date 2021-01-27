<template>
  <h2>Dialog 示例</h2>
  <Button @click="onClick">toggle</Button>
  <Dialog/>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';

export default {
  components: {Button, Dialog},
  setup() {
    const onClick = ()=> {
      console.log('hi');
    }
    return {onClick}
  }
};
</script>

<style lang="scss" scoped>

</style>