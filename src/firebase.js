import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5EXNqTF2sqciNt3cA1EH25lTepWAfWKQ",
    authDomain: "stock-tracker-ab0f0.firebaseapp.com",
    databaseURL: "https://stock-tracker-ab0f0.firebaseio.com",
    projectId: "stock-tracker-ab0f0",
    storageBucket: "stock-tracker-ab0f0.appspot.com",
    messagingSenderId: "52907679612",
    appId: "1:52907679612:web:6dffe91334e6a09de98ef9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;