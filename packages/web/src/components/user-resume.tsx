import React from 'react';
import {useNavigate} from 'react-router-dom';

import useStore from '../store';

function UserResume() {
	const navigate = useNavigate();
	const userInfo = useStore(set => set.userInfo);
	const resume = useStore(set => set.resume);

	return (
		<table className='h-full w-4/6 my-16 flex flex-col items-center gap-8'>
			<tbody className='h-full w-full flex flex-col justify-evenly items-center border border-black drop-shadow-2xl rounded'>
				<tr className='flex justify-around w-full'>
					<td>
						<span className='font-bold mr-2'>Nome:</span>
						{userInfo?.name}
					</td>
					<td>
						<span className='font-bold mr-2'>Sobrenome:</span>
						{userInfo?.lastName}
					</td>
				</tr>
				<tr className='flex justify-around w-full'>
					<td>
						<span className='font-bold mr-2'>E-mail:</span>
						{userInfo?.email}
					</td>
					<td>
						<span className='font-bold mr-2'>CPF:</span>
						{resume?.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
					</td>
				</tr>
				<tr className='flex justify-around w-full'>
					<td>
						<span className='font-bold mr-2'>Data de Nascimento:</span>
						{resume?.birthDate.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1')}
					</td>
					<td>
						<span className='font-bold mr-2'>Sexo:</span>
						{resume?.sex}
					</td>
					<td>
						<span className='font-bold mr-2'>Estado Civil:</span>
						{resume?.civilState}
					</td>
				</tr>
				<tr className='flex justify-around w-full'>
					<td>
						<span className='font-bold mr-2'>Escolaridade:</span>
						{resume?.schooling}
					</td>
					<td>
						<span className='font-bold mr-2'>Curso/ Especialização:</span>
						{resume?.specialization}
					</td>
				</tr>
				<tr className='flex justify-around w-full'>
					<td>
						<span className='font-bold mr-2'>Experiência Profissional:</span>
						{resume?.company} / {resume?.office}
					</td>
					<td>
						<span className='font-bold mr-2'>Pretensão Salarial:</span>
						{resume?.wage}
					</td>
				</tr>
			</tbody>
			<button
				onClick={() => {
					navigate('/update');
				}}
				className='bg-blue-300 p-6 rounded-lg text-xl font-bold hover:bg-blue-400'
			>
                Editar Currículo
			</button>
		</table>
	);
}

export default UserResume;
