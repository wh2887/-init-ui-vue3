<demo>
优先等级
</demo>
<template>
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
</template>

<script lang="ts">
// 此组件引入方式为开发使用，生产者使用请移步 [开始使用] 这一章节！
import Button from '../../lib/Button.vue';
export default {
  components: {Button}
}
</script>
