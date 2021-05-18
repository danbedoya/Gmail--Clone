import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBWWo2t305xeGBhzVyU2Oytg77q0Ub7kmQ",
    authDomain: "clone-react-37f0e.firebaseapp.com",
    projectId: "clone-react-37f0e",
    storageBucket: "clone-react-37f0e.appspot.com",
    messagingSenderId: "879356786835",
    appId: "1:879356786835:web:9ba13c80a650d77797b566",
    measurementId: "G-YCE9B28B1B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };