import React from 'react';

export default (props) => {
  return(
    <div className="ui buttons">
      <button
        className="ui red button"
        onClick={() => props.showTransactionModal("Withdrawal")}>
        Withdraw funds
      </button>
      <div className="or"></div>
      <button
        className="ui green button"
        onClick={() => props.showTransactionModal("Deposit")}>
        Make a deposit
      </button>
    </div>
  );
};
