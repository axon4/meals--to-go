import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import SafeArea from '../../../components/SafeArea.jsx';
import Text from '../../../components/Text';
import RestaurantsList from '../../restaurants/components/RestaurantListStyles.jsx';
import RestaurantCard from '../../restaurants/components/RestaurantCard.jsx';
import { FavouritesConText } from '../../../services/favourites/FavouritesConText.jsx';

const FavouritesScreen = ({ navigation }) => {
	const { favourites } = useContext(FavouritesConText);

	return favourites.length !== 0 ? (
		<SafeArea>
			<RestaurantsList
				data={favourites}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => {navigation.navigate('RestaurantDetails', {restaurant: item})}}>
							<RestaurantCard restaurant={item} />
						</TouchableOpacity>
					);
				}}
				keyExtractor={item => item.name}
			/>
		</SafeArea>
	) : (
		<SafeAreaView>
			<Text>No Favourites</Text>
		</SafeAreaView>
	);
};

const SafeAreaView = styled(SafeArea)`
	justify-content: center;
	align-items: center;
`;

export default FavouritesScreen;