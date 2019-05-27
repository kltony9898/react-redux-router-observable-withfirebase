import React from 'react';
import Container from './container/container';
import firebase from './config/config';
import {login, logout,loading} from './action/actiontype.js';
import {connect} from 'react-redux';
class App extends React.Component {
    componentDidMount=()=>{
      //  this.props.login();
        firebase.auth().onAuthStateChanged(user =>{
          if (user) {
            this.props.loading();
          } else {
            this.props.logout(); 
     
          }
        })
      }
  render(){
    return (
      <div className="App">
          <Container />
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  //  sta: state.checklogin.status,
   val:state.checklogin.value,
   load:state.checklogin.loadingview
  }
}

const mapDispatchToProps = {
    loading,
    login,
    logout,

}

export default connect(
       mapStateToProps,
       mapDispatchToProps
)(App);