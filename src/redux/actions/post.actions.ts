import { PostEntity } from 'src/domain/entities/post.entity';
import { types } from '../constants/types';

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

  return {
    actAddAllPosts,
    actAddPostIdToFavorites,
  };
}
