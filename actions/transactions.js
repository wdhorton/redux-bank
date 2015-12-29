import * as types from '../constants/ActionTypes';

export function addTransaction(transactionType, accountId, amount) {
  return { type: types.ADD_TRANSACTION, transactionType, amount, accountId };
}
