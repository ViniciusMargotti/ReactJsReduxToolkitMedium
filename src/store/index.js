import {createStore} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import rootReducer from './modules/rootReducer';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'ReactjsReduxSeedCatalogo',
    storage,
    blacklist: ['']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
