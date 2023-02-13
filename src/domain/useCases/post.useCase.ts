import { PostRepository } from '../repositories/post.repository';

export function postUseCase(repository: PostRepository) {
  return {
    getAllPost() {
      return repository.getAllPost();
    },
  };
}
