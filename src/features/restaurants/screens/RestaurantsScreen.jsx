import React, { useState, useContext } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { RestaurantsContext } from '../../../services/restaurants/mock/RestaurantsContextProvider.jsx';
import { FavouritesContext } from '../../../services/favourites/FavouritesContext.jsx';
import styled from 'styled-components/native';
import { Colors } from 'react-native-paper';
import Search from '../components/Search.jsx';
import SafeArea from '../../../components/SafeArea.jsx';
import FavouritesBar from '../../../components/FavouritesBar.jsx';
import RestaurantsList from '../components/RestaurantListStyles.jsx';
import FadeInView from '../../../components/FadeInView.jsx';
import RestaurantCard from '../components/RestaurantCard.jsx';

const RestaurantsScreen = ({ navigation }) => {
	const { restaurants, isLoading } = useContext(RestaurantsContext);
	const { favourites } = useContext(FavouritesContext);

	const [ isFavouritesExpanded, setIsFavouritesExpanded ] = useState(false);

	return (
		<SafeArea>
			{isLoading ? (
				<LoadingContainer>
					<Loading size={50} color={Colors.blue300} animating={true} />
				</LoadingContainer>
			) : null}
			<Search
				isFavouritesExpanded={isFavouritesExpanded}
				onFavouritesExpand={() => setIsFavouritesExpanded(!isFavouritesExpanded)}
			/>
			{isFavouritesExpanded ? (
				<FavouritesBar
					favourites={favourites}
					onNavigate={navigation.navigate}
				/>
			) : null}
			<RestaurantsList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', {restaurant: item})}>
							<FadeInView>
								<RestaurantCard restaurant={item} />
							</FadeInView>
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