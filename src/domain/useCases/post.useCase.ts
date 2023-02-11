import { PostRepository } from '../repositories/post.repository';

export function postUseCase(repository: PostRepository) {
  return {
    getAllPosts() {
      return repository.getAllPosts();
    },
  };
}
