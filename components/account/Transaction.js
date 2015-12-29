import React from 'react';

export default (props) => {
  const { type, date, amount } = props.transaction;

  const dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  var prefix = "$";
  var style;

  if (type === "Withdrawal") {
    prefix = "-" + prefix;
    style = { color: 'red' };
  }
  return (
    <tr>
      <td>{type}</td>
      <td>{dateString}</td>
      <td style={style}>{prefix + amount}</td>
    </tr>
  );
};
