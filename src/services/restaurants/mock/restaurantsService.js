import camelize from 'camelize';
import { mocks, mockImages } from './cities.js';

export const restaurantsRequest = location => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];

		if (!mock) {
			reject('Location Not Found');
		};

		resolve(mock);
	});
};

export const restaurantsTransform = ({ results = [] }) => {
	const transformedResults = results.map(restaurant => {
		restaurant.photos = restaurant.photos.map(photo => {
			return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
		});

		return {
			...restaurant,
			address: restaurant.vicinity,
			isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
		};
	});

	return camelize(transformedResults);
};