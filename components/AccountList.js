import React from 'react';
import AccountListItem from './AccountListItem';

export default (props) => {
  const accounts = props.accounts || [];

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
        {accounts.map((account) => {
          return <AccountListItem account={account} />;
        })}
      </tbody>
    </table>
  );
};
