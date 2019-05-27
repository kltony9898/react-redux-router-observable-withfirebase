import {connect} from 'react-redux';
import Board from '../component/component';
import {login, logout,loading,signin,signout,signup,uploadpic} from '../action/actiontype.js';

const mapStateToProps = (state) => {
  return {
  //  sta: state.checklogin.status,
   val:state.checklogin.value,
   load:state.checklogin.loadingview,
   sign:state.sign.value,
   uploadpic:state.uploadpic.url
  }
}
const mapDispatchToProps = {
    login,
    logout,
    loading,
    signin,
    signout,
    signup,
    uploadpic
}

export default connect(
       mapStateToProps,
       mapDispatchToProps
)(Board);
