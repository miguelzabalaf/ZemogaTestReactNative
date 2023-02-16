import { userReducerInitialState } from 'src/redux/reducers/user';
import { postReducerInitialState } from '../../reducers/post';

export const initialStates = {
  post: postReducerInitialState,
  user: userReducerInitialState,
};
