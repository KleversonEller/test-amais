/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

import useStore from '../store';

import type {AxiosResponse} from 'axios';
import type {IResumeInfo, IUpdate} from '../interface/user-info';

export type ILogin = {
	email: string;
	password: string;
};

export type INewUser = {
	user: {
		name: string;
		lastName: string;
		email: string;
		password: string;
		permision?: string;
	};
	resume: {
		cpf: string;
		birthDate: string;
		sex: string;
		civilState: string;
		schooling?: string;
		company?: string;
		office?: string;
		wage: string;
	};
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
	try {
		const response = await axios.post(`${URL}newUserAndResume`, data);
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
	console.log(data, id);

	try {
		await axios.patch(`${URL}updateResume/${id}`, data);
		alert('Currículo atualizado com sucesso !');
	} catch (error: unknown) {
		alert('Erro ao atualizar o currículo !');
	}
};

export {getLogin, setNewUserAndResume, getUserAndResume, update};
