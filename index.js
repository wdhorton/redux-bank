import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import rootReducer from './reducers';
import App from './containers/App';
import AccountsMainSection from './components/dashboard/MainSection';
import TransactionsMainSectionContainer from './containers/TransactionsMainSectionContainer';

const reducer = rootReducer;

const store = createStore(reducer);
const history = createHistory();

syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={AccountsMainSection} />
        <Route path="accounts/:id" component={TransactionsMainSectionContainer} />
        <Route path="accounts" component={AccountsMainSection} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
