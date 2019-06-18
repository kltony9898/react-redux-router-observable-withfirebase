import {SHOWPOST} from '../constants/constants';

const showpost = (state = [] ,action) =>  {
    switch(action.type){
        case SHOWPOST:
          return { ...state.map,
            response:action.response
        };
        default:
           return state ;
    }
}


export default showpost;
