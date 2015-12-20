import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AccountList from '../../components/AccountList.js';

function setup() {
  const props = {
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<AccountList {...props} />);
  const output = renderer.getRenderOutput();

  return {
    output: output,
    renderer: renderer
  };
}

describe("components", () => {
  describe("AccountList", () => {
    it("renders as a ul", () => {
      const { output } = setup();

      expect(output.type).toBe('ul');
    });
  });
});
