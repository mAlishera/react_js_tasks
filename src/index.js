import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import '../semantic/dist/semantic.min.css';

import App from './App';

const rootElement = document.getElementById('app');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer >
      <App />
    </AppContainer>,
    rootElement
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
