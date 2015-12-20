import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AccountList from '../../components/AccountList.js';
import AccountListItem from '../../components/AccountListItem.js';

function setup() {
  const props = {
    accounts: [
      {
        accountNumber: "444444",
        accountType: "Checking",
        amount: 100.00
      },
      {
        accountNumber: "555555",
        accountType: "Savings",
        amount: 350.00
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
    it("renders as a ul", () => {
      const { output } = setup();

      expect(output.type).toBe('ul');
    });

    it("renders all accounts passed to it", () => {
      const { output, props } = setup();

      expect(output.props.children.length).toBe(props.accounts.length);
    });

    it("renders accounts as AccountListItems", () => {
      const { output, props } = setup();

      output.props.children.forEach((item) => {
        expect(item.type).toBe(AccountListItem);
      });
    });

    it("renders correct information for each item", () => {
      const { output, props } = setup();

      output.props.children.forEach((item, i) => {
        expect(item.props.account).toBe(props.accounts[i]);
      });
    });

  });
});
