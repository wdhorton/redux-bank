import React, { Component} from 'react';
import { connect } from 'react-redux';
import MainSection from '../components/account/MainSection';
import * as TransactionActions from '../actions/transactions';

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(TransactionActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
