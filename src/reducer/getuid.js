import {GETUID} from '../constants/constants';

const uid = {
   uid:''
}

const getuid = (state = uid ,action) =>  {
    switch(action.type){
        case GETUID:
          return { ...state,
                uid:action.uid,
        };
        default:
           return state ;
    }
}


export default getuid;
