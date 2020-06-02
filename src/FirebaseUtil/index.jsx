import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjJR5NV13iDYluMYu-EQQZMIlZ2DwhW9A",
    authDomain: "help-out-info-442.firebaseapp.com",
    databaseURL: "https://help-out-info-442.firebaseio.com",
    projectId: "help-out-info-442",
    storageBucket: "help-out-info-442.appspot.com",
    messagingSenderId: "487992417747",
    appId: "1:487992417747:web:af6e6e755c8a62f3c4e326",
    measurementId: "G-2YLQWRCY46"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
