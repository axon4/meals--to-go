const Antwerp = require('./mockCities/Antwerp.js');
const Toronto = require('./mockCities/Toronto.js');
const Chicago = require('./mockCities/Chicago.js');
const SanFrancisco = require('./mockCities/SanFrancisco.js');

module.exports.mockCities = {
	'51.219448, 4.402464': Antwerp,
	'43.653225, -79.383186': Toronto,
	'41.878113, -87.629799': Chicago,
	'37.7749295, -122.4194155': SanFrancisco
};

const mockPhotos = [
	'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
	'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg',
	'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
	'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
	'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg',
	'https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg',
	'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg'
];

module.exports.addMockPhoto = restaurant => {
	const randomPhoto = mockPhotos[Math.ceil(Math.random() * (mockPhotos.length - 1))];

	restaurant.photos = [randomPhoto];

	return restaurant;
};