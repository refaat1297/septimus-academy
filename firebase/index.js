import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmq4Snc3lPmtaFtM7TKOFGMyoml-rnMX8",
    authDomain: "septimus-academy.firebaseapp.com",
    databaseURL: "https://septimus-academy.firebaseio.com",
    projectId: "septimus-academy",
    storageBucket: "septimus-academy.appspot.com",
    messagingSenderId: "359888623532",
    appId: "1:359888623532:web:b9ea6e479ddb3a3c4c8c09",
    measurementId: "G-F03YNTEKW6"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
