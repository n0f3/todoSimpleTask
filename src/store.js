import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index.js';

const middleWares = [];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');
  middleWares.push(logger);
}

const defaultState = {
  tasks: [],
  // for login functionality if needed
  user: {
    name: 'user',
  }
};

// Adding chrome redux devtools if available
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, defaultState, composeEnhancers(
  applyMiddleware(...middleWares)),
);

export default store;
