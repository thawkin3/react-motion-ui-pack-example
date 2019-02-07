import axios from 'axios';
import {
    TOGGLE_DISPLAY
} from './types';

export const toggleDisplay = () => dispatch => {
    dispatch({ type: TOGGLE_DISPLAY, payload: null });
}