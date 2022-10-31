import React from 'react';
import {useNavigate} from 'react-router-dom';

function CreateResume() {
	const navigate = useNavigate();

	return (
		<div className='my-16 p-10 h-3/4 w-3/4 flex flex-col items-center justify-around drop-shadow-2xl rounded'>
			<p
				className='text-center text-2xl font-bold'
			>{'Para começar a utilizar a pagina clique no botão \'Começar Agora\' ou caso já tenha uma conta basta apenas fazer login !!'}</p>

			<button
				onClick={() => {
					navigate('/create');
				}}
				className='bg-green-300 h-2/6 w-1/4 rounded-lg text-xl font-bold hover:bg-green-400'
			>
                Começar Agora
			</button>
		</div>
	);
}

export default CreateResume;
