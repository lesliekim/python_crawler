import { INIT } from './actionTypes';

export const init = value => ({
    type: INIT,
    todayValue: value
});