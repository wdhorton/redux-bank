import expect from 'expect';
import accounts from '../../reducers/accounts';

describe('accounts reducer', () => {
  it('handles initial state', () => {
    expect(
      accounts(undefined, {})
    ).toEqual([
      {
        accountNumber: "121212",
        accountType: "Savings",
        amount: 400.00
      },
      {
        accountNumber: "232323",
        accountType: "Money market",
        amount: 5000.00
      }
    ]);
  });
});
