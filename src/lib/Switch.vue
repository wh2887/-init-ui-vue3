<template>
  <div>
    <button class="init-switch" @click="toggle" :class="{'init-checked':value}"><span></span></button>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
@import "src/lib/styles/helper.scss";

$h: 22px;
$h2: $h - 4px;
.init-switch {
  width: $h*2; height: $h; background: $light-grey-5;
  border: none; border-radius: $h/2; position: relative;

  > span {
    position: absolute; top: 2px; left: 2px;
    width: $h2; height: $h2; background: white;
    border-radius: $h2 / 2; transition: all 250ms;
  }

  &.init-checked {
    background: $light-green;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }

    &:active {
      > span {width: $h2 + 4px; margin-left: -4px;}
    }
  }

  &:focus { outline: none; }

  &:active {
    > span {width: $h2 + 4px;}
  }
}
</style>