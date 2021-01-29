<template>
  <div>
    Tabs 组件
    <Button theme="text" level="main" v-for="(t,index) in titles" :key="index">{{ t }}</Button>
    <component v-for="(c,index) in defaults" :is="c" :key="index"/>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import Button from './Button.vue';

export default {
  components: {Button},
  setup(props, content) {
    const defaults = content.slots.default();
    // console.log(defaults[0].type === Tab);
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab！');
      }
    });
    const titles = defaults.map(tag => tag.props.title);
    return {defaults, titles};
  }
};
</script>

<style lang="scss">

</style>