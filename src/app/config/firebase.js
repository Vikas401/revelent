import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig =  {
    apiKey: "AIzaSyAUVv7urrI4RGEfZeO7So-5BnSBC26-5KY",
    authDomain: "revent-266411.firebaseapp.com",
    databaseURL: "https://revent-266411.firebaseio.com",
    projectId: "revent-266411",
    storageBucket: "revent-266411.appspot.com",
    messagingSenderId: "170998092620",
    appId: "1:170998092620:web:c1e07d17742fccaa5d35e9",
    measurementId: "G-CTSPLMZLE1"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export default firebase;