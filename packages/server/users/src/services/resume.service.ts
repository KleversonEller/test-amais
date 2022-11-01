import ResumeValidate from '@middleware/validate.resume.middleware';
import Token from '@utils/Token';

import type ResumeModel from '@models/resume.model';
import type {Resume} from '@prisma/client';
import type IResume from 'src/interfaces/resume.interface';
import UserValidate from '@middleware/validate.user.middleware';

/**
 * @function ResumeService
 * ? Classe responsável por aplicar as regras de negocio da aplicação referente
 * ? a tabela de currículo.
 *
 * @method ResumeService.newResume
 * ? Método responsável por valida as informações utilizando os middleware de validação,
 * ? e chamar o método de criação de um novo currículo, e retornar um token contendo
 * ? o ID do novo currículo.
 *
 * @method ResumeService.getResume
 * ? Método responsável por valida as informações utilizando os middleware de validação,
 * ? e chamar o método que busca por um currículo, e retornar as informações desse currículo.
 *
 * @method ResumeService.updateResume
 * ? Método responsável por valida as informações utilizando os middleware de validação,
 * ? e chamar o método que atualiza as informações de um currículo, e retorna o currículo
 * ? atualizado.
 */

export default class ResumeService {
	private readonly _model: ResumeModel;

	constructor(model: ResumeModel) {
		this._model = model;
	}

	public async newResume(data: IResume, token: string): Promise<string> {
		ResumeValidate.newResume(data);
		UserValidate.getUser(token);
		const decoded = Token.validateToken(token);

		const create = await this._model.newResume(data, decoded);

		return Token.newToken(create);
	}

	public async getResume(token: string): Promise<Resume> {
		UserValidate.getUser(token);
		const decoded = Token.validateToken(token);

		const resume = await this._model.getResume(decoded);

		return resume;
	}

	public async updateResume(data: IResume, id: string): Promise<Resume> {
		ResumeValidate.newResume(data);
		UserValidate.getUser(id);

		const upResume = await this._model.updateResume(data, id);

		return upResume;
	}
}
