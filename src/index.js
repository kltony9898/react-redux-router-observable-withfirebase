import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore ,{history}from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

// import store from './store/store';
//import combinelogin from './reducer/reducer';
/////////////////////////////////
const store = configureStore();
// 依據我們撰寫的 reducer 建立出 store

ReactDOM.render(
  <Provider store={store}>
   <ConnectedRouter history={history}> { /* router用必須包在povider下 */ }
    <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);