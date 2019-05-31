import { LOGIN} from '../constants/constants';
import {ajax} from 'rxjs/ajax';
import {from,of} from 'rxjs';
import {mergeMap,catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import firebase from '../config/config';
import { message } from 'antd';
// import *as actiontype from '../action/actiontype';
import { push } from 'connected-react-router';


//柚子api user/login 的epic
const sqlEpic = (action$) => 

action$.pipe(
    ofType(LOGIN),
    mergeMap(() =>{
      message.loading('載入中', 2);
      return from(firebase.auth().currentUser.getIdToken(true)).pipe( 
        mergeMap((Token) =>{
        const jsonStr = {Token:Token};  
        return ajax
              .post(`https://67634866.ngrok.io/user/login`,
              jsonStr,
              {'Content-Type':'application/json'})
        .pipe(
          mergeMap(() =>{  
              message.success('登入成功');
              
              return of (push('/fakepage'));   
          })
          ,catchError(error => {
            console.log(error);
            switch(error.status){
              case 201 :
              message.error('POST 封包內容不符合設定');
              break;
              case 403 :
              message.error('已註冊 firebase 會員,但未新增到 sql');
              return of (push('/signup'));
              case 404 :
              message.error('firebase 內查無此 user');
              break;
              case 405 :
              message.error('登入失敗(sql問題)');
              break;
              case 502 :
              message.error('炸了');
              break;
              default:return null;
            }
            //  return of (push('/signup'));   
            // return of(action);
            //window.location.reload();
          })

        )
        
        }),
      )
    },    
   ),             
);


export default sqlEpic;