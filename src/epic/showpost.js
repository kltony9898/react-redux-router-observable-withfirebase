
import {ajax} from 'rxjs/ajax';
import {of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {api} from '../config/config';
import { GETPOST } from '../constants/constants';
import { showpost } from '../action/actiontype';
//柚子api user/login 的epic
const showpostEpic = (action$) => 
action$.pipe(
    ofType(GETPOST),
    mergeMap((uid) =>{
      return(
         ajax.get(`${api}/post/getuserpost/${uid.uid}`,
              {'Content-Type':'application/json'})
        .pipe(
          mergeMap((response) =>{  
            return of (
             showpost(response)
            );
          })
        )
       
      )
    },
  )
  );


export default showpostEpic;