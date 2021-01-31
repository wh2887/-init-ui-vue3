<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol ref="list" v-for="(item,id) in docList" :key="id">
          <li>
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol ref="list" v-for="(item,id) in compList" :key="id">
          <li>
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, inject} from 'vue';
import Topnav from '../components/Topnav.vue';

export default {
  components: {
    Topnav
  },
  setup() {
    const list = ref(null);
    const docList = [
      {id: 0, path: '/doc/intro', name: '介绍'},
      {id: 1, path: '/doc/install', name: '安装'},
      {id: 2, path: '/doc/get-started', name: '开始使用'},
    ];
    const compList = [
      {id: 0, path: '/doc/switch', name: 'Switch'},
      {id: 1, path: '/doc/button', name: 'Button'},
      {id: 2, path: '/doc/dialog', name: 'Dialog'},
      {id: 3, path: '/doc/tabs', name: 'Tabs'},
    ];
    const menuVisible = inject<ref<boolean>>('menuVisible');
    return {menuVisible, list, docList, compList};
  }
};
</script>

<style lang="scss" scoped>
@import "src/lib/styles/helper.scss";

$bg: #E7EEF9;
$main: #2143C8;
.router-link-active {
  color: $main;
  background: rgba($main, .1);
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    background: $bg;
    box-shadow: 0 0 0 1px rgba(black, .1);
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
    max-width: 800px;
  }
}

aside {
  background: white;
  width: 150px;
  position: fixed;
  padding: 70px 16px 16px;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: 0 0 0 2px rgba(#333, .1);
  z-index: 20;
  @media (max-width: 500px) {
    width: 150px;
  }

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      width: 100%;
      margin-bottom: 2px;

      > a {
        border: none;
        padding: 4px 16px;
        border-radius: 4px;
        display: inline-block;
        width: 100%;

        &:hover, &:focus {
          background: rgba($main, .1);
        }

        &:active {
          color: $main;
          background: rgba($main, .1);
        }
      }


    }
  }

  main {
    overflow: auto;
  }
}
</style>