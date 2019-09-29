import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import configureStore from './store/index';

const history = createBrowserHistory();

const { store } = configureStore(history, f => f, window.__data);

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const renderApp = TheApp => {
  renderMethod(
    <AppContainer>
      <CookiesProvider>
        <Provider store={store} key="provider">
          <ConnectedRouter history={history}>
            <Router history={history}>
              <TheApp/>
            </Router>
          </ConnectedRouter> 
        </Provider>
      </CookiesProvider>
    </AppContainer>,
    document.getElementById('root')
  );
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App.js', () => {
    const TheApp = require('./App').default;
    renderApp(TheApp);
  });
}

renderApp(App);