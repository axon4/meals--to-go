import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SettingsScreen from '../../../features/settings/screens/SettingsScreen.jsx';
import FavouritesScreen from '../../../features/settings/screens/FavouritesScreen.jsx';
import CameraScreen from '../../../features/settings/screens/CameraScreen.jsx';

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ navigation, route }) => {
	return (
		<SettingsStack.Navigator
			headerMode='screen'
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
			}}
		>
			<SettingsStack.Screen
				name='Settings'
				component={SettingsScreen}
				options={{header: () => null}}
			/>
			<SettingsStack.Screen
				name='Favourites'
				component={FavouritesScreen}
			/>
			<SettingsStack.Screen
				name='Camera'
				component={CameraScreen}
			/>
		</SettingsStack.Navigator>
	);
};

export default SettingsNavigator;