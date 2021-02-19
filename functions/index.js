const functions = require('firebase-functions');
const { Client: NewGoogleClient } = require('@googlemaps/google-maps-services-js');
const StripeClient = require('stripe')(functions.config().stripe.key);
const { getGeoCode } = require('./geoCode/geoCode.js');
const { getPlacesNearBy } = require('./placesNearBy/placesNearBy.js');
const { getPay } = require('./pay/pay.js');

// // create/dePloy your first cloud-functions: https://firebase.google.com/docs/functions/write-firebase-functions
// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	functions.logger.info('Hello, World!', {structuredData: true});
// 	response.send('Hello from FireBase!');
// });

const GoogleClient = new NewGoogleClient({});

exports.geoCode = functions.https.onRequest((request, response) => {
	getGeoCode(request, response, GoogleClient);
});

exports.placesNearBy = functions.https.onRequest((request, response) => {
	getPlacesNearBy(request, response, GoogleClient);
});

exports.pay = functions.https.onRequest((request, response) => {
	getPay(request, response, StripeClient);
});