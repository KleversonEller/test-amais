import React from 'react';
import {useNavigate} from 'react-router-dom';

import logo from '../images/logo.svg';
import useStore from '../store';

type NavBarProps = {
	buttonText: string;
};

function NavBar(props: NavBarProps) {
	const navigate = useNavigate();
	const setLogon = useStore(set => set.setLogon);

	const handleClick = () => {
		if (props.buttonText === 'Login') {
			navigate('/login');
		} else {
			setLogon(false);
			navigate('/');
		}
	};

	return (
		<div className='flex justify-between items-center bg-red-500/50 w-full h-20 px-10'>
			<img className='h-20 w-48' src={logo} alt='Logo' />

			<button
				onClick={handleClick}
				className='bg-green-300 h-3/5 w-1/5 rounded-lg text-xl font-bold hover:bg-green-400'
			>
				{props.buttonText}
			</button>
		</div>
	);
}

export default NavBar;
