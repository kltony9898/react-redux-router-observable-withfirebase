import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Home from './component/Home';
import PrivateRoute from './component/PrivateRouter';
import Signup from './component/signup';
import FileField from './component/fileField';
import App from './App';
/////////////////////////////////
const store = configureStore();
// 依據我們撰寫的 reducer 建立出 store

ReactDOM.render(

  <Provider store={store}>
    <ConnectedRouter history={history}> { /* 必須在provider下面 */}
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/uploadpic" component={FileField} />
        <PrivateRoute exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
