import expect from 'expect';
import accounts from '../../reducers/transactions';

describe('transactions reducer', () => {
  it('handles initial state', () => {
    expect(
      accounts(undefined, {})
    ).toEqual([
      {
        type: "Withdrawal",
        date: "12/13/14",
        amount: 250.00,
        accountId: 1
      },
      {
        type: "Deposit",
        date: "1/3/15",
        amount: 1000.00,
        accountId: 1
      },
      {
        type: "Deposit",
        date: "1/5/14",
        amount: 100.00,
        accountId: 2
      },
    ]);
  });
});
