import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {uiConfig} from '../config/config';
import firebase from '../config/config';
import img from '../pic/loading.gif';
import '../App.css';
import SimpleForm from "../postform/postform";
import Fakepage from './fakepage';

//你下loading image git import進去用的function
const Img = () =>  {
  // Import result is the URL of your image
  return <img src={img} alt="Logo" style = {{width:200,height:200}} />;
}

///////////////////////登入介面Board/////////////////////////////
const Board = ({val,load,sign,signup,signout}) => {
  return (  
    <div>
        <div style = {{ display: 'flex',justifyContent:'center',alignItems:'center'}}>
        {load ? (

              //loading介面借用的圖片 load 為 value 為true觸發
              <span>       
                <Img /> 
                <div>
                  讀取中
                </div>
              </span>
            ) : (
              //loading介面無顯示 load 為 value fales
              <div>     
              </div>
            )}
        </div>
        <div>
          {val ? (
              //進確認到登入     畫面 tag fakepage位置為 ../component/fakepage.js val 為 value 為true觸發
              <span  style = {{ display: 'flex',justifyContent:'center',alignItems:'center'}}>             
                <Fakepage uploadpic ={signout}/>
              </span>
           ) : (
              <div>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />        
              </div>              
          )}      
        </div>
        <div style = {{ display: 'flex',justifyContent:'center',alignItems:'center'}}>
              {sign ? (
                  <span>
                      <SimpleForm onSubmit={signup} />
                  </span>
                ) : (
                  <div>
                  </div>
              )}
        </div>
    </div>
  );
}
  export default Board;

