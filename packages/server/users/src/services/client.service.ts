import type ClientModel from '@models/client.model';
import type {Resume} from '@prisma/client';

/**
 * @function ClientService
 * ? Classe responsável por aplicar as regras de negocio da aplicação referente
 * ? as requisições do cliente.
 *
 * @method ClientService.getAllInfos
 * ? Método faz a requisição para o model.
 */

export default class ClientService {
	private readonly _model: ClientModel;

	constructor(model: ClientModel) {
		this._model = model;
	}

	public async getAllInfos(): Promise<Resume[]> {
		const allInfos = await this._model.getAllInfos();

		return allInfos;
	}
}
