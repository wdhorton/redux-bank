import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { TransactionModal } from '../../../components/account/TransactionModal';
import TransactionForm from '../../../components/account/TransactionForm';

function setup() {
  const props = {
    hideTransactionModal: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<TransactionModal {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("components", () => {
  describe("TransactionModal", () => {
    it("renders", () => {
      const { output } = setup();
      const header = output.props.children[0];

      expect(output.type).toBe('div');
      expect(header.props.children).toBe('Withdrawal');
    });
  });
});
