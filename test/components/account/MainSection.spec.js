import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainSection from '../../../components/account/MainSection';
import Buttons from '../../../components/account/Buttons';
import TransactionTable from '../../../components/account/TransactionTable';
import TransactionModal from '../../../components/account/TransactionModal';

function setup() {
  const props = {
    params: {
      id: "1"
    },
    actions: {
      addTransaction: expect.createSpy()
    },
    transactions: [],
    transactionModal: []
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<MainSection {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
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

    it ("renders a 'Transactions' header", () => {
      const { output } = setup();
      const row = output.props.children[1].props.children[0];
      const h1 = row.props.children.props.children;
      const text = h1.props.children;

      expect(h1.type).toBe('h1');
      expect(text).toBe('Transactions');
    });

    it ("renders Buttons", () => {
      const { output } = setup();
      const buttonsRow = output.props.children[1].props.children[1];
      const buttons = buttonsRow.props.children.props.children;

      expect(buttons.type).toBe(Buttons);
    });

    it("renders a TransactionTableContainer", () => {
      const { output } = setup();
      const tableRow = output.props.children[1].props.children[2];
      const table = tableRow.props.children.props.children;

      expect(table.type).toBe(TransactionTable);
    });

    it("passes account id to TransactionTableContainer", () => {
      const { output, props } = setup();
      const tableRow = output.props.children[1].props.children[2];
      const table = tableRow.props.children.props.children;

      expect(table.props.id).toBe(props.params.id);
    });

    it("doesn't render TransactionModal when showTransactionModal is false", () => {
      const { output } = setup();

      expect(typeof output.props.children[0]).toBe("undefined");
    });

    it("renders a TransactionModal when showTransactionModal is true", () => {
      const { props, renderer } = setup();
      props.transactionModal = ["Withdrawal"];
      renderer.render(<MainSection {...props} />);
      const output = renderer.getRenderOutput();

      expect(output.props.children[0].type).toBe(TransactionModal);
    });

    it("passes correct modalType to TransactionModal", () => {
      const { props, renderer } = setup();
      props.transactionModal = ["Deposit"];
      renderer.render(<MainSection {...props} />);
      const output = renderer.getRenderOutput();
      const modal = output.props.children[0];

      expect(modal.props.modalType).toBe("Deposit");
    });

  });
});
