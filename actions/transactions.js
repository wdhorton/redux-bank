import * as types from '../constants/ActionTypes';

export function addTransaction(transactionType, amount, accountId) {
  return { type: types.ADD_TRANSACTION, transactionType, amount, accountId };
}
