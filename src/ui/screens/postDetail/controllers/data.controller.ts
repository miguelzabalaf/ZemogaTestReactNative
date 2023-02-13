import {
  getPostByIdSelector,
  getAllFavoritePostelector,
} from 'src/redux/selectors/post.selector';
import { useDataControllerProps } from '../interfaces';

export function useDataController(props: useDataControllerProps) {
  const { postId } = props;
  const post = getPostByIdSelector(postId);
  const postFavorites = getAllFavoritePostelector();
  const isFavorite = postFavorites?.includes(postId);
  return {
    post,
    isFavorite,
  };
}
