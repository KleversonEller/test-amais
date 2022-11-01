import {StatusCodes} from 'http-status-codes';

import type {Request, Response} from 'express';
import type ClientService from '@services/client.service';

/**
 * @function ClientController
 * ? Classe responsável por fazer a requisição e resposta das chamadas de rotas.
 *
 * @method ClientController.getAllInfos
 * ? Método responsável por fazer a requisição de todas as informações de usuário e
 * ? currículo e retorna uma resposta com o Status 200 e as informações.
 */

export default class ClientController {
	private readonly _service: ClientService;

	constructor(service: ClientService) {
		this._service = service;
	}

	public async getAllInfos(_req: Request, res: Response): Promise<Response> {
		const result = await this._service.getAllInfos();

		return res.status(StatusCodes.OK).json(result);
	}
}
