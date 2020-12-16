import firebase from 'firebase';
require('@firebase/firestore')


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDcbNiG8MwZyYjreKeNc5dsgyxy7pU8mkk",
    authDomain: "selfmadeapp-9dbc8.firebaseapp.com",
    projectId: "selfmadeapp-9dbc8",
    storageBucket: "selfmadeapp-9dbc8.appspot.com",
    messagingSenderId: "243020346564",
    appId: "1:243020346564:web:f972fd863d94931750c591"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();