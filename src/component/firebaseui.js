import React from 'react'; 
import {uiConfig} from '../config/config';
import firebase from '../config/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//為首頁登入選項套用firebase ui 選擇facebook,google,email
const Firebaseui =()=> {
      return (
        <>
        <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
       />    
        </>  
      )
  }
export default Firebaseui ;
 