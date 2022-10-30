import {StatusCodes} from 'http-status-codes';

import type {Request, Response} from 'express';
import type UserService from '@services/user.service';

/**
 * @function UserController
 * ? Classe responsável por fazer a requisição e resposta das chamadas de rotas.
 *
 * @method UserController.newUserAndResume
 * ? Método responsável por fazer a requisição de criação de um novo usuário e
 * ? currículo e retorna uma resposta com o Status 201 e um token.
 *
 * @method UserController.newUser
 * ? Método responsável por fazer a requisição de criação de um novo usuário e
 * ? retorna uma resposta com o Status 201 e um token.
 *
 * @method UserController.login
 * ? Método responsável por fazer a requisição de verificação de um usuário e
 * ? retorna uma resposta com o Status 200 e um token.
 *
 * @method UserController.getUser
 * ? Método responsável por fazer a requisição de um usuário e
 * ? retorna uma resposta com o Status 200 e as informações do usuário.
 *
 * @method UserController.getUserAndResume
 * ? Método responsável por fazer a requisição de um usuário e currículo e
 * ? retorna uma resposta com o Status 200 e as informações do usuário.
 */

export default class UserController {
	private readonly _service: UserService;

	constructor(service: UserService) {
		this._service = service;
	}

	public async newUserAndResume(req: Request, res: Response): Promise<Response> {
		const result = await this._service.newUserAndResume(req.body.user, req.body.resume);

		return res.status(StatusCodes.CREATED).json({token: result});
	}

	public async newUser(req: Request, res: Response): Promise<Response> {
		const result = await this._service.newUser(req.body);

		return res.status(StatusCodes.CREATED).json({token: result});
	}

	public async login(req: Request, res: Response): Promise<Response> {
		const result = await this._service.login(req.body);

		return res.status(StatusCodes.OK).json({token: result});
	}

	public async getUser(req: Request, res: Response): Promise<Response> {
		const {id} = req.headers;

		const result = await this._service.getUser(id as string);

		return res.status(StatusCodes.OK).json(result);
	}

	public async getUserAndResume(req: Request, res: Response): Promise<Response> {
		const {id} = req.headers;

		const result = await this._service.getUserAndResume(id as string);

		return res.status(StatusCodes.OK).json(result);
	}
}
