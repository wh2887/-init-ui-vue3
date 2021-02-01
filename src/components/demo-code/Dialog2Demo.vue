<demo>
函数式调用
</demo>
<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/openDialog';

export default {
  components: {Button},
  setup() {
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
    return {showDialog};
  }
};
</script>
