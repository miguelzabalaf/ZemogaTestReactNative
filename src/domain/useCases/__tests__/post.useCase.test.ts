import { postUseCase } from '../post.useCase';
import { PostRepository } from 'src/domain/repositories/post.repository';
import { postsDummy } from '../dataDummy/post/posts.dummy';

describe('[POST] - use cases', () => {
  const postRepositoryMock: jest.Mocked<PostRepository> = {
    getAllPost: jest.fn(),
  };
  const { getAllPost } = postUseCase(postRepositoryMock);

  test('should call getAllPost from repository once', () => {
    getAllPost();
    expect(postRepositoryMock.getAllPost).toHaveBeenCalledTimes(1);
  });

  test('should call getAllPost from repository', () => {
    getAllPost();
    expect(postRepositoryMock.getAllPost).toHaveBeenCalled();
  });

  test('should call getAllPost from repository with no arguments', () => {
    getAllPost();
    expect(postRepositoryMock.getAllPost).toHaveBeenCalledWith();
  });

  test('should call getAllPost from repository and return array dummy data', async () => {
    postRepositoryMock.getAllPost.mockResolvedValueOnce(postsDummy);
    const posts = await getAllPost();
    expect(posts).toEqual(postsDummy);
  });
});
