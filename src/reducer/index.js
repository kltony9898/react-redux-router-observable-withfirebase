import {combineReducers} from 'redux';
import checklogin from './reducer';
import sign from './sign';
import uploadpic from './uploadpic';
import { reducer as reduxFormReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

const rootReducer =(history)=> combineReducers({
    checklogin,
    sign,
    uploadpic,
    form: reduxFormReducer,
    router: connectRouter(history),
  });
export default rootReducer;