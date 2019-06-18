import { LOGIN} from '../constants/constants';
import {ajax} from 'rxjs/ajax';
import {from,of} from 'rxjs';
import {mergeMap,catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import firebase from '../config/config';
import { message } from 'antd';
import {api} from '../config/config';
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
              .post(`${api}/user/login`,
              jsonStr,
              {'Content-Type':'application/json'})
        .pipe(
          mergeMap(() =>{  
              message.success('登入成功');
              return of (push('/home'));   
          })
          ,catchError(error => {
            console.log(error);
            if(error.status ===  403){
              message.error('已註冊 firebase 會員,但未新增到 sql');
              return of (push('/signup'));
            }else{
              return of (push('/'));
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