import React, { useContext } from 'react';
import { AuthenticationConText } from '../../services/authentication/AuthenticationConText.jsx';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationNavigator from './navigators/ApplicationNavigator.jsx';
import AuthenticationNavigator from './navigators/AuthenticationNavigator.jsx';

const Navigation = () => {
	const { isAuthenticated } = useContext(AuthenticationConText);

	return (
		<NavigationContainer>
			{isAuthenticated ? <ApplicationNavigator /> : <AuthenticationNavigator />}
		</NavigationContainer>
	);
};

export default Navigation;