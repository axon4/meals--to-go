import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import RestaurantCard from '../components/RestaurantCard.jsx';

const RestaurantsScreen = () => {
	return (
		<>
			<SafeArea>
				<SearchContainer>
					<Searchbar />
				</SearchContainer>
				<RestaurantsListContainer>
					<RestaurantCard />
				</RestaurantsListContainer>
			</SafeArea>
		</>
	);
};

const SafeArea = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight ?? 0}px
`;

const SearchContainer = styled.View`
	margin: ${props => props.theme.spacing[3]};
	background-color: ${props => props.theme.colours.background.primary}
`;

const RestaurantsListContainer = styled.View`
	flex: 1;
	margin: ${props => props.theme.spacing[3]};
	background-color: ${props => props.theme.colours.background.primary}
`;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: StatusBar.currentHeight
// 	},
// 	search: {
// 		margin: 16,
// 		backgroundColor: 'green'
// 	},
// 	list: {
// 		flex: 1,
// 		margin: 16,
// 		backgroundColor: 'blue'
// 	}
// });

export default RestaurantsScreen;