import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Transaction from '../../../components/account/Transaction';

function setup() {
  const props = {};

  const renderer = TestUtils.createRenderer();
  renderer.render(<Transaction transaction={props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe("components", () => {
  describe("Transaction", () => {
    it("renders as a tr", () => {
      const { output } = setup();

      expect(output.type).toBe('tr');
    });
  });
});
