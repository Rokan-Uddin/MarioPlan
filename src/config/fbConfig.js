import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAJz4RTm6ZAmwAXgoy3zoispD93TYjIxMo",
    authDomain: "project-firebase-44a6f.firebaseapp.com",
    projectId: "project-firebase-44a6f",
    storageBucket: "project-firebase-44a6f.appspot.com",
    messagingSenderId: "575083348378",
    appId: "1:575083348378:web:7bd835141fcca788457a23",
    measurementId: "G-QD3DS6RM90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().setting({ timestampsInSnapshots:true });
  firebase.analytics();

  export default firebase;