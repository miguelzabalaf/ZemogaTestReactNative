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

  return {
    actAddAllPosts,
    actAddPostIdToFavorites,
    actAddCommentsByPostId,
  };
}
