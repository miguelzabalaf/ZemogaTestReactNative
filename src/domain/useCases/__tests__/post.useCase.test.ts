import { postUseCase } from '../post.useCase';
import { PostRepository } from 'src/domain/repositories/post.repository';
import { postsDummy } from '../dataDummy/post/posts.dummy';

describe('[POST] - use cases', () => {
  const postRepositoryMock: jest.Mocked<PostRepository> = {
    getAllPosts: jest.fn(),
  };
  const { getAllPosts } = postUseCase(postRepositoryMock);

  test('should call getAllPosts from repository once', () => {
    getAllPosts();
    expect(postRepositoryMock.getAllPosts).toHaveBeenCalledTimes(1);
  });

  test('should call getAllPosts from repository', () => {
    getAllPosts();
    expect(postRepositoryMock.getAllPosts).toHaveBeenCalled();
  });

  test('should call getAllPosts from repository with no arguments', () => {
    getAllPosts();
    expect(postRepositoryMock.getAllPosts).toHaveBeenCalledWith();
  });

  test('should call getAllPosts from repository and return array dummy data', async () => {
    postRepositoryMock.getAllPosts.mockResolvedValueOnce(postsDummy);
    const posts = await getAllPosts();
    expect(posts).toEqual(postsDummy);
  });
});
