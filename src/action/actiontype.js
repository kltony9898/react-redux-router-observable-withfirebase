import {LOGIN,LOGOUT, SHOWPOST} from '../constants/constants';
import {GETITEMS} from '../constants/constants';
import {SIGNUP} from '../constants/constants';
import {SHOWITEMS} from '../constants/constants';
import {GETPOST} from '../constants/constants';
import {GETUID} from '../constants/constants';
///獲取uid 並儲存在props state
const getuid = (uid) =>{
    return{
        type:GETUID,
        uid:uid
    }
}
///獲取總貼文用uid
const getpost = (uid)=> {
    return {
        type:GETPOST,
        uid:uid
    }
}
//獲取item uid
const getitems = (uid) => {
    return{
        type:GETITEMS,
        uid:uid
    }
}
//抓取貼文的response
const showpost = (response)=> {
    return{
        type :SHOWPOST,
        response:response.response
        //明天從這裡開始動 要拆包 json 用 map
    }
}
//抓取items 並存取在 props state
const showitems = (response)=> {
    return{
        type :SHOWITEMS,
        level:response.response.level,
        gold:response.response.gold,
        diamond:response.response.diamond,
        fan:response.response.fan,
        follow:response.response.follow
    }
}
//註冊form 表單資料
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
export {login,logout,signup,getitems,showitems,getpost,getuid,showpost};