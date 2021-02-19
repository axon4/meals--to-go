import React, { useState, useEffect, createContext } from 'react';
import { locationReQuest, locationTransForm } from './locationService.js';
import { isMock } from '../../utilities/environment.js';

export const LocationConText = createContext();

const LocationConTextProvider = ({ children }) => {
	const [ location, setLocation ] = useState(null);
	const [ query, setQuery ] = useState(isMock ? 'Antwerp' : 'London');
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const onSearch = searchQuery => {
		setIsLoading(true);
		setQuery(searchQuery);
	};

	useEffect(() => {
		if (!query.length) return;

		locationReQuest(query.toLowerCase())
			.then(response => locationTransForm(response))
			.then(transformedResponse => {
				setIsLoading(false);
				setError(null);
				setLocation(transformedResponse);
			})
			.catch(error => {
				setIsLoading(false);
				setError(error);
			});
	}, [query]);

	return (
		<LocationConText.Provider
			value={{
				location,
				query,
				search: onSearch,
				isLoading,
				error
			}}
		>
			{children}
		</LocationConText.Provider>
	);
};

export default LocationConTextProvider;