import {combineReducers} from 'redux';

function showModalReducer(state = false, action) {
    switch (action.type) {
    case 'set_show':
        return true;
    case 'set_hide':
        return false;
    default:
        return false;
    }
}

export default combineReducers({
    showModalReducer,
});