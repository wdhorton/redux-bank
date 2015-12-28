import React from 'react';
import Buttons from './Buttons';
import TransactionTable from './TransactionTable';

export default (props) => {
  return (
    <section>
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
              transaction={props.transactions}
              id={props.params.id} />
          </div>
        </div>
      </main>
    </section>
  );
};
