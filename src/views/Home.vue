<template>
  <div class="init-home-wrapper">
    <Topnav/>
    <div class="banner">
      <Icon name="logo"/>
      <h2>一个简单的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/wh2887/-init-ui-vue3">GitHub</a>
        <a href="https://gitee.com/hellow2887/init-ui-vue3-store">Gitee</a>
        <router-link to="/doc">快速上手</router-link>
      </p>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API 编写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light-bulb"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import Icon from '../components/Icon.vue';

export default {
  components: {
    Icon,
    Topnav
  }
};
</script>

<style lang="scss" scoped>

$main: #2143C8;
.init-home-wrapper {
  display: flex;
  flex-direction: column;

  > .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $main;
    background: linear-gradient(180deg, rgba(229, 237, 248, 1) 0%, rgba(242, 246, 252, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);

    > .icon-wrapper {
      font-size: 128px;
    }

    > .actions {
      padding: 8px;

      a {
        text-align: center;
        margin: 0 8px;
        background: $main;
        color: white;
        display: inline-block;
        border-radius: 4px;
        padding: 8px 16px;
        border: none;

        &:hover, &:focus {
          background: rgba($main, .9);
        }
      }
    }
  }
}

.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
</style>