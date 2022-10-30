import UserModel from '@models/user.model';
import UserService from '@services/user.service';
import prisma from '@models/connect.prisma';
import {
	mockLogin,
	mockResume,
	mockUser,
	mockToken,
	mockGetUser,
	getUserAndResumeMock,
	getUserMock,
	loginMock,
	newUserAndResumeMock,
	newUserMock,
} from './mocks/user.mock';

describe('Testando as regras de negocio para User', () => {
	const model = new UserModel(prisma);
	const service = new UserService(model);

	it('Verificando se a criação de um novo usuário é bem sucedida', async () => {
		const mockNewUser = jest.spyOn(model, 'newUser').mockImplementation(newUserMock);

		const result = await service.newUser(mockUser);

		expect(mockNewUser).toHaveBeenCalled();
		expect(typeof result).toBe('string');
	});

	it('Verificando se a criação de um novo usuário e currículo é bem sucedida', async () => {
		const mockNewUserAndResume = jest.spyOn(model, 'newUserAndResume')
			.mockImplementation(newUserAndResumeMock);

		const result = await service.newUserAndResume(mockUser, mockResume);

		expect(mockNewUserAndResume).toHaveBeenCalled();
		expect(typeof result).toBe('string');
	});

	it('Verificando se o login é bem sucedido', async () => {
		const mockL = jest.spyOn(model, 'login').mockImplementation(loginMock);

		const result = await service.login(mockLogin);

		expect(mockL).toHaveBeenCalled();
		expect(typeof result).toBe('string');
	});

	it('Verificando se a requisição das informações de um usuário é bem sucedida', async () => {
		const mockUserGet = jest.spyOn(model, 'getUser').mockImplementation(getUserMock);

		const result = await service.getUser(mockToken);

		expect(mockUserGet).toHaveBeenCalled();
		expect(result).toEqual(mockGetUser);
	});

	it('Verificando se a requisição das informações de um usuário e currículo é bem sucedida', async () => {
		const mockUserAndResumeGet = jest.spyOn(model, 'getUserAndResume')
			.mockImplementation(getUserAndResumeMock);

		const result = await service.getUserAndResume(mockToken);

		expect(mockUserAndResumeGet).toHaveBeenCalled();
		expect(result).toEqual(mockGetUser);
	});
});
