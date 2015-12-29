import * as types from '../constants/ActionTypes';

export function showTransactionModal(modal) {
  return { type: types.SHOW_TRANSACTION_MODAL, modal };
}

export function hideTransactionModal() {
  return { type: types.HIDE_TRANSACTION_MODAL };
}
