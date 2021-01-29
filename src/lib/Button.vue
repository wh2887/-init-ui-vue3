<template>
  <button class="init-button" @click="onClick" v-bind="$attrs"
          :class="classes" :disabled="disabled"
  >
    <span v-if="loading" class="init-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';
import {useRipple} from './useRipple';

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
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {size, theme, level, disabled} = props;
    const classes = computed(() => {
      return {
        [`init-size-${size}`]: size,
        [`init-theme-${theme}`]: theme,
        [`init-level-${level}`]: level,
      };
    });
    const onClick = (e: MouseEvent) => {
      useRipple(e, theme);
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

  &.init-theme-button + &.init-theme-button, &.init-theme-link + &.init-theme-link {
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

    &[disabled] {
      cursor: not-allowed;
      background: rgba($light-grey-4, .9);
      color: $light-grey-2;
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

    &[disabled] {
      cursor: not-allowed;
      color: $light-grey-2;
    }
  }

  &.init-theme-text {
    background: transparent; border-color: transparent; color: $dark-grey-4;
    position: relative;

    &:hover, &:focus {
      color: lighten($dark-grey-4, 10%); background: rgba($dark-grey-4, .1);
      border-radius: 0;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: $h - 2px;
        border-bottom: 2px solid $dark-grey-4;
      }
    }

    &:active { background: rgba($dark-grey-4, .2); }

    &.init-level-main {
      color: $light-green;

      &:hover, &:focus {
        color: lighten($light-green, 10%); background: rgba($light-green, .1);

        &:after {
          border-bottom: 2px solid $light-green;
        }
      }

      &:active { background: rgba($light-green, .2); }
    }

    &.init-level-danger {
      color: $light-red;

      &:hover, &:focus {
        color: lighten($light-red, 10%); background: rgba($light-red, .1);

        &:after {
          border-bottom: 2px solid $light-red;
        }
      }

      &:active { background: rgba($light-red, .2); }
    }

    &[disabled] {
      cursor: not-allowed;
      color: $light-grey-2;

      &:hover, &:focus {
        background: inherit;
      }
    }
  }

  > .init-loadingIndicator {
    width: 14px;
    height: 14px;border-radius: 8px;
    margin-right: 4px;
    border-color: $light-green transparent transparent transparent;
    border-style: solid;border-width: 2px;
    animation: init-spin 1s infinite linear;
  }

  > .init-button-ripple {
    position: absolute; border-radius: 50%; transform: scale(0);
    animation: ripple 600ms linear; background-color: rgba(255, 255, 255, 0.5);
  }
}

@keyframes init-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes ripple {
  to { transform: scale(4); opacity: 0; }
}
</style>