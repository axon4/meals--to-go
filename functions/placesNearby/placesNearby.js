const url = require('url');
const { mockCities, addMockPhoto } = require('./mock/cities.js');

module.exports.getPlacesNearby = (request, response) => {
	const { location } = url.parse(request.url, true).query;
	const data = mockCities[location];

	if (data) {
		data.results = data.results.map(addMockPhoto);
	};

	response.json(data);
};