import React, { useContext } from 'react';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationNavigator from './navigators/ApplicationNavigator.jsx';
import AuthenticationNavigator from './navigators/AuthenticationNavigator.jsx';

const Navigation = () => {
	const { isAuthenticated } = useContext(AuthenticationContext);

	return (
		<NavigationContainer>
			{isAuthenticated ? <ApplicationNavigator /> : <AuthenticationNavigator />}
		</NavigationContainer>
	);
};

export default Navigation;