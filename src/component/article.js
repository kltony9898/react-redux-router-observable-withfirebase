import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React, { Component } from 'react';
import {post} from './post&return';
import { Menu, Dropdown, Button,Modal,Input } from 'antd';

///body 底下中間欄位 上欄為 發文處
class Article extends Component{
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
    render(){
      const { TextArea } = Input;
      const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              個版
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              爆料公社
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              爆漿公社
            </a>
          </Menu.Item>
        </Menu>
      );
    return(
      //發文處
        <div  style = {{width:'100%',height:'100%'}} >
          <div style={{marginBottom:'40px'}}>
            <TextArea rows={4} onClick={this.showModal} style={{height:'100px',width:'100%'}} />
            <div style={{height:'20px',width:'100%'}}>
            <Dropdown style={{width:'50%'}} overlay={menu} placement="bottomCenter">
                <Button style={{width:'50%'}}>個版</Button>
             </Dropdown>
             <Button type="primary" onClick={this.showModal} style={{width:'50%'}}>
                發文
              </Button>
              <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <input style={{height:'100px',width:'100%'}} />
              </Modal>
            </div>
          </div>
        {/* 呼叫下方抓取版面貼文 的component /component/post&return */}
          {post(this.props.response)}
        </div>

     );
    }
}
const mapDispatchToProps = {
    
}
  const mapStateToProps = (state) => {
    return {
      response:state.showpost.response,
    }
  }
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Article));