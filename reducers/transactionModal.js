import { SHOW_TRANSACTION_MODAL, HIDE_TRANSACTION_MODAL } from '../constants/ActionTypes';

export default function transactionModal(state = [], action) {
  switch (action.type) {
    case SHOW_TRANSACTION_MODAL:
      return [action.modal];
    case HIDE_TRANSACTION_MODAL:
      return [];
    default:
      return state;
  }
}
