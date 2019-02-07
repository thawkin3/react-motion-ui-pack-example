import { combineReducers } from 'redux';

import toggleDisplayReducer from './toggleDisplayReducer';

export default combineReducers({
    divIsShowing: toggleDisplayReducer
});
