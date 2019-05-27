import firebase from 'firebase';
import 'firebase/storage';

export const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: ()=> false,
  },
};

const config = {
  apiKey: "AIzaSyBUEv-F1MNnUyMuXTDLyrRwr9aVbQfd6ek",
  authDomain: "ivory-duality-233509.firebaseapp.com",
  databaseURL: "https://ivory-duality-233509.firebaseio.com",
  projectId: "ivory-duality-233509",
  storageBucket: "ivory-duality-233509.appspot.com",
  messagingSenderId: "294680359383"
}
firebase.initializeApp(config);
export const storage = firebase.storage();



export default firebase ;
