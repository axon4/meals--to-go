import React, { useState, createContext } from 'react';
import { logIn, register, persistUser, logOut } from './authenticationService.js';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const onLogIn = (email, password) => {
		setIsLoading(true);
		logIn(email, password)
			.then(loggedIn => {
				setUser(loggedIn);
				setIsLoading(false);
			})
			.catch(notLoggedIn => {
				setError(notLoggedIn.toString());
				setIsLoading(false);
			});
	};

	const onRegistration = (email, password, repeatedPassword) => {
		if (password !== repeatedPassword) {
			setError('Passwords Do Not Match');

			return;
		};
		
		setIsLoading(true);
		register(email, password)
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
		<AuthenticationContext.Provider
			value={{
				isAuthenticated: !!user,
				user,
				isLoading, 
				onLogIn,
				onRegistration,
				onLogOut,
				error
			}}
		>
			{children}
		</AuthenticationContext.Provider>
	);
};

export default AuthenticationContextProvider;