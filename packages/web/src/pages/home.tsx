import React from 'react';

import NavBar from '../components/nav-bar';
import useStore from '../store';
import UserResume from '../components/user-resume';
import ClientSummary from '../components/client-summary';
import CreateUser from '../components/create-user';

function Home() {
	const logon = useStore(state => state.logon);
	const userInfo = useStore(state => state.userInfo);

	return (
		<div className='flex flex-col items-center h-screen'>
			<NavBar buttonText={logon ? 'Sair' : 'Login'} />

			{logon ? (userInfo?.permision === 'admin' ? <ClientSummary /> : <UserResume />)
				: <CreateUser />}
		</div>
	);
}

export default Home;
