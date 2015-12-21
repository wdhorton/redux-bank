import React from 'react';
import AccountList from './AccountList';

export default (props) => {
  return (
    <section>
      <h2>Accounts</h2>
      <AccountList accounts={props.accounts} />
    </section>
  );
};
