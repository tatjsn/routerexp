import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Page from './components/Page';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import app from './reducers';
import { fetchMessage } from './actions';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() from actions
)(createStore);
const store = createStoreWithMiddleware(app);

function onEnterPage(nextState) {
  store.dispatch(fetchMessage(nextState.params.pageId));
}

render((
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <Route path=":pageId" component={Page} onEnter={onEnterPage} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
