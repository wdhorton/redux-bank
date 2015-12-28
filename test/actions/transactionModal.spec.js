import expect from 'expect';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/transactionModal';

describe('transactionModal actions', () => {
  it('showTransactionModal should create SHOW_TRANSACTION_MODAL action', () => {
    expect(actions.showTransactionModal()).toEqual({
      type: types.SHOW_TRANSACTION_MODAL
    });
  });
});
