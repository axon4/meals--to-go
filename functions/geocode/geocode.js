const url = require('url');
const { locations: mockLocations } = require('./mockLocations/locations.js');

module.exports.getGeocode = (request, response) => {
	const { city } = url.parse(request.url, true).query;
	const mockLocation = mockLocations[city.toLowerCase()];

	response.json(JSON.stringify(mockLocation));
};