// Third Party
import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from "redux-persist";
import logger from 'redux-logger';

// Utility
import { reducer } from './reducers/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [

  ]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer, applyMiddleware(logger)
);

const persistor = persistStore(store, null, () => {
  console.log('rehydrated')
});

export {
  store,
  persistor
}

