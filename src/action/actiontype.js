import {LOGIN,LOGOUT} from '../constants/constants';
import {SIGNOUT,SIGNIN} from '../constants/constants';
import {LOADING} from '../constants/constants';
import {SIGNUP} from '../constants/constants';
import {UPLOADPIC} from '../constants/constants';

//傳輸使用者註冊資訊
const signup =(value) =>{
    return{
        type :SIGNUP,
        userNickname:value.userNickname,
        userAccount:value.userAccount,
        InvitationCode:""
    }
}
//取消顯示註冊介面
const signout = () => {
    return{
        type:SIGNOUT,
        value:false
    }
};

//註冊介面顯示
const signin = () => {
    return{
        type:SIGNIN,
        value:true,
        loadingview:false
    }
};

//等在loading介面
const loading =() =>{
    return{
        type:LOADING,
        value:true,
        loadingview:true
    }
}
//保持登入狀態
const login=()=>{
    return{
        type:LOGIN,
        // status:"登入狀態",
        value:true,
        loadingview:false
    }
};

//常住登出狀態
const logout=()=>{
    return{
        type:LOGOUT,
        // status:"登出狀態",
        value:false,
        loadingview:false
    }
};
//還沒用到
const uploadpic=()=>{
    return{
        type:UPLOADPIC,
        url:''
    }
};
export {login,logout,signin,signout,loading,signup,uploadpic};