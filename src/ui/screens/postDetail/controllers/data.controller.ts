import { postActions } from 'src/redux/actions/post.actions';
import {
  getPostByIdSelector,
  getAllFavoritePostelector,
} from 'src/redux/selectors/post.selector';
import { UseDataControllerProps } from '../interfaces';
import { useEffect, useState } from 'react';
import { userUseCase } from 'src/domain/useCases/user.useCase';
import { userImplementation } from 'src/implementation/user.implementation';
import { useDispatch } from 'react-redux';
import { AddUserDispatchAction } from 'src/redux/reducers/user/interfaces';
import { userActions } from 'src/redux/actions/user.actions';
import { getUserByIdSelector } from 'src/redux/selectors/user.selector';
import { commentUseCase } from 'src/domain/useCases/comment.useCase';
import { commentImplementation } from 'src/implementation/comment.implementation';
import { getCommentsByPostIdSelector } from 'src/redux/selectors/post.selector';
import { actAddCommentsByPostIdDispatchAction } from 'src/redux/reducers/post/interfaces';

export function useDataController(props: UseDataControllerProps) {
  // Props
  const { postId } = props;

  // States
  const [loadingUserInfo, setLoadingUserInfo] = useState(false);
  const [loadingComments, setloadingComments] = useState(false);
  const [errorToLoadUserInfo, setErrorToLoadUserInfo] = useState(false);
  const [errorToLoadComments, setErrorToLoadComments] = useState(false);

  // Use cases
  const { getUserBy } = userUseCase(userImplementation());
  const { getCommentsBy } = commentUseCase(commentImplementation());

  // Actions
  const dispatch = useDispatch();
  const { actAddUser } = userActions();
  const { actAddCommentsByPostId } = postActions();

  // Selectors
  const post = getPostByIdSelector(postId);
  const postFavorites = getAllFavoritePostelector();
  const isFavorite = postFavorites?.includes(postId);
  const user = getUserByIdSelector(post?.userId);
  const comments = getCommentsByPostIdSelector(postId);

  // Conditions
  const isNecessaryGetUserInfo = post && !user;
  const isNecessaryGetComments = post && !comments.length;

  // Methods
  async function onGetPostInfo() {
    isNecessaryGetComments && setloadingComments(true);
    isNecessaryGetUserInfo && setLoadingUserInfo(true);
    try {
      if (isNecessaryGetComments) {
        const commentsResp = await getCommentsBy(postId);
        dispatch<actAddCommentsByPostIdDispatchAction>(
          actAddCommentsByPostId({
            postId: postId.toString(),
            comments: commentsResp,
          }),
        );
        setloadingComments(false);
        setErrorToLoadComments(false);
      }
    } catch (error) {
      console.log('error [getCommentsBy]', error);
      setErrorToLoadComments(true);
      setloadingComments(false);
    }
    try {
      if (isNecessaryGetUserInfo) {
        const payload = await getUserBy(post.userId);
        dispatch<AddUserDispatchAction>(actAddUser(payload));
        setLoadingUserInfo(false);
        setErrorToLoadUserInfo(false);
      }
    } catch (error) {
      console.log('error [getUserBy]', error);
      setErrorToLoadUserInfo(true);
      setLoadingUserInfo(false);
    }
  }

  // Hooks
  useEffect(() => {
    onGetPostInfo();
  }, []);

  return {
    post,
    isFavorite,
    user,
    comments,
    loadingUserInfo,
    loadingComments,
    errorToLoadUserInfo,
    errorToLoadComments,
  };
}
