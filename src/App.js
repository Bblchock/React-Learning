import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

function App(props) {
	return (
		// <BrowserRouter>
		<HashRouter basename='/'>
			<div className='app-wrapper'>
				<Header />
				<NavBar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route
							path="/"
							element={<Profile
								posts={props.posts}
								addPost={props.addPost} />} />
						<Route
							path='profile'
							element={<Profile
								posts={props.posts}
								addPost={props.addPost} />} />
						<Route
							path='dialogs/*'
							element={<Dialogs
								dialogs={props.dialogs}
								messages={props.messages} />} />
					</Routes>

				</div>
			</div>
		</HashRouter>
		// </BrowserRouter>
	);
}

export default App;
