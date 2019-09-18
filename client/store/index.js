import { createEpicMiddleware } from 'redux-observable';
import { createStore, compose, applyMiddleware } from 'redux';
// import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
// import { wrapRootEpic } from 'react-redux-epic';
import rootReducer from './reducers';
import { rootEpic } from './epics/index';

export default function configureStore(
  history,
  wrapEpic: Function => Function = f => f, 
  preloadedState: {}
) {
  // const history = createBrowserHistory();
  const wrappedEpic = wrapEpic(rootEpic);
  const epicMiddleware = createEpicMiddleware();
  const loggerMiddleware = createLogger();
  // const middleware = applyMiddleware(epicMiddleware, loggerMiddleware)
  const middleware = (process.env.NODE_ENV === 'development') ? 
    applyMiddleware(routerMiddleware(history), epicMiddleware, loggerMiddleware) :
    applyMiddleware(routerMiddleware(history), epicMiddleware);

  let store;
  if (!process.env.__Server__) {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(rootReducer(history), preloadedState, composeEnhancers(middleware));
  } else {
    store = createStore(rootReducer(history), middleware);
  }

  const epic$ = new BehaviorSubject(wrappedEpic);

  const hotReloadingEpic = (...args) =>
    epic$.pipe(
      switchMap(epic => epic(...args))
    );

  epicMiddleware.run(hotReloadingEpic);

  if (module.hot) {
    module.hot.accept('./epics/index', () => {
      const nextRootEpic = require('./epics/index').rootEpic;
      epic$.next(nextRootEpic);
    });
    
    module.hot.accept('./reducers', () => {
      // Enable Webpack hot module replacement for reducers
      store.replaceReducer(rootReducer(history));
    });
  }

  return {
    store,
    history,
    wrappedEpic,
    
  };
}