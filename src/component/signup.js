import React from 'react';
// import Container from './container/container';
import {signup} from '../action/actiontype';
import {connect} from 'react-redux';
import SimpleForm from '../postform/postform';

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