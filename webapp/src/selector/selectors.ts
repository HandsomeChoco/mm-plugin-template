import {id as pluginId} from '../manifest';

const empty = {};
const getPluginState = (state) => state[`plugins-${pluginId}`] || empty;

export const getShowModal = (state) => getPluginState(state).showModalReducer;
export const getSrcLang = (state) => getPluginState(state).srcLangReducer;
export const getTargetLang = (state) => getPluginState(state).targetLangReducer;
export const getMdFilter = (state) => getPluginState(state).mdFilterReducer;
export const getServiceKind = (state) => getPluginState(state).serviceKindReducer;