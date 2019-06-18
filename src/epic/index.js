import { combineEpics } from 'redux-observable';
import sqlEpic from './epic';
import formEpic from './formepic';
import getitemsEpic from './showitems';
import showpostEpic from './showpost';
// import getuidEpic from './getuid';
// import logoutepic from './logoutepic';
//combine epic
const rootEpic= combineEpics(
    sqlEpic,
    formEpic,
    getitemsEpic,
    showpostEpic
    // getuidEpic
);

export default rootEpic;