import { CommentRepository } from 'src/domain/repositories/comment.repository';
import { commentUseCase } from '../comment.useCase';
import {
  postIdDummy,
  commentsDummy,
} from '../dataDummy/comment/comments.dummy';

describe('[COMMENT] - use cases', () => {
  const commentRepositoryMock: jest.Mocked<CommentRepository> = {
    getCommentsBy: jest.fn(),
  };
  const { getCommentsBy } = commentUseCase(commentRepositoryMock);

  test('should call getCommentsBy from repository once', () => {
    getCommentsBy(postIdDummy);
    expect(commentRepositoryMock.getCommentsBy).toHaveBeenCalledTimes(1);
  });

  test('should call getCommentsBy from repository', () => {
    getCommentsBy(postIdDummy);
    expect(commentRepositoryMock.getCommentsBy).toHaveBeenCalled();
  });

  test('should call getCommentsBy from repository with 1 argument', () => {
    getCommentsBy(postIdDummy);
    expect(commentRepositoryMock.getCommentsBy).toHaveBeenCalledWith(
      postIdDummy,
    );
  });

  test('should call getCommentsBy from repository and return a comments dummy data', async () => {
    commentRepositoryMock.getCommentsBy.mockResolvedValueOnce(commentsDummy);
    const comments = await getCommentsBy(postIdDummy);
    const allCommentsHaveTheSamePostId = comments.every(
      comment => comment.postId === postIdDummy,
    );
    expect(comments).toEqual(commentsDummy);
    expect(allCommentsHaveTheSamePostId).toBe(true);
  });
});
