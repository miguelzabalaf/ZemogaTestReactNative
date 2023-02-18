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
import { Icon } from 'src/ui/icons';
import { Colors } from 'react-native-ui-lib';

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
    if (postsMutated.length) {
      setEditMode(!editMode);
    }
  }

  // Constants
  const postsMutated = _.map(posts, post => {
    return {
      ...post,
      isFavorite: postFavorites?.includes(post.id),
    };
  }).sort(a => {
    return a.isFavorite ? -1 : 1;
  });

  const havePostsToDelete = _.some(postsMutated, post => !post.isFavorite);

  // Icons
  function IconRight() {
    if (havePostsToDelete) {
      return editMode
        ? Icon.Close({ scale: 0.75, color: Colors.gray })
        : Icon.Pen({ scale: 0.75, color: Colors.gray });
    }
    return null;
  }

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
    // Components
    IconRight,
  };
}
