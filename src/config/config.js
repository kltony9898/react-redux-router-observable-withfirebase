import firebase from 'firebase';
import 'firebase/storage';
//firebaseui config
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
//固定api 若要用到api前碼請引用這裡
export const api = 'https://24bbb654.ngrok.io';


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
