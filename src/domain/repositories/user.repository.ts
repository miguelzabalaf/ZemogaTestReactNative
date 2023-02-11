import { PostEntity } from '../entities/post.entity';
import { UserEntity } from '../entities/user.entity';

export interface UserRepository {
  getUserBy(userId: PostEntity['userId']): Promise<UserEntity>;
}
