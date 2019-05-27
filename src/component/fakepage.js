import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Button from 'antd/lib/button';
import firebase from '../config/config';
import img from '../pic/loading.gif';
// import Uploadpic from '../postform/uploadpic';
// import ImageUpload from '../component/imageUpload';
import FileField from './fileField';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
//引用左上角logo用的function
const Logo = () => {
  // Import result is the URL of your image
  return <img src={img} alt="Logo" style = {{width:'80px',height:'80px',margin: '0px 0px 0px 0',float:'left'}} />;
}
//fakepage 為antd 拉進來用的假版面
const Fakepage =(uploadpic) => {
  return(
  <Layout>
    <Header className="header" style = {{height :'80px'}}>
      <div className="logo">
          <Logo />
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
       
        <Menu.Item key="1">雲陽</Menu.Item>
        <Menu.Item key="2">好胖</Menu.Item>
           
      </Menu>

      
     <div style = {{marginLeft:'0px'}}>
     
      <div >
          {/*引用firebase api 來抓取firebase 註冊的使用者名稱 */}
         {firebase.auth().currentUser.displayName} 
      </div>
       {/* 引用firebase api 點方法來近行auth  登出 */}
        <Button  
          style = {{marginLeft:'800px',marginBottom:'0px'}}
            type="danger" 
            
            onClick={()=>firebase.auth().signOut()
        }>
            登出
        </Button> 
        
      </div>
    </Header>

    {/*插入上傳以及選擇檔案圖片位置為 ../component/fileField */}

    <FileField />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

  );
}
export default Fakepage;