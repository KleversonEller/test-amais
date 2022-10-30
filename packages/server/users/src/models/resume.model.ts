import type {PrismaClient, Resume} from '@prisma/client';
import type IResume from 'src/interfaces/resume.interface';

/**
 * @function ResumeModel
 * ? Classe responsável por fazer conexão e requisições para o banco de dados
 *
 * @method ResumeModel.getResume
 * ? Método responsável pela requisição de um currículo ja cadastrado
 *
 * @method ResumeModel.newResume
 * ? Método responsável pela criação de um novo currículo
 *
 * @method ResumeModel.updateResume
 * ? Método responsável por atualizar um currículo
 */

export default class ResumeModel {
	private readonly _connect: PrismaClient;

	constructor(connect: PrismaClient) {
		this._connect = connect;
	}

	public async newResume(data: IResume, id: string): Promise<string> {
		const create = await this._connect.resume.create({data: {...data, userId: id}});

		return create.id;
	}

	public async getResume(id: string): Promise<Resume> {
		const resume = await this._connect.resume.findUnique({where: {id}});

		return resume;
	}

	public async updateResume(data: IResume, id: string): Promise<Resume> {
		const upResume = await this._connect.resume.update({
			where: {id},
			data,
		});

		return upResume;
	}
}
