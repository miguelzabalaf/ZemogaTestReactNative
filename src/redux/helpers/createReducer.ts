import { PayloadAction } from '@reduxjs/toolkit';

interface Handler {
  [x: string]: (
    state: Object,
    action: PayloadAction<Object>,
  ) => {
    [x: string]: Object;
  };
}

export const createReducer = (initialState: Object, handler: Handler) => {
  return (state = initialState, action: PayloadAction<Object>) => {
    return handler?.hasOwnProperty(action.type)
      ? handler[action.type](state, action)
      : state;
  };
};
