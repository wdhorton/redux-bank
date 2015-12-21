import React, { Component} from 'react';
import { connect } from 'react-redux';
import AccountList from '../components/dashboard/AccountList';

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  };
};

export default connect(
  mapStateToProps,
  () => { return {}; }
)(AccountList);
