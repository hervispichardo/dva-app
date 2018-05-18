import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBTsJ0eNX8HWm3EGvX5-1Veup8k-4_jQ5U",
  authDomain: "bar-app-308a3.firebaseapp.com",
  databaseURL: "https://bar-app-308a3.firebaseio.com",
  projectId: "bar-app-308a3",
  storageBucket: "bar-app-308a3.appspot.com",
  messagingSenderId: "633481030492"
};

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};

db.settings(settings);

export default db