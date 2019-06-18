
import {ajax} from 'rxjs/ajax';
import {of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {api} from '../config/config';
import  {showitems} from '../action/actiontype';
import { GETITEMS } from '../constants/constants';
//柚子api user/login 的epic
const getitemsEpic = (action$) => 
action$.pipe(
    ofType(GETITEMS),
    mergeMap((uid) =>{
      return(
         ajax.get(`${api}/user/getdata/${uid.uid}`,
              {'Content-Type':'application/json'})
        .pipe(
          mergeMap((response) =>{  
            return of (
             showitems(response),
            );
          })
        )
       
      )
    },
  )
  );


export default getitemsEpic;