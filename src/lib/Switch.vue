<template>
  <div>
    <button @click="toggle" :class="{checked:value}"><span></span></button>
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

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  width: $h*2;
  height: $h;
  background: #C7C6C1;
  border: none;
  border-radius: $h/2;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  width: $h2;
  height: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: all 250ms;
}

button.checked {
  background: #3EAF7C;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}

button:focus {
  outline: none;
}

button:active {
  > span {width: $h2 + 4px;}
}
button.checked:active{
  > span {width: $h2 + 4px; margin-left: -4px;}
}

</style>