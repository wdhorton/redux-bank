import React from 'react';
import AccountListItem from './AccountListItem';

export default (props) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Account Number</th>
          <th>Account Type</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {props.accounts.map((account, i) => {
          return <AccountListItem key={i} account={account} />;
        })}
      </tbody>
    </table>
  );
};
