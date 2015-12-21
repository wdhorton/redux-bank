import React, { Component} from 'react';
import { connect } from 'react-redux';
import TransactionTable from '../components/account/TransactionTable';

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
};

export default connect(
  mapStateToProps,
  () => { return {}; }
)(TransactionTable);
