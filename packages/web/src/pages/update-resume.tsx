import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {submitForm} from '../utils/submit-form';
import type {INewResume} from '../services/user-api';
import {update, getUserAndResume, setNewResume} from '../services/user-api';
import NavBar from '../components/nav-bar';
import useStore from '../store';

import type {IUpdate} from '../interface/user-info';

function UpdateResume() {
	const navigate = useNavigate();
	const logon = useStore(state => state.logon);
	const resume = useStore(set => set.resume);
	const token = useStore(set => set.token);
	const setUserInfo = useStore(set => set.setUserInfo);

	useEffect(() => {
		if (!logon) {
			navigate('/login');
		}
	}, []);

	const handleClickCancel = () => {
		navigate('/');
	};

	const handleSave = async () => {
		if (resume) {
			await update(values as IUpdate, resume.id);
		} else {
			await setNewResume(values as INewResume, token);
		}

		navigate('/');

		const newResume = await getUserAndResume(token);
		setUserInfo(newResume?.data);
	};

	const {onChange, onSubmit, values} = submitForm(handleSave, {
		cpf: resume?.cpf,
		birthDate: resume?.birthDate.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1'),
		sex: resume?.sex,
		civilState: resume?.civilState,
		schooling: resume?.schooling,
		specialization: resume?.specialization,
		company: resume?.company,
		office: resume?.office,
		wage: resume?.wage,
	});

	return (
		<div className='flex flex-col items-center h-screen'>
			<NavBar buttonText={logon ? 'Sair' : 'Login'} />

			<form
				onSubmit={onSubmit}
				className='h-full w-4/5 my-12 py-5 flex flex-col justify-evenly items-center gap-4 border border-black drop-shadow-2xl rounded'
			>
				<div className='flex gap-4 items-center font-bold text-xl'>
					<label htmlFor='cpf' />
                        *CPF:
					<input
						placeholder={resume?.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
						name='cpf'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>

					<label htmlFor='birthDate' />
                        *Data de Nascimento:
					<input
						placeholder={resume?.birthDate.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1')}
						name='birthDate'
						onChange={onChange}
						className='w-36 rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>
				</div>

				<div className='flex gap-4 items-center font-bold text-xl'>
					<label htmlFor='sex' />
                        *Sexo:
					<select
						name='sex'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg bg-white'
					>
						<option disabled selected>{resume?.sex}</option>
						<option value='Homem'>Homem</option>
						<option value='Mulher'>Mulher</option>
						<option value='Não-binário'>Não-binário</option>
					</select>

					<label htmlFor='civilState' />
                        *Estado Civil:
					<select
						name='civilState'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg bg-white'
					>
						<option disabled selected>{resume?.civilState}</option>
						<option value='Solteiro'>Solteiro</option>
						<option value='Casado'>Casado</option>
						<option value='Separado'>Separado</option>
						<option value='Divorciado'>Divorciado</option>
						<option value='Viúvo'>Viúvo</option>
					</select>
				</div>

				<div className='flex gap-4 items-center font-bold text-xl'>
					<label htmlFor='schooling' />
                        *Escolaridade:
					<select
						name='schooling'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg bg-white'
					>
						<option disabled selected>{resume?.schooling}</option>
						<option value='Fundamental'>Fundamental</option>
						<option value='Médio'>Médio</option>
						<option value='Superior'>Superior</option>
						<option value='Pós-graduação'>Pós-graduação</option>
						<option value='Mestrado'>Mestrado</option>
						<option value='Doutorado'>Doutorado</option>
						<option value='Outro'>Outro</option>
					</select>

					<label htmlFor='specialization' />
                        Curso/ Especialização:
					<input
						placeholder={resume?.specialization}
						onChange={onChange}
						name='specialization'
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>
				</div>

				<div className='flex gap-4 items-center font-bold text-xl'>
					<label htmlFor='company' />
                        Empresa:
					<input
						placeholder={resume?.company}
						onChange={onChange}
						name='company'
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>

					<label htmlFor='office' />
                        Cargo:
					<input
						placeholder={resume?.office}
						onChange={onChange}
						name='office'
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>
				</div>

				<div className='flex gap-4 items-center font-bold text-xl'>
					<label htmlFor='wage' />
                        *Pretensão Salarial:
					<input
						placeholder={resume?.wage}
						onChange={onChange}
						name='wage'
						className='rounded drop-shadow-lg px-5 w-32 py-1 font-normal text-lg'
						type='number'
					/>
				</div>

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
                        Salvar
					</button>
				</div>
			</form>
		</div>
	);
}

export default UpdateResume;
