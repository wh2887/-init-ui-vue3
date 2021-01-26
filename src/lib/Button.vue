<template>
  <button class="init-button" v-bind="$attrs" @click="onClick"
          :class="classes"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    theme: {
      type: String,
      default: 'button'
    },
  },
  setup(props) {
    const {size, theme} = props;
    const classes = computed(() => {
      return {
        [`init-size-${size}`]: size,
        [`init-theme-${theme}`]: theme,
      };
    });


    const onClick = (e: MouseEvent) => {
      const button = e.currentTarget;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
      circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
      circle.classList.add('init-button-ripple');
      const ripple = button.getElementsByClassName('init-button-ripple')[0];
      ripple && ripple.remove();
      button.appendChild(circle);
    };

    return {classes, onClick};
  }

};
</script>

<style lang="scss">
@import "src/lib/styles/helper.scss";

$radius: 4px;
$h: 32px;

.init-button {
  background: $light-green;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  border-radius: $radius;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: $light-grey-6;
  position: relative;
  overflow: hidden;

  & + & {
    margin-left: 8px;
  }

  &:hover {
    background: rgba($light-green, .9);
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.init-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.init-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.init-theme-link {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    color: $light-green;

    //&:hover,
    //&:focus {
    //  color: lighten($light-green, 10%);
    //}
  }

  > .init-button-ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.5);
  }
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>