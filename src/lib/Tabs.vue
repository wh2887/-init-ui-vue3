<template>
  <div class="init-tabs">
    <div class="init-tabs-nav" ref="container">
      <div class="init-tabs-nav-item" v-for="(t,index) in titles" :key="index" @click="select(t)"
           :ref="el =>{if(t===selected)selectedItem=el}" :class="{selected:t === selected}">
        {{ t }}
      </div>
      <div class="init-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="init-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref, watchEffect, onMounted, onUpdated} from 'vue';
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
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    let left;
    let number = ref(0);
    const moveBottom = () => {
      const {width} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = selectedItem.value.getBoundingClientRect();
      left = left2 - left1;
      indicator.value.style.left = left + 'px';
    };
    onMounted(() => { moveBottom(); });
    onUpdated(() => { moveBottom(); });
    const defaults = content.slots.default();
    defaults.forEach(tag => { if (tag.type !== Tab) { throw new Error('Tabs 子标签必须是 Tab！');}});
    const current = computed(() => { return defaults.find(tag => tag.props.title === props.selected); });
    const titles = defaults.map(tag => {return tag.props.title;});
    const select = (title: string) => {
      number.value += 1;
      content.emit('update:selected', title);
    };
    return {current, defaults, titles, select, selectedItem, indicator, container};
  }
};
</script>

<style lang="scss">
$bg: white;
$selected-bg: #ECECEC;
$color: #313131;

.init-tabs {
  &-nav {
    display: flex;
    color: #333;
    border-bottom: 1px solid #eee;
    position: relative;
    width: 100%;

    &-item {
      padding: 8px 13px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: #313131;
        background: $selected-bg;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $color;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>