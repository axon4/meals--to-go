import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import Text from '../../src/components/Text.jsx';

const SmallRestaurantDetails = ({ restaurant, isMap }) => {
	const Image = Platform.OS === 'android' && isMap ? RestaurantWebView : RestaurantImage;

	return (
		<Item>
			<Image source={{uri: restaurant.photos[0]}} />
			<Text variant='caption' numberOfLines={3} center>
				{restaurant.name}
			</Text>
		</Item>
	)
};

const Item = styled.View`
	align-items: center;
	max-width: 120px;
	padding: 10px
`;

const RestaurantImage = styled.Image`
	width: 120px;
	height: 100px;
	border-radius: 10px
`;

const RestaurantWebView = styled(WebView)`
	width: 120px;
	height: 100px;
	border-radius: 10px
`;

export default SmallRestaurantDetails;