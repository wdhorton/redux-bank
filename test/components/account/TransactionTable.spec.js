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
        amount: 100.00,
        accountId: 1
      },
      {
        type: "Deposit",
        date: "12/5/13",
        amount: 150.00,
        accountId: 1
      },
      {
        type: "Withdrawal",
        date: "12/6/13",
        amount: 155.00,
        accountId: 2
      }
    ],
    id: "1"
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<TransactionTable {...props} />);
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

    it("renders transactions based on account id", () => {
      const { output, props } = setup();

      const items = output.props.children[1].props.children;

      const transactionsById = props.transactions.filter((transaction) => {
        return transaction.accountId === Number(props.id);
      });

      expect(items.length).toBe(transactionsById.length);
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
