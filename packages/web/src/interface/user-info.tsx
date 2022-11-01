/* eslint-disable @typescript-eslint/naming-convention */
type IUserInfo = {
	id: string;
	name: string;
	lastName: string;
	email: string;
	password: string;
	permision: string;
	createAt: string;
	Resume: [
        id: string,
        cpf: string,
        birthDate: string,
        sex: string,
        civilState: string,
        schooling: string,
        specialization: string | undefined,
        company: string | undefined,
        office: string | undefined,
        wage: string,
        userId: string,
        createAt: string,
	];
};

type IResumeInfo = {
	id: string;
	cpf: string;
	birthDate: string;
	sex: string;
	civilState: string;
	schooling: string;
	specialization: string | undefined;
	company: string | undefined;
	office: string | undefined;
	wage: string;
	userId: string;
	createAt: string;
};

type IUpdate = {
	cpf: string | undefined;
	birthDate: string | undefined;
	sex: string | undefined;
	civilState: string | undefined;
	schooling: string | undefined;
	specialization?: string | undefined;
	company?: string | undefined;
	office?: string | undefined;
	wage: string | undefined;
};

type IAllInfos = {
	id: string;
	cpf: string;
	birthDate: string;
	sex: string;
	civilState: string;
	schooling: string;
	specialization: string | undefined;
	company: string | undefined;
	office: string | undefined;
	wage: string;
	userId: string;
	createAt: string;
	user: {
		id: string;
		name: string;
		lastName: string;
		email: string;
		password: string;
		permision: string;
		createAt: string;
	};
};

export type {IUserInfo, IResumeInfo, IUpdate, IAllInfos};
