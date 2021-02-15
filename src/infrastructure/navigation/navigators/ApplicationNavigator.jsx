import React from 'react';
import FavouritesContextProvider from '../../../services/favourites/FavouritesContext.jsx';
import LocationContextProvider from '../../../services/location/LocationContextProvider.jsx';
import RestaurantsContextProvider from '../../../services/restaurants/RestaurantsContextProvider.jsx';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsNavigator from './RestaurantsNavigator.jsx';
import SettingsNavigator from './SettingsNavigator.jsx';
import MapScreen from '../../../features/map/screens/MapScreen.jsx';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings'
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];

	return {
		tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />
	};
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
						<Tab.Screen name='Settings' component={SettingsNavigator} />
					</Tab.Navigator>
				</RestaurantsContextProvider>
			</LocationContextProvider>
		</FavouritesContextProvider>
	);
};

export default ApplicationNavigator;