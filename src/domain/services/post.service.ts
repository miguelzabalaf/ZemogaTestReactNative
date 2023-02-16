import axios, { AxiosResponse } from 'axios';
import { PostEntity } from '../entities/post.entity';
import { endpoints } from './../../constants/endpoints';

export function getAllPostService(): Promise<AxiosResponse<Array<PostEntity>>> {
  return axios.get(endpoints.post.getAllPost);
}
