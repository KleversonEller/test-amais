import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/not-found';
import Login from './pages/login';
import NewUser from './pages/new-user';
import UpdateResume from './pages/update-resume';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/create' element={<NewUser />} />
				<Route path='/update' element={<UpdateResume />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
