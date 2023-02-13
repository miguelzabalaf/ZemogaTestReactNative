import { types } from 'src/redux/constants/types';
import { createReducer } from '../../helpers/createReducer';
import { PostReducer } from './interfaces/interfaces';
import { PayloadAction } from '@reduxjs/toolkit';
import { PostEntity } from 'src/domain/entities/post.entity';

export const postReducerInitialState: PostReducer = {
  posts: [],
  favoritePosts: [],
};

const postReducerHandler = {
  [types.posts.addAllPosts]: (
    state: PostReducer,
    action: PayloadAction<Array<PostEntity>>,
  ) => {
    return {
      ...state,
      posts: action.payload,
    };
  },
  [types.posts.addPostIdToFavorites]: (
    state: PostReducer,
    action: PayloadAction<PostEntity['id']>,
  ) => {
    const isPostIdInFavoritePosts = state.favoritePosts?.includes(
      action.payload,
    );
    if (isPostIdInFavoritePosts) {
      return {
        ...state,
        favoritePosts: state.favoritePosts.filter(
          postId => postId !== action.payload,
        ),
      };
    } else {
      return {
        ...state,
        favoritePosts: [action.payload, ...state.favoritePosts],
      };
    }
  },
};

export const postReducer = createReducer(
  postReducerInitialState,
  postReducerHandler,
);
