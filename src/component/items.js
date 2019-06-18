import React from 'react';
// import firebase from '../config/config';
// import {getitems} from '../action/actiontype.js';
import {showitems,getuid} from '../action/actiontype.js';
import {connect} from 'react-redux';
import { Button } from 'antd';

const ButtonGroup = Button.Group;
const li = {
    float:'',
    width:'20%',
    // padding:'0px 2px 0px 2px',
    color:'#750058',
    shadow:'black',
}


//右上角道具組件
const Items = ({level,gold,diamond,fan,follow}) => {
  return(
        <div style ={{background:'#ffffff',height:'35px',width:'100%'}}>
        <ButtonGroup style = {{float:'right',marginTop:'2px',textAlign:'center',marginRight:'2%'}}>
          <Button style = {li} ghost>等級:{level}</Button>
          <Button style = {li} ghost>金幣:{gold}</Button>
          <Button style = {li} ghost>鑽石:{diamond}</Button>
          <Button style = {li} ghost>粉絲:{fan}</Button>
          <Button style = {li} ghost>追蹤:{follow}</Button>
        </ButtonGroup>
        </div>
        )
}
const mapStateToProps = (state) => {
    return {
      level:state.showitems.level,
      gold:state.showitems.gold,
      diamond:state.showitems.diamond,
      fan:state.showitems.fan,
      follow:state.showitems.follow,
      uid:state.getuid.uid
    }
  }
  
  const mapDispatchToProps = {
    // getitems
    showitems,
    getuid
  }
  export default connect(
         mapStateToProps,
         mapDispatchToProps
  )(Items);