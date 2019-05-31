import {LOGIN,LOGOUT} from '../constants/constants';
import firebase from '../config/config';

const login = {
    value:false, 
} 
const checklogin = (state = login ,action) =>  {
    switch(action.type){
        case LOGIN:
          return { ...state, value:true  };
        case LOGOUT:
           firebase.auth().signOut();
          return { ...state, value:false};
        default:
           return state ;
    }
}


export default checklogin;
