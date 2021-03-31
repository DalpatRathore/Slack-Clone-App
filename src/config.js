import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  // FIREBASE_apiKEY & CREDENTIALS
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
