import { SHOW_TRANSACTION_MODAL } from '../constants/ActionTypes';

export default function showTransactionModal(state = false, action) {
  switch (action.type) {
    case SHOW_TRANSACTION_MODAL:
      return true;
    default:
      return state;
  }
}
