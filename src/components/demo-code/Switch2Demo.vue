<demo>
禁用状态
</demo>
<template>
  <Switch v-model:value="keySwitch" disabled/>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const keySwitch = ref(false);
    return {keySwitch};
  }
};
</script>
