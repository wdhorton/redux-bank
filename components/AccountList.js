import React from 'react';
import AccountListItem from './AccountListItem';

export default (props) => {
  return (
    <ul>
      {props.accounts.map((account) => {
        return <AccountListItem {...account} />;
      })}
    </ul>
  );
};
