import { types } from 'src/redux/constants/types';
import { createReducer } from '../../helpers/createReducer';
import { UserReducer } from './interfaces/interfaces';
import { PayloadAction } from '@reduxjs/toolkit';
import { UserEntity } from 'src/domain/entities/user.entity';

export const userReducerInitialState: UserReducer = {
  users: [],
};

const userReducerHandler = {
  [types.user.addUser]: (
    state: UserReducer,
    action: PayloadAction<UserEntity>,
  ) => {
    const user = action.payload;
    return {
      ...state,
      users: [...state.users, user],
    };
  },
};

export const userReducer = createReducer(
  userReducerInitialState,
  userReducerHandler,
);
