import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/AuthenticationContext.jsx';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
	const { user } = useContext(AuthenticationContext);

	const [ favourites, setFavourites ] = useState([]);

	const addFavourite = restaurant => setFavourites([...favourites, restaurant]);

	const removeFavourite = restaurant => {
		const newFavourites = favourites.filter(restaurantToRemove => {
			return restaurantToRemove.placeId !== restaurant.placeId;
		});

		setFavourites(newFavourites);
	};

	const saveFavourites = async (uid, favourite) => {
		try {
			const favouriteToSave = JSON.stringify(favourite);
			await AsyncStorage.setItem(`@favourites-${uid}`, favouriteToSave);
		} catch (error) {
			console.log(error);
		};
	};

	const loadFavourites = async uid => {
		try {
			const favouritesToLoad = await AsyncStorage.getItem(`@favourites-${uid}`);

			if (favouritesToLoad !== null) {
				setFavourites(JSON.parse(favouritesToLoad));
			};
		} catch (error) {
			console.log(error);
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
		<FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
			{children}
		</FavouritesContext.Provider>
	);
};

export default FavouritesContextProvider;