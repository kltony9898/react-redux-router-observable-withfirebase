import { Layout, Menu, BackTop } from 'antd';
import React, { Component } from 'react';
import logo from '../pic/logowhite.png';
import authpic from '../pic/loading2.gif'
import 'antd/dist/antd.css';
import {logout} from '../action/actiontype';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// import FileField from './fileField';
import { push } from 'connected-react-router';
import {Link } from 'react-router-dom';
import Items from './items';
import Body from './body';
import firebase from '../config/config';
import {getuid,  getitems,getpost} from '../action/actiontype.js';
const { Header, Footer } = Layout;


const Logo = () => {
    // 左上角logo
    return <img
            src={logo} 
            alt="Logo" 
            style = {{
                width:'160px',
                height:'60px',
                float:'left',
                marginTop:'2px',
                marginLeft:'14%'
              }} 
            />;

  }
  //目前是寫死的使用者圖片
const Authpic = () => {
    return <img src={authpic} alt = "authpic" style = {{height :'60px',width:'60px'}}/> 
}
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
  <Layout className="layout" style={{minHeight:1000,width:'100%',height:'100%',backgroundColor:'#f8f8f8'}} >
  <div style = {{ 
      position:'fixed',
      width:'100%',
      zIndex:'3'
      
      }}>
    <Header style={{
      backgroundColor:'#ffffff',
     
      }}>
      <div className="logo" >
      <Logo  onClick={()=>{this.props.push('/')}}/>
      </div>
      {/* 右上欄位menu */}
      <Menu
        theme='#262626'
        mode="horizontal"
        style={{ 
          lineHeight: '64px',
          float:'right',
          backgroundColor:'#ffffff',
          color:'#5c1345',
          width:'30%',
          textAlign:'center'}}
      >
        <Authpic style={{width:'25%'}}/>
        <Menu.Item key="1" style={{width:'25%'}}><Link to ='/home'>首頁</Link></Menu.Item>
        <Menu.Item key="2" style={{width:'25%'}}><Link to ='/uploadpic'>改頭貼</Link></Menu.Item>
        <Menu.Item key="3" style={{width:'25%'}} onClick = {()=>{this.props.logout();this.props.push('/');}}  >登出</Menu.Item>
      </Menu>
      
    </Header>
    <div style = {{backgroundColor:'#5c1345',height:'2px'}}>

    </div>
        {/* 道具欄位 內涵等級鑽石黃金等等等的組建 */}
      <Items style={{width:'30%'}}/>
    </div>
    <div style={{height:'100px'}}/>
   
    {/* 位於下面的三欄式版面的component */}
    <Body/>
    {/* 回到上層矛點 */}
    <BackTop style={{height:"50px",width:'50px'}} />
    
    {/* <Content style={{ padding: '0 50px',background:'#fff0f7' ,height:'100%'}}>
      <div style={{ background: '#fff', padding: 24,height:'auto' }}>
      </div>
    </Content> */}
    
    {/* 最下面的欄位 */}
    <Footer style={{ textAlign: 'center' ,backgroundColor:'#ffffff'}}>React-redux-firebase example ©2019 Created by 曾子銘</Footer>
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
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home));