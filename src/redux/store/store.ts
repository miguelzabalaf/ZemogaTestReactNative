import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { PostReducer } from '../reducers/post/interfaces';
import { initialStates } from '../constants/initialStates';
import { reducers } from '../reducers';

export interface ReduxStore {
  post: PostReducer;
}

export const storeInitialState = {
  post: initialStates.post,
};

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  // blacklist: [],
  whitelist: ['post'],
};

const persistReduce = persistReducer(persistConfig, reducers);

const reduxInmmutableStateInvariant =
  require('redux-immutable-state-invariant').default();

export const store = configureStore({
  reducer: persistReduce,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? [
          ...getDefaultMiddleware({ serializableCheck: false }),
          reduxInmmutableStateInvariant,
        ]
      : getDefaultMiddleware({
          serializableCheck: false,
        }),
  preloadedState: storeInitialState,
  devTools: __DEV__,
});

export const persistor = persistStore(store);
