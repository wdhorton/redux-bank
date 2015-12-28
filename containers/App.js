import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/account/MainSection';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
