import React, { useContext } from 'react';
import { TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { RestaurantsContext } from '../../../services/restaurants/mock/RestaurantsContextProvider.jsx';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import Search from '../components/Search.jsx';
import SafeArea from '../../../components/SafeArea.jsx';
import RestaurantCard from '../components/RestaurantCard.jsx';

const RestaurantsScreen = ({ navigation }) => {
	const { restaurants, isLoading } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			{isLoading ? (
				<LoadingContainer>
					<Loading size={50} color={Colors.blue300} animating={true} />
				</LoadingContainer>
			) : null}
			<Search />
			<RestaurantsList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', {restaurant: item})}>
							<RestaurantCard restaurant={item} />
						</TouchableOpacity>
				)}}
				keyExtractor={item => item.name}
			/>
		</SafeArea>
	);
};

const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%
`;

const Loading = styled(ActivityIndicator)`
	margin-left: -25px
`;

const RestaurantsList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16
	}
})``;

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