import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import accounts from './accounts';
import transactions from './transactions';
import transactionModal from './transactionModal';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  accounts,
  transactions,
  transactionModal,
  routing: routeReducer,
  form: formReducer
});

export default rootReducer;
