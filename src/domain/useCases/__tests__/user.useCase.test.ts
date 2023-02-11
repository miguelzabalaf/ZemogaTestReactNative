import { UserRepository } from './../../repositories/user.repository';
import { userUseCase } from '../user.useCase';
import { userIdDummy, userDummy } from '../dataDummy/user/user.dummy';

describe('[USER] - use cases', () => {
  const userRepositoryMock: jest.Mocked<UserRepository> = {
    getUserBy: jest.fn(),
  };
  const { getUserBy } = userUseCase(userRepositoryMock);

  test('should call getUserBy from repository once', () => {
    getUserBy(userIdDummy);
    expect(userRepositoryMock.getUserBy).toHaveBeenCalledTimes(1);
  });

  test('should call getUserBy from repository', () => {
    getUserBy(userIdDummy);
    expect(userRepositoryMock.getUserBy).toHaveBeenCalled();
  });

  test('should call getUserBy from repository with 1 argument', () => {
    getUserBy(userIdDummy);
    expect(userRepositoryMock.getUserBy).toHaveBeenCalledWith(1);
  });

  test('should call getUserBy from repository and return a user dummy data', async () => {
    userRepositoryMock.getUserBy.mockResolvedValueOnce(userDummy);
    const user = await getUserBy(userIdDummy);
    expect(user).toEqual(userDummy);
  });
});
