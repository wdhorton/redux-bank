import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AccountList from '../../components/AccountList.js';

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
      console.log(output);
      expect(output.props.children.length).toBe(props.accounts.length);
    });

  });
});
