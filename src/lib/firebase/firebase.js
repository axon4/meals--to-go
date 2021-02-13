import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyD_rZBL02pKRd5zLEF_ZX8A7EFG0on-3N4',
	authDomain: 'meals-to-go-b9f20.firebaseapp.com',
	projectId: 'meals-to-go-b9f20',
	storageBucket: 'meals-to-go-b9f20.appspot.com',
	messagingSenderId: '556048450405',
	appId: '1:556048450405:web:bdc61e80d437db090c978c'
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;