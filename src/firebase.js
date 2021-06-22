import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyC4XLLpAxBVzwterOX_H6B-acQouHjQjKg",
    authDomain: "ms-teams-clone-993dc.firebaseapp.com",
    databaseURL: "https://ms-teams-clone-993dc-default-rtdb.firebaseio.com",
    projectId: "ms-teams-clone-993dc",
    storageBucket: "ms-teams-clone-993dc.appspot.com",
    messagingSenderId: "948402121143",
    appId: "1:948402121143:web:cd130a6f1b7c6b9e7f6032",
    measurementId: "G-NJEGZMJF6N"
};
firebase.initializeApp(config);

export default firebase;
