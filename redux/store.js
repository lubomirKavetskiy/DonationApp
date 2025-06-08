import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {logger} from 'redux-logger';

import User from './reducers/User';
import Categories from './reducers/Categories';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export const persistor = persistStore(store);
