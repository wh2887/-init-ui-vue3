import './assets/styles/reset.scss'
import './lib/styles/reset.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router/router';


const app = createApp(App);
app.use(router);
app.mount('#app');
