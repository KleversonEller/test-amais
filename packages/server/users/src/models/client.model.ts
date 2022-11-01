import type {PrismaClient, Resume} from '@prisma/client';

/**
 * @function ClientModel
 * ? Classe responsável por fazer conexão e requisições para o banco de dados
 *
 * @method ClientModel.getAllInfos
 * ? Método responsável pela requisição de todas as informações de usuário e currículo
 */

export default class ClientModel {
	private readonly _connect: PrismaClient;

	constructor(connect: PrismaClient) {
		this._connect = connect;
	}

	public async getAllInfos(): Promise<Resume[]> {
		const allInfos = this._connect.resume.findMany({include: {user: true}});

		return allInfos;
	}
}
