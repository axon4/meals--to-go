import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantsScreen from '../../../features/restaurants/screens/RestaurantsScreen.jsx';
import RestaurantDeTailsScreen from '../../../features/restaurants/screens/RestaurantDeTailsScreen.jsx';

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => {
	return (
		<RestaurantsStack.Navigator
			headerMode='none'
			screenOptions={{
				...TransitionPresets.ModalPresentationIOS
			}}
		>
			<RestaurantsStack.Screen
				name='Restaurants'
				component={RestaurantsScreen}
			/>
			<RestaurantsStack.Screen
				name='RestaurantDeTails'
				component={RestaurantDeTailsScreen}
			/>
		</RestaurantsStack.Navigator>
	);
};

export default RestaurantsNavigator;