<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <p>{{description}}</p>
    <div class="demo-sample">
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions">
        <Button v-if="codeVisible" @click="hideCode">隐藏代码</Button>
        <Button v-else @click="showCode">查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';

const Prism = (window as any).Prism;
export default {
  components: {Button},
  props: {
    component: Object,
    description: {
      type: String,
      default: 'xxxx'
    }
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const codeVisible = ref(false);
    const showCode = () => codeVisible.value = true
    const hideCode = () => codeVisible.value = false
    return {Prism, html, codeVisible, showCode,hideCode};
  }
};
</script>

<style lang="scss" scoped>
@import "src/lib/styles/helper";

.demo {
  padding: 10px 0;
  width: 100%;
  > p{
    padding: 10px 0;
    color: $dark-grey-2;
    font-size: 14px;
  }

  &-sample {
    margin: 10px 0;
    padding: 8px 16px;

    &:hover {
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    }

    > .demo-component, .demo-actions {
      padding-bottom: 10px;
    }

    > .demo-component {

    }

    > .demo-actions {

    }

    > .demo-code {
      overflow-x: auto;
    }
  }
}

</style>