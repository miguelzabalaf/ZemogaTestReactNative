import { types } from '../constants/types';
import { UserEntity } from 'src/domain/entities/user.entity';

export function userActions() {
  function actAddUser(payload: UserEntity) {
    return {
      type: types.user.addUser,
      payload,
    };
  }

  return {
    actAddUser,
  };
}
