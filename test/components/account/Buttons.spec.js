import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Buttons from '../../../components/account/Buttons';

function setup() {
  const props = {
    showTransactionModal: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Buttons {...props} />);
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

    it ("button 1 calls showTransactionModal on button click", () => {
      const { output, props } = setup();
      const button1 = output.props.children[0];

      button1.props.onClick();

      expect(props.showTransactionModal).toHaveBeenCalled();
    });

    it ("button 2 calls showTransactionModal on button click", () => {
      const { output, props } = setup();
      const button2 = output.props.children[2];

      button2.props.onClick();

      expect(props.showTransactionModal).toHaveBeenCalled();
    });
  });
});
