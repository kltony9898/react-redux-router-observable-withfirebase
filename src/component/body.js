
import React, { Component } from 'react';
import Sider from './leftmenu';
import Article from './article';
import Right from './Right';
class Body extends Component{
//header 底下 三欄位 部分
    render(){
    return(
        <div  style = {{width:'auto',height:'auto',marginTop:'2%'}} >
            <div style ={{
                float:'left',
                width:'12%',
                marginLeft:'16%',
                position:'fixed',
                backgroundColor:'#ffffff'
                }}>
            {/* 這邊是左邊導覽列 */}
            <Sider />
            </div>
            <div style = {{float:'right',width:'72%',height:'100%'}} >
                <div  style ={{float:'left',width:'50%',height:'100%',minHeight:'870px',padding:'0px 10px 10px 10px'}}>
                    <Article />
                {/* 這裡是中間部分 其中內涵article 和 post&return & post */}
                </div>
                <div style ={{float:'right',width:'25%',height:'100%',minHeight:'870px',marginRight:'25%'}}>
            {/* 這邊是右邊那欄 */}
                <Right />
                </div>
            </div>
        </div>

     );
    }
}
export default Body;