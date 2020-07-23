import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './core';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';

/* Load fonts : https://github.com/typekit/webfontloader */
WebFont.load({
  google: {
    families: [
      'Nunito Sans:300,400,700',
      'Ubuntu:300,400,700',
      'Lato:400',
      'Boogaloo',
      'Merienda One',
      'Material+Icons',
      'sans-serif'
    ]
  }
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
