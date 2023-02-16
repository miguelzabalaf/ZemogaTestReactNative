import { combineReducers } from '@reduxjs/toolkit';
import { postReducer } from './post';
import { userReducer } from './user';

export const reducers = combineReducers({
  post: postReducer,
  user: userReducer,
});
