const NodeURL = require('url');
const functions = require('firebase-functions');
const { locations: mockLocations } = require('./mockLocations/locations.js');

module.exports.getGeoCode = (request, response, GoogleClient) => {
	const { city, mock } = NodeURL.parse(request.url, true).query;

	if (mock === 'true') {
		const mockLocation = mockLocations[city.toLowerCase()];

		return response.json(mockLocation);
	};

	GoogleClient.geocode({
		params: {
			key: functions.config().google.key,
			address: city
		},
		timeout: 1000
	})
		.then(city => response.json(city.data))
		.catch(error => {
			response.status(400);

			return response.send(error.response.data.error_message);
		});
};