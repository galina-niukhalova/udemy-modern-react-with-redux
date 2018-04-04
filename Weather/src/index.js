import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromis from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// ReduxPromis convert promis to Obj (when we get a request's result)
const createStoreWithMiddleware = applyMiddleware(ReduxPromis)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
