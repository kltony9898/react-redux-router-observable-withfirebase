import React from 'react'; 
import {uiConfig} from '../config/config';
import firebase from '../config/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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
 