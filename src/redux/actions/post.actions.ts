import { PostEntity } from 'src/domain/entities/post.entity';
import { types } from '../constants/types';
import { CommentEntity } from 'src/domain/entities/comment.entity';

export function postActions() {
  function actAddAllPosts(payload: Array<PostEntity>) {
    return {
      type: types.posts.addAllPosts,
      payload,
    };
  }

  function actAddPostIdToFavorites(payload: PostEntity['id']) {
    return {
      type: types.posts.addPostIdToFavorites,
      payload,
    };
  }

  function actAddCommentsByPostId(payload: {
    postId: string;
    comments: Array<CommentEntity>;
  }) {
    return {
      type: types.posts.addComments,
      payload,
    };
  }

  function actRemovePostBy(payload: PostEntity['id']) {
    return {
      type: types.posts.removePost,
      payload,
    };
  }

  function actRemoveAllPosts() {
    return {
      type: types.posts.removeAllPosts,
    };
  }

  return {
    actAddAllPosts,
    actAddPostIdToFavorites,
    actAddCommentsByPostId,
    actRemovePostBy,
    actRemoveAllPosts,
  };
}
