import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import accounts from './accounts';
import transactions from './transactions';
import showTransactionModal from './showTransactionModal';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  accounts,
  transactions,
  showTransactionModal,
  routing: routeReducer,
  form: formReducer
});

export default rootReducer;
