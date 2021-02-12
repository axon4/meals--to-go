import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FavouritesContext } from '../services/favourites/FavouritesContext';
import { AntDesign } from '@expo/vector-icons';

const Favourite = ({ restaurant }) => {
	const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);

	const isFavourite = favourites.find(favourite => favourite.placeId === restaurant.placeId);

	return (
		<FavouriteButton onPress={() => !isFavourite ? addFavourite(restaurant) : removeFavourite(restaurant)}>
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
	right: 25px
`;

export default Favourite;