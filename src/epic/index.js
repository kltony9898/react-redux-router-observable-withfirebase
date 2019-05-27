import { combineEpics } from 'redux-observable';
import sqlEpic from './epic';
import formEpic from './formepic';
//combine epic
const rootEpic= combineEpics(
    sqlEpic,
    formEpic
);

export default rootEpic;