import React from 'react';
import AccountListItem from './AccountListItem';

export default (props) => {
  const accounts = props.accounts || [];

  return (
    <ul>
      {accounts.map((account) => {
        return <AccountListItem account={account} />;
      })}
    </ul>
  );
};
