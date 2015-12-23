import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainSection from '../../../components/dashboard/MainSection.js';
import AccountListContainer from '../../../containers/AccountListContainer.js';

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

      expect(output.type).toBe('main');
    });

    it ("renders an 'Accounts' header", () => {
      const { output } = setup();
      const h1 = output.props.children[0].props.children.props.children;
      const text = h1.props.children;

      expect(h1.type).toBe('h1');
      expect(text).toBe('Accounts');
    });

    it("renders an AccountListContainer", () => {
      const { output } = setup();
      const list = output.props.children[1].props.children.props.children;

      expect(list.type).toBe(AccountListContainer);
    });
  });
});
