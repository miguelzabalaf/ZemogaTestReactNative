import { createReducer } from './../../../redux/helpers/createReducer';
import { PostsReducer } from './interfaces/interfaces';
import { types } from './../../../redux/constants/types';

export const postsReducerInitialState: PostsReducer = {
  posts: [],
};

const postsReducerHandler = {
  [types.posts.getAllPosts]: (state: any, action: any) => {
    return {
      ...state,
      posts: action.payload,
    };
  },
};

export const postsReducer = createReducer(
  postsReducerInitialState,
  postsReducerHandler,
);
