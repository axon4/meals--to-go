import React, { useState, useEffect, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationConText } from '../../../services/location/LocationConText.jsx';

const Search = ({ isFavouritesExpanded, onFavouritesExpand }) => {
	const { query, search } = useContext(LocationConText);
	const [ searchQuery, setSearchQuery ] = useState(query);

	useEffect(() => {
		search(searchQuery);
	}, [])

	return (
		<SearchContainer>
			<Searchbar
				icon={isFavouritesExpanded ? 'heart' : 'heart-outline'}
				onIconPress={onFavouritesExpand}
				value={searchQuery}
				placeholder='Search Locations...'
				onChangeText={text => {setSearchQuery(text)}}
				onSubmitEditing={() => {search(searchQuery)}}
			/>
		</SearchContainer>
	);
};

const SearchContainer = styled.View`
	margin: ${props => props.theme.spacing[3]};
	background-color: ${props => props.theme.colours.background.primary};
`;

export default Search;