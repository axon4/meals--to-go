import firebase from '../../lib/firebase/firebase.js';

export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const persistUser = user => firebase.auth().onAuthStateChanged(user);

export const logOut = () => firebase.auth().signOut();