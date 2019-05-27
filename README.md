# 專案簡介

firebase 三方驗證登入Simple

1.抓取firebase 登入抓取 token 到資料庫進行驗證 如未註冊則渲染註冊頁面 已註冊則直接登入

2.上傳檔案至firebase storage 即時資料庫 建置使用者頭貼封面等等

3.透過firebase抓取使用者登入資料 姓名 大頭貼等

4.登入後抓取文章 金幣 等級 邀請碼 自我介紹等

增強登入安全性 以及透過firebase減少開發成本 與時間
採用框架為方便增強渲染效能



# 專案運用Library & Framework

## create-react-app

透過create-react-app應用程序快速提供react檔案配置

    yarn add create-react-app

## redux 

javascript 底下可預測state容器

    yarn add redux

## react-redux

使用redux 來控制 react component 內資料流
redux 為 flux 架構衍生而來

    yarn add react-redux

## react-router

react-router提供在react專案上支援路由服務

    yarn add react-router

## redux-form

將react表單組件連結到redux儲存

    yarn add redux-form

## react-redux-observable 

redux的middle ware
Netflix旗下的開源專案
redux observable 透過epic 進行非同步處理 倒回 redux 資料流

    yarn add react-redux-observable

## rxjs

處理非同步問題
若使用react-redux-observable需安裝

    yarn add rxjs

## react-firebaseui

FirebaseUI Auth提供了一個drop-in auth解決方案
用於處理用戶使用電子郵件地址和密碼登錄的UI流程

    yarn add react-firebaseui

## Ant-Desing(antd)

支援react 元件庫 與前端工程師協作 並節省開與設計時間

    yarn add antd

## firebase

引用firebase library

    yarn add library


# Firebase



## firebase authentication

authentication 登入firebase 可透過 
facebook,google,github 
等第三方登入搭配 SQL 進行第三方安全加密驗證使用者登入

## firebase storage

Firebase 雲端儲存 儲存使用者資料的即時資料庫



