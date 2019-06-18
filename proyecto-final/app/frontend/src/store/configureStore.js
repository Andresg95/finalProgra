import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import HomeReducer from '../home/HomeReducer';

/* eslint-disable no-underscore-dangle */
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => {
  const store = createStore(
    combineReducers({
      home: HomeReducer,
    }),
    composeEnchancers(applyMiddleware(thunk)),
  );

  return store;
};
