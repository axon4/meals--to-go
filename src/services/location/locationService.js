import camelise from 'camelize';
import { host, isMock } from '../../utilities/environment.js';

export const locationReQuest = searchQuery => {
	return fetch(`${host}/geocode?city=${searchQuery}&mock=${isMock}`)
		.then(response => response.json())
		.catch(error => {console.error(error)});
};

export const locationTransForm = location => {
	const forMattedLocation = camelise(location);
	const { geometry = {} } = forMattedLocation.results[0];
	const { lat, lng } = geometry.location;
	const { viewport } = geometry;

	return { lat, lng, viewport };
};