<template>
  <Button
      @click="onClick('click')"
      @focus="onClick('focus')"
      @mouseover="onClick('mouseover')"
  >按钮
  </Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = (value: String) => {
      console.log(value);
    };

    return {onClick};
  }
};
</script>

<style lang="scss" scoped>

</style>