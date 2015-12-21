import { combineReducers } from 'redux';
import accounts from './accounts';
import transactions from './transactions';

const rootReducer = combineReducers({
  accounts,
  transactions
});

export default rootReducer;
