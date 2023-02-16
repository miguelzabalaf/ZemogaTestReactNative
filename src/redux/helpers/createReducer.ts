import { PayloadAction } from '@reduxjs/toolkit';

interface Handler {
  [x: string]: (
    state: any,
    action: PayloadAction<any>,
  ) => {
    [x: string]: any;
  };
}

export const createReducer = (initialState: any, handler: Handler) => {
  return (state = initialState, action: PayloadAction<any>) => {
    return handler?.hasOwnProperty(action.type)
      ? handler[action.type](state, action)
      : state;
  };
};
