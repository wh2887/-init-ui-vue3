<template>
  <div class="init-tabs">
    <div class="init-tabs-nav">
      <Button class="init-tabs-nav-item" theme="text" level="main"
              v-for="(t,index) in titles" :key="index"
              :class="{selected:t === selected}"
              @click="select(t)"
      >
        {{ t }}
      </Button>
    </div>
    <div class="init-tabs-content">
      <component class="init-tabs-content-item"
                 v-for="(c,index) in defaults" :is="c" :key="index"
                 :class="{selected:c.props.title === selected}"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue';
import Tab from './Tab.vue';
import Button from './Button.vue';

export default {
  components: {Button},
  props: {
    selected: {
      type: String
    }
  },
  setup(props, content) {
    const defaults = content.slots.default();
    // console.log(defaults[0].type === Tab);
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab！');
      }
    });
    const titles = defaults.map(tag => tag.props.title);
    const current = computed(() => {
      console.log('重新 return');
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (title: string) => {
      content.emit('update:selected', title);
    };
    return {defaults, titles, current, select};
  }
};
</script>

<style lang="scss">
.init-tabs {
  &-nav {
    display: flex;

    &-item {
      &:first-child {
      }

      &.selected {
        color: inherit;
      }
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>