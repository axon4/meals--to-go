const url = require('url');
const functions = require('firebase-functions');
const { mockCities, addMockPhoto } = require('./mock/cities.js');

const addGooglePhoto = restaurant => {
	const photoReference = restaurant.photos[0].photo_reference;

	if (!photoReference) {
		restaurant.photos = ['https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg'];

		return restaurant;
	};

	restaurant.photos = [`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${functions.config().google.key}`];

	return restaurant;
};

module.exports.getPlacesNearby = (request, response, googleClient) => {
	const { location, mock } = url.parse(request.url, true).query;

	if (mock === 'true') {
		const data = mockCities[location];

		if (data) {
			data.results = data.results.map(addMockPhoto);
		};

		response.json(data);
	};

	googleClient.placesNearby({
		params: {
			key: functions.config().google.key,
			location,
			radius: 1500,
			type: 'restaurant'
		},
		timeout: 1000
	})
		.then(location => {
			location.data.results = location.data.results.map(addGooglePhoto);

			return response.json(location.data);
		})
		.catch(error => {
			response.status(400);

			return response.send(error.response.data.error_message);
		});
};