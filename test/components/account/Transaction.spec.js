import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Transaction from '../../../components/account/Transaction';

function setup() {
  const props = {
    transaction: {
      type: "Deposit",
      date: new Date("11/25/2014"),
      amount: 100.00
    }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Transaction {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("components", () => {
  describe("Transaction", () => {
    it("renders as a tr", () => {
      const { output } = setup();

      expect(output.type).toBe('tr');
    });

    it("displays the transaction type passed as props", () => {
      const { output, props } = setup();
      const td = output.props.children[0];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe(props.transaction.type);
    });

    it("displays the transaction date", () => {
      const { output, props } = setup();
      const td = output.props.children[1];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe("11/25/2014");
    });

    it("displays the transaction amount", () => {
      const { output, props } = setup();
      const td = output.props.children[2];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe("$" + props.transaction.amount);
    });

    it("displays negative amount for Withdrawal", () => {
      const { renderer, props } = setup();
      props.transaction.type = "Withdrawal";
      renderer.render(<Transaction {...props} />);
      const output = renderer.getRenderOutput();
      const td = output.props.children[2];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe("-$" + props.transaction.amount);
    });
  });
});
