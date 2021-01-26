<template>
  <button class="init-button" v-bind="$attrs"
          @click="onClick"
  >
    <span class="init-button-text">
      <slot/>
    </span>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  setup() {
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
      if (ripple) {
        ripple.remove();
      }
      button.appendChild(circle);
    };

    return {onClick};
  }

};
</script>

<style lang="scss">
@import "src/lib/styles/helper.scss";

.init-button {
  background: $light-green;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  color: $light-grey-6;
  margin: 10px;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba($light-green, .9);
  }

  > .init-button-ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  > .init-button-text {
    z-index: 2;
  }
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>