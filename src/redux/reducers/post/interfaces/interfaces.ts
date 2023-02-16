import { CommentEntity } from 'src/domain/entities/comment.entity';
import { PostEntity } from 'src/domain/entities/post.entity';

export interface PostReducer {
  posts: Array<PostEntity>;
  favoritePosts: Array<PostEntity['id']>;
  commentsByPostId: { [x: string]: Array<CommentEntity> };
}

export interface AddAllPostDispatchAction {
  type: string;
  payload: Array<PostEntity>;
}

export interface AddPostIdToFavoritesDispatchAction {
  type: string;
  payload: PostEntity['id'];
}

export interface actAddCommentsByPostIdDispatchAction {
  type: string;
  payload: {
    postId: string;
    comments: Array<CommentEntity>;
  };
}

export interface actRemovePostByDispatchAction {
  type: string;
  payload: PostEntity['id'];
}

export interface actRemoveAllPostsDispatchAction {
  type: string;
}
