import expect from 'expect';
import accounts from '../../reducers/accounts';

describe('accounts reducer', () => {
  it('handles initial state', () => {
    expect(
      accounts(undefined, {})
    ).toEqual([
      {
        id: 1,
        accountNumber: "121212",
        accountType: "Savings"
      },
      {
        id: 2,
        accountNumber: "232323",
        accountType: "Money market"
      }
    ]);
  });
});
