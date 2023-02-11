import { PostEntity } from '../entities/post.entity';

export interface PostRepository {
  getAllPosts(): Promise<Array<PostEntity>>;
}
