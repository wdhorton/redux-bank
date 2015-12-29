import { ADD_TRANSACTION } from '../constants/ActionTypes';

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

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      const newTransaction = {
        type: action.transactionType,
        date: new Date(),
        amount: action.amount,
        accountId: action.accountId
      };
      return [...state, newTransaction];
    default:
      return state;
  }
}
