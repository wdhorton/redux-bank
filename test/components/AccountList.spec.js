import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AccountListItem from '../../components/AccountListItem.js';

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
