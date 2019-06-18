import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import checklogin from './reducer';
import showitems from './showitems';
import getuid from './getuid';
import showpost from './showpost';
const rootReducer =(history)=> combineReducers({
    checklogin,
    showitems,
    getuid,
    showpost,
    form: reduxFormReducer,
    router: connectRouter(history),
  });
export default rootReducer;