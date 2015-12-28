import React from 'react';
import Header from '../components/Header';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
