import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Dashboard />);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer
  };
}

describe("components", () => {
  describe("Dashboard", () => {
    it("renders a Header component", () => {
      const { output } = setup();

      expect(output.type).toBe(Header);
    });
  });
});
