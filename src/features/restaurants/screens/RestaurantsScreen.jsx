import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import SafeArea from '../../../components/SafeArea.jsx';
import RestaurantCard from '../components/RestaurantCard.jsx';

const RestaurantsScreen = () => {
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantsList
				data={new Array(19).fill({})}
				renderItem={() => <RestaurantCard />}
				keyExtractor={item => item.name}
			/>
			<RestaurantsListContainer>
			
			</RestaurantsListContainer>
		</SafeArea>
	);
};

const SearchContainer = styled.View`
	margin: ${props => props.theme.spacing[3]};
	background-color: ${props => props.theme.colours.background.primary}
`;

const RestaurantsList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16
	}
})``;

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