<template>
  <div class="topnav">
    <div class="logo" @click="goBackHome">
      <img src="src/assets/logo-top.png" alt="回到首页">
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
  methods: {
    goBackHome() {
      this.$router.push('/');
    }
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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