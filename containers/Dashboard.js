import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class Dashboard extends Component {
  render() {
    const { accounts } = this.props;
    return (
      <div>
        <Header />
        <MainSection accounts={accounts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  };
}

export default connect(
  mapStateToProps,
  () => { return {}; }
)(Dashboard);
