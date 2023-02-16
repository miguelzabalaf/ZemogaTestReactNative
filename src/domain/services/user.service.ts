import axios, { AxiosResponse } from 'axios';
import { PostEntity } from '../entities/post.entity';
import { endpoints } from '../../constants/endpoints';
import { UserEntity } from '../entities/user.entity';

export function getUserService(
  userId: PostEntity['userId'],
): Promise<AxiosResponse<UserEntity>> {
  const url = `${endpoints.user.getUserByUserId}/${userId}`;
  return axios.get(url);
}
