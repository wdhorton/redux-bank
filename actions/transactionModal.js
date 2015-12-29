import * as types from '../constants/ActionTypes';

export function showTransactionModal() {
  return { type: types.SHOW_TRANSACTION_MODAL };
}

export function hideTransactionModal() {
  return { type: types.HIDE_TRANSACTION_MODAL };
}
