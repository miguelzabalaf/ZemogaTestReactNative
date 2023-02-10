import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './../../redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export function ReduxStoreWrapper(
  Component: React.FC,
  props = {},
): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
}
