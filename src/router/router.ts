import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';
import intro from '../markdown/intro.md';
import install from '../markdown/install.md';
import getStarted from '../markdown/get-started.md';
import {h} from 'vue';
import Markdown from '../components/Markdown.vue';

const md = content => h(Markdown, {content: content, key: content});
const routes = [
  {path: '/', component: Home},
  {
    path: '/doc',
    component: Doc,
    children: [
      {path: '', redirect: '/doc/intro'},
      {path: 'intro', component: md(intro)},
      {path: 'install', component: md(install)},
      {path: 'get-started', component: md(getStarted)},
      {path: 'switch', component: SwitchDemo},
      {path: 'button', component: ButtonDemo},
      {path: 'dialog', component: DialogDemo},
      {path: 'tabs', component: TabsDemo},
    ]
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});