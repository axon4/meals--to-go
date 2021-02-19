import React, { useState, createContext } from 'react';
import { logIn, register, persistUser, logOut } from './authenticationService.js';

export const AuthenticationConText = createContext();

const AuthenticationConTextProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const onLogIn = (eMail, passWord) => {
		setIsLoading(true);

		logIn(eMail, passWord)
			.then(loggedIn => {
				setUser(loggedIn);
				setIsLoading(false);
			})
			.catch(notLoggedIn => {
				setError(notLoggedIn.toString());
				setIsLoading(false);
			});
	};

	const onRegistration = (eMail, passWord, repeatedPassWord) => {
		if (passWord !== repeatedPassWord) {
			setError('PassWords Do Not Match');

			return;
		};

		setIsLoading(true);

		register(eMail, passWord)
			.then(registered => {
				setUser(registered);
				setIsLoading(false);
			})
			.catch(notRegistered => {
				setError(notRegistered.toString());
				setIsLoading(false);
			});
	};

	persistUser(persistedUser => {
		if (persistedUser) {
			setUser(persistedUser);
		};

		setIsLoading(false);
	});

	const onLogOut = () => {
		setUser(null);
		logOut();
	};

	return (
		<AuthenticationConText.Provider value={{ isAuthenticated: !!user, user, isLoading, onLogIn, onRegistration, onLogOut, error }}>
			{children}
		</AuthenticationConText.Provider>
	);
};

export default AuthenticationConTextProvider;