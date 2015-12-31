# Redux Bank

Redux Bank is a banking application built using Node, Express, React, Redux, and Semantic UI.

View it live at http://reduxbank.com.

##A tour of the code:

###Testing
Testing is done using Mocha, ExpectJS, and the ShallowRenderer from Facebook's TestUtils. To run the
full test suite, run `npm test` from the project directory.

All actions, components, and reducers are tested. In Redux, actions and reducers are pure functions,
so they can be unit tested like any other function.

Example action test:
```javascript
import expect from 'expect';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/transactions';

describe('transaction actions', () => {
  it('addTransaction should create ADD_TRANSACTION action', () => {
    expect(actions.addTransaction('Withdrawal', 1, 100.00)).toEqual({
      type: types.ADD_TRANSACTION,
      transactionType: 'Withdrawal',
      amount: 100.00,
      accountId: 1
    });
  });
});
```

Example reducer test:
```javascript
// ...import statements

describe('transactions reducer', () => {
  it('handles ADD_TRANSACTION', () => {
    const newTransactionAction = {
      type: types.ADD_TRANSACTION,
      transactionType: "Withdrawal",
      amount: 50,
      accountId: 3
    };

    expect(transactions([], newTransactionAction)).toEqual([{
      type: "Withdrawal",
      amount: 50,
      accountId: 3,
      date: new Date()
    }]);
  });
});
```

Since React components have a render function, testing the components is more difficult.
Facebook's ShallowRenderer allows you to render a component without a DOM, and still test the output.

I've adopted the basic setup for testing components from the [Redux examples](https://github.com/rackt/redux/tree/master/examples). It looks like this:
```javascript
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Transaction from '../../../components/account/Transaction';

function setup() {
  const props = {
    transaction: {
      type: "Deposit",
      date: new Date("11/25/2014"),
      amount: 100.00
    }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Transaction {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}
```

You can then proceed to testing the output of the render like this:
```javascript
describe("Transaction", () => {
  it("renders as a tr", () => {
    const { output } = setup();

    expect(output.type).toBe('tr');
  });

  it("displays the transaction type passed as props", () => {
    const { output, props } = setup();
    const td = output.props.children[0];

    expect(td.type).toBe('td');
    expect(td.props.children).toBe(props.transaction.type);
  });

  // etc.
});
```
