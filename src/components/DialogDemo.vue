<template>
  <h2>Dialog 示例1</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <h2>Dialog 示例2</h2>
  <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
    };
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok() {
          console.log('ok');
          return false;
        },
        cancel() {
          console.log('cancel');
        },
        closeOnClickOverlay: false
      });
    };
    return {x, toggle, f1, f2, showDialog};
  }
};
</script>

<style lang="scss" scoped>

</style>