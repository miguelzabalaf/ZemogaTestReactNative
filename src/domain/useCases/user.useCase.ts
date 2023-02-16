import { UserRepository } from '../repositories/user.repository';
import { PostEntity } from 'src/domain/entities/post.entity';

export function userUseCase(repository: UserRepository) {
  return {
    getUserBy(userId: PostEntity['userId']) {
      return repository.getUserBy(userId);
    },
  };
}
