import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

import { AuthProvider } from '../contexts/Auth.js';

const App = () => {
	return (
		<div id="app">
			<AuthProvider>
				<Header />
				<Router>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</AuthProvider>
		</div>
	)
}

export default App;
