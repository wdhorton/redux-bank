import React from 'react';

export default (props) => {
  return(
    <div className="ui buttons">
      <button
        className="ui red button"
        onClick={props.showTransactionModal}>
        Withdraw funds
      </button>
      <div className="or"></div>
      <button
        className="ui green button"
        onClick={props.showTransactionModal}>
        Make a deposit
      </button>
    </div>
  );
};
