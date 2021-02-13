import React, { useContext } from 'react';
import FavouritesContextProvider from '../../../services/favourites/FavouritesContext.jsx';
import LocationContextProvider from '../../../services/location/LocationContextProvider.jsx';
import RestaurantsContextProvider from '../../../services/restaurants/mock/RestaurantsContextProvider.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsNavigator from './RestaurantsNavigator.jsx';
import { Ionicons } from '@expo/vector-icons';
import { Button, Text } from 'react-native';
import SafeArea from '../../../components/SafeArea';
import MapScreen from '../../../features/map/screens/MapScreen.jsx';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext.jsx';

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

const SettingsScreen = () => {
	const { onLogOut } = useContext(AuthenticationContext);
	
	return (
		<SafeArea>
			<Text>SETTINGS</Text>
			<Button title='Log Out' onPress={() => onLogOut()} />
		</SafeArea>
	);
};

const ApplicationNavigator = () => {
	return (
		<FavouritesContextProvider>
			<LocationContextProvider>
				<RestaurantsContextProvider>
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
				</RestaurantsContextProvider>
			</LocationContextProvider>
		</FavouritesContextProvider>
	);
};

export default ApplicationNavigator;