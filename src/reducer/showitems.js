import {SHOWITEMS} from '../constants/constants';

const showitems = (state = [] ,action) =>  {
    switch(action.type){
        case SHOWITEMS:
          return { ...state,
                level:action.level,
                gold:action.gold,
                diamond:action.diamond,
                fan:action.fan,
                follow:action.follow
        };
        default:
           return state ;
    }
}


export default showitems;
