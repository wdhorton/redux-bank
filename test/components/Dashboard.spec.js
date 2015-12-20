import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
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
      const header = output.props.children[0];

      expect(header.type).toBe(Header);
    });

    it("renders a MainSection component", () => {
      const { output } = setup();
      const mainSection = output.props.children[1];

      expect(mainSection.type).toBe(MainSection);
    });
  });
});
