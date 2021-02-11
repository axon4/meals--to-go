import React, { useState, useEffect, createContext } from 'react';
import { locationRequest, locationTransform } from './locationService';

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
	const [ location, setLocation ] = useState(null);
	const [ query, setQuery ] = useState('Antwerp');
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const onSearch = searchQuery => {
		setIsLoading(true);
		setQuery(searchQuery);
	};

	useEffect(() => {
		if (!query.length) {return};

		locationRequest(query.toLowerCase())
		.then(response => locationTransform(response))
		.then(transformedResponse => {
			setIsLoading(false);
			setLocation(transformedResponse);
		})
		.catch(error => {
			setIsLoading(false);
			setError(error);
		});
	}, [query]);

	return (
		<LocationContext.Provider
			value={{
				location,
				query,
				search: onSearch,
				isLoading,
				error
			}}	
		>
			{children}
		</LocationContext.Provider>
	);
};

export default LocationContextProvider;