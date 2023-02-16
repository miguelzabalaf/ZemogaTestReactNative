import { PostEntity } from '../entities/post.entity';

export interface PostRepository {
  getAllPost(): Promise<Array<PostEntity>>;
}
