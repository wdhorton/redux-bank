import React from 'react';
import Transaction from './Transaction';

export default (props) => {
  var transactions = props.transactions || [];

  transactions = transactions.filter((transaction) => {
    return transaction.accountId === Number(props.id);
  });

  return(
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, i) => {
          return <Transaction key={i} transaction={transaction} />;
        })}
      </tbody>
    </table>
  );
};
