import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostReducer from './reducer-post';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer
});

const store = createStore(rootReducer);

export default rootReducer;
