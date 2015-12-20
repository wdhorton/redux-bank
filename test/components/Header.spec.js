import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '../../components/Header';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Header />);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer
  };
}

describe("components", () => {
  describe("Header", () => {
    it("renders a header container", () => {
      const { output } = setup();

      expect(output.type).toBe('header');
    });

    it("renders a 'Redux Bank' h1", () => {
      const { output } = setup();
      const h1 = output.props.children;
      const text = h1.props.children;

      expect(text).toBe('Redux Bank');
    });
  });
});
