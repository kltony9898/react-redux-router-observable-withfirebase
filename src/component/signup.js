import React from 'react';
// import Container from './container/container';
import {signup} from '../action/actiontype';
import {connect} from 'react-redux';
import SimpleForm from '../postform/postform';


//呼叫redux-form組建  好讓表單送出註冊
class Signup extends React.Component {
  render(){
    return (
      <div >
          <SimpleForm onSubmit={this.props.signup}/>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
    signup
}
export default connect(
       mapStateToProps,
       mapDispatchToProps
)(Signup);