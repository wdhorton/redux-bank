import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import accounts from './accounts';
import transactions from './transactions';

const rootReducer = combineReducers({
  accounts,
  transactions,
  routing: routeReducer
});

export default rootReducer;
