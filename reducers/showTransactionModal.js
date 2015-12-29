import { SHOW_TRANSACTION_MODAL, HIDE_TRANSACTION_MODAL } from '../constants/ActionTypes';

export default function showTransactionModal(state = false, action) {
  switch (action.type) {
    case SHOW_TRANSACTION_MODAL:
      return true;
    case HIDE_TRANSACTION_MODAL:
      return false;
    default:
      return state;
  }
}
