<template>
  <button class="init-button" @click="onClick"
          :class="classes" :disabled="disabled"
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
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {size, theme, level,disabled} = props;
    const classes = computed(() => {
      return {
        [`init-size-${size}`]: size,
        [`init-theme-${theme}`]: theme,
        [`init-level-${level}`]: level,
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
      theme !== 'link' && button.appendChild(circle);
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
  background: $dark-grey-4; height: $h;
  padding: 0 12px; cursor: pointer; border-radius: $radius; border: none;
  display: inline-flex; justify-content: center; align-items: center; white-space: nowrap;
  color: $light-grey-6; position: relative; overflow: hidden;

  & + & {
    margin-left: 8px;
  }

  &:hover { background: rgba($dark-grey-4, .9); }

  &:focus { outline: none; }

  &::-moz-focus-inner { border: 0; }

  &.init-size-big {
    font-size: 24px; height: 48px; padding: 0 16px;
  }

  &.init-size-small {
    font-size: 12px; height: 20px; padding: 0 4px;
  }

  &.init-theme-button {
    &.init-level-main {
      background: $light-green;

      &:hover, &:focus {
        background: rgba($light-green, .9);
      }
    }

    &.init-level-danger {
      background: $light-red;

      &:hover, &:focus {
        background: rgba($light-red, .9);
      }
    }

  }
  &.init-theme-link {
    background: transparent; border-color: transparent; box-shadow: none; color: $dark-grey-4;
    &:hover, &:focus {
      color: lighten($dark-grey-4, 10%);
    }
    &:active { color: darken($dark-grey-4, 10%); }
    &.init-level-main {
      color: $light-green;
      &:hover, &:focus {
        color: lighten($light-green, 10%);
      }
      &:active { color: darken($light-green, 10%); }
    }
    &.init-level-danger {
      color: $light-red;
      &:hover, &:focus {
        color: lighten($light-red, 10%);
      }
      &:active { color: darken($dark-red, 10%); }
    }
  }
  &.init-theme-text {
    background: transparent; border-color: transparent; color: $dark-grey-4;
    &:hover, &:focus {
      color: lighten($dark-grey-4, 10%); background: rgba($dark-grey-4, .1);
    }
    &:active { background: rgba($dark-grey-4, .2); }
    &.init-level-main {
      color: $light-green;
      &:hover, &:focus {
        color: lighten($light-green, 10%); background: rgba($light-green, .1);
      }
      &:active { background: rgba($light-green, .2); }
    }
    &.init-level-danger {
      color: $light-red;
      &:hover, &:focus {
        color: lighten($light-red, 10%); background: rgba($light-red, .1);
      }
      &:active { background: rgba($light-red, .2); }
    }
  }

  &.init-theme-button{}
  > .init-button-ripple {
    position: absolute; border-radius: 50%; transform: scale(0);
    animation: ripple 600ms linear; background-color: rgba(255, 255, 255, 0.5);
  }
}

@keyframes ripple {
  to { transform: scale(4); opacity: 0; }
}
</style>