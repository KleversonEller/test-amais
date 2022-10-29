import type {User} from '@prisma/client';

export async function newUserAndResumeMock(): Promise<string> {
	return 'f77516ca-7a-4ba1-b117-dea8a55b31b2';
}

export async function newUserMock(): Promise<string> {
	return 'f77516ca-7a-4ba1-b117-dea8a55b31b2';
}

export async function loginMock(): Promise<string> {
	return 'f77516ca-7a-4ba1-b117-dea8a55b31b2';
}

export async function getUserMock(): Promise<User> {
	return {
		id: 'f77516ca-7a-4ba1-b117-dea8a55b31b2',
		name: 'Test',
		lastName: 'Mock',
		email: 'test@mock.com',
		password: 'mock123',
		permision: 'admin',
		createAt: new Date('2022-10-29T09:06:43.188Z'),
	};
}

export async function getUserAndResumeMock(): Promise<User> {
	return {
		id: 'f77516ca-7a-4ba1-b117-dea8a55b31b2',
		name: 'Test',
		lastName: 'Mock',
		email: 'test@mock.com',
		password: 'mock123',
		permision: 'admin',
		createAt: new Date('2022-10-29T09:06:43.188Z'),
	};
}

export const mockUser = {
	name: 'Test',
	lastName: 'Mock',
	email: 'test@mock.com',
	password: 'mock123',
};

export const mockLogin = {
	email: 'test@mock.com',
	password: 'mock123',
};

export const mockResume = {
	cpf: '48426419926',
	birthDate: '13041996',
	sex: 'não-binário',
	civilState: 'solteiro',
	schooling: 'doutorado',
	wage: '1',
};

export const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZjc3NTE2Y2EtN2EtNGJhMS1iMTE3LWRlYThhNTViMzFiMiIsImlhdCI6MTY2NzA3MDM3NCwiZXhwIjoxNjY3MTU2Nzc0fQ.iL0su0L-dGhSR0Wtt5q74MdcOcgWPsRIUwmVVmfQZwE';

export const mockGetUser = {
	id: 'f77516ca-7a-4ba1-b117-dea8a55b31b2',
	name: 'Test',
	lastName: 'Mock',
	email: 'test@mock.com',
	password: 'mock123',
	permision: 'admin',
	createAt: new Date('2022-10-29T09:06:43.188Z'),
};

export default {
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
};
