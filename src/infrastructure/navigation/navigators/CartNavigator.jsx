import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../../features/cart/screens/CartScreen.jsx';
import CartSuccessScreen from '../../../features/cart/screens/CartSuccessScreen.jsx';
import CartFailureScreen from '../../../features/cart/screens/CartFailureScreen.jsx';

const CartStack = createStackNavigator();

const CartNavigator = () => {
	return (
		<CartStack.Navigator headerMode='none'>
			<CartStack.Screen name='Cart' component={CartScreen} />
			<CartStack.Screen name='CartSuccess' component={CartSuccessScreen} />
			<CartStack.Screen name='CartFailure' component={CartFailureScreen} />
		</CartStack.Navigator>
	);
};

export default CartNavigator;