import React from 'react';
import { View, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Text from '../../../components/Text.jsx';
import { CardBase, CardCover, CardDeTails, IconsContainer, Rating, Open, Icon, Address } from './RestaurantCardStyles.jsx';
import Favourite from '../../../components/Favourite.jsx';
import star from '../../../assets/star.js';
import open from '../../../assets/open.js';

const RestaurantCard = ({ restaurant = {} }) => {
	const {
		name = 'Afghan Kebab-House',
		placeId,
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		address = '36 WhiteChapel Road',
		rating = 4,
		photos = ['https://live-core-image-service.vivialplatform.net/images/71649/orig/afghan_kebab2_cropped.Tq_6ooO1rM.jpg'],
		isOpen = true,
		isClosedTemporarily = true
	} = restaurant;

	return (
		<CardBase elevation={2}>
			<Favourite restaurant={restaurant} />
			<CardCover key={name} source={{uri: photos[0]}} />
			<CardDeTails>
				<Text variant='label'>{name}</Text>
				<IconsContainer>
					<Rating>
						{[...Array(Math.floor(rating))].map((_, index) => (
							<SvgXml
								key={`star-${placeId}-${index}`}
								xml={star}
								width={20}
								height={20}
							/>
						))}
					</Rating>
					{isClosedTemporarily ? (
						<Text variant='error'>CLOSED TEMPORARILY</Text>
					) : null}
					{isOpen ? <Open xml={open} width={20} height={20} /> : null}
					<Icon source={{uri: icon}} />
				</IconsContainer>
				<Address>{address}</Address>
			</CardDeTails>
		</CardBase>
	);
};

export default RestaurantCard;