import { CommentEntity } from 'src/domain/entities/comment.entity';
import { PostEntity } from 'src/domain/entities/post.entity';

export interface CommentRepository {
  getCommentsBy(postId: PostEntity['id']): Promise<Array<CommentEntity>>;
}
