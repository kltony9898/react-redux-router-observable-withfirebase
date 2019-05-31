import React from 'react';
// import Container from './container/container';
import firebase from './config/config';
import {login, logout,loading} from './action/actiontype.js';
import {connect} from 'react-redux';
import Firebaseui from './component/firebaseui';
class App extends React.Component {
    componentDidMount=()=>{
        // this.props.login();
        firebase.auth().onAuthStateChanged(user =>{
          if (user) {
            // console.log(user);
            this.props.login();
          } else {
            // console.log(user);
            // this.props.logout(); 
          }
        })
      }
  render(){
    return (
      <div className="App">
          <Firebaseui />
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
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