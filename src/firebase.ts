import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/functions';

firebase.initializeApp({
  apiKey: "AIzaSyAMQqhHJq1ngyZiLAJ5_T8t2TkwGuNOv8M",
  authDomain: "sanny-io.firebaseapp.com",
  databaseURL: "https://sanny-io.firebaseio.com",
  projectId: "sanny-io",
  storageBucket: "sanny-io.appspot.com",
  messagingSenderId: "117741247561",
  appId: "1:117741247561:web:e72bde2e9c45b45e0e3398",
  measurementId: "G-WWT0JREYKV",
});

firebase.analytics();

export default firebase;