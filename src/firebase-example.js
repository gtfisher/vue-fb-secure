import Firebase from 'firebase'

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
  };


const firebaseApp = Firebase.initializeApp(firebaseConfig);

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.firestore();

const { TimeStamp, GeoPoint } = Firebase.firestore
export { TimeStamp, GeoPoint }