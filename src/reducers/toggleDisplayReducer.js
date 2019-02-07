import { TOGGLE_DISPLAY } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function(state = INITIAL_STATE.divIsShowing, actions) {
    switch (actions.type) {
        case TOGGLE_DISPLAY:
            return !state;
        default:
            return state;
    }
}