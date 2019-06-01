import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './app';

import history from '../history';

export default combineReducers({
  app: appReducer,
  router: connectRouter(history),
});
