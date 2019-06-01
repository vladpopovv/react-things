import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store/createStore';
import history from './history';
import Sidebar from './components/sidebar';

const store = createStore();

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="root-container">
        <Sidebar />
        <h1>Hello, world!</h1>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
