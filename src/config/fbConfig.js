import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC8IERwXrYV2l6a8paGx-8Cs_0dG0lVEWE",
  authDomain: "marioplan-bd043.firebaseapp.com",
  projectId: "marioplan-bd043",
  storageBucket: "marioplan-bd043.appspot.com",
  messagingSenderId: "338111829435",
  appId: "1:338111829435:web:b2115e26d49cf3a7f9a09e",
  measurementId: "G-S00HBE11ST"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
