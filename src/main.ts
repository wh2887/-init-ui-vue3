import './assets/styles/reset.scss';
import './lib/styles/reset.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router/router';
import 'github-markdown-css';
import Markdown from './components/Markdown.vue';


const app = createApp(App);
// @ts-ignore
app.use(router);
app.mount('#app');
app.component('Markdown',Markdown)