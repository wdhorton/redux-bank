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

      var text = output.props.children;

      while (typeof text.props != "undefined") {
        text = text.props.children;
      }

      expect(text).toBe('Redux Bank');
    });
  });
});
