<template>
  <button class="init-button" v-bind="$attrs">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss">
.init-button {
  border: 1px solid blue;
  margin: 10px;
}
</style>