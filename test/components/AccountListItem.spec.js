import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<AccountListItem />);
  const output = renderer.getRenderOutput();

  return {
    output: output,
    renderer: renderer
  };
}

describe("components", () => {
  describe("AccountListItem", () => {
    it("initial render", () => {
      const { output } = setup();

      expect(output.type).toBe('li');
    });
  });
});
