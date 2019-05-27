import {SIGNUP} from '../constants/constants';
import {from,of} from 'rxjs';
import {mergeMap,catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import firebase from '../config/config';
import {ajax} from 'rxjs/ajax';
import *as actiontype from '../action/actiontype';
const formEpic = (action$) => 


//柚子的api user/signup 註冊
action$.pipe(
    ofType(SIGNUP),
    mergeMap((value) =>{   
        return from(firebase.auth().currentUser.getIdToken(true)).pipe( 
            mergeMap((Token) =>{
            const signup = {
                Token:Token,
                userAccount:value.userAccount,
                userNickname:value.userNickname,
                InvitationCode:undefined
            };
            console.log(signup);
            
            return ajax
                  .post(`https://289b5c2f.ngrok.io/user/signup`,
                  signup,
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


export default formEpic;