import React from 'react';

export default (props) => {
  const { type, date, amount } = props.transaction;
  return (
    <tr>
      <td>{type}</td>
      <td>{date}</td>
      <td>{"$" + amount}</td>
    </tr>
  );
};
