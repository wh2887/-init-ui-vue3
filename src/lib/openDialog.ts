import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

type OptionsType = {
  title: String,
  content: String,
  ok: Function,
  cancel: Function,
  closeOnClickOverlay: Boolean
}

export const openDialog = (options: OptionsType) => {
  const {title, content, ok, cancel,closeOnClickOverlay} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newVisible: Boolean) => {
          if (newVisible === false) {
            close();
          }
        },
        ok, cancel,closeOnClickOverlay
      }, {title, content});
    }
  });
  app.mount(div);
};