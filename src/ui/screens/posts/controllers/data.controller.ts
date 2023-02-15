import { postUseCase } from 'src/domain/useCases/post.useCase';
import { postImplementation } from 'src/implementation/post.implementation';
import {
  getAllFavoritePostelector,
  getAllPostelector,
} from 'src/redux/selectors/post.selector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddAllPostDispatchAction } from 'src/redux/reducers/post/interfaces/interfaces';
import { postActions } from 'src/redux/actions/post.actions';
import _ from 'lodash';

export function useDataController() {
  const { getAllPost } = postUseCase(postImplementation());
  const posts = getAllPostelector();
  const postFavorites = getAllFavoritePostelector();
  const { actAddAllPosts } = postActions();
  const dispatch = useDispatch();

  async function onGetAllPost() {
    try {
      const postsResp = await getAllPost();
      dispatch<AddAllPostDispatchAction>(actAddAllPosts(postsResp));
    } catch (error) {
      console.warn(error);
    }
  }

  const postsMutated = _.map(posts, post => {
    return {
      ...post,
      isFavoritePost: postFavorites?.includes(post.id),
    };
  }).sort(a => {
    return a.isFavoritePost ? -1 : 1;
  });

  useEffect(() => {
    onGetAllPost();
  }, []);

  return {
    posts: postsMutated,
  };
}
