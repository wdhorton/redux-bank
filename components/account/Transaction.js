import React from 'react';

export default (props) => {
  const { type, date, amount } = props.transaction;

  const dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();

  return (
    <tr>
      <td>{type}</td>
      <td>{dateString}</td>
      <td>{"$" + amount}</td>
    </tr>
  );
};
