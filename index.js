import App from './app/App.radi';
import { r, mount } from 'radi';

import './assets/stylus/main.styl'

var toDestroy = mount(r(App), app);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    // Before restarting the app, we create a new root element and dispose the old one
    for (var i = 0; i < toDestroy.length; i++) {
      toDestroy[i].destroy();
    }
    var del = document.getElementById('app');
    del.parentNode.replaceChild(del.cloneNode(false), del);
  });
}
