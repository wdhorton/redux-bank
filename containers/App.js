import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/account/MainSection';

export default class App extends Component {
  render() {
    const { transactions } = this.props;
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
