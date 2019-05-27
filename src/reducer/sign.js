import {SIGNOUT,SIGNIN,SIGNUP} from '../constants/constants';

//判斷是否已經登入的state
const checksign = {
   value:false,

}
//過濾登入三狀態 登出狀態,登入狀態,註冊狀態
const sign = (state = checksign,action) => {
    switch(action.type){
      case SIGNOUT:
        return { ...state, value: action.value};
      case SIGNIN:
        return { ...state, value: action.value};
      case SIGNUP:
        return { ...state,
          value: action.value,
          userNickname:action.userNickname,
          userAccount:action.userAccount,
          InvitationCode:action.InvitationCode
        };
      default:
        return state ;
  }
}

export default sign;