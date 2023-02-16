import { CommentEntity } from './../entities/comment.entity';
import { PostEntity } from '../entities/post.entity';

export interface CommentRepository {
  getCommentsBy(postId: PostEntity['id']): Promise<Array<CommentEntity>>;
}
