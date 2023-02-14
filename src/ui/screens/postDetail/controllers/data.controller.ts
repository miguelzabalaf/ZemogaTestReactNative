import {
  getPostByIdSelector,
  getAllFavoritePostelector,
} from 'src/redux/selectors/post.selector';
import { useDataControllerProps } from '../interfaces';
import { useEffect } from 'react';
import { userUseCase } from 'src/domain/useCases/user.useCase';
import { userImplementation } from 'src/implementation/user.implementation';
import { useDispatch } from 'react-redux';
import { AddUserDispatchAction } from 'src/redux/reducers/user/interfaces';
import { userActions } from 'src/redux/actions/user.actions';
import { getUserByIdSelector } from 'src/redux/selectors/user.selector';

export function useDataController(props: useDataControllerProps) {
  const { postId } = props;
  const { getUserBy } = userUseCase(userImplementation());
  const { actAddUser } = userActions();
  const dispatch = useDispatch();
  const post = getPostByIdSelector(postId);
  const postFavorites = getAllFavoritePostelector();
  const isFavorite = postFavorites?.includes(postId);
  const user = getUserByIdSelector(post?.userId);

  async function onGetUser() {
    try {
      if (post && !user) {
        const resp = await getUserBy(post.userId);
        dispatch<AddUserDispatchAction>(actAddUser(resp));
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    onGetUser();
  }, []);

  return {
    post,
    isFavorite,
    user,
  };
}
