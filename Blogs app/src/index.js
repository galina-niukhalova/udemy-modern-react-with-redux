import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Switch catch the first appropriate path
import { createStore, applyMiddleware } from 'redux';
import ReduxPromis from 'redux-promise';

import reducers from './reducers';
// BrawserRouter - History
// Route - configuration, if URL looks like this, than show this set of components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostIndex from './components/post-index';
import PostNew from './components/post-new';

const createStoreWithMiddleware = applyMiddleware(ReduxPromis)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={PostNew} />
          <Route path='/' component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
