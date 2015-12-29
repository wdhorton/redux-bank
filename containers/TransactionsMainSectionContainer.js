import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainSection from '../components/account/MainSection';
import * as TransactionModalActions from '../actions/transactionModal';
import * as TransactionActions from '../actions/transactions';

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    transactionModal: state.transactionModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...TransactionModalActions, ...TransactionActions}, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
