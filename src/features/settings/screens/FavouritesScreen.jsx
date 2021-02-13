import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FavouritesContext } from '../../../services/favourites/FavouritesContext';
import SafeArea from '../../../components/SafeArea.jsx';
import RestaurantsList from '../../restaurants/components/RestaurantListStyles.jsx';
import RestaurantCard from '../../restaurants/components/RestaurantCard.jsx';
import Text from '../../../components/Text';

const FavouritesScreen = ({ navigation }) => {
	const { favourites } = useContext(FavouritesContext);

	return favourites.length !== 0 ? (
		<SafeArea>
			<RestaurantsList
				data={favourites}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', {restaurant: item})}>
							<RestaurantCard restaurant={item} />
						</TouchableOpacity>
				)}}
				keyExtractor={item => item.name}
			/>
		</SafeArea>
	) : (
		<SafeAreaView>
			<Text>No Favourites Yet...</Text>
		</SafeAreaView>
	);
};

const SafeAreaView = styled(SafeArea)`
	justify-content: center;
	align-items: center
`;

export default FavouritesScreen;