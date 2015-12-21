import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AccountListItem from '../../../components/dashboard/AccountListItem.js';

function setup() {
  const props = {
    account: {
      accountNumber: "123456789",
      accountType: "Checking",
      amount: 1000.00
    }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<AccountListItem account={props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe("components", () => {
  describe("AccountListItem", () => {
    it("renders as a tr", () => {
      const { output } = setup();

      expect(output.type).toBe('tr');
    });

    it("displays the account number passed as props", () => {
      const { output, props } = setup();
      const td = output.props.children[0];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe(props.accountNumber);
    });

    it("displays the account type", () => {
      const { output, props } = setup();
      const td = output.props.children[1];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe(props.accountType);
    });

    it("displays the account amount", () => {
      const { output, props } = setup();
      const td = output.props.children[2];

      expect(td.type).toBe('td');
      expect(td.props.children).toBe(props.amount);
    });

  });
});
