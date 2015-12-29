import expect from 'expect';
import transactionModal from '../../reducers/transactionModal';
import * as types from '../../constants/ActionTypes';

describe('transactionModal reducer', () => {
  it('is initially empty', () => {
    expect(transactionModal(undefined, {})).toEqual([]);
  });

  it('handles SHOW_TRANSACTION_MODAL', () => {
    expect(transactionModal(undefined, {
      type: types.SHOW_TRANSACTION_MODAL,
      modal: "Withdrawal"
    })).toEqual(["Withdrawal"]);
  });

  it('handles HIDE_TRANSACTION_MODAL', () => {
    expect(transactionModal(undefined, { type: types.HIDE_TRANSACTION_MODAL })).toEqual([]);
  });
});
