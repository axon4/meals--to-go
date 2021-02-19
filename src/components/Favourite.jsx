import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { FavouritesConText } from '../services/favourites/FavouritesConText';

const Favourite = ({ restaurant }) => {
	const { favourites, addFavourite, reMoveFavourite } = useContext(FavouritesConText);

	const isFavourite = favourites.find(favourite => favourite.placeId === restaurant.placeId);

	return (
		<FavouriteButton onPress={() => {!isFavourite ? addFavourite(restaurant) : reMoveFavourite(restaurant)}}>
			<AntDesign
				name={isFavourite ? 'heart' : 'hearto'}
				size={24}
				color={isFavourite ? 'red' : 'white'}
			/>
		</FavouriteButton>
	);
};

const FavouriteButton = styled(TouchableOpacity)`
	z-index: 777;
	position: absolute;
	top: 25px;
	right: 25px;
`;

export default Favourite;