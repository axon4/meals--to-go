import React, { useState, useEffect, createContext, useContext } from 'react';
import { LocationContext } from '../../location/locationContext.jsx';
import { restaurantsRequest, restaurantsTransform } from './restaurantsService.js';

export const RestaurantsContext = createContext();

const RestaurantsContextProvider = ({ children }) => {
	const { location } = useContext(LocationContext);

	const [ restaurants, setRestaurants ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const getRestaurants = searchLocation => {
		setIsLoading(true);
		setRestaurants([]);
		setTimeout(() => {
			restaurantsRequest(searchLocation)
				.then(response => restaurantsTransform(response))
				.then(transformedResponse => {
					setIsLoading(false);
					setRestaurants(transformedResponse);
				})
				.catch(error => {
					setIsLoading(false);
					setError(error);
				});
		}, 2000);
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