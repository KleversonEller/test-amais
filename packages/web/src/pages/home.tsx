import React from 'react';

import NavBar from '../components/nav-bar';
import useStore from '../store';
import UserResume from '../components/user-resume';
import CreateResume from '../components/create-resume';

function Home() {
	const logon = useStore(state => state.logon);

	return (
		<div className='flex flex-col items-center h-screen'>
			<NavBar buttonText={logon ? 'Sair' : 'Login'} />

			{logon ? <UserResume /> : <CreateResume />}
		</div>
	);
}

export default Home;