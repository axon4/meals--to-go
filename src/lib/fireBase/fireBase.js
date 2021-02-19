import * as FireBase from 'firebase';

const configuration = {
	apiKey: 'AIzaSyD_rZBL02pKRd5zLEF_ZX8A7EFG0on-3N4',
	appId: '1:556048450405:web:bdc61e80d437db090c978c',
	projectId: 'meals-to-go-b9f20',
	authDomain: 'meals-to-go-b9f20.firebaseapp.com',
	storageBucket: 'meals-to-go-b9f20.appspot.com',
	messagingSenderId: '556048450405'
};

const fireBase = FireBase.initializeApp(configuration);

export default fireBase;