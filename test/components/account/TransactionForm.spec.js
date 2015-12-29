import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { TransactionForm } from '../../../components/account/TransactionForm';

function setup() {
  const props = {
    fields: { amount: "" },
    hideTransactionModal: expect.createSpy(),
    handleSubmit: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<TransactionForm {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("components", () => {
  describe("TransactionForm", () => {
    it("renders a form", () => {
      const { output } = setup();

      expect(output.type).toBe('form');
    });

    it("calls hideTransactionModal when Cancel button is clicked", () => {
      const { output, props } = setup();
      const cancelButton = output.props.children[1];

      cancelButton.props.onClick();

      expect(props.hideTransactionModal).toHaveBeenCalled();
    });

    it("calls handleSubmit when Approve button is clicked", () => {
      const { output, props } = setup();
      const approveButton = output.props.children[2];

      approveButton.props.onClick();

      expect(props.handleSubmit).toHaveBeenCalled();
    });
  });
});
