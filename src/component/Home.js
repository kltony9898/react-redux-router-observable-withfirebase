import { Layout, BackTop } from 'antd';
import React, { Component } from 'react';
import logo from '../pic/logowhite.png';
import 'antd/dist/antd.css';
import {logout} from '../action/actiontype';
import {connect} from 'react-redux';
// import FileField from './fileField';
import { push } from 'connected-react-router';
// import Items from './items';
import Body from './body';
import firebase from '../config/config';
import {getuid,  getitems,getpost} from '../action/actiontype.js';
import '../css/Home.css'
import Burger from './burger.js';
import {Search} from './search.js';
const { Footer } = Layout;


const Logo = () => {
    // 左上角logo
    return <img
            src={logo} 
            alt="Logo" 
            className='logo'
            />;

  }
  //目前是寫死的使用者圖片
// const Authpic = () => {
//     return <img src={authpic} alt = "authpic" style = {{height :'60px',width:'60px'}}/> 
// }
//引用左上角logo用的function

//home page router跳轉首頁
class Home extends Component{
  //產生home component時掛載三個要用到功能 的uid 在didmount內
  componentDidMount=()=>{
    firebase.auth().onAuthStateChanged((user) =>{
            this.props.getuid(user.uid);
            this.props.getitems(user.uid);
            this.props.getpost(user.uid);
      });
  }
  
    render(){
    
    return(
      
  //內容主體 包在layout內 其中包含header 跟body
  <Layout className='layout'>
  <div className='header'>
      <div  className='inside'>
        <div className = 'pic'>
          <Logo className="logo" />
        </div>
        <Search className='search'/>
            {/* 🍔 */}
        
      </div>
        {/* 道具欄位 內涵等級鑽石黃金等等等的組建 */}
        <Burger className='burger'/>
      {/* <Items /> */}
  </div>

   
    {/* 位於下面的三欄式版面的component */}
    <Body  />
    {/* 回到上層矛點 */}
    <BackTop className='backtop'/>

    
    
    {/* 最下面的欄位 */}
    <Footer className='footer'>React-redux-firebase example ©2019 Created by 曾子銘</Footer>
  </Layout>
  );
}
}
const mapDispatchToProps = {
    logout,
    push,
    getuid,
    getitems,
    getpost
  }
  const mapStateToProps = (state) => {
    return {
      
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);