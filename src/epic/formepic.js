import {SIGNUP} from '../constants/constants';
import {from,of} from 'rxjs';
import {mergeMap,catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import firebase from '../config/config';
import {ajax} from 'rxjs/ajax';
import *as actiontype from '../action/actiontype';
import { message } from 'antd';
import {api} from '../config/config';
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
            return ajax
                  .post(`${api}/user/signup`,
                  signup,
                  {'Content-Type':'application/json'})
            .pipe(
              mergeMap(response =>{ 
                message.success('註冊成功');
                return of (actiontype.login());
              })
              ,catchError(error => {
                switch(error.status){
                  case 201 :
                  message.error('POST 封包內容不符合設定');
                  break;
                  case 202 :
                  message.error('會員已註冊');
                  break;
                  case 403 :
                  message.error('已註冊 firebase 會員,但未新增到 sql');
                  break;
                  case 404 :
                  message.error('firebase 內查無此 user');
                  break;
                  case 405 :
                  message.error('註冊失敗(sql問題)');
                  break;
                  default:return null;
                }
                
              })
            )
            
            }),
          )
    },    
   ),             
);


export default formEpic;