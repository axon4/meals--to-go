import React, { useState, useEffect, useContext } from 'react';
import { Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationConText } from '../../../services/location/LocationConText';

const Search = () => {
	const { query, search } = useContext(LocationConText);
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
				onChangeText={text => {setSearchQuery(text)}}
				onSubmitEditing={() => {search(searchQuery)}}
			/>
		</SearchContainer>
	);
};

const SearchContainer = styled.View`
	z-index: 777;
	position: absolute;
	top: 40px;
	width: 100%;
	padding: ${props => props.theme.spacing[3]};
`;

export default Search;