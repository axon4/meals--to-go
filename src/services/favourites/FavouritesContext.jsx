import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
	const [ favourites, setFavourites ] = useState([]);

	useEffect(() => {
		loadFavourites();
	}, []);

	const addFavourite = restaurant => setFavourites([...favourites, restaurant]);

	const removeFavourite = restaurant => {
		const newFavourites = favourites.filter(restaurantToRemove => {
			return restaurantToRemove.placeId !== restaurant.placeId;
		});

		setFavourites(newFavourites);
	};

	const saveFavourites = async favourite => {
		try {
			const favouriteToSave = JSON.stringify(favourite);
			await AsyncStorage.setItem('@favourites', favouriteToSave);
		} catch (error) {
			console.log(error);
		};
	};

	const loadFavourites = async () => {
		try {
			const favouritesToLoad = await AsyncStorage.getItem('@favourites');

			if (favouritesToLoad !== null) {
				setFavourites(JSON.parse(favouritesToLoad));
			};
		} catch (error) {
			console.log(error);
		};
	};

	useEffect(() => {
		saveFavourites(favourites);
	}, [favourites]);

	return (
		<FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
			{children}
		</FavouritesContext.Provider>
	);
};

export default FavouritesContextProvider;