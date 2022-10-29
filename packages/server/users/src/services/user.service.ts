import UserValidate from '@middleware/validate.user.middleware';
import ResumeValidate from '@middleware/validate.resume.middleware';
import Token from '@utils/Token';

import type UserModel from '@models/user.model';
import type {User} from '@prisma/client';
import type IGetUser from 'src/interfaces/get.user.interface';
import type IUser from 'src/interfaces/user.interface';
import type IResume from 'src/interfaces/resume.interface';

/**
 * ! Implementar lógica de criptografia e validação da senha do usuário
 *
 * @function UserService
 * ? Classe responsável por aplicar as regras de negocio da aplicação referente
 * ? a tabela de usuários.
 *
 * @method UserService.newUserAndResume
 * ? Método responsável por valida as informações utilizando os middleware de validação,
 * ? chamar o método de criação de um novo usuário e currículo, e retornar um token
 * ? contendo o ID do novo usuário.
 *
 * @method UserService.newUser
 * ? Método responsável por valida as informações utilizando os middleware de validação,
 * ? chamar o método de criação de um novo usuário, e retornar um token contendo
 * ? o ID do novo usuário.
 *
 * @method UserService.login
 * ? Método responsável por valida as informações utilizando os middleware de validação,
 * ? chamar o método que valida o login de um usuário, e retornar um token contendo
 * ? o ID do usuário.
 *
 * @method UserService.getUser
 * ? Método responsável por valida as informações utilizando os middleware de validação,
 * ? chamar o método que busca por um usuário, e retornar as informações desse usuário.
 *
 * @method UserService.getUserAndResume
 * ? Método responsável por valida as informações utilizando os middleware de validação,
 * ? chamar o método que busca por um usuário e seu currículo, e retornar as
 * ? informações desse usuário.
 */

export default class UserService {
	private readonly _model: UserModel;

	constructor(model: UserModel) {
		this._model = model;
	}

	public async newUserAndResume(dataUser: IUser, dataResume: IResume): Promise<string> {
		UserValidate.newUser(dataUser);
		ResumeValidate.newResume(dataResume);

		const create = await this._model.newUserAndResume(dataUser, dataResume);

		return Token.newToken(create);
	}

	public async newUser(data: IUser): Promise<string> {
		UserValidate.newUser(data);

		const create = await this._model.newUser(data);

		return Token.newToken(create);
	}

	public async login(data: IGetUser): Promise<string> {
		UserValidate.login(data);

		const login = await this._model.login(data);

		return Token.newToken(login);
	}

	public async getUser(token: string): Promise<User> {
		UserValidate.getUser(token);
		const decoded = Token.validateToken(token);

		const user = await this._model.getUser(decoded);

		return user;
	}

	public async getUserAndResume(token: string): Promise<User> {
		UserValidate.getUser(token);
		const decoded = Token.validateToken(token);

		const user = await this._model.getUserAndResume(decoded);

		return user;
	}
}
