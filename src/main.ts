import {createApp} from 'vue';
import App from './App.vue';
import './assets/styles/reset.scss';
import {router} from './router/router';


const app = createApp(App);
app.use(router);
app.mount('#app');
