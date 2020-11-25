import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALZA2D_sGknSZt--GeEFP_NyzPiwLMArU",
    authDomain: "yummy-one.firebaseapp.com",
    databaseURL: "https://yummy-one.firebaseio.com",
    projectId: "yummy-one",
    storageBucket: "yummy-one.appspot.com",
    messagingSenderId: "927057917398",
    appId: "1:927057917398:web:492a2b9865ba999e06a077",
    measurementId: "G-4CJQF8LV5R"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

//   firebase.initializeApp(config);

  export default firebase;