<template>
  <div class="topnav">
    <router-link class="logo" to="/">
      <Icon name="logo-top" v-if="toggleMenuButtonVisible"/>
    </router-link>
    <ul class="menu">
      <li>
        <a href="https://github.com/wh2887/-init-ui-vue3">Github</a>
      </li>
      <li>
        <a href="https://gitee.com/hellow2887/init-ui-vue3-store">Gitee</a>
      </li>
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <router-link to="/doc/switch">组件</router-link>
      </li>
    </ul>
    <div v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <Icon name="main"/>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';
import Icon from './Icon.vue';

export default {
  components: {Icon},
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
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
$main: #2143C8;
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  justify-content: center;
  align-items: center;

  > .logo {
    margin-right: auto;
    display: flex;
    align-items: center;
    > .icon-wrapper{
      font-size: 2em;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    align-items: center;
    color: $main;


    > li {
      margin: 0 1em;

      > a {
        border: none;
      }
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