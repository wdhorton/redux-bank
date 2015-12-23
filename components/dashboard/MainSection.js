import React from 'react';
import AccountListContainer from '../../containers/AccountListContainer';

export default (props) => {
  return (
    <main className="ui page grid">
      <div className="row">
        <div className="center aligned starter column">
          <h1 className="ui header">Accounts</h1>
        </div>
      </div>
      <div className="row">
        <div className="center aligned starter column">
          <AccountListContainer />
        </div>
      </div>
    </main>
  );
};
