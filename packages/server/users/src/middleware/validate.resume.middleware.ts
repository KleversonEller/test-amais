/* eslint-disable @typescript-eslint/no-extraneous-class */
import Joi from 'joi';
import {StatusCodes} from 'http-status-codes';
import PersonalError from '@utils/Personal.error';
import type IResume from 'src/interfaces/resume.interface';

/**
 * @function ResumeValidate
 * ? Classe que faz as validações para a tabela Resume utilizando o Joi
 *
 * @method ResumeValidate.newResume
 * ? Método que valida as informações para a criação/atualização de um currículo
 */

export default class ResumeValidate {
	static newResume(data: IResume): void {
		const {error} = Joi.object({
			cpf: Joi.string().required().length(11),
			birthDate: Joi.string().required().length(8),
			sex: Joi.string().required(),
			civilState: Joi.string().required(),
			schooling: Joi.required(),
			specialization: [Joi.string().optional(), Joi.allow(null)],
			company: [Joi.string().optional(), Joi.allow(null)],
			office: [Joi.string().optional(), Joi.allow(null)],
			wage: Joi.string().required(),
		}).validate(data);

		if (error) {
			throw new PersonalError(StatusCodes.BAD_REQUEST, 'All fields must be filled');
		}
	}
}
