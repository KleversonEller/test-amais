import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {submitForm} from '../utils/submit-form';
import {setNewUserAndResume} from '../services/user-api';

import type {INewUser} from '../services/user-api';

function NewUserAndResume() {
	const [inputValid, setInputValid] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleClickCancel = () => {
		navigate('/');
	};

	const handleSave = async () => {
		const user = await setNewUserAndResume(values as INewUser);

		if (user) {
			navigate('/login');
		} else {
			setInputValid(true);
		}
	};

	const {onChange, onSubmit, values} = submitForm(handleSave, {} as unknown as INewUser);

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

				<div className='flex gap-4 items-center font-bold text-xl'>
					<label htmlFor='cpf' />
                        *CPF:
					<input
						placeholder='Ex: 000.000.000-00'
						name='cpf'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>

					<label htmlFor='birthDate' />
                        *Data de Nascimento:
					<input
						placeholder='Ex: dd/mm/aaaa'
						name='birthDate'
						onChange={onChange}
						className='w-44 rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
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
						<option selected disabled></option>
						<option value='Masculino'>Masculino</option>
						<option value='Feminino'>Feminino</option>
						<option value='Não-binário'>Não-binário</option>
					</select>

					<label htmlFor='civilState' />
                        *Estado Civil:
					<select
						name='civilState'
						onChange={onChange}
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg bg-white'
					>
						<option selected disabled></option>
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
						<option selected disabled></option>
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
						placeholder='Ex: Developer'
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
						placeholder='Ex: Amais Educação'
						onChange={onChange}
						name='company'
						className='rounded drop-shadow-lg px-5 py-1 font-normal text-lg'
						type='text'
					/>

					<label htmlFor='office' />
                        Cargo:
					<input
						placeholder='Ex: Developer'
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
						placeholder='Ex: 4.000'
						onChange={onChange}
						name='wage'
						className='rounded drop-shadow-lg px-5 w-32 py-1 font-normal text-lg'
						type='number'
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

export default NewUserAndResume;
