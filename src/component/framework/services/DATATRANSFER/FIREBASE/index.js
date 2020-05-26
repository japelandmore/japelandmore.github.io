import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

  
  var firebaseConfig = {
    // apiKey: "AIzaSyD_W-tR_Z2rTi0NACHLypFB68UqzG3COu0",
    // authDomain: "portfolio-ba156.firebaseapp.com",
    // databaseURL: "https://portfolio-ba156.firebaseio.com",
    // projectId: "portfolio-ba156",
    // storageBucket: "portfolio-ba156.appspot.com",
    // messagingSenderId: "895648558214",
    // appId: "1:895648558214:web:1c58d5165e6d6a3a123507",
    // measurementId: "G-154PC88VX9"
    apiKey: "AIzaSyAVvT0UwdLfTq1nK3F92NMouojyt-pOvZU",
    authDomain: "share-87145.firebaseapp.com",
    databaseURL: "https://share-87145.firebaseio.com",
    projectId: "share-87145",
    storageBucket: "share-87145.appspot.com",
    messagingSenderId: "420683596411",
    appId: "1:420683596411:web:f4fdb1fe8e3fd9f08298de"
  };
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


  const storage = firebase.storage();

  const db = firebase.database();

  export {
      storage, db ,firebase as default
  }