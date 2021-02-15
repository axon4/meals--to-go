import camelize from 'camelize';
import { host, isMock } from '../../utils/env.js';

export const locationRequest = searchQuery => {
	return fetch(`${host}/geocode?city=${searchQuery}&mock=${isMock}`)
		.then(response => response.json())
		.catch(error => console.log(error));
};

export const locationTransform = location => {
	const formattedLocation = camelize(location);
	const { geometry = {} } = formattedLocation.results[0];
	const { lat, lng } = geometry.location;
	const { viewport } = geometry;
	
	return { lat, lng, viewport };
};