import { PostEntity } from 'src/domain/entities/post.entity';
import { PostRepository } from 'src/domain/repositories/post.repository';
import { getAllPostsService } from './../domain/services/post.service';

export function postImplementation(): PostRepository {
  return {
    getAllPosts(): Promise<Array<PostEntity>> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await getAllPostsService();
          resolve(resp.data);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}
