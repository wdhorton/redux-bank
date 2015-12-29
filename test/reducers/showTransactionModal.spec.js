import expect from 'expect';
import showTransactionModal from '../../reducers/showTransactionModal';
import * as types from '../../constants/ActionTypes';

describe('showTransactionModal reducer', () => {
  it('has an initial state of false', () => {
    expect(showTransactionModal(undefined, {})).toBe(false);
  });

  it('handles SHOW_TRANSACTION_MODAL', () => {
    expect(showTransactionModal(undefined, { type: types.SHOW_TRANSACTION_MODAL })).toBe(true);
  });

  it('handles HIDE_TRANSACTION_MODAL', () => {
    expect(showTransactionModal(undefined, { type: types.HIDE_TRANSACTION_MODAL })).toBe(false);
  });
});
