import { PostEntity } from 'src/domain/entities/post.entity';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { getUserService } from 'src/domain/services/user.service';

export function userImplementation(): UserRepository {
  return {
    getUserBy(userId: PostEntity['userId']): Promise<UserEntity> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await getUserService(userId);
          resolve(resp.data);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}
