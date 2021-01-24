<template>
  <div>
    <button><span></span></button>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  width: $h*2;
  height: $h;
  background: blue;
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
  transition: left 250ms;
}

button:hover > span {
  left: calc(100% - #{$h2} - 2px);
}

button:focus {
  outline: none;
}

</style>