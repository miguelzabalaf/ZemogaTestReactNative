import { useSelector } from 'react-redux';
import { createSelector } from '../helpers/createSelector';
import { ReduxStore } from 'src/redux/store';
import { PostEntity } from 'src/domain/entities/post.entity';

export function getAllFavoritePostelector() {
  const selector = createSelector(
    (state: ReduxStore) => state.post,
    post => post.favoritePosts,
  );
  return useSelector(selector);
}

export function getPostByIdSelector(postId: PostEntity['id']) {
  const selector = createSelector(
    (state: ReduxStore) => state.post,
    post => post?.posts?.find(postParam => postParam.id === postId),
  );
  return useSelector(selector);
}

export function getAllPostelector() {
  const selector = createSelector(
    (state: ReduxStore) => state.post,
    post => post.posts,
  );
  return useSelector(selector);
}
