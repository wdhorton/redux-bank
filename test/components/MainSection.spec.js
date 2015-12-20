import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainSection from '../../components/MainSection.js';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<MainSection />);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer
  };
}

describe("components", () => {
  describe("MainSection", () => {
    it("renders container", () => {
      const { output } = setup();

      expect(output.type).toBe('section');
    });

    it ("renders an 'Accounts' header", () => {
      const { output } = setup();
      const h2 = output.props.children;
      const text = h2.props.children;

      expect(h2.type).toBe('h2');
      expect(text).toBe('Accounts');
    });
  });
});
