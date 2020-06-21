import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducers';
import registerReducers from './registerReducers'

const persistConfig = {
    key: 'fabricspa',
    storage,
    whitelist: ['newUser']
}

const rootReducer = combineReducers({
    auth: authReducer,
    newUser: registerReducers,
});

export default persistReducer(persistConfig, rootReducer);