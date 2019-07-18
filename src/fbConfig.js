import * as firebase from 'firebase';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyCb3-XZPBuNgDihefdpfSO1NPrwwrSC9WI",
  authDomain: "cazendartheawsome.firebaseapp.com",
  databaseURL: "https://cazendartheawsome.firebaseio.com",
  projectId: "cazendartheawsome",
  storageBucket: "",
  messagingSenderId: "459289658823",
  appId: "1:459289658823:web:5e010c0718552809"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
// export const timeStamp =firebase.firestore().settings({ timestampsInSnapshots: true})
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');

export default firebase 
