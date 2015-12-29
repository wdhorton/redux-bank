import React, { Component } from 'react';
import AccountListItem from './AccountListItem';

export default class AccountList extends Component {
  calculateAmount(account) {
    const { transactions } = this.props;

    const accountTransactions = transactions.filter((transaction) => {
      return transaction.accountId === account.id;
    });

    return accountTransactions.reduce((acc, t) => {
      return (t.type === "Deposit" ? acc + t.amount : acc - t.amount); 
    }, 0);
  }

  render() {
    const { accounts } = this.props;
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
          {accounts.map((account, i) => {
            account = {...account, amount: this.calculateAmount(account)};
            return <AccountListItem key={i} account={account} />;
          })}
        </tbody>
      </table>
    );
  }
}
