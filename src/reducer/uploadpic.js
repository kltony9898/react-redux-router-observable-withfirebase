import {UPLOADPIC} from '../constants/constants';
//這頁我還沒用到 啊ㄋewq


const picurl = {
    url:''
  
} 
const uploadpic = (state = picurl ,action) =>  {
    switch(action.type){
        
        case UPLOADPIC:
          return { ...state, value: action.url };
       
        default:
           return state ;
    }
}

export default uploadpic;