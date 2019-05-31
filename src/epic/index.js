import { combineEpics } from 'redux-observable';
import sqlEpic from './epic';
import formEpic from './formepic';
// import logoutepic from './logoutepic';
//combine epic
const rootEpic= combineEpics(
    sqlEpic,
    formEpic,
    // logoutepic
);

export default rootEpic;