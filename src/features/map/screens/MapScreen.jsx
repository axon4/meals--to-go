import React, { useState, useEffect, useContext } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import Search from '../components/Search.jsx';
import MapCallOut from '../components/MapCallOut.jsx';
import { LocationConText } from '../../../services/location/LocationConText.jsx';
import { RestaurantsContext } from '../../../services/restaurants/RestaurantsContextProvider.jsx';

const MapScreen = ({ navigation }) => {
	const { location } = useContext(LocationConText);

	if (!location) {
		return (
			<Map
				region={{
					latitude: 0,
					longitude: 0
				}}
			/>
		);
	};

	return <RestaurantMap navigation={navigation} />
};

const RestaurantMap = ({ navigation }) => {
	const { location } = useContext(LocationConText);
	const { restaurants = [] } = useContext(RestaurantsContext);

	const [ latitudeDelta, setLatitudeDelta ] = useState(0);

	const { lat, lng, viewport } = location;

	useEffect(() => {
		const northEastLatitude = viewport.northeast.lat;
		const southWestLatitude = viewport.southwest.lat;

		setLatitudeDelta(northEastLatitude - southWestLatitude);
	}, [viewport]);

	return (
		<>
			<Search />
			<Map
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta,
					longitudeDelta: 0.03
				}}
			>
				{restaurants.map(restaurant => {
					return (
						<MapView.Marker
							key={restaurant.name}
							title={restaurant.name}
							coordinate={{
								latitude: restaurant.geometry.location.lat,
								longitude: restaurant.geometry.location.lng
							}}
						>
							<MapView.Callout onPress={() => {navigation.navigate('RestaurantDetails', { restaurant })}}>
								<MapCallOut restaurant={restaurant} />
							</MapView.Callout>
						</MapView.Marker>
					);
				})}
			</Map>
		</>
	);
};

const Map = styled(MapView)`
	width: 100%;
	height: 100%;
`;

export default MapScreen;