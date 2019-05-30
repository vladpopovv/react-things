import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';

const store = createStore();

ReactDom.render(
  <Provider store={store}>
    <h1>Hello, world!</h1>
  </Provider>,
  document.getElementById('app'),
);
