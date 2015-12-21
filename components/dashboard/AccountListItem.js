import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  const { id, accountNumber, accountType, amount } = props.account;
  return (
    <tr>
      <td><Link to={"/accounts/" + id}>{accountNumber}</Link></td>
      <td>{accountType}</td>
      <td>{"$" + amount}</td>
    </tr>
  );
};
