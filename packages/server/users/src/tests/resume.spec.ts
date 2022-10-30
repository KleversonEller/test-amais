import ResumeModel from '@models/resume.model';
import ResumeService from '@services/resume.service';
import prisma from '@models/connect.prisma';
import {mockResume, mockResumeFail} from './mocks/resume.mock';
import {mockToken} from './mocks/user.mock';

import type IResume from 'src/interfaces/resume.interface';

describe('Testando as regras de negocio para Resume', () => {
	const model = new ResumeModel(prisma);
	const service = new ResumeService(model);

	it('Verificando a falha na criação de um novo currículo ao não passar argumentos', async () => {
		let getError = null;

		try {
			await service.newResume({} as IResume, '');
		} catch (error: unknown) {
			getError = error;
		}

		expect(getError.message).toEqual('All fields must be filled');
	});

	it('Verifica a falha na criação de um novo currículo ao passar argumentos inválidos', async () => {
		let getError = null;

		try {
			await service.newResume(mockResumeFail as unknown as IResume, mockToken);
		} catch (error: unknown) {
			getError = error;
		}

		expect(getError.message).toEqual('All fields must be filled');
	});

	it('Verifica a falha na atualização de um currículo ao não passar argumentos', async () => {
		let getError = null;

		try {
			await service.updateResume({} as IResume, '');
		} catch (error: unknown) {
			getError = error;
		}

		expect(getError.message).toEqual('All fields must be filled');
	});

	it('Verifica a falha na atualização de um currículo ao não passar um token', async () => {
		let getError = null;

		try {
			await service.updateResume(mockResume, '');
		} catch (error: unknown) {
			getError = error;
		}

		expect(getError.message).toEqual('ID is required');
	});
});
