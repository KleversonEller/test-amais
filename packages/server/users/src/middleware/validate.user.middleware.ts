/* eslint-disable @typescript-eslint/no-extraneous-class */
import Joi from 'joi';
import {StatusCodes} from 'http-status-codes';
import type IGetUser from 'src/interfaces/get.user.interface';
import PersonalError from '@utils/Personal.error';
import type IUser from 'src/interfaces/user.interface';

/**
 * @function UserValidate
 * ? Classe que faz as validações para a tabela User utilizando o Joi
 *
 * @method UserValidate.login
 * ? Método que valida as informações para uma requisição de login
 *
 * @method UserValidate.getUser
 * ? Método que valida as informações para uma requisição de usuário
 *
 * @method UserValidate.newUser
 * ? Método que valida as informações para a criação/atualização de um usuário
 */

export default class UserValidate {
	static login(data: IGetUser): void {
		const {error} = Joi.object({
			email: Joi.string().required().email(),
			password: Joi.string().required(),
		}).validate(data);

		if (error) {
			throw new PersonalError(StatusCodes.BAD_REQUEST, 'All fields must be filled');
		}
	}

	static getUser(id: string): void {
		const {error} = Joi.string().required().validate(id);

		if (error) {
			throw new PersonalError(StatusCodes.BAD_REQUEST, 'ID is required');
		}
	}

	static newUser(data: IUser): void {
		const {error} = Joi.object({
			name: Joi.string().required(),
			lastName: Joi.string().required(),
			email: Joi.string().required().email(),
			password: Joi.string().required(),
			permision: Joi.string(),
		}).validate(data);

		if (error) {
			throw new PersonalError(StatusCodes.BAD_REQUEST, 'All fields must be filled');
		}
	}
}
