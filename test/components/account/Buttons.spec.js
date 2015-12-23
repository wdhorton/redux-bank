import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Buttons from '../../../components/account/Buttons';

function setup() {
  const props = {};

  const renderer = TestUtils.createRenderer();
  renderer.render(<Buttons />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("components", () => {
  describe("Buttons", () => {
    it ("renders two buttons", () => {
      const { output } = setup();

      const buttons = output.props.children.filter((child) => {
        return child.type === "button";
      });
      expect(buttons.length).toBe(2);
    });
  });
});
