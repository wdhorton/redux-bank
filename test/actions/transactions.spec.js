import expect from 'expect';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/transactions';

describe('transaction actions', () => {
  it('addTransaction should create ADD_TRANSACTION action', () => {
    expect(actions.addTransaction('Withdrawal', 100.00, 1)).toEqual({
      type: types.ADD_TRANSACTION,
      transactionType: 'Withdrawal',
      amount: 100.00,
      accountId: 1
    });
  });
});
