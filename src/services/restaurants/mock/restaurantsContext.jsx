import React, { useState, useEffect, createContext, useMemo } from 'react';
import { restaurantsRequest, restaurantsTransform } from './restaurantsService.js';

export const RestaurantsContext = createContext();

const RestaurantsContextProvider = ({ children }) => {
	const [ restaurants, setRestaurants ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		getRestaurants();
	}, []);

	const getRestaurants = () => {
		setIsLoading(true);
		setTimeout(() => {
			restaurantsRequest()
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

	return (
		<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
			{children}
		</RestaurantsContext.Provider>
	);
};

export default RestaurantsContextProvider;