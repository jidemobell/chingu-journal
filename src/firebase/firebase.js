import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import 'firebase/database';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: "",
    messagingSenderId: REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth
export const githubProvider =  new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()