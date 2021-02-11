import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsNavigator from './navigators/RestaurantsNavigator.jsx';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import SafeArea from '../../components/SafeArea';
import MapScreen from '../../features/map/screens/MapScreen.jsx';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings'
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];

	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		)
	};
};

const SettingsScreen = () => <SafeArea><Text>SETTINGS</Text></SafeArea>

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={createScreenOptions}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray'
				}}	
			>
				<Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
				<Tab.Screen name='Map' component={MapScreen} />
				<Tab.Screen name='Settings' component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
};

export default MainNavigator;