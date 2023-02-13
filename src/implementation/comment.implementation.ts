import { CommentEntity } from 'src/domain/entities/comment.entity';
import { PostEntity } from 'src/domain/entities/post.entity';
import { CommentRepository } from 'src/domain/repositories/comment.repository';
import { getCommentsService } from 'src/domain/services/comment.service';

export function commentImplementation(): CommentRepository {
  return {
    getCommentsBy(postId: PostEntity['id']): Promise<Array<CommentEntity>> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await getCommentsService(postId);
          resolve(resp.data);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}
