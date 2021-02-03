<demo>
函数式调用
</demo>
<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts">
// 此组件引入方式为开发使用，生产者使用请移步 [开始使用] 这一章节！
import {Button,openDialog} from '../../lib/index';

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
