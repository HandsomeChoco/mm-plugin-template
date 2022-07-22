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

function srcLangReducer(state = 'set_src_auto', action) {
    switch (action.type) {
    case 'set_src_auto':
        return 'src_auto';
    case 'set_src_en':
        return 'src_en';
    case 'set_src_kr':
        return 'src_kr';
    case 'set_src_ru':
        return 'src_ru';
    default:
        return 'src_auto';
    }
}

function targetLangReducer(state = 'set_target_kr', action) {
    switch (action.type) {
    case 'set_target_auto':
        return 'target_auto';
    case 'set_target_en':
        return 'target_en';
    case 'set_target_kr':
        return 'target_kr';
    case 'set_target_ru':
        return 'target_ru';
    default:
        return 'target_auto';
    }
}

function mdFilterReducer(state = 'set_filter_all', action) {
    switch (action.type) {
    case 'set_filter_all':
        return 'filter_all';
    default:
        return 'filter_all';
    }
}

function serviceKindReducer(state = 'set_service_all', action) {
    switch (action.type) {
    case 'set_service_all':
        return 'service_all';
    case 'set_service_google':
        return 'service_google';
    case 'set_service_papago':
        return 'service_papago';
    case 'set_service_kakao':
        return 'service_kakao';
    default:
        return 'service_all';
    }
}

export default combineReducers({
    showModalReducer,
    srcLangReducer,
    targetLangReducer,
    serviceKindReducer,
    mdFilterReducer,
});