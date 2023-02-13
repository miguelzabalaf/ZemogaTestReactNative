import { PostEntity } from 'src/domain/entities/post.entity';
import { PostRepository } from 'src/domain/repositories/post.repository';
import { getAllPostService } from './../domain/services/post.service';

export function postImplementation(): PostRepository {
  return {
    getAllPost(): Promise<Array<PostEntity>> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await getAllPostService();
          resolve(resp.data);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}
