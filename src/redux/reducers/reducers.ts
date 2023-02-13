import { combineReducers } from '@reduxjs/toolkit';
import { postReducer } from './post';

export const reducers = combineReducers({
  post: postReducer,
});
