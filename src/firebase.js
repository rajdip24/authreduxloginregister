// import firebase from 'firebase/app';
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBswzKAYKdCWLPlq9U5ZMyEJDbGAyb8FHg",
    authDomain: "react-firebase-auth-d2e2b.firebaseapp.com",
    projectId: "react-firebase-auth-d2e2b",
    storageBucket: "react-firebase-auth-d2e2b.appspot.com",
    messagingSenderId: "487084422577",
    appId: "1:487084422577:web:5b208b9b18d1e9d55c3990"
  }

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export {auth,googleAuthProvider,facebookAuthProvider}
  