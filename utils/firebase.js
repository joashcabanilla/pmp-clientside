import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBC2Gsc1PoLx_gz2xJYrLfl_JIDJZQH_yg",
  authDomain: "pmps-257ba.firebaseapp.com",
  projectId: "pmps-257ba",
  storageBucket: "pmps-257ba.appspot.com",
  messagingSenderId: "508613797048",
  appId: "1:508613797048:web:94b732f1deadac1fd2c04d",
  measurementId: "G-9818L4J8FV"
}

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };