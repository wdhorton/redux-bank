import React from 'react';

export default (props) => {
  return (
    <tr>
      <td>{props.accountNumber}</td>
      <td>{props.accountType}</td>
      <td>{props.amount}</td>
    </tr>
  );
};
