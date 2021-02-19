import camelize from 'camelize';
import { host, isMock } from '../../utilities/environment.js';

export const restaurantsRequest = location => {
	return fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`)
		.then(response => response.json())
		.catch(error => {console.error(error)});
};

export const restaurantsTransform = ({ results = [] }) => {
	const transformedResults = results.map(restaurant => {
		return {
			...restaurant,
			address: restaurant.vicinity,
			isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
		};
	});

	return camelize(transformedResults);
};