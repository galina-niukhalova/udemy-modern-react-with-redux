import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // let posts = {};
            // for (let post of action.payload.data)
            //     posts[post.id] = post;
            return _.mapKeys(action.payload.data, 'id');
            break;
        case FETCH_POST:
            // const post = action.payload.data
            // const newState = { ...state }
            // newState[post.id] = post
            // return newState
            return { ...state, [action.payload.data.id]: action.payload.data}
            break;
        case DELETE_POST: 
            return _.omit(state, action.payload);
            break;
        default:
            return state;
            break;
    }
}