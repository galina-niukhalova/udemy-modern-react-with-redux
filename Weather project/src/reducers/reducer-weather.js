import { FETCH_WEATHER } from '../actions/index';


export default function (state = [], action) {
    switch (action.type) {
        // concat return a new array
        // state.push() is BAD, we should change the state directly
        case FETCH_WEATHER:
            // return state.concat([action.payload.data])
            return [action.payload.data, ...state];
    }

    return state;
}