import React from 'react';

export default (props) => {
  return (
    <li>
      <div>{props.accountNumber}</div>
      <div>{props.accountType}</div>
      <div>{props.amount}</div>
    </li>
  );
};
