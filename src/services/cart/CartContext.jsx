import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/AuthenticationContext.jsx';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [ restaurant, setRestaurant ] = useState(null);
	const [ cart, setCart ] = useState([]);
	const [ total, setTotal ] = useState(0);

	const { user } = useContext(AuthenticationContext);

	const addToCart = (orderRestaurant, item) => {
		if (!restaurant || restaurant.placeId !== orderRestaurant.placeId) {
			setRestaurant(orderRestaurant);
			setCart([item]);
		} else {
			setCart([...cart, item]);
		};
	};

	const removeFromCart = () => {};

	const saveCart = async (uid, orderRestaurant, orderCart) => {
		try {
			const cartToSave = JSON.stringify({ restaurant: orderRestaurant, cart: orderCart });
			await AsyncStorage.setItem(`@cart-${uid}`, cartToSave);
		} catch (error) {
			console.log(error);
		};
	};

	const loadCart = async uid => {
		try {
			const cartToLoad = await AsyncStorage.getItem(`@cart-${uid}`);

			if (cartToLoad !== null) {
				const { restaurant: orderRestaurant, cart: orderCart } = JSON.parse(cartToLoad);

				setRestaurant(orderRestaurant);
				setCart(orderCart);
			};
		} catch (error) {
			console.log(error);
		};
	};

	const clearCart = () => {
		setRestaurant(null);
		setCart([]);
	};

	useEffect(() => {
		if (user && user.uid) {
			saveCart(user.uid, restaurant, cart);
		};
	}, [user, restaurant, cart]);

	useEffect(() => {
		if (user && user.uid) {
			loadCart(user.uid);
		};
	}, [user]);

	useEffect(() => {
		if (!cart.length) {
			setTotal(0);
		} else {
			const newTotal = cart.reduce((acc, { price }) => acc += price, 0);

			setTotal(newTotal);
		};
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				restaurant,
				cart,
				addToCart,
				removeFromCart,
				total,
				clearCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;