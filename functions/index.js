const functions = require('firebase-functions');
const { Client: GoogleClient } = require('@googlemaps/google-maps-services-js');
const stripeClient = require('stripe')(functions.config().stripe.key);
const { getGeocode } = require('./geocode/geocode.js');
const { getPlacesNearby } = require('./placesNearby/placesNearby.js');
const { getPay } = require('./pay/pay.js');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	functions.logger.info('Hello logs!', {structuredData: true});
// 	response.send('Hello from Firebase!');
// });

const googleClient = new GoogleClient({});

exports.geocode = functions.https.onRequest((request, response) => {
	getGeocode(request, response, googleClient);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
	getPlacesNearby(request, response, googleClient);
});

exports.pay = functions.https.onRequest((request, response) => {
	getPay(request, response, stripeClient);
});