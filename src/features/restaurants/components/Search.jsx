import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../../../services/location/locationContext';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const Search = () => {
	const { query, search } = useContext(LocationContext);
	const [ searchQuery, setSearchQuery ] = useState(query);

	useEffect(() => {
		search(searchQuery);
	}, [])

	return (
		<SearchContainer>
			<Searchbar
				value={searchQuery}
				placeholder='Search Locations...'
				onChangeText={text => setSearchQuery(text)}
				onSubmitEditing={() => search(searchQuery)}
			/>
		</SearchContainer>
	);
};

const SearchContainer = styled.View`
	margin: ${props => props.theme.spacing[3]};
	background-color: ${props => props.theme.colours.background.primary}
`;

export default Search;