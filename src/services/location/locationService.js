import camelize from 'camelize';
import { locations } from './mockLocations/locations.js';

export const locationRequest = searchQuery => {
	return new Promise((resolve, reject) => {
		const mock = locations[searchQuery];

		if (!mock) {
			reject('Location Not Found');
		};

		resolve(mock);
	});
};

export const locationTransform = location => {
	const { geometry = {} } = camelize(location.results)[0];
	const { lat, lng } = geometry.location;
	
	return { lat, lng };
};