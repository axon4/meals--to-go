const functions = require('firebase-functions');
const { Client } = require('@googlemaps/google-maps-services-js');
const { getGeocode } = require('./geocode/geocode.js');
const { getPlacesNearby } = require('./placesNearby/placesNearby.js');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	functions.logger.info('Hello logs!', {structuredData: true});
// 	response.send('Hello from Firebase!');
// });

const client = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
	getGeocode(request, response, client);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
	getPlacesNearby(request, response, client);
});