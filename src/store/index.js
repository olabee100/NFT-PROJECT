import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { nftReducer } from '../reducers/index';

const rootReducer = combineReducers({
    nfts: nftReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
