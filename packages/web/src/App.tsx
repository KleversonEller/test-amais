import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/not-found';
import Login from './pages/login';
import NewUserAndResume from './pages/new-user-and-resume';
import UpdateResume from './pages/update-resume';
import NewUser from './pages/new-user';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/create' element={<NewUserAndResume />} />
				<Route path='/update' element={<UpdateResume />} />
				<Route path='/create-user' element={<NewUser />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
