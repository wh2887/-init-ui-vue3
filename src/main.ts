import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import McCall from './components/McCall.vue';
import McCall2 from './components/McCall2.vue';

const routes = [
  {path: '/', component: McCall},
  {path:'/xxx',component: McCall2}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App)
app.use(router)
app.mount('#app');
