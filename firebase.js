// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import * as firebase from 'firebase/compat';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs4qRo5G_wkXOJSxzcvSiT9HK2kOgw2f0",
  authDomain: "expo-firebase-auth-a803e.firebaseapp.com",
  projectId: "expo-firebase-auth-a803e",
  storageBucket: "expo-firebase-auth-a803e.appspot.com",
  messagingSenderId: "559206008333",
  appId: "1:559206008333:web:c429471dab02bc3931f744"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth }; 