import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/account/MainSection';

class App extends Component {
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

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    transactions: state.transactions
  };
}

export default connect(
  mapStateToProps,
  () => { return {}; }
)(App);
