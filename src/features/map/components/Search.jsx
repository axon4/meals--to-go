import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../../../services/location/LocationContextProvider';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { Platform } from 'react-native';

const Search = () => {
	const { query, search } = useContext(LocationContext);
	const [ searchQuery, setSearchQuery ] = useState(query);

	useEffect(() => {
		setSearchQuery(searchQuery);
	}, [searchQuery]);

	return (
		<SearchContainer>
			<Searchbar
				value={searchQuery}
				icon='map'
				placeholder='Search Locations...'
				onChangeText={text => setSearchQuery(text)}
				onSubmitEditing={() => search(searchQuery)}
			/>
		</SearchContainer>
	);
};

const SearchContainer = styled.View`
	z-index: 777;
	position: absolute;
	top: 40px;
	width: 100%;
	padding: ${props => props.theme.spacing[3]}
`;

export default Search;