import expect from 'expect';
import transactions from '../../reducers/transactions';
import * as types from '../../constants/ActionTypes';

const initialState = [
  {
    type: "Withdrawal",
    date: new Date("12/13/14"),
    amount: 250.00,
    accountId: 1
  },
  {
    type: "Deposit",
    date: new Date("1/3/15"),
    amount: 1000.00,
    accountId: 1
  },
  {
    type: "Deposit",
    date: new Date("1/5/14"),
    amount: 100.00,
    accountId: 2
  },
];

describe('transactions reducer', () => {
  it('handles initial state', () => {
    expect(transactions(undefined, {})).toEqual(initialState);
  });

  it('handles ADD_TRANSACTION', () => {
    const newTransactionAction = {
      type: types.ADD_TRANSACTION,
      transactionType: "Withdrawal",
      amount: 50,
      accountId: 3
    };

    expect(transactions([], newTransactionAction)).toEqual([{
      type: "Withdrawal",
      amount: 50,
      accountId: 3,
      date: new Date()
    }]);
  });
});
