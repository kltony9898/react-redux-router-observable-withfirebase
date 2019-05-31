import {LOGIN,LOGOUT} from '../constants/constants';
import {SIGNIN} from '../constants/constants';
import {LOADING} from '../constants/constants';
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


//註冊介面顯示
const signin = () => {
    return{
        type:SIGNIN,
    }
};

//等在loading介面
const loading =() =>{
    return{
        type:LOADING,

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
export {login,logout,signin,loading,signup};