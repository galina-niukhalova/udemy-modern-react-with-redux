
// State argument is not app state
// Only the state this reducer is responsible for
export default function (state=null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            break;
    }

    return state;
}