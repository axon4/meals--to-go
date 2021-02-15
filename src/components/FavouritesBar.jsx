import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import Text from './Text.jsx';
import SmallRestaurantDetails from '../components/SmallRestaurantDetails.jsx';

const FavouritesBar = ({ favourites, onNavigate }) => {
	if (favourites.length === 0) {
		return null;
	};

	return (
		<FavouritesContainer elevation={3}>
			<Text variant='caption'>Favourites</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{favourites.map(restaurant => {
					return (
						<FavouriteContainer
							key={restaurant.name}
							onPress={() => onNavigate('RestaurantDetails', { restaurant })}
						>
							<SmallRestaurantDetails restaurant={restaurant} />
						</FavouriteContainer>
					);
				})}
			</ScrollView>
		</FavouritesContainer>
	);
};

const FavouritesContainer = styled(Card)`
	z-index: 777;
	padding: 10px;
	border-radius: 5px
`;

const FavouriteContainer = styled(TouchableOpacity)`
	margin-left: 12px
`;

export default FavouritesBar;