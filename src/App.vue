<template>
  <h1>导航栏</h1>
  <router-link to="/">第一个组件</router-link>
  <br>
  <router-link to="/xxx">第二个组件</router-link>
  <hr/>

  <router-view></router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import McCall from './components/McCall.vue';

export default defineComponent({
  name: 'App',
  components: {
    McCall
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>