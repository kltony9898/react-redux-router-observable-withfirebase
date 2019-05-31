import {LOGIN,LOGOUT} from '../constants/constants';

import {SIGNUP} from '../constants/constants';

//傳輸使用者註冊資訊
const signup =(value) =>{
    return{
        type :SIGNUP,
        userAccount:value.userAccount,
        userNickname:value.userNickname,
        InvitationCode:""
    }
}
//保持登入狀態
const login=()=>{
    return{
        type:LOGIN,
        // status:"登入狀態",
    }
};

//常住登出狀態
const logout=()=>{
    return{
        type:LOGOUT,
        // status:"登出狀態",
    }
};
export {login,logout,signup};