/* eslint-disable @typescript-eslint/no-unsafe-call */
import type React from 'react';
import {useState} from 'react';

import type {IUpdate} from '../interface/user-info';
import type {INewResume, INewUser, IUser} from '../services/user-api';

export const submitForm = (callback: any, stateInitial: IUpdate | INewUser | IUser | INewResume) => {
	const [values, setValues] = useState(stateInitial);

	const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setValues({...values, [event.target.name]: [event.target.value][0]});
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		await callback();
	};

	return {onChange, onSubmit, values};
};
