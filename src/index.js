import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './core';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';

/* Loads fonts : https://github.com/typekit/webfontloader */
WebFont.load({
  google: {
    families: [
      'Ubuntu:400,700',
      'Lato:400',
      'Boogaloo',
      'Merienda One',
      'Material+Icons',
    ]
  }
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
