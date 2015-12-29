import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Transaction from '../../../components/account/Transaction';

function setup() {
  const props = {
    transaction: {
      type: "Withdrawal",
      date: new Date("11/25/2014"),
      amount: 100.00
    }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Transaction transaction={props} />);
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

    it("displays the account number passed as props", () => {
      const { output, props } = setup();
      const td = output.props.children[0];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe(props.type);
    });

    it("displays the account type", () => {
      const { output, props } = setup();
      const td = output.props.children[1];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe(props.date);
    });

    it("displays the account amount", () => {
      const { output, props } = setup();
      const td = output.props.children[2];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe("$" + props.amount);
    });
  });
});
