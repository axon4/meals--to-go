import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouritesConTextProvider from '../../../services/favourites/FavouritesConText.jsx';
import LocationConTextProvider from '../../../services/location/LocationConText.jsx';
import RestaurantsContextProvider from '../../../services/restaurants/RestaurantsContextProvider.jsx';
import { AuthenticationConText } from '../../../services/authentication/AuthenticationConText.jsx';
import CartConTextProvider from '../../../services/cart/CartConText.jsx';
import RestaurantsNavigator from './RestaurantsNavigator.jsx';
import SettingsNavigator from './SettingsNavigator.jsx';
import CartNavigator from './CartNavigator.jsx';
import MapScreen from '../../../features/map/screens/MapScreen.jsx';
import { Ionicons } from '@expo/vector-icons';
import { colours } from '../../theme/aspects/colours.js';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Cart: 'md-cart',
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
		<FavouritesConTextProvider>
			<LocationConTextProvider>
				<RestaurantsContextProvider>
					<CartConTextProvider>
						<Tab.Navigator
							screenOptions={createScreenOptions}
							tabBarOptions={{
								activeTintColor: colours.brand.primary,
								inactiveTintColor: colours.brand.muted
							}}
						>
							<Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
							<Tab.Screen name='Map' component={MapScreen} />
							<Tab.Screen name='Cart' component={CartNavigator} />
							<Tab.Screen name='Settings' component={SettingsNavigator} />
						</Tab.Navigator>
					</CartConTextProvider>
				</RestaurantsContextProvider>
			</LocationConTextProvider>
		</FavouritesConTextProvider>
	);
};

export default ApplicationNavigator;