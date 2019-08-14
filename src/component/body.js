
import React, { Component } from 'react';
import Sider from './leftmenu';
import Article from './article';
import Right from './Right';
import '../css/body.css'
class Body extends Component{
//header 底下 三欄位 部分
    render(){
    return(
        <div className='body'>
            <div className='leftbar'>
            {/* 這邊是左邊導覽列 */}
            <Sider />
            </div>
            <div className='rightside' >
                <div  className='middle'>
                    <Article />
                {/* 這裡是中間部分 其中內涵article 和 post&return & post */}
                </div>
                <div className='rightbar'>
            {/* 這邊是右邊那欄 */}
                <Right />
                </div>
            </div>
        </div>

     );
    }
}
export default Body;