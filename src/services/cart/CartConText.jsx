import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationConText } from '../authentication/AuthenticationConText.jsx';

export const CartConText = createContext();

const CartConTextProvider = ({ children }) => {
	const [ restaurant, setRestaurant ] = useState(null);
	const [ cart, setCart ] = useState([]);
	const [ total, setTotal ] = useState(0);

	const { user } = useContext(AuthenticationConText);

	const addToCart = (orderRestaurant, item) => {
		if (!restaurant || restaurant.placeId !== orderRestaurant.placeId) {
			setRestaurant(orderRestaurant);
			setCart([item]);
		} else {
			setCart([...cart, item]);
		};
	};

	const reMoveFromCart = () => {};

	const saveCart = async (uid, orderRestaurant, orderCart) => {
		try {
			const cartToSave = JSON.stringify({ restaurant: orderRestaurant, cart: orderCart });

			await AsyncStorage.setItem(`@cart-${uid}`, cartToSave);
		} catch (error) {
			console.error(error);
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
			console.error(error);
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
			const newTotal = cart.reduce((accumulator, { price }) => accumulator += price, 0);

			setTotal(newTotal);
		};
	}, [cart]);

	return (
		<CartConText.Provider value={{ restaurant, cart, addToCart, reMoveFromCart, total, clearCart }}>
			{children}
		</CartConText.Provider>
	);
};

export default CartConTextProvider;