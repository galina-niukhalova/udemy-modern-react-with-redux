
export const FETCH_POSTS = 'fetch-posts';
export const FETCH_POST = 'fetch-post';
export const CREATE_POST = 'create-post';
export const DELETE_POST = 'delete-post';

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

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${KEY}`, values)
        // promise, will call after request successfully complited 
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}