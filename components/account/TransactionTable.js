import React from 'react';
import Transaction from './Transaction';

export default (props) => {
  const transactions = props.transactions || [];
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
