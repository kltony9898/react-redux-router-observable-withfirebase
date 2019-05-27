import {LOGIN,LOGOUT,LOADING,SIGNIN} from '../constants/constants';

const login = {
    value:null,
    loadingview:false,
  
} 
const checklogin = (state = login ,action) =>  {
    switch(action.type){
        
        case LOGIN:
          return { ...state, value: action.value, loadingview: action.loadingview  };
        case LOGOUT:
          return { ...state, value: action.value , loadingview: action.loadingview };
        case LOADING:
          return { ...state, loadingview: action.loadingview };
        case SIGNIN:
        return  {...state,loadingview: action.loadingview};
        default:
           return state ;
    }
}

export default checklogin;