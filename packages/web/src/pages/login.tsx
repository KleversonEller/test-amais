import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import useStore from '../store';
import {getLogin, getUserAndResume} from '../services/user-api';

import type {FormEvent} from 'react';
import type {ILogin} from '../services/user-api';

function Login() {
	const [inputValid, setInputValid] = useState<boolean>(false);
	const navigate = useNavigate();
	const setLogon = useStore(set => set.setLogon);
	const setToken = useStore(set => set.setToken);
	const setUserInfo = useStore(set => set.setUserInfo);

	const handleClickCancel = () => {
		navigate('/');
	};

	const handleLogin = async (event: FormEvent) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData) as ILogin;

		const login = await getLogin(data);
		const userInfo = login && await getUserAndResume(login.data.token);

		if (login) {
			setToken(login.data.token);
			setUserInfo(userInfo?.data);
			setLogon(true);
			navigate('/');
		} else {
			setInputValid(true);
		}
	};

	return (
		<div className='p-10 flex items-center justify-center h-screen bg-[#2B9511]/30'>

			<form onSubmit={handleLogin} className='bg-zinc-200 flex flex-col justify-evenly items-center drop-shadow-2xl rounded h-4/5 w-2/4 gap-4'>
				<div className='flex flex-col gap-4 font-bold text-2xl w-3/5'>
					<label htmlFor='email' />
                        E-mail
					<input
						name='email'
						className='rounded h-9 w-full drop-shadow-lg p-6 font-normal text-lg'
						type='text'
					/>
				</div>

				<div className='flex flex-col gap-4 font-bold text-2xl w-3/5'>
					<label htmlFor='password' />
                        Senha
					<input
						name='password'
						className='rounded h-9 w-full drop-shadow-lg p-6'
						type='password'
					/>
				</div>

				{inputValid && <span className='text-red-500 text-lg'>Informe seu E-mail e Senha !</span>}

				<div className='w-3/5 h-24 flex justify-evenly'>
					<button
						onClick={handleClickCancel}
						type='button'
						className='bg-red-300 h-3/5 w-2/5 rounded-lg text-xl font-bold hover:bg-red-400'
					>
                        Cancelar
					</button>

					<button
						name='entrar'
						className='bg-green-300 h-3/5 w-2/5 rounded-lg text-xl font-bold hover:bg-green-400'
						type='submit'
					>
                        Entrar
					</button>
				</div>
			</form>

		</div>
	);
}

export default Login;
