import React from 'react';
import Buttons from './Buttons';
import TransactionTable from './TransactionTable';
import TransactionModal from './TransactionModal';

export default (props) => {
  var modal;

  if (props.showTransactionModal) {
    modal = (
      <TransactionModal
        hideTransactionModal={props.actions.hideTransactionModal}
        addTransaction={props.actions.addTransaction}
        accountId={props.params.id}/>
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
