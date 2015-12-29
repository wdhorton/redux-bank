import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AccountList from '../../../components/dashboard/AccountList.js';
import AccountListItem from '../../../components/dashboard/AccountListItem.js';

function setup() {
  const props = {
    accounts: [
      {
        id: 1,
        accountNumber: "444444",
        accountType: "Checking"
      },
      {
        id: 2,
        accountNumber: "555555",
        accountType: "Savings"
      },
    ],
    transactions: [
      {
        type: "Withdrawal",
        date: new Date("12/13/14"),
        amount: 250.00,
        accountId: 1
      },
    ]
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<AccountList {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("components", () => {
  describe("AccountList", () => {
    it("renders as a table", () => {
      const { output } = setup();

      expect(output.type).toBe('table');
    });

    it("renders a table header", () => {
      const { output } = setup();
      const thead = output.props.children[0];

      expect(thead.type).toBe('thead');
    });

    it("renders all accounts passed to it", () => {
      const { output, props } = setup();
      const items = output.props.children[1].props.children;

      expect(items.length).toBe(props.accounts.length);
    });

    it("renders accounts as AccountListItems", () => {
      const { output, props } = setup();
      const items = output.props.children[1].props.children;

      items.forEach((item) => {
        expect(item.type).toBe(AccountListItem);
      });
    });

    it("renders correct information for each item", () => {
      const { output, props } = setup();
      const items = output.props.children[1].props.children;

      items.forEach((item, i) => {
        expect(item.props.account).toEqual({...props.accounts[i], amount: i === 0 ? -250 : 0 });
      });
    });

  });
});
