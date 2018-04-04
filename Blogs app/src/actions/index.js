
export const FETCH_POSTS = 'fetch-posts';
import axios from 'axios';

const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const KEY = '?key=galina1234';


export default function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}