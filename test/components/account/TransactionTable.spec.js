import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TransactionTable from '../../../components/account/TransactionTable';
import Transaction from '../../../components/account/Transaction';

function setup() {
  const props = {
    transactions: [
      {
        type: "Deposit",
        date: "12/4/13",
        amount: 100.00
      }
    ]
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<TransactionTable transactions={props.transactions} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("components", () => {
  describe("TransactionTable", () => {
    it("renders as a table", () => {
      const { output } = setup();

      expect(output.type).toBe('table');
    });

    it("renders a table header", () => {
      const { output } = setup();
      const thead = output.props.children[0];

      expect(thead.type).toBe('thead');
    });

    it("renders all transactions passed to it", () => {
      const { output, props } = setup();
      const items = output.props.children[1].props.children;

      expect(items.length).toBe(props.transactions.length);
    });

    it("renders transactions as Transaction components", () => {
      const { output, props } = setup();
      const items = output.props.children[1].props.children;

      items.forEach((item) => {
        expect(item.type).toBe(Transaction);
      });
    });

    it("renders correct information for each item", () => {
      const { output, props } = setup();
      const items = output.props.children[1].props.children;

      items.forEach((item, i) => {
        expect(item.props.transaction).toBe(props.transactions[i]);
      });
    });
  });
});
