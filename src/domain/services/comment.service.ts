import axios, { AxiosResponse } from 'axios';
import { PostEntity } from '../entities/post.entity';
import { endpoints } from '../../constants/endpoints';
import { CommentEntity } from 'src/domain/entities/comment.entity';

export function getCommentsService(
  postId: PostEntity['id'],
): Promise<AxiosResponse<Array<CommentEntity>>> {
  return axios.get(endpoints.comment.getCommentsByPostId, {
    params: {
      postId,
    },
  });
}
