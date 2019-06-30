import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Link, Route} from 'react-router-dom';
import createStore from './store/createStore';
import history from './history';
import Home from './pages/home';
import Sidebar from './components/sidebar';

const store = createStore();

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="root-container">
        <Sidebar>
          <nav className="sidebar__menu">
            <Link
              className="sidebar__menu-item"
              href="/"
              to="/"
            >
              Main page
            </Link>
          </nav>
        </Sidebar>
        <Route path="/" component={Home} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
