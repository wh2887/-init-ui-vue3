<template>
  <div class="icon-wrapper">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#icon-'+`${name}`"></use>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String
  }
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}

</style>