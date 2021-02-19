import React, { useState, useEffect, createContext, useContext } from 'react';
import { LocationConText } from '../location/LocationConText.jsx';
import { restaurantsRequest, restaurantsTransform } from './restaurantsService.js';

export const RestaurantsContext = createContext();

const RestaurantsContextProvider = ({ children }) => {
	const { location } = useContext(LocationConText);

	const [ restaurants, setRestaurants ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const getRestaurants = searchLocation => {
		setIsLoading(true);
		setRestaurants([]);

		restaurantsRequest(searchLocation)
			.then(response => restaurantsTransform(response))
			.then(transformedResponse => {
				setIsLoading(false);
				setError(null);
				setRestaurants(transformedResponse);
			})
			.catch(error => {
				setIsLoading(false);
				setError(error);
				setRestaurants([]);
			});
	};

	useEffect(() => {
		if (location) {
			const locationString = `${location.lat}, ${location.lng}`;

			getRestaurants(locationString);
		};
	}, [location]);

	return (
		<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
			{children}
		</RestaurantsContext.Provider>
	);
};

export default RestaurantsContextProvider;