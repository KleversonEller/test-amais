import React from 'react';
import {useNavigate} from 'react-router-dom';

function CreateUser() {
	const navigate = useNavigate();

	return (
		<div className='my-16 p-10 h-3/4 w-3/4 flex flex-col items-center justify-around drop-shadow-2xl rounded'>
			<p
				className='text-center text-2xl font-bold'
			>{'Para começar a utilizar a pagina crie um usuário, caso já tenha um usuário cadastrado basta apenas fazer login !!'}</p>

			<div className='w-full h-3/5 flex justify-evenly'>
				<button
					onClick={() => {
						navigate('/create');
					}}
					className='bg-green-300 h-2/6 w-1/4 rounded-lg text-xl font-bold hover:bg-green-400'
				>
                Criar usuário e currículo
				</button>

				<button
					onClick={() => {
						navigate('/create-user');
					}}
					className='bg-green-300 h-2/6 w-1/4 rounded-lg text-xl font-bold hover:bg-green-400'
				>
                Criar usuário
				</button>
			</div>
		</div>
	);
}

export default CreateUser;
