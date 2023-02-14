import { UserEntity } from 'src/domain/entities/user.entity';

export interface UserReducer {
  users: Array<UserEntity>;
}

export interface AddUserDispatchAction {
  type: string;
  payload: UserEntity;
}
