import React from 'react';
import Buttons from './Buttons';
import TransactionTable from './TransactionTable';
import TransactionModal from './TransactionModal';

export default (props) => {
  const { actions, params, showTransactionModal } = props;
  var modal;

  if (showTransactionModal.length > 0) {
    modal = (
      <TransactionModal
        hideTransactionModal={actions.hideTransactionModal}
        addTransaction={actions.addTransaction.bind(this, showTransactionModal)}
        accountId={params.id}/>
    );
  }

  return (
    <section>
      { modal }
      <main className="ui page grid">
        <div className="row">
          <div className="center aligned starter column">
            <h1 className="ui header">Transactions</h1>
          </div>
        </div>
        <div className="row">
          <div className="center aligned starter column">
            <Buttons showTransactionModal={props.actions.showTransactionModal} />
          </div>
        </div>
        <div className="row">
          <div className="center aligned starter column">
            <TransactionTable
              transactions={props.transactions}
              id={props.params.id} />
          </div>
        </div>
      </main>
    </section>
  );
};
