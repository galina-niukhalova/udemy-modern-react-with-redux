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
import PostShow from './components/post-show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromis)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* this new component will have some help staff: this.props.history to nav */}
          <Route path='/posts/new' component={PostNew} />
          <Route path='/posts/:id' component={PostShow} />
          {/* can set several param */}
          {/* will be abble this.props.match.params.name */}
          {/* <Route path='/posts/:id/:key/:index' component={PostShow} /> */}
          <Route path='/' component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
