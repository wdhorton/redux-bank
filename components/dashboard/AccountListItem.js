import React from 'react';

export default (props) => {
  const { accountNumber, accountType, amount } = props.account;
  return (
    <tr>
      <td>{accountNumber}</td>
      <td>{accountType}</td>
      <td>{amount}</td>
    </tr>
  );
};
