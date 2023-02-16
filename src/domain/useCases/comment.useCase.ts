import { PostEntity } from '../entities/post.entity';
import { CommentRepository } from '../repositories/comment.repository';

export function commentUseCase(repository: CommentRepository) {
  return {
    getCommentsBy(postId: PostEntity['id']) {
      return repository.getCommentsBy(postId);
    },
  };
}
