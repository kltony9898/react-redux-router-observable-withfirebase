import {LOADING} from '../constants/constants';
import {ajax} from 'rxjs/ajax';
import {from,of} from 'rxjs';
import {mergeMap,catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import firebase from '../config/config';

import *as actiontype from '../action/actiontype';


//柚子api user/login 的epic
const sqlEpic = (action$) => 

action$.pipe(
    ofType(LOADING),
    mergeMap(() =>{   
      return from(firebase.auth().currentUser.getIdToken(true)).pipe( 
        mergeMap((Token) =>{
        const jsonStr = {Token:Token};  
        return ajax
              .post(`https://289b5c2f.ngrok.io/user/login`,
              jsonStr,
              {'Content-Type':'application/json'})
        .pipe(
          mergeMap(response =>{  
              return of (actiontype.login());   
          })
          ,catchError(error => {
            return of(actiontype.signin());
            //window.location.reload();
          })
        )
        
        }),
      )
    },    
   ),             
);


export default sqlEpic;