import create from 'zustand';
import {devtools} from 'zustand/middleware';

import type {IUserInfo, IResumeInfo} from './interface/user-info';

type Store = {
	logon: boolean;
	token: string;
	userInfo: IUserInfo | undefined;
	resume: IResumeInfo;

	setLogon: (state: boolean) => void;
	setToken: (token: string) => void;
	setUserInfo: (infos: IUserInfo | undefined) => void;
};

const useStore = create<Store>()(
	devtools(set => ({
		logon: false,
		token: 'token',
		userInfo: undefined,
		resume: {
			id: ' ',
			cpf: ' ',
			birthDate: ' ',
			sex: ' ',
			civilState: ' ',
			schooling: ' ',
			specialization: '',
			company: '',
			office: '',
			wage: ' ',
			userId: ' ',
			createAt: ' ',
		},

		setLogon(state) {
			set({logon: state});
		},

		setToken(token) {
			set({token});
		},

		setUserInfo(infos) {
			set({userInfo: infos});
			set({resume: infos?.Resume[0] as unknown as IResumeInfo});
		},
	})),
);

export default useStore;
