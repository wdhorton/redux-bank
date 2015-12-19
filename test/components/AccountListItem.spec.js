import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AccountListItem from '../../components/AccountListItem.js';

function setup() {
  const props = {
    accountNumber: "123456789"
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<AccountListItem {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe("components", () => {
  describe("AccountListItem", () => {
    it("renders as an li", () => {
      const { output } = setup();

      expect(output.type).toBe('li');
    });

    it("displays the account number passed as props", () => {
      const { output, props } = setup();
      const div = output.props.children;

      expect(div.type).toBe('div');
      expect(div.props.children).toBe(props.accountNumber);
    });

  });
});
