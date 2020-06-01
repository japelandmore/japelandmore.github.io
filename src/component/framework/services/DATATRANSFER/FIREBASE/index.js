import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/auth'

  
var firebaseConfig = {
    apiKey: "AIzaSyD_W-tR_Z2rTi0NACHLypFB68UqzG3COu0",
    authDomain: "portfolio-ba156.firebaseapp.com",
    databaseURL: "https://portfolio-ba156.firebaseio.com",
    projectId: "portfolio-ba156",
    storageBucket: "portfolio-ba156.appspot.com",
    messagingSenderId: "895648558214",
    appId: "1:895648558214:web:1c58d5165e6d6a3a123507",
    measurementId: "G-154PC88VX9"
};
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


  const storage = firebase.storage();

  const db = firebase.database();

  const auth = firebase.auth();

  export {
      storage, db , auth , firebase as default
  }