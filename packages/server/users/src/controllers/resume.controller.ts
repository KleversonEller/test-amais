import {StatusCodes} from 'http-status-codes';

import type {Request, Response} from 'express';
import type ResumeService from '@services/resume.service';

/**
 * @function ResumeController
 * ? Classe responsável por fazer a requisição e resposta das chamadas de rotas.
 *
 * @method ResumeController.newResume
 * ? Método responsável por fazer a requisição de criação de um novo currículo e
 * ? retorna uma resposta com o Status 201 e um token.
 *
 * @method ResumeController.getResume
 * ? Método responsável por fazer a requisição de um currículo e
 * ? retorna uma resposta com o Status 200 e as informações do currículo.
 *
 * @method ResumeController.updateResume
 * ? Método responsável por fazer a atualização de um currículo e
 * ? retorna uma resposta com o Status 200 e as informações do currículo.
 */

export default class ResumeController {
	private readonly _service: ResumeService;

	constructor(service: ResumeService) {
		this._service = service;
	}

	public async newResume(req: Request, res: Response): Promise<Response> {
		const {id} = req.headers;

		const result = await this._service.newResume(req.body, id as string);

		return res.status(StatusCodes.CREATED).json({token: result});
	}

	public async getResume(req: Request, res: Response): Promise<Response> {
		const {id} = req.headers;

		const result = await this._service.getResume(id as string);

		return res.status(StatusCodes.OK).json(result);
	}

	public async updateResume(req: Request, res: Response): Promise<Response> {
		const {id} = req.params;

		const result = await this._service.updateResume(req.body, id);

		return res.status(StatusCodes.OK).json(result);
	}
}
