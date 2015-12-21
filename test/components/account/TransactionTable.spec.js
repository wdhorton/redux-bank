import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

function setup() {
  const props = {};

  const renderer = TestUtils.createRenderer();
  renderer.render(<TransactionTable />);
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
  });
});
