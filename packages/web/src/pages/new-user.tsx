import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {submitForm} from '../utils/submit-form';
import {setNewUser} from '../services/user-api';

import type {IUser} from '../services/user-api';

function NewUser() {
	const [inputValid, setInputValid] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleClickCancel = () => {
		navigate('/');
	};

	const handleSave = async () => {
		const user = await setNewUser(values as IUser);

		if (user) {
			navigate('/login');
		} else {
			setInputValid(true);
		}
	};

	const {onChange, onSubmit, values} = submitForm(handleSave, {} as unknown as IUser);

	return (
		<div className='w-full flex justify-center items-center'>
			<form
				onSubmit={onSubmit}
				className='h-full w-4/5 my-12 py-5 flex flex-col justify-evenly items-center gap-6 border border-black drop-shadow-2xl rounded'
			>
				<div className='flex gap-4 items-center font-bold text-xl'>
					<label htmlFor='name' />
                        *Nome:
					<input
						placeholder='Ex: Maria'
						name='name'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>

					<label htmlFor='lastName' />
                        *Sobrenome:
					<input
						placeholder='Ex: Eduarda'
						name='lastName'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>
				</div>

				<div className='flex gap-4 items-center font-bold text-xl'>
					<label htmlFor='email' />
                        *E-mail:
					<input
						placeholder='Ex: maria.eduarda@gmail.com'
						name='email'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>

					<label htmlFor='password' />
                        *Senha:
					<input
						placeholder='Mínimo 4 dígitos'
						name='password'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='password'
					/>
				</div>

				{inputValid && <span className='text-red-500 text-lg'>{'Os campos com \' * \' são obrigatórios !'}</span>}

				<div className='w-3/5 mb-6 flex justify-evenly'>
					<button
						onClick={handleClickCancel}
						type='button'
						className='bg-red-300 px-6 py-3  rounded-lg text-xl font-bold hover:bg-red-400'
					>
                        Cancelar
					</button>

					<button
						name='entrar'
						className='bg-green-300 px-6 py-3 rounded-lg text-xl font-bold hover:bg-green-400'
						type='submit'
					>
                        Criar
					</button>
				</div>
			</form>
		</div>
	);
}

export default NewUser;
