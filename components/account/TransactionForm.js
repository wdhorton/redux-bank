import React from 'react';
import { reduxForm } from 'redux-form';

export function TransactionForm(props) {
  const { fields: { amount }, handleSubmit, hideTransactionModal } = props;

  return (
    <form className="ui form">
      <div className="field">
        <label>Amount</label>
        <input type="text" name="first-name" placeholder="Amount" {...amount}/>
      </div>
      <div
        className="ui red deny right labeled icon button"
        onClick={hideTransactionModal}>
        <i className="remove icon"></i>
        Cancel
      </div>
      <div
        className="ui positive right labeled icon button"
        onClick={handleSubmit}>
        <i className="checkmark icon"></i>
        Approve
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'transaction',
  fields: ['amount']
})(TransactionForm);
