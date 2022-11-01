import UserModel from '@models/user.model';
import UserService from '@services/user.service';
import prisma from '@models/connect.prisma';
import {
	mockLogin,
	mockResume,
	mockUser,
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
});
