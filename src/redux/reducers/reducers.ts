import { combineReducers } from '@reduxjs/toolkit';
import { postsReducer } from './posts';

export const reducers = combineReducers({
  posts: postsReducer,
});
