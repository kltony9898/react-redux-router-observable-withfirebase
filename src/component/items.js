import React from 'react';
import {showitems} from '../action/actiontype.js';
import {connect} from 'react-redux';
import { Button } from 'antd';
import '../css/items.css';
//右上角道具組件
const Items = ({level,gold,diamond,fan,follow}) => {
  return(
        <div className = 'items'>
          <div className='group'>
            <Button className = 'li' ghost>等級:{level}</Button>
            <Button className = 'li' ghost>金幣:{gold}</Button>
            <Button className = 'li' ghost>鑽石:{diamond}</Button>
            <Button className = 'li' ghost>粉絲:{fan}</Button>
            <Button className = 'li' ghost>追蹤:{follow}</Button>
          </div>
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
    showitems
  }
  export default connect(
         mapStateToProps,
         mapDispatchToProps
  )(Items);