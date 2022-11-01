/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

import type {AxiosResponse} from 'axios';
import type {IUpdate} from '../interface/user-info';

export type ILogin = {
	email: string;
	password: string;
};

export type INewUser = {
	name: string;
	lastName: string;
	email: string;
	password: string;
	permision?: string;
	cpf: string;
	birthDate: string;
	sex: string;
	civilState: string;
	specialization?: string;
	schooling: string;
	company?: string;
	office?: string;
	wage: string;
};

export type IUser = {
	name: string;
	lastName: string;
	email: string;
	password: string;
	permision: string;
};

export type INewResume = {
	cpf: string;
	birthDate: string;
	sex: string;
	civilState: string;
	schooling: string;
	specialization: string;
	company: string;
	office: string;
	wage: string;
};

const URL = 'http://localhost:3010/';

const getLogin = async (data: ILogin): Promise<AxiosResponse | undefined> => {
	try {
		const response = await axios.post(`${URL}login`, data);
		return response;
	} catch (error: unknown) {
		return undefined;
	}
};

const setNewUserAndResume = async (data: INewUser): Promise<AxiosResponse | undefined> => {
	const cpfEdit = data.cpf.replace(/\D/g, '');
	const birthDateEdit = data.birthDate.replace(/\D/g, '')
		.replace(/(\d{2})(\d{2})(\d{4})/, '$3$2$1');

	const newData = {
		user: {
			name: data.name,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
			permision: 'user',
		},
		resume: {
			cpf: cpfEdit,
			birthDate: birthDateEdit,
			sex: data.sex,
			civilState: data.civilState,
			schooling: data.schooling,
			specialization: data.specialization,
			company: data.company,
			office: data.office,
			wage: data.wage,
		},
	};

	try {
		const response = await axios.post(`${URL}newUserAndResume`, newData);
		alert('Usuário e currículo criados com sucesso !');
		return response;
	} catch (error: unknown) {
		return undefined;
	}
};

const getUserAndResume = async (id: string): Promise<AxiosResponse | void> => {
	try {
		const response = await axios.get(`${URL}getUserAndResume`, {headers: {id}});
		return response;
	} catch (error: unknown) {
		alert(error);
	}
};

const update = async (data: IUpdate, id: string): Promise<void> => {
	const newData = {
		...data,
		birthDate: data.birthDate?.replace(/\D/g, '')
			.replace(/(\d{2})(\d{2})(\d{4})/, '$3$2$1'),
		cpf: data.cpf?.replace(/\D/g, ''),
	};

	try {
		await axios.patch(`${URL}updateResume/${id}`, newData);
		alert('Currículo atualizado com sucesso !');
	} catch (error: unknown) {
		alert('Erro ao atualizar o currículo !');
	}
};

const setNewUser = async (data: IUser): Promise<AxiosResponse | undefined> => {
	try {
		const response = await axios.post(`${URL}newUser`, {
			...data,
			permision: 'user',
		});
		alert('Usuário criado com sucesso !');
		return response;
	} catch (error: unknown) {
		return undefined;
	}
};

const setNewResume = async (data: INewResume, token: string): Promise<AxiosResponse | undefined> => {
	const newData = {
		...data,
		birthDate: data.birthDate?.replace(/\D/g, '')
			.replace(/(\d{2})(\d{2})(\d{4})/, '$3$2$1'),
		cpf: data.cpf?.replace(/\D/g, ''),
	};

	try {
		const response = await axios.post(`${URL}newResume`, newData, {
			headers: {id: token},
		});
		alert('Currículo criado com sucesso');
		return response;
	} catch (error: unknown) {
		alert('Erro ao criar o currículo !');
		return undefined;
	}
};

const getAllInfos = async (): Promise<AxiosResponse | undefined> => {
	try {
		const allInfos = await axios.get(`${URL}getAllInfos`);
		return allInfos;
	} catch (error: unknown) {
		return undefined;
	}
};

export {
	getLogin,
	setNewUserAndResume,
	getUserAndResume,
	update,
	setNewUser,
	setNewResume,
	getAllInfos,
};
