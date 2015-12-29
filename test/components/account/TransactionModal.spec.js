import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { TransactionModal } from '../../../components/account/TransactionModal';
import TransactionForm from '../../../components/account/TransactionForm';

function setup() {
  const props = {
    hideTransactionModal: expect.createSpy(),
    modalType: "Withdrawal"
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
      const { output, props } = setup();
      const header = output.props.children[0];

      expect(output.type).toBe('div');
      expect(header.props.children).toBe(props.modalType);
    });

    it("changes header based on modalType prop", () => {
      const { renderer } = setup();
      renderer.render(<TransactionModal modalType={"Deposit"} />);
      const output = renderer.getRenderOutput();
      const header = output.props.children[0];

      expect(header.props.children).toBe("Deposit");
    });
  });
});
