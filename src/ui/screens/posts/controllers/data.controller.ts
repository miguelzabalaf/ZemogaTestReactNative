import { postUseCase } from 'src/domain/useCases/post.useCase';
import { postImplementation } from 'src/implementation/post.implementation';
import {
  getAllFavoritePostelector,
  getAllPostelector,
} from 'src/redux/selectors/post.selector';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddAllPostDispatchAction } from 'src/redux/reducers/post/interfaces/interfaces';
import { postActions } from 'src/redux/actions/post.actions';
import _ from 'lodash';
import { OnGetAllPostsProps } from '../interfaces';

export function useDataController() {
  // Use cases
  const { getAllPost } = postUseCase(postImplementation());

  // States
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [errorToLoadPosts, setErrorToLoadPosts] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Actions
  const { actAddAllPosts } = postActions();
  const dispatch = useDispatch();

  // Selectors
  const posts = getAllPostelector();
  const postFavorites = getAllFavoritePostelector();

  // Constans
  const isNecessaryGetPosts = !posts.length;

  // Methods
  async function onGetAllPost({ force }: OnGetAllPostsProps) {
    (force || isNecessaryGetPosts) && setLoadingPosts(true);
    try {
      if (force || isNecessaryGetPosts) {
        const postsResp = await getAllPost();
        setLoadingPosts(false);
        setErrorToLoadPosts(false);
        dispatch<AddAllPostDispatchAction>(actAddAllPosts(postsResp));
      }
    } catch (error) {
      console.warn(error);
      setErrorToLoadPosts(true);
      setLoadingPosts(false);
    }
  }

  function onTryAgainGetPosts() {
    onGetAllPost({ force: true });
  }

  function onToggleEditMode() {
    setEditMode(!editMode);
  }

  // Constants
  const postsMutated = _.map(posts, post => {
    return {
      ...post,
      isFavoritePost: postFavorites?.includes(post.id),
    };
  }).sort(a => {
    return a.isFavoritePost ? -1 : 1;
  });

  const havePostsToDelete = _.some(postsMutated, post => !post.isFavoritePost);

  // Hooks
  useEffect(() => {
    onGetAllPost({ force: false });
  }, []);

  useEffect(() => {
    if (!havePostsToDelete) {
      setEditMode(false);
    }
  }, [havePostsToDelete]);

  return {
    // States
    loadingPosts,
    errorToLoadPosts,
    editMode,
    // Data
    posts: postsMutated,
    // Methods
    onTryAgainGetPosts,
    onToggleEditMode,
    // Conditions
    havePostsToDelete,
  };
}
