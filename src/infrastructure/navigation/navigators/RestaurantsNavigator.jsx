import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantsScreen from '../../../features/restaurants/screens/RestaurantsScreen.jsx';
import RestaurantDetailsScreen from '../../../features/restaurants/screens/RestaurantDetailsScreen.jsx';

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
				name='RestaurantDetails'
				component={RestaurantDetailsScreen}
			/>
		</RestaurantsStack.Navigator>
	);
};

export default RestaurantsNavigator;