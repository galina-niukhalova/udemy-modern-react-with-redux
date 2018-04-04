import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // let posts = {};
            // for (let post of action.payload.data)
            //     posts[post.id] = post;
            return _.mapKeys(action.payload.data, 'id');
            break;
        default:
            return state;
            break;
    }
}