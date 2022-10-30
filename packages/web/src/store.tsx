import create from 'zustand';
import {devtools} from 'zustand/middleware';

type Store = {
	logon: boolean;
	setLogon: () => void;
};

const useStore = create<Store>()(
	devtools(set => ({
		logon: false,

		setLogon() {
			set({logon: true});
		},
	})),
);

export default useStore;
