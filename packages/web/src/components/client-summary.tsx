/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';

import {getAllInfos} from '../services/user-api';

import type {IAllInfos} from '../interface/user-info';

function ClientSummary() {
	const [allInfos, setAllInfos] = useState<IAllInfos[]>([]);
	const [containInfo, setContainInfo] = useState<boolean>(false);
	const [wageSum, setWageSum] = useState<number>(0);
	const [wageMed, setWageMed] = useState<number>(0);

	useEffect(() => {
		const getInfos = async () => {
			const infos = await getAllInfos();

			if (infos) {
				const filterUser = infos.data
					.filter((info: IAllInfos) => info.user.permision === 'user') as IAllInfos[];

				const sumWage = filterUser
					.reduce((total: number, info: IAllInfos) => Number(info.wage) + total, 0);

				const medWage = sumWage / filterUser.length;

				setWageMed(medWage);
				setWageSum(sumWage);
				setAllInfos(filterUser);
				setContainInfo(true);
			}
		};

		void getInfos();
	}, []);

	return (
		<div className='h-full w-4/6 my-8 flex flex-col items-center gap-8'>
			{containInfo
				? (allInfos.map(info => (
					<table key={uuid()} className='h-full w-full flex flex-col items-center gap-8'>
						<tbody className='h-full w-full gap-4 py-3 flex flex-col justify-evenly items-center border border-black drop-shadow-2xl rounded'>
							<tr className='flex justify-around w-full'>
								<td>
									<span className='font-bold mr-2'>Nome:</span>
									{info.user.name}
								</td>
								<td>
									<span className='font-bold mr-2'>Sobrenome:</span>
									{info.user.lastName}
								</td>
							</tr>
							<tr className='flex justify-around w-full'>
								<td>
									<span className='font-bold mr-2'>E-mail:</span>
									{info.user.email}
								</td>
								<td>
									<span className='font-bold mr-2'>CPF:</span>
									{info.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
								</td>
							</tr>
							<tr className='flex justify-around w-full'>
								<td>
									<span className='font-bold mr-2'>Data de Nascimento:</span>
									{info.birthDate.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1')}
								</td>
								<td>
									<span className='font-bold mr-2'>Sexo:</span>
									{info.sex}
								</td>
								<td>
									<span className='font-bold mr-2'>Estado Civil:</span>
									{info.civilState}
								</td>
							</tr>
							<tr className='flex justify-around w-full'>
								<td>
									<span className='font-bold mr-2'>Escolaridade:</span>
									{info.schooling}
								</td>
								<td>
									<span className='font-bold mr-2'>Curso/ Especialização:</span>
									{info.specialization}
								</td>
							</tr>
							<tr className='flex justify-around w-full'>
								<td>
									<span className='font-bold mr-2'>Experiência Profissional:</span>
									{info.company} / {info.office}
								</td>
								<td className={`${
									Number(info.wage) < wageMed
										? 'text-green-600'
										: 'text-blue-600'
								}`}>
									<span
										className='font-bold mr-2 text-black'
									>
                                        Pretensão Salarial:
									</span>
									{info.wage}
								</td>
							</tr>
						</tbody>
					</table>
				)))
				: <p>Nenhum currículo foi cadastrado ainda !</p>}

			<table className='h-full w-full flex flex-col items-center'>
				<tbody className='h-full w-full gap-4 py-3 flex flex-col justify-evenly items-center border border-black drop-shadow-2xl rounded'>
					<tr className='flex justify-around w-full'>
						<td>
							<span className='font-bold mr-2'>Soma das pretensões salariais:</span>
							{wageSum}
						</td>
						<td>
							<span className='font-bold mr-2'>Media das pretensões salariais:</span>
							{wageMed}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ClientSummary;
