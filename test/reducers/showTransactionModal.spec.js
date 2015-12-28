import expect from 'expect';
import showTransactionModal from '../../reducers/showTransactionModal';

describe('showTransactionModal reducer', () => {
  it('has an initial state of false', () => {
    expect(showTransactionModal(undefined, {})).toBe(false);
  });

  it('handles SHOW_TRANSACTION_MODAL', () => {

  });
});
