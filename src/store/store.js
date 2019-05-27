import rootReducer from '../reducer/index';
import rootEpic from '../epic/index';
import { createStore , applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
// let store = createStore(combine);
/////////////////////////////////
// 依據我們撰寫的 reducer 建立出 store
export default function configureStore() {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      rootReducer(history),
      composeEnhancers(
        applyMiddleware(
          epicMiddleware,
           routerMiddleware(history)
           )
        ),
    );
    epicMiddleware.run(rootEpic);
    return store;
  }
// export default store;