import React from 'react';
import TransactionTable from './TransactionTable';

export default (props) => {
  return (
    <section>
      <h2>Transactions</h2>
      <TransactionTable transactions={props.transactions} />
    </section>
  );
};
