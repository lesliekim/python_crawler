import { createStore } from 'redux';
import { INIT } from './actionTypes';

function reducer(state={}, action) {
    switch(action.type) {
        case INIT:
            return {...state, todayValue: action.todayValue};
        default:
            return state;
    }
}
export default createStore(reducer, {});