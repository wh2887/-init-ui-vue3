<template>
  <div class="topnav">
    <div class="logo">
      <img src="src/assets/logo-top.png" alt="">
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <div class="toggleAside" @click="toggleMenu">
      <Icon name="main"/>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';
import Icon from './Icon.vue';

export default {
  components: {
    Icon
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => { menuVisible.value = !menuVisible.value; };
    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    margin-right: auto;
    display: flex;
    align-items: center;

    > img {
      max-height: 1.5em;
      max-width: 100%;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    align-items: center;


    > li {
      margin: 0 1em;
    }
  }

  > .toggleMenu {}

  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
      font-size: 1.5em;
    }
  }
}


</style>