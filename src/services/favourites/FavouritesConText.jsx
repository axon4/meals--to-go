import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationConText } from '../authentication/AuthenticationConText.jsx';

export const FavouritesConText = createContext();

const FavouritesConTextProvider = ({ children }) => {
	const { user } = useContext(AuthenticationConText);

	const [ favourites, setFavourites ] = useState([]);

	const addFavourite = restaurant => {setFavourites([...favourites, restaurant])};

	const reMoveFavourite = restaurant => {
		const newFavourites = favourites.filter(restaurantToReMove => {
			return restaurantToReMove.placeId !== restaurant.placeId;
		});

		setFavourites(newFavourites);
	};

	const saveFavourites = async (uid, favourite) => {
		try {
			const favouriteToSave = JSON.stringify(favourite);

			await AsyncStorage.setItem(`@favourites-${uid}`, favouriteToSave);
		} catch (error) {
			console.error(error);
		};
	};

	const loadFavourites = async uid => {
		try {
			const favouritesToLoad = await AsyncStorage.getItem(`@favourites-${uid}`);

			if (favouritesToLoad !== null) {
				setFavourites(JSON.parse(favouritesToLoad));
			};
		} catch (error) {
			console.error(error);
		};
	};

	useEffect(() => {
		if (user && user.uid && favourites.length) {
			saveFavourites(user.uid, favourites);
		};
	}, [user, favourites]);

	useEffect(() => {
		if (user && user.uid) {
			loadFavourites(user.uid);
		};
	}, [user]);

	return (
		<FavouritesConText.Provider value={{ favourites, addFavourite, reMoveFavourite }}>
			{children}
		</FavouritesConText.Provider>
	);
};

export default FavouritesConTextProvider;