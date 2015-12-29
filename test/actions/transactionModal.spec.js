import expect from 'expect';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/transactionModal';

describe('transactionModal actions', () => {
  it('showTransactionModal should create withdrawal SHOW_TRANSACTION_MODAL action', () => {
    expect(actions.showTransactionModal("Withdrawal")).toEqual({
      type: types.SHOW_TRANSACTION_MODAL,
      modal: "Withdrawal"
    });
  });

  it('showTransactionModal should create deposit SHOW_TRANSACTION_MODAL action', () => {
    expect(actions.showTransactionModal("Deposit")).toEqual({
      type: types.SHOW_TRANSACTION_MODAL,
      modal: "Deposit"
    });
  });

  it('hideTransactionModal should create HIDE_TRANSACTION_MODAL action', () => {
    expect(actions.hideTransactionModal()).toEqual({
      type: types.HIDE_TRANSACTION_MODAL
    });
  });
});
