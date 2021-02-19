import fireBase from '../../lib/fireBase/fireBase.js';

export const logIn = (eMail, passWord) => fireBase.auth().signInWithEmailAndPassword(eMail, passWord);

export const register = (eMail, passWord) => fireBase.auth().createUserWithEmailAndPassword(eMail, passWord);

export const persistUser = user => fireBase.auth().onAuthStateChanged(user);

export const logOut = () => fireBase.auth().signOut();