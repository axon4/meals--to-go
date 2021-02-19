import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from '../../../features/authentication/screens/AuthenticationScreen.jsx';
import LogInScreen from '../../../features/authentication/screens/LogInScreen.jsx';
import RegistrationScreen from '../../../features/authentication/screens/RegistrationScreen.jsx';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
	return (
		<AuthenticationStack.Navigator headerMode='none'>
			<AuthenticationStack.Screen name='Authentication' component={AuthenticationScreen} />
			<AuthenticationStack.Screen name='Log-In' component={LogInScreen} />
			<AuthenticationStack.Screen name='Registration' component={RegistrationScreen} />
		</AuthenticationStack.Navigator>
	);
};

export default AuthenticationNavigator;