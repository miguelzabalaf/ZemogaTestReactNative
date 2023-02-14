import { useSelector } from 'react-redux';
import { createSelector } from '../helpers/createSelector';
import { ReduxStore } from 'src/redux/store';
import { PostEntity } from 'src/domain/entities/post.entity';

export function getUserByIdSelector(userId?: PostEntity['userId']) {
  const selector = createSelector(
    (state: ReduxStore) => state.user,
    user => {
      try {
        return user?.users?.find(userParam => userParam.id === userId);
      } catch (error) {
        return undefined;
      }
    },
  );
  return useSelector(selector);
}
