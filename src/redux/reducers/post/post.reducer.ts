import { types } from 'src/redux/constants/types';
import { createReducer } from 'src/redux/helpers/createReducer';
import { PostReducer } from './interfaces/interfaces';
import { PayloadAction } from '@reduxjs/toolkit';
import { PostEntity } from 'src/domain/entities/post.entity';
import { CommentEntity } from 'src/domain/entities/comment.entity';

export const postReducerInitialState: PostReducer = {
  posts: [],
  favoritePosts: [],
  commentsByPostId: {},
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
  [types.posts.addComments]: (
    state: PostReducer,
    action: PayloadAction<{ postId: number; comments: Array<CommentEntity> }>,
  ) => {
    const { postId, comments } = action.payload;
    const commentsByPostId = {
      ...state.commentsByPostId,
      [postId]: comments,
    };
    return {
      ...state,
      commentsByPostId,
    };
  },
  [types.posts.removePost]: (
    state: PostReducer,
    action: PayloadAction<PostEntity['id']>,
  ) => {
    const posts = state.posts.filter(post => post.id !== action.payload);
    return {
      ...state,
      posts,
    };
  },
  [types.posts.removeAllPosts]: (state: PostReducer) => {
    const posts = state.posts.filter(post =>
      state.favoritePosts.includes(post.id),
    );
    return {
      ...state,
      posts,
    };
  },
};

export const postReducer = createReducer(
  postReducerInitialState,
  postReducerHandler,
);
