/* eslint-disable @typescript-eslint/naming-convention */
import type {PrismaClient, User} from '@prisma/client';
import type IGetUser from 'src/interfaces/get.user.interface';
import type IResume from 'src/interfaces/resume.interface';
import type IUser from 'src/interfaces/user.interface';

/**
 * @function UserModel
 * ? Classe responsável por fazer conexão e requisições para o banco de dados
 *
 * @method UserModel.newUserAndResume
 * ? Método responsável pela criação de um novo usuário e seu currículo
 *
 * @method UserModel.newUser
 * ? Método responsável pela criação de um novo usuário
 *
 * @method UserModel.login
 * ? Método responsável pela validação de um usuário
 *
 * @method UserModel.getUser
 * ? Método responsável pela requisição de um usuário ja cadastrado
 *
 * @method UserModel.getUserAndResume
 * ? Método responsável pela requisição de um usuário ja cadastrado e seu currículo
 */

export default class UserModel {
	private readonly _connect: PrismaClient;

	constructor(connect: PrismaClient) {
		this._connect = connect;
	}

	public async newUserAndResume(dataUser: IUser, dataResume: IResume): Promise<string> {
		const user = await this._connect.user.create({data: dataUser});

		//! Criando um modelo esperado pelo prisma para simplificar a implementação da função
		const modelResumeData = {...dataResume, userId: user.id};

		await this._connect.resume.create({
			data: modelResumeData,
		});

		return user.id;
	}

	public async newUser(data: IUser): Promise<string> {
		const user = await this._connect.user.create({data});

		return user.id;
	}

	public async login(data: IGetUser): Promise<string> {
		const user = await this._connect.user.findFirst({where: data});

		return user.id;
	}

	public async getUser(id: string): Promise<User> {
		const user = await this._connect.user.findUnique({where: {id}});

		return user;
	}

	public async getUserAndResume(id: string): Promise<User> {
		const infos = await this._connect.user.findFirst({
			where: {id},
			include: {Resume: true},
		});

		return infos;
	}
}
