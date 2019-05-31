import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import checklogin from './reducer';
const rootReducer =(history)=> combineReducers({
    checklogin,
    form: reduxFormReducer,
    router: connectRouter(history),
  });
export default rootReducer;