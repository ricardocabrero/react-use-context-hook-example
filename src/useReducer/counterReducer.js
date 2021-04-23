
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESTART = 'restart';

export default function counterReducer(state, action) {

    switch(action.type) {
        case INCREMENT:
            return state = state + 1;
        case DECREMENT:
            return state = state - 1;
        case RESTART:
            return state = action.payload;
        default:
            return state;
    }
}